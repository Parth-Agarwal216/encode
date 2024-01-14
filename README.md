
# Next-Level NPS - Revolutionizing Feedback Mechanisms 

## Team Details
1. Team Name - **Team 15**
2. Team Members - Varun Nagpal, Aditya Gupta, Parth Agarwal, Himanshu Singhal


## Introduction
The challenge is to develop an AI-powered snap-in for NPS Survey collection, storage and analytics mechanisms. The solution leverage the capabilities of the DevRev platform, utilizing its APIs.

## Project Objectives

### 1. Build a mechanism to create a customized NPS Survey and send it out at pre decided intervals to a pre decided audience and collect the survey results. 

1. Our NPS Survey form has different lines of questioning for promoters, passives and detractors along with several other customizations based on the inputs of the snap-in configuration page.

2. We take as input the survey frequency and start date in the snap-in configuraton page.

3. Based on configuration page inputs, we decide the filters (arguments) for the rev-users list api to determine the audience.

### 2. Develop a system to derive meaningful analytics and insights from NPS survey results. These insights should aid in enhancing the product or service based on customer feedback.

1. We do sentiment analysis of the customer survey response and determine if it is actionable in real-time.
A summary report of collected responses is maintained which is timely updated. This report highlights the specific key issues and their related features. We also highlight positive feedback and features which receive praises.
A dashboard is provided to visualize the derived analytics.


### 3. Implement an intelligent mechanism to identify and filter out spam surveys. Protect the authenticity of responses by ensuring only genuine feedback contributes to the analysis.

1. We've incorporated a CAPTCHA verification step at the start of our survey form to prevent automated bots from accessing it. We also use honeypot fields as an additional layer of security against bots.

2. Additionally, we request survey participants to provide their email addresses, enabling us to ensure that only one survey response can be submitted from a given email within a predetermined timeframe. 

3. We also apply AI techniques to figure out if the review contains any actionable insights or not. This helps us filter out the spam surveys. 


### 4. Build a robust system to protect customer information. Guarantee the confidentiality and privacy of users while collecting valuable feedback. 




### 5. Create a feedback loop that dynamically adjusts based on NPS survey results. Develop a mechanism for real-time adjustments and improvements in the product or service, fostering a continuous improvement cycle.

1. We've implemented an automated ticket generation system that responds dynamically to incoming survey responses. To prevent duplicate tickets for the same issue, we conduct a similarity check between the new response and existing ones. If the response pertains to a novel issue, our system leverages AI to automatically generate a title and extract the relevant portion of the issue. Subsequently, we employ Devrev API calls to initiate the creation of a new ticket.


## Installation and Setup

### Installing the Snap-in
Follow the instructions mentioned in the [Devrev Snap-in documentation](https://docs.devrev.ai/snap-ins/start#prerequisites) to install our snap-in<br>
The code for our snap-in (in the format provided in the documentation) is available in the snap-in folder and here:<br>
https://github.com/SpyzzVVarun/encode-devrev-snap-in 

### Survey Form Generation

We use Render for deployment of our generated survey form. You will have to put a .env file in the root directory with the following parameters filled:

```
1. OPENAI_API_KEY=<Insert OPENAI key here>
2. MONGODB_URI="mongodb+srv://username:password@cluster0.ycuyumn.mongodb.net/Database_name?retryWrites=true&w=majority"
3. PORT=3001
```

The code for the survey form is available in the snap-in folder and here:<br>
https://github.com/SpyzzVVarun/survey-form-deploy

### Analytics Dashboard Generation

We again use Render to deploy our generated analytics dashboard . You will have to create and fill `credentials.json` in the src directory with the following parameters filled:

```json
{
    OPENAI_API_KEY=<Insert OPENAI key here>,
    MONGODB_URI="mongodb+srv://username:password@cluster0.ycuyumn.mongodb.net/Database_name?retryWrites=true&w=majority"
}
```
## Usage Guide
Explain how to use the snap-in, including sending surveys, collecting responses, and accessing AI-powered analytics.

## Project Architecture
Describe the overall architecture of the solution, showing how it interfaces with the DevRev platform and other components.