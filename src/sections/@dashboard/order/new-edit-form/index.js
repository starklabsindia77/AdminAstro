import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { Controller, useForm } from 'react-hook-form';

import DatePicker from '@mui/lab/DatePicker';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { styled, useTheme } from '@mui/material/styles';
import {
  Card,
  Grid,
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  TextField, 
  TableContainer, Box, Stack, Button, Divider, Typography, InputAdornment, MenuItem
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// mock
import { _orderAddressFrom } from '../../../../_mock';
// components
import { RHFSelect, RHFTextField , FormProvider } from '../../../../components/hook-form';
import { fDate } from '../../../../utils/formatTime';
import useResponsive from '../../../../hooks/useResponsive';
// utils
import { fNumber, fCurrency } from '../../../../utils/formatNumber';

import Label from '../../../../components/Label';
import Image from '../../../../components/Image';
import Scrollbar from '../../../../components/Scrollbar';

//


// ----------------------------------------------------------------------
const RowResultStyle = styled(TableRow)(({ theme }) => ({
  '& td': {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const STATUS_OPTIONS = ['New Order', 'In Transit', 'Delivered', 'Cancelled'];

OrderNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentOrder: PropTypes.object,
};

export default function OrderNewEditForm({ isEdit, currentOrder }) {
  const navigate = useNavigate();

  const upMd = useResponsive('up', 'md');

  const theme = useTheme();
 

  const [loadingSave, setLoadingSave] = useState(false);

  const [loadingSend, setLoadingSend] = useState(false);

  const NewUserSchema = Yup.object().shape({
    createDate: Yup.string().nullable().required('Create date is required'),
    dueDate: Yup.string().nullable().required('Due date is required'),
    shipping_info: Yup.mixed().nullable().required('Order to is required'),
  });

  const defaultValues = useMemo(
    () => ({
      orderId: currentOrder?.order_id || '17099',
      createDate: currentOrder?.createDate || null,
      dueDate: currentOrder?.dueDate || null,
      shippingFee: currentOrder?.shipping_fee || '',
      status: currentOrder?.status || 'draft',
      gst: currentOrder?.gst || '',
      subTotal: currentOrder?.sub_total || '',
      total: currentOrder?.total || '',
      shippingInfo: currentOrder?.shipping_info || { name: '', mobile_number: '', address: '', town: '', city: '', state: '', pincode: '' },
      items: currentOrder?.cart_info || [{ title: '', description: '', service: '', quantity: 0, price: 0, total: 0 }],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentOrder]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    control,
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && currentOrder) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentOrder]);

  const newOrder = {
    ...values,
    items: values.items.map((item) => ({
      ...item,
      total: item.quantity * item.price,
    })),
  };

  const handleSaveAsDraft = async () => {
    setLoadingSave(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      setLoadingSave(true);
      navigate(PATH_DASHBOARD.order.list);
      console.log(JSON.stringify(newOrder, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (data) => {
    console.log("test update", data);
  };

  const handleCreateAndSend = async () => {
    setLoadingSend(true);
    console.log("test update 2", values);   
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card>       
        <Stack
          spacing={{ xs: 2, md: 5 }}
          direction={{ xs: 'column', md: 'row' }}
          divider={<Divider flexItem orientation={upMd ? 'vertical' : 'horizontal'} sx={{ borderStyle: 'dashed' }} />}
          sx={{ p: 3 }}
        >
          <Grid container >           
            <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
              <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                Order from
              </Typography>
              <Typography variant="body2">{values.shippingInfo?.name}</Typography>
              <Typography variant="body2">{values.shippingInfo?.address}, {values.shippingInfo?.town}</Typography>
              <Typography variant="body2">{values.shippingInfo?.city}, {values.shippingInfo?.state} - {values.shippingInfo?.pincode}</Typography>
              <Typography variant="body2">Phone: {values.shippingInfo?.mobile_number}</Typography>
            </Grid>           
          </Grid>
        </Stack>
        <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} sx={{ p: 3, bgcolor: 'background.neutral' }}>
          <RHFTextField disabled name="orderNumber" label="Order number" value={`INV-${values.orderId}`} />
          <RHFSelect
            fullWidth
            name="status"
            label="Status"
            InputLabelProps={{ shrink: true }}
            SelectProps={{ native: false, sx: { textTransform: 'capitalize' } }}
          >
            {STATUS_OPTIONS.map((option) => (
              <MenuItem
                key={option}
                value={option}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderRadius: 0.75,
                  typography: 'body2',
                  textTransform: 'capitalize',
                }}
              >
                {option}
              </MenuItem>
            ))}
          </RHFSelect>

          <Controller
            name="createDate"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <DatePicker
                label="Date create"
                value={field.value}
                onChange={(newValue) => {
                  field.onChange(newValue);
                }}
                renderInput={(params) => <TextField {...params} disabled fullWidth error={!!error} helperText={error?.message} />}
              />
            )}
          />

          <Controller
            name="dueDate"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <DatePicker
                label="Due date"
                value={field.value}
                onChange={(newValue) => {
                  field.onChange(newValue);
                }}
                renderInput={(params) => <TextField {...params} fullWidth error={!!error} helperText={error?.message} />}
              />
            )}
          />
        </Stack>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ color: 'text.disabled', mb: 3 }}>
            Details:
          </Typography>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 860 }}>
              <Table>
                <TableHead
                  sx={{
                    borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                    '& th': { backgroundColor: 'transparent' },
                  }}
                >
                  <TableRow>
                    <TableCell width={40}>#</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Qty</TableCell>
                    <TableCell align="right">Unit price</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {values.items?.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                      }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell align="left">
                        <Box sx={{ maxWidth: 560 }}>
                          <Typography variant="subtitle2">{row.title}</Typography>                        
                        </Box>
                      </TableCell>
                      <TableCell align="left">{row.quantity}</TableCell>
                      <TableCell align="right">{`₹ ${fCurrency(row.price)}`}</TableCell>
                      <TableCell align="right">{`₹ ${fCurrency(row.price * row.quantity)}`}</TableCell>
                    </TableRow>
                  ))}

                  <RowResultStyle>
                    <TableCell colSpan={3} />
                    <TableCell align="right">
                      <Box sx={{ mt: 2 }} />
                      <Typography>Subtotal</Typography>
                    </TableCell>
                    <TableCell align="right" width={120}>
                      <Box sx={{ mt: 2 }} />
                      <Typography>{`₹ ${fCurrency(values.subTotal)}`}</Typography>
                    </TableCell>
                  </RowResultStyle>

                  <RowResultStyle>
                    <TableCell colSpan={3} />
                    <TableCell align="right">
                      <Typography>Shipping Fees</Typography>
                    </TableCell>
                    <TableCell align="right" width={120}>
                      <Typography >{values.shippingFee && `₹ ${fCurrency(+values.shippingFee)}`}</Typography>
                    </TableCell>
                  </RowResultStyle>

                  <RowResultStyle>
                    <TableCell colSpan={3} />
                    <TableCell align="right">
                      <Typography>Taxes</Typography>
                    </TableCell>
                    <TableCell align="right" width={120}>
                      <Typography>{values.gst && `₹ ${fCurrency(values.gst)}`}</Typography>
                    </TableCell>
                  </RowResultStyle>

                  <RowResultStyle>
                    <TableCell colSpan={3} />
                    <TableCell align="right">
                      <Typography variant="h6">Total</Typography>
                    </TableCell>
                    <TableCell align="right" width={140}>
                      <Typography variant="h6">{`₹ ${fCurrency(values.total)}`}</Typography>
                    </TableCell>
                  </RowResultStyle>
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>          
        </Box>


        <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{mb: 5, mr: 5}}>
          <LoadingButton
            type="submit"
            size="large"
            variant="contained"
            loading={isSubmitting}            
          >
            {isEdit ? 'Update' : 'Create'}
          </LoadingButton>
        </Stack>        
      </Card>      
    </FormProvider>
  );
}
