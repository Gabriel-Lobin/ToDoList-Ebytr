const sinon = require('sinon');
const { expect } = require('chai');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnect = require('../models/connectionMongo');
const toDoModels = require('../models/toDoListModels');

// código pego no course da trybe.
const DBSERVER = new MongoMemoryServer();

const getConnection = async () => {
    const URLMock = await DBSERVER.getUri();
    const OPTIONS = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    return MongoClient.connect(URLMock, OPTIONS);
};
// ****************************************

describe('verifica se', () => {
  describe('o banco está vazio', () => {
    
  });

});
