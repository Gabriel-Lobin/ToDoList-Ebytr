const mongodb = require('mongodb').MongoClient;
require('dotenv').config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/ToDoListEbytr`;
const DB_NAME = 'ToDoListEbytr';

const connection = () =>
    mongodb
        .connect(MONGO_DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((connection) => connection.db(DB_NAME))
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });

module.exports = { connection };        