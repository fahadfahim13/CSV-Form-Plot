import React, { ChangeEvent } from 'react';
import { useAppDispatch } from 'store/hooks';
import InputField from 'components/InputField';
import { ALL_INPUTS } from './constants';
import { changeValue } from 'store/FormInputs/actions';
import { InputChangeAction, InputTypes } from 'store/FormInputs/types';

const FormInputs = () => {
  const dispatch = useAppDispatch();
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: InputTypes,
  ) => {
    const payload: InputChangeAction = {
      key,
      value: e.target.value,
    };
    dispatch(changeValue(payload));
  };
  return (
    <div>
      {ALL_INPUTS.map((input) => (
        <InputField
          key={input.id}
          {...input}
          name={input.name}
          onChange={(e) => handleChange(e, input.name)}
        />
      ))}
    </div>
  );
};

export default FormInputs;
