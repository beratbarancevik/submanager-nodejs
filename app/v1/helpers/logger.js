/*jslint node: true */
'use strict';

const slack = require('../../connection/keys/slack_urls');

const logError = (req, err) => {
    console.error(err);
    slack.sendSlackMessage(req, err);
};

module.exports = {
    logError
};