/*jslint node: true */
'use strict';

const constants = require('../helpers/constants');
const helpers = require('../helpers/result');
const logger = require('../helpers/logger');

const send404 = (req, res, next) => {
    console.error(new Error(constants.error.NOT_FOUND));
    res.status(404).send(helpers.generateErrorData(new Error(constants.error.NOT_FOUND)));
};

const send500 = (err, req, res, next) => {
    logger.logError(req, err);
    res.status(500).send(helpers.generateErrorData(new Error(constants.error.INTERNAL_SERVER_ERROR)));
};

module.exports = {
    send404,
    send500
};