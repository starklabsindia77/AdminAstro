/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { paramCase } from 'change-case';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import {
  Box,
  Tab,
  Tabs,
  Card,
  Table,
  Switch,
  Button,
  Tooltip,
  Divider,
  TableBody,
  Container,
  IconButton,
  TableContainer,
  TablePagination,
  FormControlLabel,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useTabs from '../../hooks/useTabs';
import useSettings from '../../hooks/useSettings';
import useTable, { getComparator, emptyRows } from '../../hooks/useTable';
// _mock_
import { _userList } from '../../_mock';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { TableEmptyRows, TableHeadCustom, TableNoData, TableSelectedActions } from '../../components/table';
// sections
import { SessionsTableToolbar, SessionsTableRow } from '../../sections/@dashboard/sessions/list';
import axios from '../../utils/axios';
import useAuth from '../../hooks/useAuth';
import { isValidToken, setSession } from '../../utils/jwt';

// ----------------------------------------------------------------------


  const STATUS_OPTIONS = ['all', 'active', 'banned'];

  const ROLE_OPTIONS = [
    'all',
    'ux designer',
    'full stack designer',
    'backend developer',
    'project manager',
    'leader',
    'ui designer',
    'ui/ux designer',
    'front end developer',
    'full stack developer',
  ];

  

// ----------------------------------------------------------------------

export default function Sessions() {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();

  const { themeStretch } = useSettings();

  const navigate = useNavigate();

  const { user } = useAuth();

  const [tableData, setTableData] = useState([]);

  const [TABLE_HEAD, setTABLEHEAD] = useState([]);
  
  // const TABLE_HEAD = [
  //   { id: 'StartDate', label: 'Start Date', align: 'left' },
  //   { id: 'EndDate', label: 'End Date', align: 'left' },
  //   // { id: 'phone', label: 'Phone', align: 'left' },
  //   // { id: 'isVerified', label: 'Verified', align: 'center' },
  //   // { id: 'status', label: 'Status', align: 'left' },
  //   { id: '' },
  // ];

  useEffect(async () => {
    if(user.role !== 'Admin'){
      setTABLEHEAD(
        [         
          { id: 'StartDate', label: 'Start Date', align: 'left' },
          { id: 'EndDate', label: 'End Date', align: 'left' },
          { id: '' },
        ]
      )
    }else{
      setTABLEHEAD(
        [
          { id: 'Name', label: 'Name', align: 'left' },
          { id: 'StartDate', label: 'Start Date', align: 'left' },
          { id: 'EndDate', label: 'End Date', align: 'left' },
          { id: '' },
        ]
      )
    }
    
    const accessToken = localStorage.getItem('accessToken');
        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          const response = await axios.get('/sessions');
          const { data } = response.data;
          console.log("data", data);
          setTableData(data);
        }
  }, [user])
  

  const [filterName, setFilterName] = useState('');

  const [filterRole, setFilterRole] = useState('all');

  const { currentTab: filterStatus, onChangeTab: onChangeFilterStatus } = useTabs('all');

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleFilterRole = (event) => {
    setFilterRole(event.target.value);
  };

  const handleDeleteRow = async(id) => {
    const deleteRow = tableData?.filter((row) => row.id !== id);
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && isValidToken(accessToken)) {
      setSession(accessToken);
      const response = await axios.delete(`/sessions/${id}`);
      console.log("delete", response);
      const { data } = response.data;
      // setTableData(user);
    }
    setSelected([]);
    setTableData(deleteRow);
  };

  const handleDeleteRows = (selected) => {
    const deleteRows = tableData?.filter((row) => !selected.includes(row.id));
    setSelected([]);
    setTableData(deleteRows);
  };

  const handleEditRow = (id) => {
    navigate(PATH_DASHBOARD.user.edit(id));
  };

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
    filterRole,
    filterStatus,
  });

  const denseHeight = dense ? 52 : 72;

  const isNotFound =
    (!dataFiltered?.length && !!filterName) ||
    (!dataFiltered?.length && !!filterRole) ||
    (!dataFiltered?.length && !!filterStatus);

  return (
    <Page title="Sessions: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Sessions List"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Sessions', href: PATH_DASHBOARD.sessions.root },
            { name: 'List' },
          ]}
          action={
            <Button
              variant="contained"
              component={RouterLink}
              to={PATH_DASHBOARD.sessions.new}
              startIcon={<Iconify icon={'eva:plus-fill'} />}
            >
              New Sessions
            </Button>
          }
        />

        <Card>
          {/* <Tabs
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            value={filterStatus}
            onChange={onChangeFilterStatus}
            sx={{ px: 2, bgcolor: 'background.neutral' }}
          >
            {STATUS_OPTIONS.map((tab) => (
              <Tab disableRipple key={tab} label={tab} value={tab} />
            ))}
          </Tabs>

          <Divider /> */}

          <SessionsTableToolbar
            filterName={filterName}
            filterRole={filterRole}
            onFilterName={handleFilterName}
            onFilterRole={handleFilterRole}
            optionsRole={ROLE_OPTIONS}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
              {selected.length > 0 && (
                <TableSelectedActions
                  dense={dense}
                  numSelected={selected.length}
                  rowCount={tableData?.length}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData?.map((row) => row.id)
                    )
                  }
                  actions={
                    <Tooltip title="Delete">
                      <IconButton color="primary" onClick={() => handleDeleteRows(selected)}>
                        <Iconify icon={'eva:trash-2-outline'} />
                      </IconButton>
                    </Tooltip>
                  }
                />
              )}

              <Table size={dense ? 'small' : 'medium'}>
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData?.length}
                  numSelected={selected.length}
                  onSort={onSort}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData?.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <SessionsTableRow
                      key={row.id}
                      row={row}
                      selected={selected.includes(row.id)}
                      onSelectRow={() => onSelectRow(row.id)}
                      onDeleteRow={() => handleDeleteRow(row.id)}
                      onEditRow={() => handleEditRow(row.id)}
                    />
                  ))}

                  <TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, tableData?.length)} />

                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <Box sx={{ position: 'relative' }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={dataFiltered?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeRowsPerPage}
            />

            <FormControlLabel
              control={<Switch checked={dense} onChange={onChangeDense} />}
              label="Dense"
              sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
            />
          </Box> 
        </Card>
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------


function applySortFilter({ tableData, comparator, filterName, filterStatus, filterRole }) {
  const stabilizedThis = tableData?.map((el, index) => [el, index]);

  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis?.map((el) => el[0]);

  if (filterName) {
    tableData = tableData?.filter((item) => item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);
  }

  // if (filterStatus !== 'all') {
  //   tableData = tableData?.filter((item) => item.status === filterStatus);
  // }
  if (filterStatus === 'active') {
    tableData = tableData?.filter((item) => item.status === 1);
  }
  if (filterStatus === 'banned') {
    tableData = tableData?.filter((item) => item.status === 0);
  }

  if (filterRole !== 'all') {
    tableData = tableData?.filter((item) => item.role === filterRole);
  }

  return tableData;
}