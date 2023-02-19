import { configureStore } from '@reduxjs/toolkit';
import { filterReduser, tasksReduser } from './reduser';

export const store = configureStore({
  reducer: {
    filters: filterReduser,
    tasks: tasksReduser,
  },
});
