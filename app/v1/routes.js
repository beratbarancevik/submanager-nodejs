/*jslint node: true */
'use strict';

const express = require('express');
const router = express.Router();

/*
 ** Subscriptions
 */
const subscriptions = require('./modules/subscriptions/subscriptions');
router.get('/subscriptions', subscriptions.getSubscriptions);
router.get('/subscriptions/list', subscriptions.getSubscriptionsList);
router.post('/subscriptions', subscriptions.createSubscription);
router.post('/subscriptions/suggestions', subscriptions.createSubscriptionSuggestion);
router.put('/subscriptions/:id', subscriptions.updateSubscription);
router.delete('/subscriptions/:id', subscriptions.deleteSubscription);

/*
 ** ERROR
 */
const error = require('./error/error');
router.use(error.send404);
router.use(error.send500);

module.exports = router;