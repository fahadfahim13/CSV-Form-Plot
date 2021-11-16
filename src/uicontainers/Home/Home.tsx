import React from 'react';

import { Box } from '@mui/material';

import FormInputs from 'uicontainers/FormInputs';

const Home = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormInputs />
    </Box>
  );
};

export default Home;
