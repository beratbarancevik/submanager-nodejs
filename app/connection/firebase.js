/*jslint node: true */
'use strict';

const admin = require('firebase-admin');
// let key;
// if (process.env.NODE_ENV === 'dev') {
//     key = require('./keys/firebase-key-dev.json');
// } else {
//     key = require('./keys/firebase-key-prod.json');
// }
let key = require('./keys/firebase-key-dev.json');
const keys = require('./keys/connection_keys.js');

admin.initializeApp({
    credential: admin.credential.cert(key),
    databaseURL: keys.FIREBASE_DATABASE_URL
});

module.exports = admin;