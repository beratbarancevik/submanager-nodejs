/*jslint node: true */
'use strict';

const slack = require('./slack');

const logError = (req, err) => {
    console.error(err);
    slack.sendSlackMessage(req, err);
};

module.exports = {
    logError
};