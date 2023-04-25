import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
// form
import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


RHFDateRange.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};
// const isWeekend = (date) => {
//     const day = date.day();  
//     return day === 0 || day === 6;
// }; 
export default function RHFDateRange({ name, children, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
            // <LocalizationProvider
            // dateAdapter={AdapterDayjs}
            // localeText={{ start: 'Start Date', end: 'End Date' }}
            // >
            // <DateRangePicker
            //     {...other}
            //     renderInput={(startProps, endProps) => (
            //     <>
            //         <TextField {...startProps} />
            //             <Box sx={{ mx: 2 }}> to </Box>
            //         <TextField {...endProps} />
            //     </>
            //     )}
            // />
            // </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    views={['day']}
                    {...other}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                />
            </LocalizationProvider>
        )}
    />
  );
}