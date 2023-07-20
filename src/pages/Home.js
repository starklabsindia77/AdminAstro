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
import { AboutWhat, AboutTestimonials } from '../sections/about';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Astro Score">
      <div id="home">
        <HomeHero />
      </div>

      <ContentStyle>
        <div id="howitworks">
          <HomeMinimal />
        </div>


        
        <div id="aboutus">
          <AboutWhat />
        </div>

        <div id="darkmode">
          <HomeDarkMode />
        </div>

        
        <div id="blog">
          <HomeBlog />
        </div>

        <div id="contact">
          <ContactHero />
        </div>
        <Container sx={{ my: 10 }}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>

            <Grid item xs={12} md={6}>
              <ContactMap contacts={_mapContact} />
            </Grid>
          </Grid>
        </Container>

        
      </ContentStyle>
    </Page>
  );
}
