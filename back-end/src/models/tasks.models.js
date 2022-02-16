const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createTask = async  (task) => {
    const conn = await connection();
    const { insertedId } = await conn.collection('tasks').insertOne({ task });

    return insertedId;
};

const getAllTasks = async (task) => {
    const conn = await connection();
    const query = await conn.collection('tasks').find().toArray();
    return query;
};

module.exports = {
    createTask,
    getAllTasks,
};
