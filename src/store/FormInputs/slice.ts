import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InputChangeAction, Inputs } from './types';
import { INPUT_NAMES } from 'uicontainers/FormInputs/types';

const initialState: Inputs = {
  [INPUT_NAMES.NAME]: '',
  [INPUT_NAMES.REGION]: '',
  [INPUT_NAMES.SITE]: '',
  [INPUT_NAMES.LATITUDE]: '',
  [INPUT_NAMES.LONGITUDE]: '',
};

export const formInputSlice = createSlice({
  name: 'formInputs',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeValue: (state, action: PayloadAction<InputChangeAction>) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export default formInputSlice;
