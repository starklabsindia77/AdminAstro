// @mui
import React, { useState, useEffect } from 'react';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Grid, Container, Modal, Box, Typography, Button, IconButton } from '@mui/material';

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

import { ContactHero, ContactForm, ContactMap } from '../sections/contact';
import { AboutWhat, AboutTestimonials } from '../sections/about';
import Image from '../components/Image';
import useResponsive from '../hooks/useResponsive';
// import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { CloseIcon } from '../theme/overrides/CustomIcons';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));





export default function HomePage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  useEffect(() => {
    setTimeout(() => {
      handleOpen();
    }, 1000);
  }, []);

  // ----------------------------------------------------------------------
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  // border: '2px solid #000',
  // boxShadow: 24,
  // borderRadius: '10%',
  p: 2,
  bgcolor: '#212b36',
};

  return (
    <Page title="AstroScore">
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-description" component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              alt="our office 1"
              src="images/Babapic.jpg"
              style={{
                borderRadius: '10%',
                boxShadow: shadow,
                maxWidth: '100%',
                marginBottom: '20px',

              }}
            />
            <p style={{ color: 'white', textAlign: 'center', marginTop: '10px' }}>
              यह "एस्ट्रोस्कोर" वेबसाइट एवं ऐप हमारे पूजनीय गुरुजी श्री भगवती प्रसाद शर्मा जी को समर्पित है, जिन्होंने मुझ जैसे हजारों लोगों का सच्चे अध्यात्म के लिए मार्गदर्शन किया और समाज के निरंतर और निस्वार्थ उत्थान के लिए नोएडा सेक्टर 126 में "श्री बालाजी धाम" की स्थापना की, जो कि बाबा हनुमान और अन्य कई शक्तियों का एक जीवंत और सिद्ध शक्ति पीठ है। जय श्री राम 🙏 जय हनुमान 🙏 जय गुरु जी 🙏
            </p>
          </Typography>
        </Box>
      </Modal>
    </Page>
  );
}
