/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
// form
import { useForm, Controller, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Grid, Card, Stack, Typography, TextField   } from '@mui/material';
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
      isPublic: user?.isPublic  || true,
    })
  }, [user.expertId])

  console.log("defaultValues", defaultValues)

  
 

  const methods = useForm({    
    defaultValues,
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    console.log("update Data", data);
    // try {
    //   if(user.role !== 'Admin') {
    //     await axios.put(`/expertUpdate/${user?.expertId}`, data);
    //     enqueueSnackbar('Update success!');
    //   }
    //   // await new Promise((resolve) => setTimeout(resolve, 500));
      
    // } catch (error) {
    //   console.error(error);
    // }
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

  // const { control } = useFormContext();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
            {/* <h1>{defaultValues?.email}</h1> */}
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

            <RHFSwitch 
              name="isPublic" 
              labelPlacement="start" 
              value={defaultValues?.isPublic}             
              label="Public Profile" sx={{ mt: 5 }} />
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
              <TextField
                name="displayName"
                label="Name"
                value={defaultValues?.displayName}
                onChange={e => setValue("displayName", e.target.value)} 
              />
              <RHFTextField name="email" label="Email Address" value={defaultValues?.email} />

              <RHFTextField name="mobileNo" label="Phone Number" value={defaultValues?.mobileNo} />
              <RHFTextField name="address" label="Address" value={defaultValues?.address}/>

              {/* <RHFSelect name="country" label="Country" placeholder="Country">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect> */}

              <Controller
                name="country"
                // control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Country"
                    select
                    fullWidth
                    SelectProps={{ native: true }}
                  >
                    <option value="" />
                    {countries.map((option) => (
                      <option key={option.code} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                )}
              />

              <RHFTextField name="state" label="State/Region" value={defaultValues?.state}/>

              <RHFTextField name="city" label="City" value={defaultValues?.city} />
              <RHFTextField name="zipCode" label="Zip/Code" value={defaultValues?.zipCode} />
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
