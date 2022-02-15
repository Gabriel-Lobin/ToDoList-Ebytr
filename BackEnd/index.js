const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware.js');
const { getAllListOfToDo } = require('./controller/controller');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', getAllListOfToDo);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`servidor rodando na porta:${PORT}!`));
