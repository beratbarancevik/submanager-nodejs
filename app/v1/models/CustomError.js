/*jslint node: true */
'use strict';

class CustomError extends Error {
    constructor(errorCode, statusCode) {
        super(errorCode);
        this.errorCode = errorCode;
        this.statusCode = statusCode;
    }
}

module.exports = CustomError;