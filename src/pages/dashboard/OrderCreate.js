// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections


// ----------------------------------------------------------------------

export default function OrderCreate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Orders: Create a new order">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new order"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Orders', href: PATH_DASHBOARD.order.list },
            { name: 'New order' },
          ]}
        />

        {/* <OrderNewEditForm /> */}
      </Container>
    </Page>
  );
}
