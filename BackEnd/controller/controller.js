const { getAllListService } = require('../services/toDoService');

const getAllListOfToDo = async (req, res, next) => {
    try {
        const listOfToDo = await getAllListService();

        res.status(200).json(listOfToDo);
    } catch (error) {
        console.log(error);
        return next(error);
    }
};

module.exports = {
    getAllListOfToDo,
};
