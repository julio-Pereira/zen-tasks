const bodyParser = require('body-parser');
const express = require('express');
const { createTask, getAllTasksControllers } = require('../controllers/tasks.controllers');

const app = express();

app.use(bodyParser.json());

// tasks routes
app.post('/tasks', createTask);
app.get('/tasks', getAllTasksControllers);

module.exports = app;