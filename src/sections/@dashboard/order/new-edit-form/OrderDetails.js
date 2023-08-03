import PropTypes from 'prop-types';
// form
import { useFormContext } from 'react-hook-form';
import { styled, useTheme } from '@mui/material/styles';
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
import { fDate } from '../../../../utils/formatTime';
// utils
import { fNumber, fCurrency } from '../../../../utils/formatNumber';

import Label from '../../../../components/Label';
import Image from '../../../../components/Image';
import Scrollbar from '../../../../components/Scrollbar';
//
const RowResultStyle = styled(TableRow)(({ theme }) => ({
    '& td': {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  }));

// ----------------------------------------------------------------------

export default function OrderDetails() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const upMd = useResponsive('up', 'md');

  const values = watch();


  return (
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
  );
}

// ----------------------------------------------------------------------


