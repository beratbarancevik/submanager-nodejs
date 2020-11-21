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
    GOAL_CREATED: 'GOAL_CREATED'
};

const english = {
    EMPTY_TITLE: 'Please enter a title.',
    GOAL_CREATED: 'Goal created!',
    USER_NOT_FOUND: 'This user does not exist.'
};

module.exports = {
    error,
    success,
    english
};