/*jslint node: true */
'use strict';

const https = require('https');
const slackUrls = require('../../connection/keys/slack_urls');
const { english: english } = require('./constants');

const engineeringWebHookURL = slackUrls.SLACK_API_ERROR_CHANNEL_URL;

const httpStatusCode = {
    '400': 'Bad Request'
};

const sendSlackMessage = (req, err) => {
    let errorStatusCode;
    let errorCode;
    let errorMessage;

    if (err.errorCode) {  // custom error
        errorStatusCode = `${err.statusCode} ${httpStatusCode[err.statusCode]}`;
        errorCode = err.errorCode || 'UNKNOWN';
        errorMessage = english[err.errorCode] || 'An error occurred';
    } else {  // default javascript error
        errorStatusCode = '500 Internal Server Error';
        errorCode = 'INTERNAL_SERVER_ERROR';
        errorMessage = err.message || 'An error occurred';
    }

    const message = {
        'username': 'Express API',
        'text': errorStatusCode,
        'icon_emoji': ':bangbang:',
        'attachments': [{
            'color': '#2875be',
            'fields': [
                {
                    'title': 'Endpoint',
                    'value': req.originalUrl,
                    'short': true
                },
                {
                    'title': 'User ID',
                    'value': req.user.uid,
                    'short': true
                },
                {
                    'title': 'Error',
                    'value': errorCode,
                    'short': true
                },
                {
                    'title': 'Message',
                    'value': errorMessage,
                    'short': true
                }
            ]
        }]
    };
    const notification = JSON.stringify(message);
    const options = {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        }
    };
    const slackRequest = https.request(engineeringWebHookURL, options, (res) => {});
    slackRequest.write(notification);
    slackRequest.end();
};

module.exports = {
    sendSlackMessage
};