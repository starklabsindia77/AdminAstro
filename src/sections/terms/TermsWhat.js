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
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function TermsWhat() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  return (
    <RootStyle>
      <Container component={MotionViewport}>

        <Grid container >



          <Grid item xs={12} md={12} lg={12}>
            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                These terms and conditions of Use (hereinafter referred as “Terms of Usage”) describe and govern the User’s use of the content and services offered by ASTROSCORE PVT. LTD. SERVICES through www.astroscore.ai (hereinafter referred as “We” “Astroscore” “us” “our” “Astroscore application” “Website”).
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                UPDATION
                <br /><br />
                The Website may update/amend/modify these Terms of Usage from time to time. The User is responsible to check the Terms of Usage periodically to remain in compliance with these terms.
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                USER CONSENT <br /> <br />
                By accessing the Website and using it, you (“Member”, “You”, “Your”) indicate that you understand the terms and unconditionally & expressly consent to the Terms of Usage of this Website. If you do not agree with the Terms of Usage, please do not click on the “I AGREE” button. The User is advised to read the Terms of Usage carefully before using or registering on the Website or accessing any material, information or services through the Website. Your use and continued usage of the Website (irrespective of the amendments made from time to time) shall signify your acceptance of the terms of usage and your agreement to be legally bound by the same.
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                GENERAL DESCRIPTION
                <br /><br />

                The Website is an internet-based portal having its existence on World Wide Web, Application and other electronic medium and provides astrological content, reports, data, telephone, video and email consultations (hereinafter referred as “Content”). The Website is offering “Free Services” and “Paid Services” (Collectively referred as “Services”). Free Services are easily accessible without becoming a member however for accessing the personalised astrological services and/or receive additional Content and get access to Paid Services, You are required to register as a member on the portal. By registering for Paid Services, a Member agrees to:

                To provide current, complete, and accurate information about himself as prompted to do so by the Website.
                To maintain and update the above information as required and submitted by you with the view to maintain the accuracy of the information being current and complete.

              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                REGISTRATION AND ELIGIBILITY

                <br /><br />
                The User of the Website must be a person who can form legally binding contracts under Indian Contract Act, 1872. A minor under the age of eighteen (18) in most jurisdiction, are not permitted to avail the services provided on the Website without a legal guardian in accordance with the applicable laws. The Website would not be held responsible for any misuse that may occur by virtue of any person including a minor using the services provided through the Website.
                For the User to avail the services, the User will be directed to Register as a Member on the Website whereby You (User) agree to provide update, current and accurate information while filling up the sign-in form. All information that you fill and provide to the Website and all updates thereto are referred to in these Terms of Usage as “Registration Data“.
                An account could be created by you through the Website ID (Your Phone Number) and password (OTP) or other log - in ID and password which can include a facebook, gmail or any other valid email ID. The User while creating an account hereby represents and warrants that all the information provided by the User is current, accurate and complete and that the User will maintain the accuracy and keep the information updated from time to time. Use of another User’s account information for availing the services is expressly prohibited. If in case it is found that the information so supplied on the Website is inaccurate, incomplete, untrue and not current, the Website has the right to suspend or terminate the User’s account and restrict/refuse the use of the Website by such User in future.
                The right to use this Website is personal to the User and is not transferable to any other person or entity. The User would be responsible for protecting the confidentiality of User’s passwords and other information required for the purposes of registration. The User would be fully responsible for all the activities that occur under the User’s account with the Website. The Website cannot and will not be liable for any loss or damage arising from the User’s failure to maintain secrecy and confidentiality. The User shall notify the Website immediately if they become aware of any unauthorized use of their Account(s) or breach of any security. The User must log out from its account at the end of the session.
                The User while availing any service shall be informed whether the service so rendered is personal to the Website or is available from a Third party. The Website shall have no control or monitoring on the information disseminated to any third party via the Website.
                The User agrees, understands and confirms that his/ her personal data including without limitation to details relating to debit card/ credit card transmitted over the Internet may be susceptible to misuse, hacking, theft and/ or fraud and that the Website or the Payment Service Provider(s) have no control over such matters.
                The Website does not permit the use of the Services by any User under the following conditions: -
                If the User is a resident of any jurisdiction that may prohibit the use of the Services rendered by the Website.
                If the User is a resident of any State/Country that prohibits by way of law, regulation, treaty or administrative act for entering into trade relations or/and
                Due to any religious practices.
                If the User has created multiple accounts using various mobile numbers. The User may not have more than one active account with the Website.

              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                FEATURE “CALL WITH ASTROLOGER”


                <br /><br />
                The Website is providing certain service which is available through the medium of telecommunication with the Astrologer listed and enrolled with the Website. By agreeing to the present Terms of Usage, you are also giving your unconditional consent to the Website to arrange a call with you on your mobile number even though your number is on DND service provided by your mobile service provider.
                WEBSITE CONTENT

                The Website and any individual Websites which may be available through external hyperlinks with the Website are private property.
                All interaction on this Website inclusive of the guidance and advice received directly from the Licensed Provider must comply with these Terms of Usage.
                The User shall not post or transmit through this Website any material which violates or infringes in any way upon the rights of others, or any material which is unlawful, abusive, defamatory, invasive of privacy, vulgar, obscene, profane or otherwise objectionable, which encourages conduct that would constitute a criminal offence, give rise to civil liability or otherwise violate any law.
                The Website shall have a right to suspend or terminate access by such User or terminate the User’s registration and such User shall not gain access to the Website.
                The Website reserves the right to terminate the access or to change or discontinue any aspect or feature of the Website including, but not limited to, content, graphics, deals, offers, settings, etc.
                Any information other the guidance and advice, received directly from the Third-Party Service Provider, the educational, graphics, research sources and other incidental information on the Site, the content, should not be considered as medical advice.
                The Website does not take guarantee regarding the medical advice, if provided, by the third-party service provider inclusive of registered astrologers with the site. The User should always talk to an appropriately qualified health care professional for diagnosis and treatment including information regarding which medications or treatment may be appropriate for the User. None of the Content represents or warrants that any particular medication or treatment is safe, appropriate, or effective for you. Astroscore does not endorse any specific tests, medications, products or procedures.
                The Website does not take guarantee of any untoward incident that may happen with the User after seeking the Service. The Website or the Service Provider providing the advice is not liable and does not guarantee any results as expected by the User and accessing the Website in such scenario is purely at the risk of the User.
                By using the Site, Application or Services, User hereby agrees that any legal remedy or liability that you seek to obtain for actions or omissions of other Members inclusive of the service provider registered with the Website or other third parties linked with the Website, shall be limited to claim against such particular party who may have caused any harm. You agree not to attempt to impose liability on or seek any legal remedy from the Website with respect to such actions or omissions.


              </Typography>
            </m.div>

            {/* <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                USER ACCOUNT ACCESS
                <br /><br />
                The Website shall have access to the account and the information created by the User for ensuring and maintaining the high-quality services provided by the Website and for addressing the need of the customer in the most effective manner. User hereby consents for the unconditional access of the account by the Website, its employees, agents and other appointed person in such regard. For the purpose of addressing the complaints (if any received) and any suspected abuse reported, the Website shall investigate on case-to-case basis from the records available. The User is directed to read the terms provided in the Privacy Policy as regards such records.


              </Typography>
            </m.div> */}


            {/* <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >

                BANK ACCOUNT INFORMATION
                <br /><br />
                The User is under an obligation to provide his banking information as and when required. For that purpose, the obligation of the User are:-

                The User agrees that the debit/credit card details provided by him/ her for use of the aforesaid Service(s) must be correct and accurate and that the User shall not use a debit/ credit card, that is not lawfully owned by him/ her or the use of which is not authorized by the lawful owner thereof. The User further agrees and undertakes to provide correct and valid debit/credit card details.
                The User may pay the fees required, to the Website by using a debit/credit card or through online banking account. The User warrants, agrees and confirms that when he/ she initiates a payment transaction and/or issues an online payment instruction and provides his/ her card / bank details:
                The User is fully and lawfully entitled to use such credit / debit card, bank account for such transactions;
                The User is responsible to ensure that the card/ bank account details provided by him/ her are accurate;
                The User is responsible to ensure sufficient credit is available on the nominated card/ bank account at the time of making the payment to permit the payment of the dues payable or the bill(s) selected by the User inclusive of the applicable Fee.

                The User further agrees that if any part of these Terms of Usage are determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth herein, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of these Terms of Usage shall continue in effect.
                
                

              </Typography>
            </m.div> */}

            <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >               
                
                DISCLAIMER / LIMITATION OF LIABILITY / WARRANTY
                <br /><br />
                The User expressly understands and agree that, to the maximum extent permitted by applicable law, the Website does not provide warranties for the service. Astrological counselling provided through the Website is based on cumulative or individual knowledge, experience and interpretations of astrologers and as such, it may vary from one astrologer to another.

                The Website is offering services through a diverse panel of Astrologers duly verified by the Website and such Service Provider (Astrologer) may from time to time make recommendations of using mantras, jantras, gemstones or other astrological remedies to be used by User. Such recommendations are being made in good faith by the astrologers and the Website and its subsidiaries, affiliates, officers, employees, agents, partners, and licensors make no warranty that:
                the service will meet your requirements
                the service will be uninterrupted, timely, secure or error - free
                the results that may be obtained from the use of the service will be accurate or reliable
                the quality of any products, services, information or other material purchased or obtained by you through the service will meet your expectations and
                any errors in the software will be corrected. You are required to make full disclosure about the emotional, mental and physical state of the person seeking advice from the panel of astrologers of Website so that the astrologers make an informed judgment about giving advice.
                The Website, services and other materials are provided by the Website on an "as is" basis without warranty of any kind, express, implied, statutory or otherwise, including the implied warranties of title, non-infringement, merchantability or fitness for a particular purpose. without limiting the foregoing, the Website makes no warranty that (i) the Website or the services will meet your requirements or your use of the Website or the services will be uninterrupted, timely, secure or error-free; (ii) the results that may be obtained from the use of the Website, services or materials will be effective, accurate or reliable; (iii) the quality of the Website, services or other materials will meet your expectations; or that (iv) any errors or defects in the Website, services or other materials will be corrected. no advice or information, whether oral or written, obtained by the User from the Website or through or from use of the services shall create any warranty not expressly stated in the terms of use.
                To the maximum extent permitted by applicable law, the Website will have no liability related to User content arising under intellectual property rights, libel, privacy, publicity, obscenity or other laws. The Website also disclaims all liability with respect to the misuse, loss, modification or unavailability of any User content.
                The Website will not be liable for any loss that the User may incur as a consequence of unauthorized use of their account or account information in connection with the Website or any services or materials, either with or without the User’s knowledge. The Website has endeavored to ensure that all the information on the Website is correct, but the Website neither warrants nor makes any representations regarding the quality, accuracy or completeness of any data, information, product or service. The Website shall not be responsible for the delay or inability to use the Website or related functionalities, the provision of or failure to provide functionalities, or for any information, software, products, functionalities and related graphics obtained through the Website, or otherwise arising out of the use of the Website, whether based on contract, tort, negligence, strict liability or otherwise. further, the Website shall not be held responsible for non-availability of the Website during periodic maintenance operations or any unplanned suspension of access to the Website that may occur due to technical reasons or for any reason beyond the Website's control.
                The User understands and agrees that any material or data downloaded or otherwise obtained through the Website is done entirely at their own discretion and risk and they will be solely responsible for any damage to their computer systems or loss of data that results from the download of such material or data. The Website is not responsible for any typographical error leading to an invalid coupon. The Website accepts no liability for any errors or omissions, with respect to any information provided to you whether on behalf of itself or third parties.
                The Services provided by the Website are for entertainment purposes only and the Website on behalf of itself and its suppliers, disclaims all warranties of any kind, express or implied, including without limitation any warranty of merchantability, fitness for a particular purpose, title, non-infringement and it makes no warranty or representation regarding the results that may be obtained from the use of content or services, the accuracy or reliability of any content obtained through the Services, any goods or services purchased or obtained through the Website, and makes no warranty that the services will meet your requirements, be uninterrupted, timely, secure or error-free. No advice or information, whether oral or written, obtained by you from the Website shall create any warranty.
                The services may consist of the following, without limitation: Astrological content, Reports, Tarot readings, fortunes, numerology, predictions, live telephone consultations, email consultations or products sold through Astroscore Shop. Astroscore charges for the chat/call service offered on this platform on per minute basis and holds no responsibility or liability about the reality or reliability of the astrological effects on the human physiology, by the gems, any other products or services represented and sold on the website. No advice or information, whether oral or written, obtained by you shall create any warranty.
                The advisors/consultants/astrologers are also members of the site and not employees of the Website or the company. However, the Website verifies the degrees, qualifications, credentials, and background of the advisors/consultants/astrologers but does not refer, endorse, recommend, verify, evaluate or guarantee any advice, information or other services provided by the advisors/consultants/astrologers or by the company, nor does it warrant the validity, accuracy, completeness, safety, legality, quality, or applicability of the content, anything said or written by, or any advice provided by the advisors/consultants/astrologers.
                The website is not a suicide helpline platform. If you are considering or contemplating suicide or feel that you are a danger to yourself or to others, you may discontinue use of the services immediately at your discretion and please notify appropriate police or emergency medical personnel. If you are thinking about suicide, immediately call a suicide prevention helpline such as AASRA (91-22-27546669).
                The Website shall not be liable for any inaccuracy, error or delay in, or omission of (a) any data, information or message, or (b) the transmission or delivery of any such data, information or message; or (c) any loss or damage arising from or occasioned by any such inaccuracy, error, delay or omission, non-performance or interruption in any such data, information or message. Under no circumstances shall the Website and/or the payment service providers, its employees, directors, and its third party agents involved in processing, delivering or managing the services, be liable for any direct, indirect, incidental, special or consequential damages, or any damages whatsoever, including punitive or exemplary arising out of or in any way connected with the provision of or any inadequacy or deficiency in the provision of the services or resulting from unauthorized access or alteration of transmissions of data or arising from suspension or termination of the services.

                Notwithstanding anything to the contrary contained herein, Astroscore liability to you for any cause whatsoever, and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to the Website, for the service during the term of membership.
                
              </Typography>
            </m.div>

            {/* <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >               
                INDEMNIFICATION
                <br /><br />
                The User shall indemnify, defend and hold harmless the Website and its parent, subsidiaries, affiliates, officers, directors, employees, suppliers, consultants and agents from any and all third party claims, liability, damages and/or costs (including, but not limited to, attorney’s fees) arising from Your use of the Services, Your violation of the Privacy Policy or these Terms of Service, or Your violation of any third party's rights, including without limitation, infringement by You or any other user of Your account of any intellectual property or other right of any person or entity. These Terms of Service will inure to the benefit of Website’s successors, assigns, and licensees.
                

              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >               
               
                PROPRIETARY RIGHTS TO CONTENT
                <br /><br />

                The User acknowledges that the Content, including but not limited to text, software, music, sound, photographs, video, graphics or other material contained in sponsor advertisements or distributed via email, commercially produced information presented to Member by the Website, its suppliers, and/or advertisers, is protected by copyrights, trademarks, service marks, patents and/or other proprietary rights and laws. The User is not permitted to copy, use, reproduce, distribute, perform, display, or create derivative works from the Content unless expressly authorized by the Website, its suppliers, or advertisers. Moreover, the content such as images, text, designs, etc on all of the portals of the Website are taken from various online portals such as Google Images. Astroscore or Codeyeti Software Solutions Pvt Ltd. is not liable for any copyrights of that content or data.
               
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >               
                
                NOTICES
                <br /><br />
                Except as otherwise stated in these Terms of Service, all notices to a party shall be in writing and shall be made either via email or snail mail. Notice shall be deemed given 24 hours after an email is sent, or 3 days after deposit in the snail mail, to Member at the address provided by Member in the Registration Data and to the Website at the address set forth below:
                “ICPL, Evergreen Towers, Sector 125, Mohali , Rupnagar -140301, Punjab, India”
               

              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >               
                
                GOVERNING LAW AND JURISDICTION
                <br /><br />
                Any dispute, claim or controversy arising out of or relating to this Terms of Usage including the determination of the scope or applicability of this Terms of Usage to arbitrate, or your use of the Application or information to which it gives access, shall be determined by arbitration in India, before a sole arbitrator mutually appointed by Members and Website. Arbitration shall be conducted in accordance with the Arbitration and Conciliation Act, 1996. The seat of such arbitration shall be New Delhi. All proceedings of such arbitration, including, without limitation, any awards, shall be in the English language. The award shall be final and binding on the parties to the dispute.
                Notwithstanding the foregoing, either party has the right to seek any interim or preliminary relief from a court of competent jurisdiction in New Delhi in order to protect the rights of such party pending the completion of any arbitration hereunder, and both parties agree to submit to the exclusive jurisdiction of the courts of India and venue in New Delhi for any such proceeding. If either party files an action contrary to this provision, the other party may recover attorneys' fees and costs up to One Lakh Rupees INR.
                These Terms of Usage shall be governed by and construed in accordance with the laws of India without giving effect to any choice of law and principles that would require the application of the laws of a different state. If for any reason a court of competent jurisdiction finds any provision or portion of these Terms of Usage or Privacy Policy to be unenforceable or invalid, such provision shall be changed and interpreted so as to best accomplish the objectives of such unenforceable or invalid provision within the limits of applicable law, and the remainder of the Terms of Usage or Privacy Policy, as applicable, will continue in full force and effect. Headings are for reference purposes only and in no way define, limit, construe, or describe the scope or extent of such section. Any waiver of any provision of the Terms of Usage shall be effective only if in writing and signed by Astroscore. These Terms of Usage constitute the entire agreement between the parties with respect to the subject matter hereof and supersedes and replaces all prior or contemporaneous understandings or agreements, written or oral, regarding such subject matter.
                These Terms of Usage and your use of the Services will be interpreted in accordance with the laws of India excluding its rules on conflicts of laws. The parties agree to submit any dispute arising under these Terms of Usage to the jurisdiction of a court located in New Delhi for any actions for which the parties retain the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party's copyrights, trademarks, trade secrets, patents, or other intellectual property rights.


              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{ paddingTop: 10 }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >               
                INDEMNIFICATION
                <br /><br />
                The User shall indemnify, defend and hold harmless the Website and its parent, subsidiaries, affiliates, officers, directors, employees, suppliers, consultants and agents from any and all third party claims, liability, damages and/or costs (including, but not limited to, attorney’s fees) arising from Your use of the Services, Your violation of the Privacy Policy or these Terms of Service, or Your violation of any third party's rights, including without limitation, infringement by You or any other user of Your account of any intellectual property or other right of any person or entity. These Terms of Service will inure to the benefit of Website’s successors, assigns, and licensees.
                <br /><br />
                PROPRIETARY RIGHTS TO CONTENT
                <br /><br />

                The User acknowledges that the Content, including but not limited to text, software, music, sound, photographs, video, graphics or other material contained in sponsor advertisements or distributed via email, commercially produced information presented to Member by the Website, its suppliers, and/or advertisers, is protected by copyrights, trademarks, service marks, patents and/or other proprietary rights and laws. The User is not permitted to copy, use, reproduce, distribute, perform, display, or create derivative works from the Content unless expressly authorized by the Website, its suppliers, or advertisers. Moreover, the content such as images, text, designs, etc on all of the portals of the Website are taken from various online portals such as Google Images. Astroscore or Codeyeti Software Solutions Pvt Ltd. is not liable for any copyrights of that content or data.
                <br /><br />
                NOTICES
                <br /><br />
                Except as otherwise stated in these Terms of Service, all notices to a party shall be in writing and shall be made either via email or snail mail. Notice shall be deemed given 24 hours after an email is sent, or 3 days after deposit in the snail mail, to Member at the address provided by Member in the Registration Data and to the Website at the address set forth below:
                “ICPL, Evergreen Towers, Sector 125, Mohali , Rupnagar -140301, Punjab, India”
                <br /><br />
                GOVERNING LAW AND JURISDICTION
                <br /><br />
                Any dispute, claim or controversy arising out of or relating to this Terms of Usage including the determination of the scope or applicability of this Terms of Usage to arbitrate, or your use of the Application or information to which it gives access, shall be determined by arbitration in India, before a sole arbitrator mutually appointed by Members and Website. Arbitration shall be conducted in accordance with the Arbitration and Conciliation Act, 1996. The seat of such arbitration shall be New Delhi. All proceedings of such arbitration, including, without limitation, any awards, shall be in the English language. The award shall be final and binding on the parties to the dispute.
                Notwithstanding the foregoing, either party has the right to seek any interim or preliminary relief from a court of competent jurisdiction in New Delhi in order to protect the rights of such party pending the completion of any arbitration hereunder, and both parties agree to submit to the exclusive jurisdiction of the courts of India and venue in New Delhi for any such proceeding. If either party files an action contrary to this provision, the other party may recover attorneys' fees and costs up to One Lakh Rupees INR.
                These Terms of Usage shall be governed by and construed in accordance with the laws of India without giving effect to any choice of law and principles that would require the application of the laws of a different state. If for any reason a court of competent jurisdiction finds any provision or portion of these Terms of Usage or Privacy Policy to be unenforceable or invalid, such provision shall be changed and interpreted so as to best accomplish the objectives of such unenforceable or invalid provision within the limits of applicable law, and the remainder of the Terms of Usage or Privacy Policy, as applicable, will continue in full force and effect. Headings are for reference purposes only and in no way define, limit, construe, or describe the scope or extent of such section. Any waiver of any provision of the Terms of Usage shall be effective only if in writing and signed by Astroscore. These Terms of Usage constitute the entire agreement between the parties with respect to the subject matter hereof and supersedes and replaces all prior or contemporaneous understandings or agreements, written or oral, regarding such subject matter.
                These Terms of Usage and your use of the Services will be interpreted in accordance with the laws of India excluding its rules on conflicts of laws. The parties agree to submit any dispute arising under these Terms of Usage to the jurisdiction of a court located in New Delhi for any actions for which the parties retain the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party's copyrights, trademarks, trade secrets, patents, or other intellectual property rights.


              </Typography>
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
