const {
    getAllListOfItemsModel,
    addNewTaskModel,
    updateTaskModel,
    deleteTaskModel,
} = require('../models/toDoListModels');

const getAllListService = async () => {
    const listOfToDo = await getAllListOfItemsModel();

    return listOfToDo;
};

const addNewTaskService = async (task, status) => {
    if (!task || !status) throw ({
        status: '400',
        message: 'necessário todos os campos',
    });

    const newTaskId = await addNewTaskModel(task, status);

    return newTaskId;
};

const updateTasksService = async (id, task, status) => {
    if (!id || !task || !status) throw ({
        status: '400',
        message: 'necessário todos os campos',
    });

    const updatedTaskId = await updateTaskModel(id, task, status);

    return updatedTaskId;
};

const deleteTaskService = async (id) => {
    if (!id) throw ({
        status: '400',
        message: 'necessário o id da task',
    });
    const deletedTaskId = await deleteTaskModel(id);

    return deletedTaskId;
};

module.exports = {
    getAllListService,
    addNewTaskService,
    updateTasksService,
    deleteTaskService,
};
