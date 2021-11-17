import React from 'react';

import {Button} from '@mui/material';
import {Props} from "./types";

const ActionButton = (props: Props) => {
    const { variant="outlined", startIcon=null, value="Button", color="primary"} = props;
    return (
        <Button variant={variant} startIcon={startIcon} color={color}>
            {value}
        </Button>
    );
};

export default ActionButton;