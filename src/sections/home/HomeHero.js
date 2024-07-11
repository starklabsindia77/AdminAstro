import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';

import useResponsive from '../../hooks/useResponsive';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',  
  backgroundColor: '#2b302d',    
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'left',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 7,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({ 
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    top: 0,
    right: '5%',
    width: 'auto',
    height: '100vh',
  },
  [theme.breakpoints.up('sm')]: {
    top: '250px',    
    left: '50px',
    width: 'auto',
    height: '100vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {

  const mdUp = useResponsive('up', 'md');

  return (
    <MotionContainer>
      <RootStyle >
        <HeroOverlayStyle alt="overlay" src="/assets/overlay.svg" variants={varFade().inLeft} />
        {/* <HeroOverlayStyle alt="overlay" src="/images/bsimg.webp" variants={varFade().inLeft} /> */}

         
          <HeroImgStyle
            alt="hero"
            src='/assets/view.svg'
            
            variants={varFade().inUp}
          />
        

        <Container>
          <ContentStyle>
            <m.div variants={varFade().inRight} sx={{mt: 10}}>
              <Typography variant="h3" sx={{ color: 'common.white' }}>
                Cosmic Connections:<br />
                <Typography component="span" variant="h3" sx={{ color: 'primary.main' }}>
                  Embrace Your Stellar Potential
                </Typography>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography sx={{ color: 'common.white' }}>
              Unearth Your Astral Blueprint: Personalized Horoscopes, Zodiac Insights, and Spiritual Guidance from the Cosmos.
              </Typography>
            </m.div>           

            <Stack spacing={2.5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                  Available For
                </Typography>
              </m.div>

              <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'flex-start', md: 'flex-start' }}>
                  <m.img
                    key={"ios"}
                    variants={varFade().inRight}
                    src={`assets/icons/new/ios-logo-500.svg`}
                    height={50}
                  />
                  <m.img
                    key={"android"}
                    variants={varFade().inRight}
                    src={`assets/icons/new/play-store.svg`}
                    height={50}
                    
                  />
              </Stack>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
