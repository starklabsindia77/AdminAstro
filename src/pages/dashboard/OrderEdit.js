import { useParams } from 'react-router-dom';
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

// ----------------------------------------------------------------------

export default function OrderEdit() {
  const { themeStretch } = useSettings();

  const { id } = useParams();

  const currentOrder = _orders.find((order) => order.id === id);

  return (
    <Page title="Orders: Edit">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Edit order"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Orders', href: PATH_DASHBOARD.order.list },
            { name: `INV-${currentOrder?.orderNumber}` || '' },
          ]}
        />

        <OrderNewEditForm isEdit currentOrder={currentOrder} />
      </Container>
    </Page>
  );
}
