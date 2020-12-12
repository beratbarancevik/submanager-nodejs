/*jslint node: true */
'use strict';

const error = {
    EMPTY_TITLE: 'EMPTY_TITLE',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
    NOT_FOUND: 'NOT_FOUND',
    UNAUTHORIZED: 'UNAUTHORIZED',
    USER_NOT_FOUND: 'USER_NOT_FOUND'
};

const success = {
    SUBSCRIPTION_CREATED: 'SUBSCRIPTION_CREATED',
    SUBSCRIPTION_DELETED: 'SUBSCRIPTION_DELETED',
    SUBSCRIPTION_UPDATED: 'SUBSCRIPTION_UPDATED'
};

const english = {
    EMPTY_TITLE: 'Please enter a title.',
    SUBSCRIPTION_CREATED: 'Subscription created!',
    USER_NOT_FOUND: 'This user does not exist.'
};

module.exports = {
    error,
    success,
    english
};