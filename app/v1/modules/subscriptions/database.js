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

const createSubscription = (connection, subscription) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO subscription (id, userId, title, description, price, startedAt) 
                        VALUES ('${subscription.id}', '${subscription.userId}', '${subscription.title}', '${subscription.description}', '${subscription.price}', '${subscription.startedAt}')`;
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

const updateSubscription = (connection, subscription) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE subscription 
                        SET title = '${subscription.title}', description = '${subscription.description}', price = '${subscription.price}', startedAt = '${subscription.startedAt}' 
                        WHERE id = '${subscription.id}' AND userId = '${subscription.userId}'`;
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

const deleteSubscription = (connection, subscriptionId, userId) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM subscription WHERE id = '${subscriptionId}' AND userId = '${userId}'`;
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
    getSubscriptions,
    createSubscription,
    updateSubscription,
    deleteSubscription
};