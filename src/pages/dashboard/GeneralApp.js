/* eslint-disable react-hooks/exhaustive-deps */
// @mui
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { Container, Grid, Stack, Button } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// _mock_
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from '../../_mock';
// components
import Page from '../../components/Page';
import { isValidToken, setSession } from '../../utils/jwt';
import axios from '../../utils/axios';
// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
} from '../../sections/@dashboard/general/app';
// assets
import { SeoIllustration } from '../../assets';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();

  const theme = useTheme();

  const { themeStretch } = useSettings();
  const [dashboardData, setDashboardData] = useState({});

  useEffect(async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && isValidToken(accessToken)) {
      setSession(accessToken);
      const response = await axios.get('/dashboard');
      const { data } = response.data;
      // console.log('data', data);
      setDashboardData(data);
    }
  }, [user]);

  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
        {user.role === 'Admin' && (
          <Grid item xs={12} md={8}>
            <AppWelcome
              title={`Welcome back! \n ${user?.displayName}`}
              description="Wish you a great day !!"
              img={
                <SeoIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
              action={<Button variant="contained">Go Now</Button>}
            />
          </Grid>
          )}
           {user.role !== 'Admin' && (
          <Grid item xs={12} md={12}>
            <AppWelcome
              title={`Welcome back! \n ${user?.displayName}`}
              description="Wish you a great day !!"
              img={
                <SeoIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
              action={<Button variant="contained">Go Now</Button>}
            />
          </Grid>
          )}

          {/* <Grid item xs={12} md={4}>
            <AppFeatured list={_appFeatured} />
          </Grid> */}
          {user.role === 'Admin' && (
          <Grid item xs={12} md={4} lg={4}>
            <Stack spacing={3}>
              <AppWidget title="Total visits" total={38566} icon={'eva:person-fill'} chartData={78} />
              <AppWidget
                title="Total Appointments"
                total={dashboardData.TotalAppoinments}
                icon={'eva:email-fill'}
                color="warning"
                chartData={30}
              />
            </Stack>
          </Grid>
          )}

          
            {user.role === 'Admin' && (
              <Grid item xs={12} md={4}>
              <AppWidgetSummary
                title="Total Active Users"
                // percent={2.6}
                total={dashboardData.totalUser}
                chartColor={theme.palette.primary.main}
                chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
              />
            </Grid>
            )}

            {user.role !== 'Admin' && (
              <Grid item xs={12} md={6}>
                <AppWidgetSummary
                  title="Total Upcoming Appoinments"
                  // percent={2.6}
                  total={dashboardData.TotalUpcomingExpertAppoinments}
                  chartColor={theme.palette.primary.main}
                  chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
                />
              </Grid>
            )}

            {user.role !== 'Admin' && (
              <Grid item xs={12} md={6}>
                <AppWidgetSummary
                  title="Total Past Appoinments"
                  // percent={2.6}
                  total={dashboardData.TotalPastExpertAppoinments}
                  chartColor={theme.palette.primary.main}
                  chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
                />
              </Grid>
            )}
          

          
            {user.role === 'Admin' && (
              <Grid item xs={12} md={4}>
                <AppWidgetSummary
                  title="Total Experts"
                  percent={0.2}
                  total={dashboardData.totalExpert}
                  chartColor={theme.palette.chart.blue[0]}
                  chartData={[20, 41, 63, 33, 28, 35, 50, 46, 11, 26]}
                />
              </Grid>
            )}
            
          

          {user.role === 'Admin' && (
                <Grid item xs={12} md={4}>
                  <AppWidgetSummary
                    title="Total Income"
                    percent={-0.1}
                    total={dashboardData.totalincome}
                    chartColor={theme.palette.chart.red[0]}
                    chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
                  />
              </Grid>
              )}

          

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload
              title="Current Download"
              chartColors={[
                theme.palette.primary.lighter,
                theme.palette.primary.light,
                theme.palette.primary.main,
                theme.palette.primary.dark,
              ]}
              chartData={[
                { label: 'Mac', value: 12244 },
                { label: 'Window', value: 53345 },
                { label: 'iOS', value: 44313 },
                { label: 'Android', value: 78343 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppAreaInstalled
              title="Area Installed"
              subheader="(+43%) than last year"
              chartLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']}
              chartData={[
                {
                  year: '2019',
                  data: [
                    { name: 'Asia', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
                    { name: 'America', data: [10, 34, 13, 56, 77, 88, 99, 77, 45] },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    { name: 'Asia', data: [148, 91, 69, 62, 49, 51, 35, 41, 10] },
                    { name: 'America', data: [45, 77, 99, 88, 77, 56, 13, 34, 10] },
                  ],
                },
              ]}
            />
          </Grid> */}
          {user.role === 'Admin' && (
          <Grid item xs={12} lg={8}>
            <AppNewInvoice
              title="Latest Appoinments"
              // tableData={_appInvoices}
              tableData={dashboardData.lastFiveRecords}
              tableLabels={ [
                { id: 'name', label: 'Name', align: 'left' },
                { id: 'date', label: 'Date', align: 'left' },
                { id: 'startTime', label: 'Start Time', align: 'left' },
                { id: 'endTime', label: 'End Time', align: 'left' },
                { id: 'status', label: 'Status', align: 'left' },
              ]}
            />
          </Grid>)}
          {user.role !== 'Admin' && (
          <Grid item xs={12} lg={12}>
            <AppNewInvoice
              title="Latest Appoinments"
              // tableData={_appInvoices}
              tableData={dashboardData.lastFiveRecords}
              tableLabels={ [
                { id: 'name', label: 'Name', align: 'left' },
                { id: 'date', label: 'Date', align: 'left' },
                { id: 'startTime', label: 'Start Time', align: 'left' },
                { id: 'endTime', label: 'End Time', align: 'left' },
                { id: 'status', label: 'Status', align: 'left' },
              ]}
            />
          </Grid>)}
          {user.role === 'Admin' && (
          <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated title="Top Skills searched" list={_appRelated} />
          </Grid>)}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries title="Top Installed Countries" list={_appInstalled} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors title="Top Authors" list={_appAuthors} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
              <AppWidget title="Applications" total={55566} icon={'eva:email-fill'} color="warning" chartData={75} />
            </Stack>
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
