const { getAllListOfItemsModel } = require('../models/toDoListModels');

const getAllListService = async () => {
    const listOfToDo = await getAllListOfItemsModel();

    return listOfToDo;
};

module.exports = {
    getAllListService,
};
