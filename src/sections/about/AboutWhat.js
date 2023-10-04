import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { fPercent } from '../../utils/formatNumber';
// _mock_
import { _skills } from '../../_mock';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'left',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        {/* <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 10, md: 25 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">About Us</Typography>
          </m.div>
        </Box> */}
        <Grid container spacing={3}>

          {isDesktop && (
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 1"
                      // src="https://minimal-assets-api-dev.vercel.app/assets/images/about/what-1.jpg"
                      src="images/App_5.jpg"
                      // ratio="2/2"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow,
                      }}
                    />
                  </m.div>
                </Grid>
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 2"
                      src="images/App_1.jpg"
                      // ratio="3/4"
                     
                      sx={{ borderRadius: 2, height : "500px" }}
                    />
                  </m.div>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12} md={6} lg={5}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                What is AstroScore?
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  textAlign: 'justify',  textJustify: 'inter-word',
                }}
              >
                Welcome to "AstroScore", a unique platform designed to unlock the mysteries of 
                the universe and guide you on a journey of self-discovery. 
                Our mission is to offer you a deeper understanding of your life's purpose, potential, 
                and destiny using the wisdom of astrology.
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{paddingTop : 10}}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  textAlign: 'justify',  textJustify: 'inter-word',
                }}
              >
                "AstroScore" is more than just an astrology app. 
                It's your key to understanding the energies of the universe and how they're intertwined with your life. 
                We believe in the power of the cosmos to help shape our lives and guide our decisions. 
                Through personalized readings and insightful content, 
                we strive to empower you to make better decisions, improve your relationships, 
                and navigate life's challenges more successfully.
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{paddingTop : 10}}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                  textAlign: 'justify',  textJustify: 'inter-word',
                }}
              >
               Join us on this journey of cosmic exploration and self-discovery. 
               As you navigate the path of life, "AstroScore" will be right there with you, 
               providing celestial wisdom and guidance at every turn. 
               Whether you're an astrology novice or an astro-enthusiast, 
               we believe "AstroScore" has something unique to offer you.
              </Typography>
            </m.div>

            <Typography component="span" variant="h5" sx={{ color: 'primary.main', paddingTop : 20 }}>
            Discover your cosmic connections with "AstroScore". Embark on your astral journey today.
            </Typography>

            {/* <Box sx={{ my: 5 }}>
              {_skills.map((progress) => (
                <m.div key={progress.label} variants={varFade().inRight}>
                  <ProgressItem progress={progress} />
                </m.div>
              ))}
            </Box> */}

            {/* <m.div variants={varFade().inRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Iconify icon={'ic:round-arrow-right-alt'} width={24} height={24} />}
              >
                Check out our work
              </Button>
            </m.div> */}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' },
        }}
      />
    </Box>
  );
}
