const { createTaskRules } = require('../services/tasks.services');

const createTask = async (req, res, next) => {
    try {
        const { task } = req.body;

        const newTask = await createTaskRules(task);

        return res.status(201).json(newTask);
        
    } catch (error) {
        console.log(`Create a new Task ERROR --> ${error.message}`);
        return next(error);
    }
};

module.exports = {
    createTask,
};