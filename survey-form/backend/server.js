const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
const axios = require('axios');
require("dotenv").config({ path: '../.env' });

const app = express();
app.use(cors());
app.use(express.json());

const { OpenAI } = require('openai');
const openai = new OpenAI();

mongoose.connect(process.env.MONGODB_URI);

// Define a schema for the survey data
const surveySchema = new mongoose.Schema({
    surveyData: mongoose.Schema.Types.Mixed,
});


// Specify the path to your JSON file
const filePath = 'constants.json';

let collectionName = '';
let PAT = '';

// Read the JSON file synchronously and set the collectionName
try {
  const data = fs.readFileSync(filePath, 'utf8');
  const jsonObject = JSON.parse(data);
  collectionName = jsonObject["survey"];
  PAT = jsonObject["PAT"];
} catch (error) {
  console.error('Error reading or parsing JSON:', error);
  collectionName = 'Maple_Finance_Gateway_0';
}

// Create a model based on the schema
const Survey = mongoose.model('Survey', surveySchema, collectionName);

const headers = {
  'Authorization': PAT,
};
async function callAPI(apiUrl, headers) {
try {
  const response = await axios.get(apiUrl, { headers });
  return response.data;
} catch (error) {
  throw error;
}
}

// Endpoint to receive survey data
app.post('/submit-survey', async (req, res) => {
  try {
      // Extract the survey text from the request body (adjust to your data structure)
      let surveyText = ""
      if(req.body["improvements-required"] === undefined){
        surveyText = req.body["disappointing-experience"];
      }
      else{
        surveyText = req.body["improvements-required"];
      }
      const completion = await openai.chat.completions.create({
        messages: [{ role: "assistant", content: "Perform sentiment analysis on the following review. Return a JSON with \
        the key Sentiment and the value being one of positive, negative or neutral. Review: " + surveyText }],
        model: "gpt-3.5-turbo",
      });

      const sentimentResult = JSON.parse(completion.choices[0].message.content);      
      req.body.sentiment = sentimentResult["Sentiment"];

      const completionAgain = await openai.chat.completions.create({
        messages: [{ role: "assistant", content: "Identify whether the following review contains any actionable insights. Return a JSON with \
        the key Actionable and the value being one of yes or no. Review: " + surveyText }],
        model: "gpt-3.5-turbo",
      });

      const actionableResult = JSON.parse(completionAgain.choices[0].message.content);      
      req.body.actionable = actionableResult["Actionable"];

      req.body.summarised = false;
      req.body.date = "14-12-2023";
      // Save both survey data and sentiment result to the database
      const newSurvey = new Survey({
          surveyData: req.body,
      });

      await newSurvey.save();
      res.status(200).send('Survey data saved successfully');
      if(req.body.actionable === "yes" && req.body.sentiment === "negative"){
        (async () => {
          try {

            const completionv3 = await openai.chat.completions.create({
              messages: [{ role: "assistant", content: "Summarize the issue given below in one line.\
               Your answer should be concise and short. Issue: " + surveyText }],
              model: "gpt-3.5-turbo",
            });
            const title = completionv3.choices[0].message.content;
            console.log(title);

            const completionv4 = await openai.chat.completions.create({
              messages: [{ role: "assistant", content: "Identify the severity of the issue from the given customer review.\
              Return a JSON with the key severity and the value being one of low, medium, high, blocker. Review: " + surveyText }],
              model: "gpt-3.5-turbo",
            });
      
            const severity = JSON.parse(completionv4.choices[0].message.content)["severity"]; 

            const apiUrl1 = "https://api.devrev.ai/dev-users.self";
            const apiUrl2 = "https://api.devrev.ai/parts.list";
        
            const data1 = await callAPI(apiUrl1, headers);
            if (data1.error === "error") {
              console.log("Error in the first API call");
              return;
            }
            const ownedBy = [data1.dev_user.id]; // owned_by
        
            const data2 = await callAPI(apiUrl2, headers);
            if (data2.error === "error") {
              console.log("Error in the second API call");
              return;
            }
            const partsList = data2.parts;
            let strPartsList = "[";
            for (let part of partsList){
              strPartsList = strPartsList + part.name + ", ";
            }
            strPartsList = strPartsList + "]";
            const completionv5 = await openai.chat.completions.create({
              messages: [{ role: "assistant", content: "Classify the following customer review \
              in one of the product category from this list of categories: " + strPartsList + 
              "Return a JSON with the key category and value being the category name. \
              Review: " + surveyText }],
              model: "gpt-3.5-turbo",
            });
            const partsName = JSON.parse(completionv5.choices[0].message.content)["category"];

            let appliesToPart = "";
            for (let part of partsList){
              if (part.name === partsName){
                appliesToPart = part.id;
              }
            }
            // const appliesToPart = data2.parts[0].id;
        
            const postRequestBody = {
              title: title,
              type: "ticket",
              body: surveyText,
              severity: severity,
              owned_by: ownedBy,
              applies_to_part: appliesToPart
            };
        
            console.log(postRequestBody);

            const postApiUrl = "https://api.devrev.ai/works.create"; 
            const postHeaders = {
              "Content-Type": "application/json",
              'Authorization': PAT,
            };
            const response = await axios.post(postApiUrl, postRequestBody, { headers: postHeaders });
        
            // Handle the response of the POST request here
            console.log(response.data);
          } catch (error) {
            console.error("An error occurred:", error);
          }
        })();
      }
  } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error saving survey data');
  }
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
