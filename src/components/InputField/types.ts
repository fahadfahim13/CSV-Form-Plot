import { ChangeEvent } from "react";
import {InputTypes} from "store/FormInputs/types";

export interface Props {
    id?: string;
    name: InputTypes;
    type?: string;
    required?: boolean;
    label?: string;
    defaultValue?: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    multiline?: boolean;
    maxRows?: number;
    width?: string;
}