import {Props} from "components/InputField/types";
import {INPUT_NAMES} from "./types";

export const ALL_INPUTS: Props[] = [
    {
        id: INPUT_NAMES.NAME,
        name: INPUT_NAMES.NAME,
        label: 'Name',
        defaultValue: '',
        onChange: (e) => {
            console.log(e.target.name, e.target.value);
        },
        width: '100%',
    },
    {
        id: INPUT_NAMES.REGION,
        name: INPUT_NAMES.REGION,
        label: 'Jurisdiction/City/Region',
        defaultValue: '',
        onChange: (e) => {
            console.log(e.target.name, e.target.value);
        },
        width: '100%',
        multiline: true,
        maxRows: 2,
    },
    {
        id: INPUT_NAMES.SITE,
        name: INPUT_NAMES.SITE,
        label: 'Site Description',
        defaultValue: '',
        onChange: (e) => {
            console.log(e.target.name, e.target.value);
        },
        width: '100%',
        multiline: true,
        maxRows: 2,
    },
    {
        id: INPUT_NAMES.LATITUDE,
        name: INPUT_NAMES.LATITUDE,
        label: 'Latitude',
        type: 'number',
        defaultValue: '',
        onChange: (e) => {
            console.log(e.target.name, e.target.value);
        },
        width: '30%',
    },
    {
        id: INPUT_NAMES.LONGITUDE,
        name: INPUT_NAMES.LONGITUDE,
        label: 'Longitude',
        type: 'number',
        defaultValue: '',
        onChange: (e) => {
            console.log(e.target.name, e.target.value);
        },
        width: '30%',
    },
];