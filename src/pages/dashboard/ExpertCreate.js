import { paramCase, capitalCase } from 'change-case';
import { useState, useEffect } from 'react';
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
import axios from '../../utils/axios';
import { isValidToken, setSession } from '../../utils/jwt';

// ----------------------------------------------------------------------

export default function ExpertCreate() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();

  const { name = '' } = useParams();

  const [ currentExpert, setCurrentExpert ] = useState({});

  const isEdit = pathname.includes('edit');
  useEffect(async () => {
    const accessToken = localStorage.getItem('accessToken');

        if (accessToken && isValidToken(accessToken) && isEdit) {
          setSession(accessToken);
          const response = await axios.get(`/expert/${name}`); 
          const { user } = response.data;
          setCurrentExpert(user);
        }
  }, [name])

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
