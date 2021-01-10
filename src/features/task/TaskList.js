import React from 'react'
import TaskItem from "./TaskItem"
import { useSelector } from 'react-redux';
import { selectTasks } from "./TaskSlice";


const TaskList = () => {
    const tasks = useSelector(selectTasks);
    return (
        <div>
            {
                tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))
            }
        </div>
    )
};

export default TaskList
