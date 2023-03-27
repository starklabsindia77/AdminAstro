// @mui
import { Container, Box } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
import { _expertCards } from '../../_mock';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import { ExpertCard } from '../../sections/@dashboard/expert/cards';

// ----------------------------------------------------------------------

export default function ExpertCards() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Expert: Cards">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Expert Cards"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Expert', href: PATH_DASHBOARD.expert.root },
            { name: 'Cards' },
          ]}
        />

        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {_expertCards.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </Box>
      </Container>
    </Page>
  );
}
