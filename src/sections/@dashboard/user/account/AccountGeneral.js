/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Grid, Card, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../../../hooks/useAuth';
// utils
import { fData } from '../../../../utils/formatNumber';
// _mock
import { countries } from '../../../../_mock';
// components
import { FormProvider, RHFSwitch, RHFSelect, RHFTextField, RHFUploadAvatar } from '../../../../components/hook-form';
import axios from '../../../../utils/axios';
import { isValidToken, setSession } from '../../../../utils/jwt';

// ----------------------------------------------------------------------

export default function AccountGeneral({ user }) {
  const { enqueueSnackbar } = useSnackbar();
  // const { user } = useAuth();
  const [defaultValues, setdefaultValues] = useState()

  useEffect(() => {
    setdefaultValues({
      displayName: user?.displayName || '',
      email: user?.email || '',
      photoURL: user?.photoURL || '',
      mobileNo: user?.mobileNo || '',
      country: user?.country || '',
      address: user?.address || '',
      state: user?.state || '',
      city: user?.city || '',
      zipCode: user?.zipCode || '',
      bio: user?.bio || '',
      skill: user?.skill || '',
      isPublic: user?.isPublic || false,
    })
  }, [user.expertId])
  

  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required'),
  });
  console.log("values", defaultValues);

  // const defaultValues = {
  //   displayName: user?.displayName || '',
  //   email: user?.email || '',
  //   photoURL: user?.photoURL || '',
  //   mobileNo: user?.mobileNo || '',
  //   country: user?.country || '',
  //   address: user?.address || '',
  //   state: user?.state || '',
  //   city: user?.city || '',
  //   zipCode: user?.zipCode || '',
  //   bio: user?.bio || '',
  //   skill: user?.skill || '',
  //   isPublic: user?.isPublic || false,
  // };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      if(user.role !== 'Admin') {
        await axios.put(`/expertUpdate/${user?.expertId}`, data);
        enqueueSnackbar('Update success!');
      }
      // await new Promise((resolve) => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'photoURL',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
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

            <RHFSwitch name="isPublic" labelPlacement="start" label="Public Profile" sx={{ mt: 5 }} />
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="displayName" label="Name" />
              <RHFTextField name="email" label="Email Address" />

              <RHFTextField name="mobileNo" label="Phone Number" />
              <RHFTextField name="address" label="Address" />

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
              <RHFTextField name="zipCode" label="Zip/Code" />
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 3 }}>
                {user.role !== "Admin" ? (
                  <>
                    <RHFTextField name="skill" multiline rows={4} label="Skill" />
                    <RHFTextField name="bio" multiline rows={4} label="Bio" />
                  </>
                ) : null}
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
