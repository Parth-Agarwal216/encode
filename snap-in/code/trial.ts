// // import * as sgMail from '@sendgrid/mail';
// // // const sgMail = require('@sendgrid/mail')
// // sgMail.setApiKey("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")
// // const msg = {
// // to: 'nagpalvarun2003@gmail.com', // Change to your recipient
// // from: 'notifications.devrev@gmail.com', // Change to your verified sender
// // subject: 'Sending with SendGrid is Fun',
// // text: 'and easy to do anywhere, even with Node.js',
// // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// // }
// // sgMail
// // .send(msg)
// // .then(() => {
// //     console.log('Email sent')
// // })
// // .catch((error: any) => {
// //     console.error(error)
// // })

// import axios from 'axios'
// // async function callApi(apiUrl: string, headers: Record<string, string>) {
// //     axios.get(apiUrl, { headers })
// //     .then(response => {
// //         const data = response.data;
// //         // for (let issue in data.works){
// //         //     if(issue.applies_to_part.name == "Surveys"){
// //         //         console.log(issue);
// //         //     }
// //         // }
// //         interface User {
// //             email: string;
// //         }
        
// //         const userList: User[] = data.rev_users;
// //         for (let user of userList){
// //             if (user.email !== undefined){
// //                 console.log('Response:', user.email); 
// //             }
// //         }
// //         // .works[1]["reported_by"][0]["email"]);
// //         return response.data; //['dev_user']['email'];
// //     })
// //     .catch(error => {
// //         console.error('Error:', error);
// //     });
// // }

// async function callApi(apiUrl: string, headers: Record<string, string>): Promise<string[]> {
//     try {
//         const response = await axios.get(apiUrl, { headers });
//         const data = response.data;

//         interface User {
//             email: string;
//         }

//         const userList: User[] = data.rev_users;
//         let mailingList: string[] = []; 
//         for (let user of userList) {
//             if (user.email !== undefined) {
//                 mailingList.push(user.email);
//             }
//         }

//         return mailingList;
//     } catch (error) {
//         console.error('Error:', error);
//         return []; // or handle the error as appropriate
//     }
// }







// const apiURL = 'https://api.devrev.ai/dev-users.self'; //works.list?type="ticket"
// const headers = {
//     'Authorization': 'eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvL2ljdTNWSjd6OmRldnUvMSIsImV4cCI6MTc5ODk2NTAwOSwiaHR0cDovL2RldnJldi5haS9hdXRoMF91aWQiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vc3VwZXI6YXV0aDBfdXNlci9vaWRjfHBhc3N3b3JkbGVzc3xlbWFpbHw2NTRiYmIyY2FkZGY2YTg3ZmViN2RkNjkiLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJvaWRjfHBhc3N3b3JkbGVzc3xlbWFpbHw2NTRiYmIyY2FkZGY2YTg3ZmViN2RkNjkiLCJodHRwOi8vZGV2cmV2LmFpL2Rldm9fZG9uIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvL2ljdTNWSjd6IiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtaWN1M1ZKN3oiLCJodHRwOi8vZGV2cmV2LmFpL2RldnVpZCI6IkRFVlUtMSIsImh0dHA6Ly9kZXZyZXYuYWkvZGlzcGxheW5hbWUiOiJuLXZhcnVuIiwiaHR0cDovL2RldnJldi5haS9lbWFpbCI6Im4udmFydW5AaWl0Zy5hYy5pbiIsImh0dHA6Ly9kZXZyZXYuYWkvZnVsbG5hbWUiOiJWYXJ1biBOYWdwYWwiLCJodHRwOi8vZGV2cmV2LmFpL2lzX3ZlcmlmaWVkIjp0cnVlLCJodHRwOi8vZGV2cmV2LmFpL3Rva2VudHlwZSI6InVybjpkZXZyZXY6cGFyYW1zOm9hdXRoOnRva2VuLXR5cGU6cGF0IiwiaWF0IjoxNzA0MzU3MDA5LCJpc3MiOiJodHRwczovL2F1dGgtdG9rZW4uZGV2cmV2LmFpLyIsImp0aSI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9pY3UzVko3ejp0b2tlbi8zb2RQZ1pqZiIsIm9yZ19pZCI6Im9yZ19uU20wdWpTQk0xcmp4Z3Z0Iiwic3ViIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvL2ljdTNWSjd6OmRldnUvMSJ9.0oyFzajxkYqBGoluxRYMDIKoOCEtCbq0FJdfgzZMpn2j3imzrvkWkJs0XpRW4Wjg7Jien1I6U0Ee19-TuzhHOtiYBUIaTG0H_yw5zOqO0DSknU--smi9Dok6-bhIQg1KL2eNQJZZ-wQ3Z9UcRwrs3Nwfpb8cWU2yn4UHsWG67bFZps2Pk5CRQONmlGGleWMF97UK84i2QIhJ5kscNqJ0e6moraEyLw389fJiuUl8IF_26zwua-JMAbbYpP-xbPPUIokHCwLVd6ZLYLxD2jhIAJnqGx9bUvDz2BzZhBAFaQmmewtZ9NSkJLQouK34VZMU_6mii9777kMR75wIjhNcLg',
//     // Add other headers here
// };

// (async () => {
//     const mailingList: string[] = await callApi(apiURL, headers);
//     console.log(mailingList);
// })();

// // const mailingList: string[] = await callApi(apiURL, headers);
// // console.log(mailingList);


import { Octokit } from "@octokit/rest";
// import fetch from "node-fetch";

async function commitJsonChange(filePath: string, updates: Record<string, any>) {
    const owner = 'SpyzzVVarun';
    const repo = 'demo';

    const fetch = await import("node-fetch");
    const octokit = new Octokit({ auth: `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`, request: {fetch}});

    try {
        // Fetch the current JSON file
        const { data: fileData } = await octokit.repos.getContent({
            owner,
            repo,
            path: filePath,
        });

        if ('content' in fileData && 'sha' in fileData) {
            const sha = fileData.sha;
            let jsonContent = JSON.parse(Buffer.from(fileData.content, 'base64').toString('utf-8'));
        
            // Update the JSON content
            for (const [key, value] of Object.entries(updates)) {
                jsonContent[key] = value;
            }
        
            // Commit the updated JSON file
            await octokit.repos.createOrUpdateFileContents({
                owner,
                repo,
                path: filePath,
                message: `Update JSON configuration in ${filePath}`,
                content: Buffer.from(JSON.stringify(jsonContent, null, 2)).toString('base64'),
                sha,
            });
        
            console.log(`${filePath} updated successfully`);
        } else {
            console.error(`Error: ${filePath} is not a file or does not exist`);
        }
    } catch (error) {
        console.error(`Error updating ${filePath}:`, error);
    }
}

// Define the updates to be made
const jsonUpdates = {
    'company': 'gg',
};

// Path to the JSON file in the repository
const jsonFilePath = 'demo.json';

commitJsonChange(jsonFilePath, jsonUpdates);