/*jslint node: true */
'use strict';

const moment = require('moment');

const formatDate = (date) => {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
};

module.exports = {
    formatDate
};