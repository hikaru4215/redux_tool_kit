import { createSlice } from '@reduxjs/toolkit';

export const TaskSlice = createSlice({
  name: 'task',
  initialState: {
      idCount: 3,
    tasks: [
        {
            id: 1,
            title: "TASK A",
            completed: false,
        },
        {
            id: 2,
            title: "TASK B",
            completed: true,
        },
        {
            id: 3,
            title: "TASK C",
            completed: false,
        },
    ],
},
reducers: {
        newTask: (state, action) => {

            state.idCount ++;
            const newItem = {
                id: state.idCount,
                title: action.payload,
                completed: false,
            };
            state.task = [newItem, ...state.tasks];
        },
        completTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload.id)
            if (task) {
                task.completed = !task.completed;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
        },
    },
});

export const { newTask, completTask, deleteTask } = TaskSlice.actions;

export const selectTasks = (state) => state.task.tasks;

export default TaskSlice.reducer;