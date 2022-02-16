const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { afterEach, beforeEach } = require('mocha');

const connectionMongo = require('../models/connectionMongo');
const toDoModels = require('../models/toDoListModels');

const DBSERVER = new MongoMemoryServer();

const getConnection = async () => {
  const URLMock = await DBSERVER.getUri();
  const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  return MongoClient.connect(URLMock, OPTIONS);
};

describe('1 - verifica na model se', () => {
  let connectionMockado;

  const FIRST_ITEM_DB = {
    task: 'Caminhada',
    status: 'Em Andamento'
  };

  const SECOND_ITEM_DB = {
    task: 'Caminhada',
    status: 'Finalizado'
  };

  before(async () => {
    connectionMockado = await getConnection();

    sinon.stub(MongoClient, 'connect').resolves(connectionMockado);
  });

  after(async () => {
    await connectionMockado.db('ToDoListEbytr').collection('todolist').drop();
    MongoClient.connect.restore();

  });
  describe('[Banco Vazio] no inicio', () => {
    it('o banco está vazio', async () => {
      const response = await toDoModels.getAllListOfItemsModel();

      expect(response).to.have.length(0);
    });
  });
  describe('[Adicionar] ao adicionar a task', () => {
    const { task, status } = FIRST_ITEM_DB;

    it('foi adicionado task nova', async () => {
      await toDoModels.addNewTaskModel(task, status);
      const response = await toDoModels.getAllListOfItemsModel();
      TASK_ID = ObjectId(response[0]._id).toString()

      expect(response).to.have.length(1);
    });

    it('a task tem id', async () => {
      const [response] = await toDoModels.getAllListOfItemsModel();

      expect(response).to.have.a.property('_id');
    });    
  });
  describe('[Atualizar] ao atualizar a task', () => {
    let TASK_ID;
    it('o status é "Em Andamento"', async () => {
      const [response] = await toDoModels.getAllListOfItemsModel();
      TASK_ID = ObjectId(response._id).toString()

      expect(response.status).to.be.equal('Em Andamento');
    });

    it('o status é "Finalizado"', async () => {
      const { task, status } = SECOND_ITEM_DB;
      await toDoModels.updateTaskModel(TASK_ID, task, status);
      const [response] = await toDoModels.getAllListOfItemsModel();

      expect(response.status).to.be.equal('Finalizado');
    });

    it('o id não alterou', async () => {
      const [response] = await toDoModels.getAllListOfItemsModel();
      const result = ObjectId(response._id).toString();

      expect(result).to.be.equal(TASK_ID);
    });
  });
  describe('[Deletar] ao deletar uma task', () => {  
  let TASK_ID;

  it('tem a task', async () => {
    const response = await toDoModels.getAllListOfItemsModel();
    TASK_ID = ObjectId(response[0]._id).toString()

    expect(response).to.have.length(1);
  });
    it('deleta a task', async () => {
      await toDoModels.deleteTaskModel(TASK_ID);
      const response = await toDoModels.getAllListOfItemsModel();
      
      expect(response).to.have.length(0);
    });
  });
});
