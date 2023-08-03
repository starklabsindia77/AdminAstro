import { useParams } from 'react-router-dom';
import { useState, useLayoutEffect, useEffect  } from 'react';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
import { _orders } from '../../_mock';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import OrderNewEditForm from '../../sections/@dashboard/order/new-edit-form';
import axios from '../../utils/axios';
import { isValidToken, setSession } from '../../utils/jwt';

// ----------------------------------------------------------------------

export default function OrderEdit() {
  const { themeStretch } = useSettings();

  const { id } = useParams();

  // const currentOrder = _orders.find((order) => order.id === id);
  const [order, setOrder] = useState({});

  const accessToken = localStorage.getItem('accessToken');
  useEffect(async () => {    
    if (accessToken && isValidToken(accessToken)) {
      setSession(accessToken);
      const response = await axios.get(`/orders/${id}`);
      const { data } = response.data;
      setOrder(data[0]);
    }
  }, [accessToken]);

  return (
    <Page title="Orders: Edit">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Edit order"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Orders', href: PATH_DASHBOARD.order.list },
            { name: `INV-${order?.order_id}` || '' },
          ]}
        />

        <OrderNewEditForm isEdit currentOrder={order} />
      </Container>
    </Page>
  );
}
