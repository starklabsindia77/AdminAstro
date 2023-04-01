import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, Switch, Typography, FormControlLabel } from '@mui/material';
// utils
import { fData } from '../../../utils/formatNumber';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// _mock
import { countries } from '../../../_mock';
import axios from '../../../utils/axios';
import { isValidToken, setSession } from '../../../utils/jwt';
// components
import Label from '../../../components/Label';
import { FormProvider, RHFSelect, RHFSwitch, RHFTextField, RHFUploadAvatar } from '../../../components/hook-form';

// ----------------------------------------------------------------------

ExpertNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentExpert: PropTypes.object,
};

export default function ExpertNewEditForm({ isEdit, currentExpert }) {
  const navigate = useNavigate();
  const [uploadImage, setUploadImage] = useState()
  const { enqueueSnackbar } = useSnackbar();

  const NewExpertSchema = Yup.object().shape({
    // password: Yup.string().required('Password is required'),
    email: Yup.string().required('Email is required').email(),
    mobileNo: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    country: Yup.string().required('country is required'),
    firstName: Yup.string().required('First Name is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    lastName: Yup.string().required('Last Name is required'),
    // avatarUrl: Yup.mixed().test('required', 'Avatar is required', (value) => value !== ''),
  });

  const defaultValues = useMemo(
    () => ({
      password: '',
      email: currentExpert?.email || '',
      mobileNo: currentExpert?.mobileNo || '',
      address: currentExpert?.address || '',
      country: currentExpert?.country || '',
      state: currentExpert?.state || '',
      city: currentExpert?.city || '',
      zipCode: currentExpert?.zipCode || '',
      bio: currentExpert?.bio || '',
      skill: currentExpert?.skill || '',
      photoURL: currentExpert?.photoURL || '',
      isVerified: currentExpert?.isVerified || true,
      status: currentExpert?.status,
      firstName: currentExpert?.firstName || '',
      lastName: currentExpert?.lastName || '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentExpert]
  );

  const methods = useForm({
    resolver: yupResolver(NewExpertSchema),
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

  useEffect(() => {
    if (isEdit && currentExpert) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentExpert]);

  const onSubmit = async (data) => {
    try {
      data.image = uploadImage;
      data.id = currentExpert?.id;
      const accessToken = localStorage.getItem('accessToken');
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          if(isEdit){
            const response = await axios.put(`/expert/${currentExpert?.expertId}`, data);
          }else{
            const response2 = await axios.post('/expert', data);
          }
          
          
          // const { expert } = response.data;
        }
      // await new Promise((resolve) => setTimeout(resolve, 500));
      // reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      navigate(PATH_DASHBOARD.expert.list);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      
      const file = acceptedFiles[0];
      
      const reader = new FileReader();
  
      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        // console.log(base64String);
        setUploadImage(base64String);
        // Do something with the Base64 string
      };
      
      reader.readAsDataURL(file);
      

      if (file) {
        setValue(
          'photoURL',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
      // if (file) {
      //   setValue(
      //     'avatarUrl', file
      //   );
      // }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 10, px: 3 }}>
            {isEdit && (
              <Label
                color={values.status !== 'active' ? 'success' : 'error'}
                sx={{ textTransform: 'uppercase', position: 'absolute', top: 24, right: 24 }}
              >
                {values.status === 'active' ? 'Banned' : 'Active' }
              </Label>
            )}

            <Box sx={{ mb: 5 }}>
              <RHFUploadAvatar
                name="photoURL"
                accept="image/*"
                maxSize={3145728}
                onDrop={handleDrop}
                helperText={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    Allowed *.jpeg, *.jpg, *.png, *.gif
                    <br /> max size of {fData(3145728)}
                  </Typography>
                }
              />
            </Box>

            {isEdit && (
              <FormControlLabel
                labelPlacement="start"
                control={
                  <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                      <Switch
                        {...field}
                        checked={field.value !== 'active'}
                        onChange={(event) => field.onChange(event.target.checked ? 'banned' : 'active')}
                      />
                    )}
                  />
                }
                label={
                  <>
                    <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                      Active
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Apply Active account
                    </Typography>
                  </>
                }
                sx={{ mx: 0, mb: 3, width: 1, justifyContent: 'space-between' }}
              />
            )}

            <RHFSwitch
              name="isVerified"
              labelPlacement="start"
              label={
                <>
                  <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                    Email Verified
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Disabling this will automatically send the expert a verification email
                  </Typography>
                </>
              }
              sx={{ mx: 0, width: 1, justifyContent: 'space-between' }}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 3,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="firstName" label="First Name" />
              <RHFTextField name="lastName" label="Last Name" />
              <RHFTextField name="role" label="Role" sx={{display: 'none'}} />
              <RHFTextField name="roleId" label="Role Id"  sx={{display: 'none'}} />
              <RHFTextField name="email" label="Email Address" />
              <RHFTextField name="password" label="Password" />
              <RHFTextField name="mobileNo" label="Phone Number" />
              <RHFSelect name="country" label="Country" placeholder="Country">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>

              <RHFTextField name="state" label="State/Region" />
              <RHFTextField name="city" label="City" />
              <RHFTextField name="address" label="Address" />
              <RHFTextField name="zipCode" label="Zip/Code" />
              
            </Box>
            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }} >
            <RHFTextField name="skill" multiline rows={4} label="Skill" />
            <RHFTextField name="bio" multiline rows={4} label="Bio" />
              
            </Stack>
           

            <Stack alignItems="flex-end" sx={{ mt: 3 }}>
              
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                {!isEdit ? 'Create Expert' : 'Save Changes'}
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
