/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
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
import { _userList } from '../../_mock';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import SessionsNewEditForm from '../../sections/@dashboard/sessions/SessionsNewEditForm';
import axios from '../../utils/axios';
import { isValidToken, setSession } from '../../utils/jwt';

// ----------------------------------------------------------------------

export default function SessionsCreate() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();

  const { name = '' } = useParams();
  const [ currentUser, setCurrentUser ] = useState({});

  const isEdit = pathname.includes('edit');
//   useEffect(async () => {
//     const accessToken = localStorage.getItem('accessToken');

//         if (accessToken && isValidToken(accessToken) && isEdit) {
//           setSession(accessToken);
//           const response = await axios.get(`/user/${name}`); 
//           const { user } = response.data;
//           setCurrentUser(user);
//         }
//   }, [name])

  // const currentUser = _userList.find((sessions) => paramCase(sessions.name) === name);

  return (
    <Page title="Sessions: Create a new Sessions">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new sessions' : 'Edit sessions'}          
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Sessions', href: PATH_DASHBOARD.sessions.list },
            { name: !isEdit ? 'New sessions' : capitalCase(name) },
          ]}

        
       />

        <SessionsNewEditForm isEdit={isEdit} currentSessions={currentUser} />
      </Container>
    </Page>
  );
}
