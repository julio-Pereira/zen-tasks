const { createTaskRules, getAllTasksRules } = require('../services/tasks.services');

const createTask = async (req, res, next) => {
    try {
        const { task } = req.body;

        const newTask = await createTaskRules(task);

        return res.status(201).json(newTask);

    } catch (error) {
        console.log(`Create a new Task Error --> ${error.message}`);
        return next(error);
    }
};

const getAllTasksControllers = async (req, res, next) => {
    try {
        const allTasks = await getAllTasksRules();

        return res.status(200).json(allTasks);
    } catch (error) {
        console.log(`Get All Tasks Error --> ${error.message}`);
        return next(error);
    }
}

module.exports = {
    createTask,
    getAllTasksControllers,
};