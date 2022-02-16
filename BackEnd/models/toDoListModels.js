const { ObjectId } = require('mongodb');
const connection = require('./connectionMongo');

const COLLECTION_TODO = 'todolist';

const getAllListOfItemsModel = async () => {
    const connect = await connection();

    const listOfToDo = await connect.collection(COLLECTION_TODO).find().toArray();

    return listOfToDo;
};

const addNewTaskModel = async (task, status) => {
    const connect = await connection();

    const { insertedId } = await connect.collection(COLLECTION_TODO).insertOne({
        task,
        status,
        created: new Date(),
    });
    return insertedId;
};

const updateTaskModel = async (id, task, status) => {
    const connect = await connection();

    await connect.collection(COLLECTION_TODO).updateOne(
        { _id: ObjectId(id) },
        { $set: { task, status } },
    );

    return id;
};

const deleteTaskModel = async (id) => {
    const connect = await connection();

    await connect.collection(COLLECTION_TODO).deleteOne({ _id: ObjectId(id) });

    return id;
};

module.exports = {
    getAllListOfItemsModel,
    addNewTaskModel,
    updateTaskModel,
    deleteTaskModel,
};
