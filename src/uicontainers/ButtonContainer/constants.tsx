import React from "react";
import {Props} from "components/ActionButton/types";
import {BUTTON_COLORS, BUTTON_TYPES} from "shared/types";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from '@mui/icons-material/Close';

export const BUTTONS: Props[] = [
    {
        value: 'SAVE',
        variant: BUTTON_TYPES.OUTLINED,
        startIcon: <SaveIcon />,
    },
    {
        value: 'CANCEL',
        variant: BUTTON_TYPES.OUTLINED,
        startIcon: <CloseIcon />,
        color: BUTTON_COLORS.INHERIT,
    },
]