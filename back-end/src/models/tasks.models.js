const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createTask = async  (task) => {
    const conn = await connection();
    const { insertedId } = await conn.collection('tasks').insertOne({ task });

    return insertedId;
};

module.exports = {
    createTask,
};
