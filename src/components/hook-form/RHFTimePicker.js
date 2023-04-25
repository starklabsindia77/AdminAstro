import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
// form
import * as React from 'react';

import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';



RHFTimePicker.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
};

export default function RHFTimePicker({ name, children, ...other }) {
    const { control } = useFormContext();
    // const [value, setValue] = React.useState([null, null]);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                        {...other}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            )}
        />
    );
}