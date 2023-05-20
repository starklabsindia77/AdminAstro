import PropTypes from 'prop-types';
import { useState } from 'react';
import { sentenceCase } from 'change-case';
import moment from 'moment';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Card,
  Table,
  Button,
  Divider,
  Avatar,
  Typography,
  MenuItem,
  TableRow,
  TableBody,
  TableCell,
  CardHeader,
  TableContainer,
} from '@mui/material';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
// components
import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
import Scrollbar from '../../../../components/Scrollbar';
import { TableMoreMenu, TableHeadCustom } from '../../../../components/table';

// ----------------------------------------------------------------------

AppNewInvoice.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  tableData: PropTypes.array,
  tableLabels: PropTypes.array,
};

export default function AppNewInvoice({ title, subheader, tableData, tableLabels, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHeadCustom headLabel={tableLabels} />

            <TableBody>
              {tableData !== undefined && tableData.map((row, index) => (
                <AppNewInvoiceRow key={index} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button size="small" color="inherit" endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}>
          View All
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

AppNewInvoiceRow.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    avatarUrl: PropTypes.string,
    date: PropTypes.string,
    start_time: PropTypes.string,
    end_time: PropTypes.string,
    booking_status: PropTypes.string,
  }),
};

function AppNewInvoiceRow({ row}) {
  const theme = useTheme();
  

  return (
    <TableRow>

      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt={row.name} src={row.avatarUrl} sx={{ mr: 2 }} /> 
        <Typography variant="subtitle2" noWrap>
          {row.name}
        </Typography>
      </TableCell>
      

      <TableCell align="left"> 
        <Typography variant="subtitle2" noWrap>
          {moment(row.date).format('MMMM Do YYYY')}
        </Typography>
      </TableCell>

      <TableCell align="left"> 
        <Typography variant="subtitle2" noWrap>
          {row.start_time}
        </Typography>
      </TableCell>

      <TableCell align="left"> 
        <Typography variant="subtitle2" noWrap>
        {row.end_time}
        </Typography>
      </TableCell>

      <TableCell align="left"> 
        <Typography variant="subtitle2" noWrap>
          {row.booking_status}
        </Typography>
      </TableCell>
    </TableRow>
  );
}
