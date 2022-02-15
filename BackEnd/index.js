const express = require('express');
const cors = require('cors');
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
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'GET']
}));

// rotas ***********

app.get('/', getAllListOfToDo);

app.post('/', newTaskToDo);

app.put('/', updateTaskOfToDo);

app.delete('/', deleteTaskOfToDo);

// rotas ***********

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`servidor rodando na porta:${PORT}!`));
