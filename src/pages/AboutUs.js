// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// components
import Page from '../components/Page';
import { _mapContact } from '../_mock';

// sections
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeBlog,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
} from '../sections/home';

import {ContactHero,  ContactForm, ContactMap } from '../sections/contact';
import { AboutHero, AboutWhat, AboutTestimonials } from '../sections/about';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(11),
    },
  }));

// ----------------------------------------------------------------------

export default function AboutUs() {
  return (
    <Page title="About us">
        <RootStyle>
            <AboutHero />
            <AboutWhat />  
        </RootStyle>          
    </Page>
  );
}
