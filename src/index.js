Promise = require('bluebird');
const {port,env} = require('./config/context');
const logger = require('./config/logger');
const app = require('./config/express');
const mongoose = require('./config/mongoose');

mongoose.connect();

app.listen(port,() => logger.info(`server started on port ${port} : ${env}`));

module.exports = app;