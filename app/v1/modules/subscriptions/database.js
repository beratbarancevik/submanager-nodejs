/*jslint node: true */
'use strict';

const getSubscriptions = (connection, userId) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT s.id, s.title, s.description, s.price, s.startedAt, ss.imageUrl FROM subscription AS s
                        INNER JOIN subscription_suggestion AS ss ON s.typeId = ss.id WHERE userId = '${userId}'`;
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

const getSubscriptionsList = (connection, userId) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM subscription_suggestion`;
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
        const query = `INSERT INTO subscription (id, typeId, userId, title, description, price, startedAt) 
                        VALUES ('${subscription.id}', '${subscription.typeId}', '${subscription.userId}', '${subscription.title}', '${subscription.description}', '${subscription.price}', '${subscription.startedAt}')`;
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

const createSubscriptionSuggestion = (connection, id, title, imageUrl) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO subscription_suggestion (id, title, imageUrl) 
                        VALUES ('${id}', '${title}', '${imageUrl}')`;
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
    getSubscriptionsList,
    createSubscription,
    createSubscriptionSuggestion,
    updateSubscription,
    deleteSubscription
};