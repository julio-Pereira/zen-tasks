import React, { useContext, useEffect } from "react";
import ZenTaskContext from "../../context/zentaskContext";
import TaskCard from "../TaskCard/TaskCard";
import './TaskList.style.css';

function TaskList() {
    const { tasks, getAllTasks } = useContext(ZenTaskContext);

    useEffect(() => {
        if (tasks.length === 0) {
            getAllTasks();
        }
    }, [tasks, getAllTasks])

    return (
        <div
            className="item-list"
        >
            {
                tasks.length > 0 && tasks.map(({ id, description, check }, index) => {
                    <TaskCard 
                        key={`${index}${Date.now()}`}
                        index={index}
                        id={id}
                        description={description}
                        check={check}
                    />
                })
            }
        </div>
    );

}

export default TaskList;