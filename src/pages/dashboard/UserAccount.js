/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { capitalCase } from 'change-case';
import { useState, useLayoutEffect, useEffect } from 'react';
// @mui
import { Container, Tab, Box, Tabs } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useTabs from '../../hooks/useTabs';
import useSettings from '../../hooks/useSettings';
// _mock_
import { _userPayment, _userAddressBook, _userInvoices, _userAbout } from '../../_mock';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import {
  AccountGeneral,
  AccountBilling,
  AccountSocialLinks,
  AccountNotifications,
  AccountChangePassword,
} from '../../sections/@dashboard/user/account';

import { isValidToken, setSession } from '../../utils/jwt';
import useAuth from '../../hooks/useAuth';
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

export default function UserAccount() {
  const { themeStretch } = useSettings();

  const { user } = useAuth();

  const [ currentExpert, setCurrentExpert ] = useState({});

  useEffect(async () => {
    const accessToken = localStorage.getItem('accessToken');
    console.log("test Effect",user)
    if (accessToken && isValidToken(accessToken) && user.role !== 'Admin') {
      setSession(accessToken);
      const response = await axios.get(`/expert/${user.id}`);
      console.log("res1", response);
      setCurrentExpert(response.data.user);
    }
  }, [user.id])

  // const currentExpert = async () => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   console.log("test Effect",user)
  //   if (accessToken && isValidToken(accessToken) && user.role !== 'Admin') {
  //     // console.log("test Effect 12",accessToken);
  //     setSession(accessToken);
  //     const response = await axios.get(`/expert/${user.id}`);
  //     console.log("test Effect 3");
  //     // const { user } = response.data;
  //     console.log("res1", response);
  //     // console.log("res", user);
  //     return response.data.user;
  //   }
  // }

  const { currentTab, onChangeTab } = useTabs('general');

  const ACCOUNT_TABS = [
    {
      value: 'general',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <AccountGeneral user={user.role === 'Admin' ? user : currentExpert} />,
    },
    // {
    //   value: 'billing',
    //   icon: <Iconify icon={'ic:round-receipt'} width={20} height={20} />,
    //   component: <AccountBilling cards={_userPayment} addressBook={_userAddressBook} invoices={_userInvoices} />,
    // },
    // {
    //   value: 'notifications',
    //   icon: <Iconify icon={'eva:bell-fill'} width={20} height={20} />,
    //   component: <AccountNotifications />,
    // },
    // {
    //   value: 'social_links',
    //   icon: <Iconify icon={'eva:share-fill'} width={20} height={20} />,
    //   component: <AccountSocialLinks myProfile={_userAbout} />,
    // },
    {
      value: 'change_password',
      icon: <Iconify icon={'ic:round-vpn-key'} width={20} height={20} />,
      component: <AccountChangePassword />,
    },
  ];

  return (
    <Page title="User: Account Settings">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Account"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.root },
            { name: 'Account Settings' },
          ]}
        />

        <Tabs
          allowScrollButtonsMobile
          variant="scrollable"
          scrollButtons="auto"
          value={currentTab}
          onChange={onChangeTab}
        >
          {ACCOUNT_TABS.map((tab) => (
            <Tab disableRipple key={tab.value} label={capitalCase(tab.value)} icon={tab.icon} value={tab.value} />
          ))}
        </Tabs>

        <Box sx={{ mb: 5 }} />

        {ACCOUNT_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
