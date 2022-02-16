const sinon = require('sinon');
const { expect } = require('chai');

const mongoConnection = require('../models/connection');
const TasksModel = require('../models/tasks.models');

describe('1 - Should insert a new tasks in DB', () => {
    let connectionMock;

    const payloadTaks = {
        task: 'Meeting with a new client',
    };
 
    before(() => {
        const ID_EXAMPLE = '604cb554311d68f491ba5781';
        const insertOne = async () => ({ insertedId: ID_EXAMPLE });
        const collection = async () => ({ insertOne });
        const db = async (databaseName) => ({ collection });
        const getConnectionMock = async () => ({ db });

        connectionMock = getConnectionMock().then((conn) => conn.db('zen_tasks_development'));

        sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
    });


    after(() => {
        mongoConnection.getConnection.restore();
    })


    it('1.1 - Should insert with success', async () => {
        const response = await TasksModel.create(payloadTaks);

        expect(response).to.be.a('object');
    })

    it('1.2 - Object should have new task\'s\ object', async () => {
        const response = await TasksModel.create(payloadTaks);

        expect(response).to.have.a.property('id');
    })
});