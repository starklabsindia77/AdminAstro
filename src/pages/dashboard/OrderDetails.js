import { useParams } from 'react-router-dom';
import { useState, useLayoutEffect, useEffect  } from 'react';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock_
import { _orders } from '../../_mock';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
// import Order from '../../sections/@dashboard/order/details';
import Order from  '../../sections/@dashboard/order/details'
import axios from '../../utils/axios';
import { isValidToken, setSession } from '../../utils/jwt';

// ----------------------------------------------------------------------

export default function OrderDetails() {
  const { themeStretch } = useSettings();

  const { id } = useParams();

  // const order = _orders.find((order) => order.id === id);
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
    <Page title="Order: View">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Order Details"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'Orders',
              href: PATH_DASHBOARD.order.root,
            },
            { name: `INV-${order?.order_id}` || '' },
          ]}
        />

        <Order order={order} />
      </Container>
    </Page>
  );
}
