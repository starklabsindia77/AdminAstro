import { useParams } from 'react-router-dom';
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

// ----------------------------------------------------------------------

export default function OrderDetails() {
  const { themeStretch } = useSettings();

  const { id } = useParams();

  const order = _orders.find((order) => order.id === id);

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
            { name: `INV-${order?.orderNumber}` || '' },
          ]}
        />

        <Order order={order} />
      </Container>
    </Page>
  );
}
