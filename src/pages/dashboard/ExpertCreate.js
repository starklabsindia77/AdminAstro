import { paramCase, capitalCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
import { _expertList } from '../../_mock';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import ExpertNewEditForm from '../../sections/@dashboard/expert/ExpertNewEditForm';

// ----------------------------------------------------------------------

export default function ExpertCreate() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();

  const { name = '' } = useParams();

  const isEdit = pathname.includes('edit');

  const currentExpert = _expertList.find((expert) => paramCase(expert.name) === name);

  return (
    <Page title="Expert: Create a new expert">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new expert' : 'Edit expert'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Expert', href: PATH_DASHBOARD.expert.list },
            { name: !isEdit ? 'New expert' : capitalCase(name) },
          ]}
        />

        <ExpertNewEditForm isEdit={isEdit} currentExpert={currentExpert} />
      </Container>
    </Page>
  );
}
