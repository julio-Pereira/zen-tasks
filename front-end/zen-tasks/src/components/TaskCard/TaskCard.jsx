import React, { useContext, useState } from 'react';
import ZenTaskContext from '../../context/zentaskContext';
import clsx from 'clsx';

function TaskCard({ index, id, description, check }) {
    const [edit, setEdit] = useState(false);
    const [taskDescription, setTaskDescription] = useState('');

    const { updateTask, removeTask } = useContext(ZenTaskContext);

    const editTaskHandler = ({ target: { value }}) => setTaskDescription(value);

    const updateTaskHandler = async () => updateTask(id, description, check);

    const changeCheckTask = async ({ target: { checked }}) => updateTask(id, description, checked);


    return (
        <section className="task-card">
            {
                edit ?
                (
                    <>
                        <div className='task-card-desc'>
                            <input 
                                value={taskDescription}
                                onChange={editTaskHandler}
                            />
                        </div>
                        <div>
                            <button
                                onClick={updateTaskHandler}
                                style={{ marginRight: '5px' }}
                            >
                                Salvar
                            </button>
                            <button
                                onClick={() => setEdit(false)} 
                            >
                                Cancelar
                            </button>
                        </div>
                    </>
                ) : 
                (
                    <>
                        <input 
                            type="checkbox"
                            id="todo"
                            name="todo"
                            defaultChecked={check}
                            onChange={changeCheckTask}
                        />
                        <div
                            className={clsx('task-card-desc', check && 'task-card-desc-check')}
                        >
                            {description}
                        </div>
                        <div>
                            <button
                                style={{ marginRight: '5px' }}
                                onClick={() => setEdit(true)}
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => removeTask(id)}
                            >
                                Remover
                            </button>
                        </div>
                    </>
                )
                }
        </section>
    );
};

export default TaskCard;

