import { createReducer } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from './action';
import { statusFilters } from './constans';

const initialFilters = {
  status: statusFilters.all,
};

export const filterReduser = createReducer(initialFilters, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  },
});

const initialTasks = [
  { id: 0, text: 'Learn HTML and CSS', completed: false },
  { id: 1, text: 'Get good at JavaScript', completed: false },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];
export const tasksReduser = createReducer(initialTasks, {
  [addTask]: (state, action) => {
    state.push(action.payload);
  },
  [deleteTask]: (state, action) => {
    return state.filter(task => task.id !== action.payload);
  },
  [toggleCompleted]: (state, action) => {
    state.forEach(task => {
      if (task.id === action.payload) {
        return (task.completed = !task.completed);
      }
    });
  },
});
