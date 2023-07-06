// @mui
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// _mock_
import { _faqs } from '../../_mock';
// components
import Iconify from '../../components/Iconify';


const faq = [
  {
    heading: "What profiles Astroscore cater to?",
    detail: "It is a cosmological astrological source for people to help them out to get answers to specialised queries pertaining to their life such as love related, marriage, career, educations, partners, colleagues, seniors, friends, relatives and so on."
  },
  {
    heading: "What are the logic/background through which Astroscore predicts?",
    detail: "Our aim is to enrich those who are facing problems and give them better aspect of life and humanity using divine science of Cosmic astrology amalgamate through AI."
  },
  {
    heading: "Who are the Astrologers behind Astroscore?",
    detail: "'Keeping this all-espousal vision in mind, a renowned astrologer Pt Yatish Ji embarked Astroscore in year 2019 to put Cosmic Studies along with astrological wisdom to help of ailing mankind. He is an incisive and experienced astrologer himself and understands how different astrological systems through Cosmic science and Artificial Intelligence  etc which is embedded in the system which can be applied into different situations to get practically viable results."
  },
  {
    heading: "Who are the team associated with Astroscore?",
    detail: "The Astroscore team that works in his guidance consists of many expert astrologers pertaining to different schools of astrology and Cosmic Science. Also Astroscore has AI experts who has integrated the Astrology with modern science of IT to deliver the best with a click of button."
  },
  {
    heading: "Can Astroscore help with personal problems?",
    detail: "Absolutely! Astroscore provides astrological solutions for a wide array of personal problems, including relationships, finance, career, health, and more. Our astrologers interpret your cosmic patterns to offer guidance and solutions."
  },
  {
    heading: "What is the accuracy of Astroscore predictions?",
    detail: "Astroscore prides itself on the accuracy of its predictions. While astrology is a complex science and interpretations may vary, we consistently strive for precision by blending Cosmic science, Artificial Intelligence, and deep astrological knowledge."
  },
  {
    heading: "Can I get a personalised consultation from Astroscore?",
    detail: "Yes, Astroscore offers personalised consultations. You can connect with our expert astrologers for a one-on-one session and get answers to your specific queries."
  },
  {
    heading: "How is my data protected with Astroscore?",
    detail: "At Astroscore, we deeply value the privacy and security of our users. All personal data is stored securely and is only used for making astrological predictions. We do not share your data with any third parties without your consent."
  },
  {
    heading: "How can I get started with Astroscore?",
    detail: "Getting started with Astroscore is easy. Simply sign up on our platform, fill in your birth details and start receiving your personalised astrological predictions. You can also connect with our astrologers for detailed consultations."
  },
];
// ----------------------------------------------------------------------

export default function FaqsList() {
  return (
    <>
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
    </>
  );
}
