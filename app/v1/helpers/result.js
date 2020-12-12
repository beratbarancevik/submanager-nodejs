/*jslint node: true */
'use strict';

const { english: english } = require('./constants');

const generateResultData = (data, code) => {
    return {
        'code': code || '',
        'message': english[code] || '',
        'data': data || {}
    };
};

const generateErrorData = (err) => {
    if (err.errorCode) {  // custom error
        return {
            'code': err.errorCode || 'UNKNOWN',
            'message': english[err.errorCode] || 'An error occurred',
            'data': {}
        };
    } else {  // default javascript error
        return {
            'code': 'INTERNAL_SERVER_ERROR',
            'message': err.message || 'An error occurred',
            'data': {}
        };
    }
};

module.exports = {
    generateResultData,
    generateErrorData
};