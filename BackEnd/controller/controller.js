const {
    getAllListService,
    addNewTaskService,
    updateTasksService,
    deleteTaskService,
} = require('../services/toDoService');

const getAllListOfToDo = async (req, res, next) => {
    try {
        const listOfToDo = await getAllListService();

        return res.status(200).json(listOfToDo);
    } catch (error) {
        console.log(error.message);
        return next(error);
    }
};

const newTaskToDo = async (req, res, next) => {
    try {
        const { task, status } = req.body;
        const newTaskId = await addNewTaskService(task, status);

        return res.status(201).json(`Task nova de Id: ${newTaskId}`);
    } catch (error) {
        console.log(error.message);
        return next(error);
    }
};

const updateTaskOfToDo = async (req, res, next) => {
    try {
        const { _id: id, task, status } = req.body;
        const updatedTaskId = await updateTasksService(id, task, status);

        return res.status(201).json(`Task atualizada de id: ${updatedTaskId}`);
    } catch (error) {
        console.log(error.message);
        return next(error);
    }
};

const deleteTaskOfToDo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedTasId = await deleteTaskService(id);

        return res.status(201).json(`task deletada de id: ${deletedTasId}`);
    } catch (error) {
        console.log(error.message);
        return next(error);
    }
};

module.exports = {
    getAllListOfToDo,
    newTaskToDo,
    updateTaskOfToDo,
    deleteTaskOfToDo,
};
