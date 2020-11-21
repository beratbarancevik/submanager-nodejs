/*jslint node: true */
'use strict';

const mysqlConnectionPool = require('./mysql_connection');

const connection = () => {
    return new Promise((resolve, reject) => {
        mysqlConnectionPool.getConnection((err, connection) => {
            if (err) {
                console.error(`MySQL connection error: ${err}`);
                reject(err);
                return;
            } else {
                resolve(connection);
                return;
            }
        });
    });
};

module.exports = {
    connection
};