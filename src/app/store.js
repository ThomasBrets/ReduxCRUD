import { configureStore } from '@reduxjs/toolkit'

// Features
import taskReducer from '../features/tasks/taskSlice'

export const store = configureStore({
    reducer: {
      tasks: taskReducer,
    },
  })