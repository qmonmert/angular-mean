const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const env = require('./env/environment');

const mongoUri = `mongodb://localhost:27017/MyActivities`;

function connect() {
    return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
    connect
};
