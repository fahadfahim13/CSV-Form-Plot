import React from 'react';

import { Box } from '@mui/material';

import ButtonContainer from 'uicontainers/ButtonContainer';
import FormInputs from 'uicontainers/FormInputs';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className={styles.box}
    >
      <ButtonContainer />
      <FormInputs />
    </Box>
  );
};

export default Home;
