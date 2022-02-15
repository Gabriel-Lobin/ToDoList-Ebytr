const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware.js');
const {
    getAllListOfToDo,
    newTaskToDo,
    updateTaskOfToDo,
    deleteTaskOfToDo,
} = require('./controller/controller');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

// rotas ***********

app.get('/', getAllListOfToDo);

app.post('/', newTaskToDo);

app.put('/', updateTaskOfToDo);

app.delete('/', deleteTaskOfToDo);

// rotas ***********

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`servidor rodando na porta:${PORT}!`));
