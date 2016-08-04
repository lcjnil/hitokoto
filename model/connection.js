const mongoose = require('mongoose');
const config = require('../config').database;

const connection = mongoose.createConnection('mongodb://localhost', {
  host: config.host,
  database: config.database,
  port: config.port,
});

module.exports = connection;
