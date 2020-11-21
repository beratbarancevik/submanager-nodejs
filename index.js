/*jslint node: true */
'use strict';

require('./app/connection/firebase');

const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

const app = express();
app.use(compression());
app.use(helmet());
app.use(cors());
app.enable('trust proxy');
app.use(bodyParser.json({ strict: true }));

const authenticationV1 = require('./app/v1/middleware/authentication');
const routerV1 = require('./app/v1/routes');
app.use('/api/v1/', authenticationV1, routerV1);

if (process.env.NODE_ENV === 'dev') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log(`Server listening on port: ${port}`));
} else {
    module.exports.handler = serverless(app);
}