const { ObjectId } = require('mongodb');
const connection = require('./connectionMongo');

const COLLECTION_TODO = 'todolist';

const getAllListOfItemsModel = async () => {
    const connect = await connection();

    const listOfToDo = await connect.collection(COLLECTION_TODO).find().toArray();

    return listOfToDo;
};

module.exports = {
    getAllListOfItemsModel,
};
