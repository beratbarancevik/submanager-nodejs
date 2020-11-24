/*jslint node: true */
'use strict';

const { v4: uuidv4 } = require('uuid');
const result = require('../../helpers/result');
const logger = require('../../helpers/logger');
const constants = require('../../helpers/constants');
const mysql = require('../../../connection/mysql');
const database = require('./database');
const CustomError = require('../../models/CustomError');
const Subscription = require('../../models/Subscription');

const getSubscriptions = async (req, res) => {
    const userId = req.user.uid;
    try {
        const connection = await mysql.connection();
        const subscription = await database.getSubscriptions(connection, userId);
        connection.release();
        res.send(result.generateResultData(subscription));
        return;
    } catch (err) {
        logger.logError(req, err);
        res.status(500).send(result.generateErrorData(err));
        return;
    }
};

const createSubscription = async (req, res) => {
    try {
        const userId = req.user.uid;
        const title = req.body.title;
        const description = req.body.description || '';
        const price = req.body.price || '0.0';
        const startedAt = req.body.startedAt;
        const subscriptionId = uuidv4();
        const subscription = new Subscription(subscriptionId, userId, title, description, price, startedAt);
        if (!title) {
            throw new CustomError(constants.error.EMPTY_TITLE, 400);
        }
        const connection = await mysql.connection();
        await database.createSubscription(connection, subscription);
        connection.release();
        res.send(result.generateResultData(req.body, constants.success.SUBSCRIPTION_CREATED));
        return;
    } catch (err) {
        logger.logError(req, err);
        res.status(err.statusCode || 500).send(result.generateErrorData(err));
        return;
    }
};

const updateSubscription = async (req, res) => {
    try {
        const userId = req.user.uid;
        const subscriptionId = req.params.id;
        const title = req.body.title;
        const description = req.body.description || '';
        const price = req.body.price || '0.0';
        const startedAt = req.body.startedAt;
        const subscription = new Subscription(subscriptionId, userId, title, description, price, startedAt);
        if (!title) {
            throw new CustomError(constants.error.EMPTY_TITLE, 400);
        }
        const connection = await mysql.connection();
        await database.updateSubscription(connection, subscription);
        connection.release();
        res.send(result.generateResultData(req.body, constants.success.SUBSCRIPTION_UPDATED));
        return;
    } catch (err) {
        logger.logError(req, err);
        res.status(err.statusCode || 500).send(result.generateErrorData(err));
        return;
    }
};

const deleteSubscription = async (req, res) => {
    try {
        const userId = req.user.uid;
        const subscriptionId = req.params.id;
        const connection = await mysql.connection();
        await database.deleteSubscription(connection, subscriptionId, userId);
        connection.release();
        res.send(result.generateResultData(req.body, constants.success.SUBSCRIPTION_DELETED));
        return;
    } catch (err) {
        logger.logError(req, err);
        res.status(err.statusCode || 500).send(result.generateErrorData(err));
        return;
    }
};

module.exports = {
    getSubscriptions,
    createSubscription,
    updateSubscription,
    deleteSubscription
};