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
import OrderNewEditStatusDate from './OrderNewEditStatusDate';
import OrderAddress from './OrderAddress';
import OrderDetails from './OrderDetails';


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
      status: currentOrder?.status || 'New Order',
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
      console.log(JSON.stringify(newOrder, null, 2));
      // await new Promise((resolve) => setTimeout(resolve, 500));
      // reset();
      // setLoadingSave(true);
      // navigate(PATH_DASHBOARD.order.list);
      // console.log(JSON.stringify(newOrder, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateAndSend = async () => {
    setLoadingSend(true);

    try {
      console.log(JSON.stringify(newOrder, null, 2));
      // await new Promise((resolve) => setTimeout(resolve, 500));
      // reset();
      // setLoadingSend(false);
      // navigate(PATH_DASHBOARD.invoice.list);
      // console.log(JSON.stringify(newInvoice, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} >
      <Card>
        <OrderAddress />     
        <OrderNewEditStatusDate />
        <OrderDetails />            
      </Card>
      <Stack justifyContent="flex-end" direction="row" spacing={2} sx={{ mt: 3 }}>
        <LoadingButton
          color="inherit"
          size="large"
          variant="contained"
          loading={loadingSave && isSubmitting}
          onClick={handleSubmit(handleSaveAsDraft)}
        >
          Save as Draft
        </LoadingButton>

        <LoadingButton
          size="large"
          variant="contained"
          loading={loadingSend && isSubmitting}
          onClick={handleSubmit(handleCreateAndSend)}
        >
          {isEdit ? 'Update' : 'Create'} & Send
        </LoadingButton>
      </Stack>      
    </FormProvider>
  );
}
