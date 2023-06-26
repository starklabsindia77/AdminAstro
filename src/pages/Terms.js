// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../components/Page';
import {  AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../sections/about';
import { TermsHero, TermsWhat } from '../sections/terms';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Terms() {
  return (
    <Page title="Terms and Condition">
      <RootStyle>
        <TermsHero />
        <TermsWhat />

        

        {/* <AboutWhat />

        <AboutVision />

        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />

        <AboutTeam />

        <AboutTestimonials /> */}
      </RootStyle>
    </Page>
  );
}