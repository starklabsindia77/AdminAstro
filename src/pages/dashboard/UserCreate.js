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
import UserNewEditForm from '../../sections/@dashboard/user/UserNewEditForm';
import axios from '../../utils/axios';
import { isValidToken, setSession } from '../../utils/jwt';

// ----------------------------------------------------------------------

export default function UserCreate() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();

  const { name = '' } = useParams();
  const [ currentUser, setCurrentUser ] = useState({});

  const isEdit = pathname.includes('edit');
  useEffect(async () => {
    const accessToken = localStorage.getItem('accessToken');

        if (accessToken && isValidToken(accessToken) && isEdit) {
          setSession(accessToken);
          const response = await axios.get(`/user/${name}`); 
          const { user } = response.data;
          setCurrentUser(user);
        }
  }, [name])

  // const currentUser = _userList.find((user) => paramCase(user.name) === name);

  return (
    <Page title="User: Create a new user">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new user' : 'Edit user'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.list },
            { name: !isEdit ? 'New user' : capitalCase(name) },
          ]}
        />

        <UserNewEditForm isEdit={isEdit} currentUser={currentUser} />
      </Container>
    </Page>
  );
}
