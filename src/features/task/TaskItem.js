import React from 'react'
import { useDispatch } from "react-redux";
import { completTask, deleteTask } from "./TaskSlice";

const TaskItem = ({task}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <input
                type="checkbox"
                onClick={() => dispatch(completTask(task))}
                defaultChecked={task.completed}
                />
                <span> { task.title} </span>
                <button onClick={() => dispatch(deleteTask(task))}>DELETE</button>
        </div>
    )
}

export default TaskItem
