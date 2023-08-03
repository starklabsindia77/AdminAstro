import PropTypes from 'prop-types';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Grid,
  Table,
  Divider,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableContainer,
} from '@mui/material';
// utils
import { fDate } from '../../../../utils/formatTime';
import { fCurrency } from '../../../../utils/formatNumber';
// components
import Label from '../../../../components/Label';
import Image from '../../../../components/Image';
import Scrollbar from '../../../../components/Scrollbar';
//
import OrderToolbar from './OrderToolbar';

// ----------------------------------------------------------------------

const RowResultStyle = styled(TableRow)(({ theme }) => ({
  '& td': {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

// ----------------------------------------------------------------------

OrderDetails.propTypes = {
  order: PropTypes.object.isRequired,
};

export default function OrderDetails({ order }) {
  const theme = useTheme();

  if (!order) {
    return null;
  }

  const {
    gst,
    status,
    dueDate,    
    createDate,
    total
  } = order;

  console.log("single order shipping info", order);

  return (
    <>
      <OrderToolbar order={order} />

      <Card sx={{ pt: 5, px: 5 }}>
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Image disabledEffect visibleByDefault alt="logo" src="https://res.cloudinary.com/dsty70mlq/image/upload/v1691036413/astroscoreWhiteLogo_lx3pnk.jpg" sx={{ maxWidth: 250 }} />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Box sx={{ textAlign: { sm: 'right' } }}>
              <Label
                variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                color={
                  (status === 'Delivered' && 'success') ||
                  (status === 'In Transit' && 'warning') ||
                  (status === 'Cancelled' && 'error') ||
                  'default'
                }
                sx={{ textTransform: 'capitalize' }}
              >
                {status}
              </Label>

              <Typography variant="h6">{`INV-${order.order_id}`}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Order from
            </Typography>
            <Typography variant="body2">{order.shipping_info?.name}</Typography>
            <Typography variant="body2">{order.shipping_info?.address}, {order.shipping_info?.town}</Typography>
            <Typography variant="body2">{order.shipping_info?.city}, {order.shipping_info?.state} - {order.shipping_info?.pincode}</Typography>
            <Typography variant="body2">Phone: {order.shipping_info?.mobile_number}</Typography>
          </Grid>         

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              date create
            </Typography>
            <Typography variant="body2">{fDate(createDate)}</Typography>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ mb: 5 }}>
            <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
              Due date
            </Typography>
            <Typography variant="body2">{fDate(dueDate)}</Typography>
          </Grid>
        </Grid>

        <Scrollbar>
          <TableContainer sx={{ minWidth: 960 }}>
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
                {order.cart_info?.map((row, index) => (
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
                        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                          {row.title}
                        </Typography> */}
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
                    <Typography>{`₹ ${fCurrency(order.sub_total)}`}</Typography>
                  </TableCell>
                </RowResultStyle>

                <RowResultStyle>
                  <TableCell colSpan={3} />
                  <TableCell align="right">
                    <Typography>Shipping Fees</Typography>
                  </TableCell>
                  <TableCell align="right" width={120}>
                    <Typography >{order.shipping_fee && `₹ ${fCurrency(+order.shipping_fee)}`}</Typography>
                  </TableCell>
                </RowResultStyle>

                <RowResultStyle>
                  <TableCell colSpan={3} />
                  <TableCell align="right">
                    <Typography>Taxes</Typography>
                  </TableCell>
                  <TableCell align="right" width={120}>
                    <Typography>{gst && `₹ ${fCurrency(gst)}`}</Typography>
                  </TableCell>
                </RowResultStyle>

                <RowResultStyle>
                  <TableCell colSpan={3} />
                  <TableCell align="right">
                    <Typography variant="h6">Total</Typography>
                  </TableCell>
                  <TableCell align="right" width={140}>
                    <Typography variant="h6">{`₹ ${fCurrency(total)}`}</Typography>
                  </TableCell>
                </RowResultStyle>
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Divider sx={{ mt: 5 }} />

        <Grid container>
          <Grid item xs={12} md={9} sx={{ py: 3 }}>
            <Typography variant="subtitle2">NOTES</Typography>
            <Typography variant="body2">
              We appreciate your business. Should you need us to add VAT or extra notes let us know!
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} sx={{ py: 3, textAlign: 'right' }}>
            <Typography variant="subtitle2">Have a Question?</Typography>
            <Typography variant="body2">support@minimals.cc</Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
