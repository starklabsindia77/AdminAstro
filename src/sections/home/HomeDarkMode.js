import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography, Accordion,  AccordionSummary, AccordionDetails  } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';
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

const faq = [
  {
    heading: "What profiles AstroScore cater to?",
    detail: "It is a cosmological astrological source for people to help them out to get answers to specialised queries pertaining to their life such as love related, marriage, career, educations, partners, colleagues, seniors, friends, relatives and so on."
  },
  {
    heading: "What are the logic/background through which AstroScore predicts?",
    detail: "Our aim is to enrich those who are facing problems and give them better aspect of life and humanity using divine science of Cosmic astrology amalgamate through AI."
  },
  {
    heading: "Who are the Astrologers behind AstroScore?",
    detail: "'Keeping this all-espousal vision in mind, a renowned astrologer Pt Yatish Ji embarked AstroScore in year 2019 to put Cosmic Studies along with astrological wisdom to help of ailing mankind. He is an incisive and experienced astrologer himself and understands how different astrological systems through Cosmic science and Artificial Intelligence  etc which is embedded in the system which can be applied into different situations to get practically viable results."
  },
  {
    heading: "Who are the team associated with AstroScore?",
    detail: "The AstroScore team that works in his guidance consists of many expert astrologers pertaining to different schools of astrology and Cosmic Science. Also AstroScore has AI experts who has integrated the Astrology with modern science of IT to deliver the best with a click of button."
  },
  {
    heading: "Can AstroScore help with personal problems?",
    detail: "Absolutely! AstroScore provides astrological solutions for a wide array of personal problems, including relationships, finance, career, health, and more. Our astrologers interpret your cosmic patterns to offer guidance and solutions."
  },
  {
    heading: "What is the accuracy of AstroScore predictions?",
    detail: "AstroScore prides itself on the accuracy of its predictions. While astrology is a complex science and interpretations may vary, we consistently strive for precision by blending Cosmic science, Artificial Intelligence, and deep astrological knowledge."
  },
  {
    heading: "Can I get a personalised consultation from AstroScore?",
    detail: "Yes, AstroScore offers personalised consultations. You can connect with our expert astrologers for a one-on-one session and get answers to your specific queries."
  },
  {
    heading: "How is my data protected with AstroScore?",
    detail: "At AstroScore, we deeply value the privacy and security of our users. All personal data is stored securely and is only used for making astrological predictions. We do not share your data with any third parties without your consent."
  },
  {
    heading: "How can I get started with AstroScore?",
    detail: "Getting started with AstroScore is easy. Simply sign up on our platform, fill in your birth details and start receiving your personalised astrological predictions. You can also connect with our astrologers for detailed consultations."
  },
];

// ----------------------------------------------------------------------

export default function HomeDarkMode() {
  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative' }}>
        <Image
          visibleByDefault
          disabledEffect
          alt="image shape"
          src="https://minimal-assets-api-dev.vercel.app/assets/images/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            width: 720,
            height: 720,
            opacity: 0.48,
            my: 'auto',
            position: 'absolute',
            display: { xs: 'none', md: 'block' },
          }}
        />



        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <ContentStyle>
              <m.div variants={varFade().inUp}>
                <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                  Demystifying the Stars: Your Comprehensive Guide to Understanding Astrology
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'primary.main' }}>
                  FAQ
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'common.white', mb: 5 }}>
                  Navigating the Cosmos: Answers to Your Most Frequent Astrological Queries
                </Typography>
              </m.div>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
            {faq.map((accordion) => (
              <Accordion key={accordion.id}>
                <AccordionSummary
                  expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
                >
                  <Typography variant="subtitle1">{accordion.heading}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{accordion.detail}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
