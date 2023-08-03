import PropTypes from 'prop-types';
// form
import { useFormContext } from 'react-hook-form';
// @mui
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
// hooks
import useResponsive from '../../../../hooks/useResponsive';
import useToggle from '../../../../hooks/useToggle';
// _mock
import { _orderAddressFrom, _orderAddressTo } from '../../../../_mock';
// components
import Iconify from '../../../../components/Iconify';
//
import OrderAddressListDialog from './OrderAddressListDialog';

// ----------------------------------------------------------------------

export default function OrderAddress() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const upMd = useResponsive('up', 'md');

  const values = watch();

//   const { toggle: openFrom, onOpen: onOpenFrom, onClose: onCloseFrom } = useToggle();

//   const { toggle: openTo, onOpen: onOpenTo, onClose: onCloseTo } = useToggle();

//   const { orderFrom, orderTo } = values;

  return (
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
  );
}

// ----------------------------------------------------------------------


