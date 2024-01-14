"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var rest_1 = require("@octokit/rest");
// import fetch from "node-fetch";
function commitJsonChange(filePath, updates) {
    return __awaiter(this, void 0, void 0, function () {
        var owner, repo, fetch, octokit, fileData, sha, jsonContent, _i, _a, _b, key, value, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    owner = 'SpyzzVVarun';
                    repo = 'demo';
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("node-fetch"); })];
                case 1:
                    fetch = _c.sent();
                    octokit = new rest_1.Octokit({ auth: "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", request: { fetch: fetch } });
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 7, , 8]);
                    return [4 /*yield*/, octokit.repos.getContent({
                            owner: owner,
                            repo: repo,
                            path: filePath,
                        })];
                case 3:
                    fileData = (_c.sent()).data;
                    if (!('content' in fileData && 'sha' in fileData)) return [3 /*break*/, 5];
                    sha = fileData.sha;
                    jsonContent = JSON.parse(Buffer.from(fileData.content, 'base64').toString('utf-8'));
                    // Update the JSON content
                    for (_i = 0, _a = Object.entries(updates); _i < _a.length; _i++) {
                        _b = _a[_i], key = _b[0], value = _b[1];
                        jsonContent[key] = value;
                    }
                    // Commit the updated JSON file
                    return [4 /*yield*/, octokit.repos.createOrUpdateFileContents({
                            owner: owner,
                            repo: repo,
                            path: filePath,
                            message: "Update JSON configuration in ".concat(filePath),
                            content: Buffer.from(JSON.stringify(jsonContent, null, 2)).toString('base64'),
                            sha: sha,
                        })];
                case 4:
                    // Commit the updated JSON file
                    _c.sent();
                    console.log("".concat(filePath, " updated successfully"));
                    return [3 /*break*/, 6];
                case 5:
                    console.error("Error: ".concat(filePath, " is not a file or does not exist"));
                    _c.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_1 = _c.sent();
                    console.error("Error updating ".concat(filePath, ":"), error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
// Define the updates to be made
var jsonUpdates = {
    'company': 'gg',
};
// Path to the JSON file in the repository
var jsonFilePath = 'demo.json';
commitJsonChange(jsonFilePath, jsonUpdates);
