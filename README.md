
# Next-Level NPS - Revolutionizing Feedback Mechanisms 

## Team Details
1. Team Name - **Team 15**
2. Team Members - Varun Nagpal, Aditya Gupta, Parth Agarwal, Himanshu Singhal


## Introduction
The challenge is to develop an AI-powered snap-in for NPS Survey collection, storage and analytics mechanisms. The solution leverage the capabilities of the DevRev platform, utilizing its APIs.

## Project Objectives

### 1. Scheduled & Customized NPS Survey

Our aim here was to build a mechanism to create a customized NPS Survey and send it out at pre decided intervals to a pre decided audience and collect the survey results. Our NPS Survey form has different lines of questioning for promoters, passives and detractors along with several other customizations based on the inputs taken from the snap-in configuration page. We take as input the survey frequency and start date in the snap-in configuraton page. Based on configuration page inputs, we decide the filters (arguments) for the rev-users list api to determine the audience.


### 2. Meaningful Analytics & Insights

We do sentiment analysis of the customer survey response and also determine if it has any actionable insights in real-time. A summary report of collected responses is maintained which is timely updated. This report highlights the specific key issues and their related features. We also highlight positive feedback and features which receive praises. A dashboard is provided to visualize the derived analytics, like nps score over time, distribution of promoters, passives and detractors and also wordclouds to focus on positive and negative feedback separately.


### 3. Dealing with Spam Surveys

We've incorporated a CAPTCHA verification step at the start of our survey form to prevent automated bots from accessing it. We also use honeypot fields as an additional layer of security against bots. Additionally, we request survey participants to provide their email addresses, enabling us to ensure that only one survey response can be submitted from a given email within a predetermined timeframe. We also use LLMs to figure out if the review contains any actionable insights or not. This helps us filter out the spam surveys/ surveys without any meaningful insights. 


### 4. Protecting Customer Information
We create our own survey form using the MERN stack instead of a third-party survey creator. We also do not collect any demographic information from the responses and maintain our own database in MongoDB. Open-source LLMs that we deploy can be used to further ensure that customer information is protected.

### 5. Continuous Improvement Cycle.

We've implemented an automated ticket generation system that works in real-time. For every actionable response with a negative sentiment, a ticket will be created using the works create api where we have used LLMs to generate the title, its severity and figure out the PART it belongs to. Along with that we used several API calls to determine the other parameters that are to be filled. A report/summary, created by LLMs, that summarizes the overall feedback is also maintained. It is dynamically updated in real-time as new responses come in, keeping in mind old summary and new responses.



## Installation and Setup

### Installing the Snap-in
Follow the instructions mentioned in the [Devrev Snap-in documentation](https://docs.devrev.ai/snap-ins/start#prerequisites) to install our snap-in<br>
The code for our snap-in (in the format provided in the documentation) is available in the **snap-in folder** and here:<br>
https://github.com/SpyzzVVarun/encode-devrev-snap-in 

### Survey Form Generation

We use Render for deployment of our generated survey form. You will have to put a .env file in the root directory with the following parameters filled:

```
1. OPENAI_API_KEY=<Insert OPENAI key here>
2. MONGODB_URI="mongodb+srv://username:password@cluster0.ycuyumn.mongodb.net/Database_name?retryWrites=true&w=majority"
3. PORT=3001
```

The code for the survey form is available in the **survey-form folder** and here:<br>
https://github.com/SpyzzVVarun/survey-form-deploy

### Analytics Dashboard Generation

We again use Render to deploy our generated analytics dashboard . You will have to create and fill `credentials.json` in the src directory with the following parameters filled:

```json
{
    "OPENAI_API_KEY": "<Insert OPENAI key here>",
    "MONGODB_URI": "mongodb+srv://username:password@cluster0.ycuyumn.mongodb.net/Database_name?retryWrites=true&w=majority"
}
```
The code for the survey form is available in the **analytics-dashboard** folder and here:<br>
https://github.com/Parth-Agarwal216/render-nps

## Solution Pipeline & Usage Guide

1. The owner installs the snap-in in the DevRev platform. 
2. We provide a configuration page for the snap-in where we provide the owner with option to customize various aspects of the survey form and the snap in. 
    - We ask the owner to submit their PAT token which is used in a API call to create the mailing list.
    - We then ask the user to modify various aspects of the survey form including changing the email through which the survey form will be sent, Name of the company, Name of the product and content of the survey form.  
    - We also provide the user to configure the settings for the slack and PLuG integrations.
    - We provide the owner with the option to select when the survey should be first distributed, how often it is distributed and how often the system should check the status of survey distributions and responses.


https://github.com/SpyzzVVarun/encode/assets/118837763/47088d97-47ba-4fe7-9a75-5c47cdce422f

3. For survey distribution, the owner must create a "Surveys" product (PART) and then create an issue under this PART to generate and send the survey to the mailing list. 

4. The system offers real-time analysis capabilities, including sentiment analysis, identification of actionable issues, and ticket creation, all facilitated by large language models (LLMs). The system filters responses to identify actionable feedback and uses LLMs to assist in ticket management. This includes generating ticket titles, determining ticket severity, and selecting relevant PARTs for ticket submission, with other parameters sourced via DevRev API calls.
5. On the analytics side, responses from the surveys are stored in MongoDB. A summary report is then generated and updated in batches, with the dashboard reflecting these updates at predetermined intervals.

https://github.com/SpyzzVVarun/encode/assets/106423963/30db4bfb-3075-4810-aeeb-a4d47c11c73c

## Project Architecture

```
├── README.md
├── analytics-dashboard
│   ├── app.py
│   ├── credentials.json
│   └── summary.py
├── snap-in
│   ├── code
│   │   ├── README.md
│   │   ├── babel.config.js
│   │   ├── build.tar.gz
│   │   ├── dist
│   │   ├── jest.config.js
│   │   ├── nodemon.json
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── fixtures
│   │   │   │   ├── command_event.json
│   │   │   │   ├── function_1_event.json
│   │   │   │   └── function_2_event.json
│   │   │   ├── function-factory.ts
│   │   │   ├── functions
│   │   │   │   ├── function_1
│   │   │   │   │   ├── env.ts
│   │   │   │   │   ├── index.test.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── function_2
│   │   │   │       ├── index.test.ts
│   │   │   │       └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── main.ts
│   │   │   └── test-runner
│   │   │       ├── example.test.ts
│   │   │       └── test-runner.ts
│   │   ├── trial.js
│   │   ├── trial.ts
│   │   ├── tsconfig.eslint.json
│   │   └── tsconfig.json
│   ├── manifest.yaml
│   └── package.json
└── survey-form
    ├── backend
    │   ├── constants.json
    │   ├── package.json
    │   ├── server.js
    │   └── trial.js
    ├── client
    │   ├── README.md
    │   ├── package.json
    │   ├── public
    │   │   └── index.html
    │   └── src
    │       ├── SurveyComponent.jsx
    │       ├── constants.json
    │       ├── index.css
    │       ├── index.js
    │       ├── json.js
    │       └── theme.js
    └── package.json
```

### Snap-in 
This directory follows the same structure as the templates provided in the resources. The main functions are in the `index.ts` file in the `function_1` directory. The `manifest.yaml` file contains the specifications for the configuration page

### Survey-Form
MERN-stack based survey form application

`Backend` This directory contains the server-side code of your application.
- `constants.json`  Likely a configuration file containing constant values used in the backend.
- `server.js` The main server file which initializes and runs the backend server, handling API requests.

`Client` This directory is a standard `create-react-app` directory which contains the client-side code, which is what users interact with in their web browsers.
- `SurveyComponent.jsx` A React component, the main component for rendering the survey form.
- `constants.json` A configuration or settings file for the client-side.
- `index.css` The main stylesheet for the web application.
- `json.js` This could be a file handling JSON data, possibly related to the survey questions or configuration.

### Analytics Dashboard 
This directory contains the dashboard app code, which is deployed using render app.

- `app.py` Python app for the survey analytics dashboard built using dash & plotly.
- `summary.py` Contains code to create summary of the survey responses using LLMs.
- `credentials.json` JSON file containing mongoDB URI and other API keys.


