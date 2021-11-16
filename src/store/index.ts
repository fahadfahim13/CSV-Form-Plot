import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/reducer';
import formReducer from './FormInputs/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    formReducer: formReducer,
  },
});
