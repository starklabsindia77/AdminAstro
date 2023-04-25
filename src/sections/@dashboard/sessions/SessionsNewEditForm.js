import PropTypes from 'prop-types';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
// form
import { useForm, Controller, useFormContext, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Card,
  Grid,
  Stack,
  TextField,
  Switch,
  Typography,
  Button,
  FormControlLabel,
  FormGroup,
  Divider,
  InputAdornment,
  MenuItem,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// components
import Iconify from '../../../components/Iconify';
// utils
import { fData, fNumber } from '../../../utils/formatNumber';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// _mock
import { countries } from '../../../_mock';
import axios from '../../../utils/axios';
import { isValidToken, setSession } from '../../../utils/jwt';
// components
import Label from '../../../components/Label';
import {
  FormProvider,
  RHFSelect,
  RHFTimePicker,
  RHFSwitch,
  RHFTextField,
  RHFDateRange,
  RHFUploadAvatar,
} from '../../../components/hook-form';

// ----------------------------------------------------------------------

SessionsNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentSessions: PropTypes.object,
};

export default function SessionsNewEditForm({ isEdit, currentSessions }) {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  // const NewSessionsSchema = Yup.object().shape({
  //   name: Yup.string().required('Name is required'),
  //   email: Yup.string().required('Email is required').email(),
  //   mobileNo: Yup.string().required('Phone number is required'),
  //   address: Yup.string().required('Address is required'),
  //   country: Yup.string().required('country is required'),
  //   firstName: Yup.string().required('First Name is required'),
  //   state: Yup.string().required('State is required'),
  //   city: Yup.string().required('City is required'),
  //   lastName: Yup.string().required('Last Name is required'),
  // });

  const defaultValues = useMemo(
    () => ({
      slot: currentSessions?.slot || [
        {
          startTime: '',
          endTime: '',
        },
      ],
      startDate: currentSessions?.startDate || '',
      endDate: currentSessions?.endDate || '',
      TimeInterval: currentSessions?.TimeInterval || '',
      monday: currentSessions?.monday || false,
      tuesday: currentSessions?.tuesday || false,
      wednesday: currentSessions?.wednesday || false,
      thursday: currentSessions?.thursday || false,
      friday: currentSessions?.friday || false,
      saturday: currentSessions?.saturday || false,
      sunday: currentSessions?.sunday || false,
      // status: currentSessions?.status,
      // firstName: currentSessions?.firstName || '',
      // lastName: currentSessions?.lastName || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentSessions]
  );

  const today = new Date();

  const methods = useForm({
    // resolver: yupResolver(NewSessionsSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'slot',
  });

  const handleAdd = () => {
    append({
      startTime: '',
      endTime: '',
    });
  };
  const handleRemove = (index) => {
    remove(index);
  };

  useEffect(() => {
    if (isEdit && currentSessions) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentSessions]);

  const onSubmit = async (data) => {
    try {
      let response;
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);
        if(isEdit){
          // const response = await axios.put(`/user/${currentSessions?.id}`, data);
        }else{
          response = await axios.post('/sessions', data);
        }          
        // const { user } = response.data;
      }
      
      // await new Promise((resolve) => setTimeout(resolve, 500));
      // reset();
      if(response.status === 200){
        enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
        navigate(PATH_DASHBOARD.sessions.list);
      }
      
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={2} />

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ color: 'text.disabled', mb: 1.5 }}>
                Date Range
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  columnGap: 2,
                  rowGap: 3,
                  gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
                  marginBottom: '10px',
                }}
              >
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={['day']}
                    name="startDate"
                    label="Start Date"
                    value={values.startDate}
                    onChange={(newValue) => {
                      setValue('startDate', newValue);
                    }}
                    minDate={today}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                  />
                  <DatePicker
                    views={['day']}
                    name="endDate" 
                    label="End Date" 
                    value={values.endDate}
                    onChange={(newValue) => {
                      setValue('endDate', newValue);
                    }}
                    minDate={today}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                  />
                </LocalizationProvider>

               
               
              </Box>
              <RHFTextField name="TimeInterval" label="Time Interval" sx={{ marginBottom: '10px' }} />

              <Typography variant="h6" sx={{ color: 'text.disabled', mb: 1.5 }}>
                Week Days
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  columnGap: 2,
                  rowGap: 3,
                  gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(3, 1fr)' },
                }}
              >
                <RHFSwitch
                  name="monday"
                  labelPlacement="start"
                  label={
                    <>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Monday
                      </Typography>
                    </>
                  }
                  sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
                />
                <RHFSwitch
                  name="tuesday"
                  labelPlacement="start"
                  label={
                    <>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Tuesday
                      </Typography>
                    </>
                  }
                  sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
                />
                <RHFSwitch
                  name="wednesday"
                  labelPlacement="start"
                  label={
                    <>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        wednesday
                      </Typography>
                    </>
                  }
                  sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
                />
                <RHFSwitch
                  name="thursday"
                  labelPlacement="start"
                  label={
                    <>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Thursday
                      </Typography>
                    </>
                  }
                  sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
                />
                <RHFSwitch
                  name="friday"
                  labelPlacement="start"
                  label={
                    <>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Friday
                      </Typography>
                    </>
                  }
                  sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
                />
                <RHFSwitch
                  name="saturday"
                  labelPlacement="start"
                  label={
                    <>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Saturday
                      </Typography>
                    </>
                  }
                  sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
                />
                <RHFSwitch
                  name="sunday"
                  labelPlacement="start"
                  label={
                    <>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Sunday
                      </Typography>
                    </>
                  }
                  sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
                />
              </Box>
            </Box>

            <Box sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ color: 'text.disabled', mb: 3 }}>
                Time Options:
              </Typography>

              <Stack divider={<Divider flexItem sx={{ borderStyle: 'dashed' }} />} spacing={3}>
                {fields.map((item, index) => (
                  <Stack key={item.id} alignItems="flex-end" spacing={1.5}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ width: 1 }}>
                      <RHFTimePicker
                        value={values.slot[index].startTime}
                        onChange={(newValue) => {
                          setValue(`slot[${index}].startTime`, newValue);
                        }}
                        name={`slot[${index}].startTime`}
                        label="Start Time"
                      />
                      <RHFTimePicker
                        value={values.slot[index].endTime}
                        onChange={(newValue) => {
                          setValue(`slot[${index}].endTime`, newValue);
                        }}
                        name={`slot[${index}].endTime`}
                        label="End Time"
                      />
                    </Stack>

                    <Button
                      size="small"
                      color="error"
                      startIcon={<Iconify icon="eva:trash-2-outline" />}
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </Button>
                  </Stack>
                ))}
              </Stack>

              <Divider sx={{ my: 3, borderStyle: 'dashed' }} />

              <Stack
                spacing={2}
                direction={{ xs: 'column-reverse', md: 'row' }}
                alignItems={{ xs: 'flex-start', md: 'center' }}
              >
                <Button
                  size="small"
                  startIcon={<Iconify icon="eva:plus-fill" />}
                  onClick={handleAdd}
                  sx={{ flexShrink: 0 }}
                >
                  Add new Option
                </Button>
              </Stack>
            </Box>

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Create Sessions' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
