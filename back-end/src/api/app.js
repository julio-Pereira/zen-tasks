const bodyParser = require('body-parser');
const express = require('express');
const { createTask } = require('../controllers/tasks.controllers');

const app = express();

app.use(bodyParser.json());

app.post('/tasks', createTask);


module.exports = app;