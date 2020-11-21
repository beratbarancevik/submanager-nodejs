/*jslint node: true */
'use strict';

const { v4: uuidv4 } = require('uuid');
const result = require('../../helpers/result');
const logger = require('../../helpers/logger');
const constants = require('../../helpers/constants');
const mysql = require('../../../connection/mysql');
const CustomError = require('../../models/CustomError');
const database = require('./database');

const getSubscriptions = async (req, res) => {
    const userId = req.user.uid;
    try {
        const connection = await mysql.connection();
        const goals = await database.getSubscriptions(connection, userId);
        connection.release();
        res.send(result.generateResultData(goals));
        return;
    } catch (err) {
        logger.logError(req, err);
        res.status(500).send(result.generateErrorData(err));
        return;
    }
};

module.exports = {
    getSubscriptions
};