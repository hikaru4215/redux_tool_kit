import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {newTask} from './TaskSlice';

const TaskInput = () => {
    const dispatch = useDispatch();
    const [editTitle, setEditTitle] = useState("");
    const handleTitleChange = (e) => {
        setEditTitle(e.target.value)
    };
    const handleSubmit = (e) => {
        e.perventDefault();
        dispatch(newTask(editTitle));
        setEditTitle("");
    };
    console.log(editTitle);
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={editTitle}
                onChange={handleTitleChange}
                placeholder="Please type in"
                />
                <button>NEW</button>
        </form>
    );
};

export default TaskInput
