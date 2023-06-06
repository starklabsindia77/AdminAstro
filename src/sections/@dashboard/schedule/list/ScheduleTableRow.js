/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useState } from 'react';
import moment from 'moment';
// @mui
import { useTheme } from '@mui/material/styles';
import { Avatar, Checkbox, TableRow, TableCell, Typography, MenuItem } from '@mui/material';
// components
import useAuth from '../../../../hooks/useAuth';
import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
import { TableMoreMenu } from '../../../../components/table';



// ----------------------------------------------------------------------

ScheduleTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function ScheduleTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow }) {
  const theme = useTheme();
  const { user } = useAuth();
  // eslint-disable-next-line camelcase
  // const { name, date, start_time, end_time, booking_status, avatarUrl } = row;

  
  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox checked={selected} onClick={onSelectRow} />
      </TableCell>

      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar alt={row.name} src={row.avatarUrl} sx={{ mr: 2 }} /> 
        <Typography variant="subtitle2" noWrap>
          {row.name}
        </Typography>
      </TableCell>
      
      {user.role === 'Admin' && (
        <TableCell align="left">
          {/* <Avatar alt={row.displayName} src={row.photoURL} sx={{ mr: 2 }} />  */}
          <Typography variant="subtitle2" noWrap>
            {row.displayName}            
          </Typography>
        </TableCell>
      )}

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

      {/* <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
        {mobileNo}
      </TableCell> */}

      {/* <TableCell align="center">
        <Iconify
          icon={isVerified ? 'eva:checkmark-circle-fill' : 'eva:clock-outline'}
          sx={{
            width: 20,
            height: 20,
            color: 'success.main',
            ...(!isVerified && { color: 'warning.main' }),
          }}
        />
      </TableCell>

      <TableCell align="left">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={(status === 0 && 'error') || 'success'}
          sx={{ textTransform: 'capitalize' }}
        >
          {status === 1 ? 'Active' : 'Banned'}
        </Label>
      </TableCell> */}

      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onDeleteRow();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Delete
              </MenuItem>
              {/* <MenuItem
                onClick={() => {
                  onEditRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:edit-fill'} />
                Edit
              </MenuItem> */}
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}