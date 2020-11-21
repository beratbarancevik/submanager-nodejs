/*jslint node: true */
'use strict';

const getSubscriptions = (connection, userId) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM subscription WHERE userId = '${userId}'`;
        connection.query(query, (err, results, fields) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = {
    getSubscriptions
};