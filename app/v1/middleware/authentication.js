/*jslint node: true */
'use strict';

const admin = require('firebase-admin');
const constants = require('../helpers/constants');
const result = require('../helpers/result');
const CustomError = require('../models/CustomError');

const isAuthenticated = async (req, res, next) => {
    if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) && !(req.cookies && req.cookies.__session)) {
        res.status(401).send(result.generateErrorData(new CustomError(constants.error.UNAUTHORIZED, 401)));
        return;
    }

    let idToken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        idToken = req.headers.authorization.split('Bearer ')[1];
    } else {
        res.status(401).send(result.generateErrorData(new CustomError(constants.error.UNAUTHORIZED, 401)));
        return;
    }

    try {
        const decodedIdToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedIdToken;
        next();
        return;
    } catch (err) {
        res.status(401).send(result.generateErrorData(new CustomError(constants.error.UNAUTHORIZED, 401)));
        return;
    }
};

module.exports = isAuthenticated;