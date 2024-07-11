import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';
import useResponsive from '../../hooks/useResponsive';
// _mock_
import { _faqs } from '../../_mock';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(28, 0),
  backgroundColor: theme.palette.grey[900],
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));


// ----------------------------------------------------------------------

export default function HomeTestMode() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadowvalue = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        {/* <Grid container spacing={5} direction="row" justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Image src={`images/Babapic.jpg`} alt={'guru ji'}  style={{
                borderRadius: '10%',
                maxWidth: '100%',
                marginBottom: '20px',

              }} /> 
          </Grid>

          <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
            <Typography style={{ color: 'white', textAlign: 'center', marginTop: '10px' }} >This "AstroScore" website and App are dedicated to our revered Guruji, Shri Bhagwati Prasad Sharma Ji, who has guided thousands like me towards true spirituality and established "Sri Balaji Dham" in Noida Sector 126 for the continual and selfless upliftment of society. This place is a living and proven power center of Baba Hanuman and several other deities.
              We invite you to explore this sacred space, embark on a journey of spiritual enlightenment, and witness the miracles unfolding in your life through the blessings of divine powers.
              Jai Shri Ram 🙏 Jai Hanuman 🙏 Jai Guru Ji 🙏
            </Typography>
          </Grid>
        </Grid> */}

        <Grid container spacing={3}>

          {isDesktop && (
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={12}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 1"
                      src="images/Babapic.jpg"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadowvalue,
                      }}
                    />
                  </m.div>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12} md={6} lg={5}>
            {/* <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                What is AstroScore?
              </Typography>
            </m.div> */}

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  textAlign: 'justify', textJustify: 'inter-word',
                }}
              >
               This "AstroScore" website and App are dedicated to our revered Guruji, Shri Bhagwati Prasad Sharma Ji, who has guided thousands like me towards true spirituality and established "Sri Balaji Dham" in Noida Sector 126 for the continual and selfless upliftment of society. This place is a living and proven power center of Baba Hanuman and several other deities.
              We invite you to explore this sacred space, embark on a journey of spiritual enlightenment, and witness the miracles unfolding in your life through the blessings of divine powers.
              Jai Shri Ram 🙏 Jai Hanuman 🙏 Jai Guru Ji 🙏
              </Typography>
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
