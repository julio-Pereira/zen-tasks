import { createContext, useState } from "react";
import zenTaskApi from '../utils/fetch';

const ZenTaskContext = createContext();

export function Provider ({ children }) {
    const [tasks, setTasks] = useState([]);

    const getAllTasks = async () => zenTaskApi('GET', 'tasks')
        .then(({ data: tasks }) => setTasks(tasks));

    const getTaskById = async (id) => zenTaskApi('GET', `tasks/${id}`)
        .then(({ data: task }) => task);

    const createTask = async (description) => zenTaskApi('POST', 'task', { description })
        .then(getAllTasks);
        
    const removeTask = async (id) => zenTaskApi('DELETE', `tasks/${id}`)
        .then(getAllTasks);

    const updateTask = async (id, description, check) => zenTaskApi('PUT', `tasks/${id}`, { description, check })
        .then(getAllTasks);

    const resetTasks = async () => zenTaskApi('POST', 'debug')
        .then(() => true)
        .catch(() => console.error('Não foi possível restaurar as tarefas'));
    
        
    const contextValue = {
        tasks, 
        getAllTasks,
        getTaskById,
        createTask,
        removeTask,
        updateTask,
        resetTasks
    };

    return (
        <ZenTaskContext.Provider value={ contextValue }>
            { children }
        </ZenTaskContext.Provider>
    )
}

export default ZenTaskContext;