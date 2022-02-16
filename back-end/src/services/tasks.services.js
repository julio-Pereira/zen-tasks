const Joi = require('joi');
const { createTask } = require('../models/tasks.models');
const { errorMessage, allFieldsMessage } = require('../utils/errorMessages');

const taskSchema = Joi.object({
    task: Joi.string().not().empty().required(),
});     


const createTaskRules = async (task) => {
    const { error } = taskSchema.validate({ task });

    if (error) throw errorMessage(400, allFieldsMessage);

    const newTask = await createTask(task);

    return {
        task: {
            _id: newTask,
            task,
        },
    };

}

module.exports = {
    createTaskRules,
};
