import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { MotionViewport, varFade } from '../../components/animate';

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const TERMS_AND_CONDITIONS = [
  

  {
    title: 'PRIVACY POLICY',
    text: `The User hereby consents, expresses and agrees that the User has read and fully understand the Privacy Policy of the Website. The User further consents that the terms and contents of such Privacy policy is acceptable to the User inclusive of any update/alteration/change made and duly displayed on the Website.`
  },
  {
    title: 'BREACH AND TERMINATION',
    text: `The Website may, in whole or in part, without informing the User, modify, discontinue, change or alter the services ordered or the Account of the User registered with the Website. The Website may or may not issue notice or provide any reason for such action taken by the Website.
    
    Violation of any conditions mentioned in this Terms of Usage shall lead to immediate cancellation of the Registration of the User, if registered with the Website. The Website reserves right to terminate and initiate action immediately, if:
      The Website is not able to verify and authenticate the Registration data or any other relevant information provided by the User.
      The Website believes that the actions of the User may cause legal liability for the Website, other Users or any service provider linked with the Website.
      The Website believes that the User has provided the Website with false and misleading Registration Data or there is interference with the other Users or the administration of the services, or have violated the privacy policy as listed by the Website.
    For the Service Provider inclusive of the Astrologer, You understand and agree that your relationship with the Website is limited to being a member and You act exclusively on your own behalf and for your own benefit. The Website may terminate and de-activate the Profile of such service provider for any violation of the present terms of usage and the Service Terms and Conditions agreed upon between the parties while registration of the data by such Service Provider.`
  },

  {
    title: 'DELIVERY, CANCELLATION AND REFUND',
    text: `No refund shall be processed on the order of any reports under any circumstances if the order has reached the “processing” (Assigned to an Astrologer) stage. The risk and liability of placing order in a haste and careless manner totally lies with the User and the Website is not responsible for any refund once the processing stage has started.
    
    No refund shall be processed once the Order has been placed and executed. However, if the User intends to cancel a successfully placed order before execution, the User is required to contact the customer care team within 1 (one) hour of making the payment, whereafter it is totally at the discretion of the Website whether to issue refund.

    Any technical delay or glitch reported in the Website during the processing of the request which includes generating reports by the service provider i.e. Astrologer shall not be eligible for claiming refund. The User agrees that the timelines are approximate and all essentials steps would be taken to adhere to the timelines as displayed.
    
    No refund shall be processed for the reason that in-correct information or data has been provided by You. The User agrees to be careful while providing any information to the Website and must re-check the information filled before clicking on “Submit”. The User can request for change in the in-correct information or data entered provided, the request for such change has been made with the customer care within 1 (one hour) of execution of the service rendered by the service provider.
    
    No refund shall be processed for return of any damaged product. The User undertakes and agrees that by ordering any product as displayed on the Website, the Registered User shall be fully responsible for any damaged caused to the product, post its delivery. For orders made via “Cash on Delivery” method of payment, the User shall be charged for the cost of the product as displayed by the Website and the shipping/custom/courier charges as applicable, if the product is returned.
    
    Refund on pro-rata basis may be considered for any delay in the activation of the subscription services and any damage that may be caused to the product while in transit shall be dealt by the Website and its agencies.
    
    You agree that the display picture for the products listed for purchase by the User are for reference purpose only and the Website will try to deliver the product ordered in an as-is condition as displayed on the Website. The User is advised to exercise discretion in such case and no refund shall be issued on such grounds.
    
    The services offered and the products sold are strictly not meant to replace any philosophical, emotional or medical treatment. The Website holds no responsibility or liability about the reality or reliability of the astrological effects on the human physiology, by the gems represented and sold on the Website. The placing of order for buying such products or taking the services is solely on the discretion and will of the User and the Website does not have any responsibility upon the products sold. The User is advised to exercise discretion in such case and no refund shall be issued on such grounds.
    
    No refund shall be processed for providing a wrong contact number for the purpose of availing the “Call with Astrologer” feature. The User once opted for this feature is advised to keep the Contact Number in full coverage area and must answer the call when received. No refund shall be processed for any call which gets connected.
    
    The refunds, if any, shall be processed after deduction of the transaction charges levied by the Bank and/or the Payment Gateway, to & fro cost of the shipping and/or courier charges (With regard to purchase of a product listed on the Website), customs duty (if levied) and/or any other charges that may have been incurred by the Website during processing and/or delivering the service, as applicable.
    
    In case the Website or Payment gateway’s webpage, that is linked to the Website, is experiencing any server related issues like ‘slow down’ or ‘failure’ or ‘session timeout’, the User shall, before initiating the second payment, check whether his/her Bank Account has been debited or not and accordingly resort to one of the following options:
        In case the Bank Account appears to be debited, ensure that you do not make the payment twice and immediately thereafter contact the Website via customer care to confirm payment.
        In case the Bank Account is not debited, the User may initiate a fresh transaction to make payment.
    
    However, refund for multiple payment, if any, even after the above precaution against the same order shall be refunded in full without deduction of the transaction charges as mentioned above. The Website shall only retain the cost of one single order as intended to be placed by the User.
    
    If there are orders that the Website is unable to accept and must cancel, the Website at its sole discretion, reserves the right to refuse or cancel any order for any reason whatsoever. Some situations may result in the order being cancelled and include, without limitation, non-availability of the service, inaccuracy, error in pricing information or other problems as identified. If the User’s order is cancelled after charges being paid against the said service, the said amount paid for booking shall be refunded.
    
    By requesting for refund, user is agreeing to provide AstroScore’s quality audit team permission to access the chat/call recording of the consultation for which refund has been requested, in order to determine whether the case is eligible for refund or not.
    
    AstroScore quality audit team, at best effort basis, provide partial/full refunds to the users in their AstroScore wallet wherever consultant’s quality parameters are not satisfied. It can take upto 72 hours to analyse and refund the amount back to AstroScore wallet
    
    Note: All refunds will be credited to user’s AstroScore wallet.
        Refunds will only be considered in the following cases:
            Network issue due to which chat/call was affected in between or there was a weak signal, background noise, inaudible consultant etc during the video/normal call sessions
            Consultant is unable to respond fluently in the language mentioned in their profile
            Consultant is taking inordinately long enough to respond back to the user
            Consultant has responded back in irrelevant or inappropriate response to the query asked by the user
        Please Note: No refund will be given in case of lack of accuracy of any consultation. AstroScore takes no responsibility for factual accuracy on any consultations.`
  },

  {
    title: 'USER OBLIGATION',
    text: `The User (inclusive of the astrologer and the Member Customer) under an obligation not to violate the privacy policy, terms and conditions and any other terms as defined on the Website. The User represents that he is an individual and not a corporation or other legal business entity. The rights to use the Website’s services is personal to the User.The User shall while using the Website and engaged in any form of communication on any of the forums inclusive of the products listed on the Website shall not violate the terms and conditions which are inclusive of:-

    The User shall not Post, publish or transmit any messages that is false, misleading, defamatory, harmful, threatening, abusive, harassing, defamatory, invades another's privacy, offensive, promotes racism, hatred or harm against any individual or group or religion or caste, infringes another's rights including any intellectual property rights or copyright or trademark, violates or encourages any conduct that would violate any applicable law or regulation or would give rise to civil liability.
    The User shall not upload or post or otherwise make available any content that User do not have a right to make available, under any law or under contractual or fiduciary relationships.
    The User shall not upload or post or otherwise make available any content that infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party. The User may, however, post excerpts of copyrighted material so long as they adhere to Fair Use guidelines.
    The User shall not collect screen names and email addresses of members who are registered on the Website for purposes of advertisement, solicitation or spam.
    The User shall not send unsolicited email, junk mail, spam, or chain letters, or promotions or advertisements for products or services.
    The User shall not upload or distribute files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of the Website or another’s computer.
    The User shall not engage in any activity that interferes with or disrupts access to the Website
    The User shall not attempt to gain unauthorized access to any portion or feature of the Website, any other systems or networks connected to the Website, to any of the services offered on or through the Website, by hacking, password mining or any other illegitimate means.
    The User shall not violate any applicable laws or regulations for the time being in force within or outside India. The use and continuous use of the Website is subject to but not limited to using the services for personal use.
    The User shall not resell or make any commercial use of the Services without the express written consent from the Website.
    The User shall not violate these Terms of Usage including but not limited to any applicable Additional terms of the Website contained herein or elsewhere.
    The User shall not Reverse engineer, modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or software obtained from the Website.
    The User by becoming a Registered member of the Website agrees to the following situations, which list is not exhaustive and may include services incidental to the below mentioned: -
        The user agrees to receive communication through the app/website through email/SMS or any other communication medium including though Whatsapp Business Messages in regards to the usage of the app/website.
        The User agrees not to transmit via the Website any unlawful, harassing, libelous, abusive, threatening, harmful, vulgar, obscene or otherwise objectionable material of any kind or nature.
        The User not to transmit any material that encourages conduct that could constitute a criminal offense, give rise to civil liability, or otherwise violate any applicable local, state, national or international law or regulation. Attempts to gain unauthorized access to other computer systems are prohibited.
        The User shall not interfere with any other members' use or enjoyment of the Website or Services.
        The User is under an obligation to report any misuse or abuse of the Site. If you notice any abuse or misuse of the Site or anything which is in violation of this Agreement, you shall forthwith report such violation to Website by writing to Customer Care. On receipt of such complaint, Website may investigate such complaint and if necessary, may terminate the membership of the Member responsible for such violation abuse or misuse without any refund of the subscription fee.
        Any false complaint made by a Member shall make such Member liable for termination of his / her membership without any refund of the subscription fee.
        The Website reserves the right to withdraw its services to any customer who is found to be unreasonable or abusive during their conversation with the Service Provider inclusive of astrologer regardless of any reason.

While the Website shall take all steps to resolve any situation that is in violation of the above obligations arises, however if the situation is not controllable, the Website reserves its right to send a written warning henceforth. Such violations, if repeated by the User, shall lead to a total ban for transacting on the platform by such User. If any balance is present in the wallet of the User, the same shall be refunded subject to the other charges that may be applicable for such violations.`
  },
  {
    title: 'BANK ACCOUNT INFORMATION',
    text: `The User is under an obligation to provide his banking information as and when required. For that purpose, the obligation of the User are:-

    The User agrees that the debit/credit card details provided by him/ her for use of the aforesaid Service(s) must be correct and accurate and that the User shall not use a debit/ credit card, that is not lawfully owned by him/ her or the use of which is not authorized by the lawful owner thereof. The User further agrees and undertakes to provide correct and valid debit/credit card details.
    The User may pay the fees required, to the Website by using a debit/credit card or through online banking account. The User warrants, agrees and confirms that when he/ she initiates a payment transaction and/or issues an online payment instruction and provides his/ her card / bank details:
        The User is fully and lawfully entitled to use such credit / debit card, bank account for such transactions;
        The User is responsible to ensure that the card/ bank account details provided by him/ her are accurate;
    The User is responsible to ensure sufficient credit is available on the nominated card/ bank account at the time of making the payment to permit the payment of the dues payable or the bill(s) selected by the User inclusive of the applicable Fee.

    The User further agrees that if any part of these Terms of Usage are determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth herein, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of these Terms of Usage shall continue in effect.`
  },

  {
    title: 'DISCLAIMER / LIMITATION OF LIABILITY / WARRANTY',
    text: `The User expressly understands and agree that, to the maximum extent permitted by applicable law, the Website does not provide warranties for the service. Astrological counselling provided through the Website is based on cumulative or individual knowledge, experience and interpretations of astrologers and as such, it may vary from one astrologer to another.

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
    The services may consist of the following, without limitation: Astrological content, Reports, Tarot readings, fortunes, numerology, predictions, live telephone consultations, email consultations or products sold through AstroScore Shop. AstroScore charges for the chat/call service offered on this platform on per minute basis and holds no responsibility or liability about the reality or reliability of the astrological effects on the human physiology, by the gems, any other products or services represented and sold on the website. No advice or information, whether oral or written, obtained by you shall create any warranty.
    The advisors/consultants/astrologers are also members of the site and not employees of the Website or the company. However, the Website verifies the degrees, qualifications, credentials, and background of the advisors/consultants/astrologers but does not refer, endorse, recommend, verify, evaluate or guarantee any advice, information or other services provided by the advisors/consultants/astrologers or by the company, nor does it warrant the validity, accuracy, completeness, safety, legality, quality, or applicability of the content, anything said or written by, or any advice provided by the advisors/consultants/astrologers.
    The website is not a suicide helpline platform. If you are considering or contemplating suicide or feel that you are a danger to yourself or to others, you may discontinue use of the services immediately at your discretion and please notify appropriate police or emergency medical personnel. If you are thinking about suicide, immediately call a suicide prevention helpline such as AASRA (91-22-27546669).
    The Website shall not be liable for any inaccuracy, error or delay in, or omission of (a) any data, information or message, or (b) the transmission or delivery of any such data, information or message; or (c) any loss or damage arising from or occasioned by any such inaccuracy, error, delay or omission, non-performance or interruption in any such data, information or message. Under no circumstances shall the Website and/or the payment service providers, its employees, directors, and its third party agents involved in processing, delivering or managing the services, be liable for any direct, indirect, incidental, special or consequential damages, or any damages whatsoever, including punitive or exemplary arising out of or in any way connected with the provision of or any inadequacy or deficiency in the provision of the services or resulting from unauthorized access or alteration of transmissions of data or arising from suspension or termination of the services.

    Notwithstanding anything to the contrary contained herein, AstroScore liability to you for any cause whatsoever, and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to the Website, for the service during the term of membership.`
  },

  {
    title: 'INDEMNIFICATION',
    text: `The User shall indemnify, defend and hold harmless the Website and its parent, subsidiaries, affiliates, officers, directors, employees, suppliers, consultants and agents from any and all third party claims, liability, damages and/or costs (including, but not limited to, attorney’s fees) arising from Your use of the Services, Your violation of the Privacy Policy or these Terms of Service, or Your violation of any third party's rights, including without limitation, infringement by You or any other user of Your account of any intellectual property or other right of any person or entity. These Terms of Service will inure to the benefit of Website’s successors, assigns, and licensees.`
  },

  {
    title: 'PROPRIETARY RIGHTS TO CONTENT',
    text: `The User acknowledges and agrees that the Content, including but not limited to text, software, music, sound, photographs, video, graphics, or other material contained in sponsor advertisements or distributed via email, and commercially produced information presented to the User by the Website, its suppliers, and/or advertisers, is protected by copyrights, trademarks, service marks, patents, or other proprietary rights and laws. The User is not permitted to copy, use, reproduce, distribute, perform, display, or create derivative works from the Content unless expressly authorized by the Website, its suppliers, or advertisers.

    In addition, all content such as images, text, designs, etc. on all of the portals of the Website have been sourced from various online portals such as Google Images. AstroScore Pvt Ltd. is not liable for any copyright claims pertaining to this content or data. Users should note that the copyrights of these contents belong to their respective owners and AstroScore Pvt Ltd. does not claim any ownership rights over such content. The use of these materials is intended for informational or educational purposes and does not constitute a claim of ownership.`
  },

  {
    title: 'NOTICES',
    text: `Except as otherwise stated in these Terms of Service, all notices to a party shall be in writing and shall be made either via email or snail mail. Notice shall be deemed given 24 hours after an email is sent, or 3 days after deposit in the snail mail, to Member at the address provided by Member in the Registration Data and to the Website at the address set forth below:

    “532, ICPL, Evergreen Towers, Sector 125, Mohali, Rupnagar, Punjab -140301, India” 
    `
  },

  {
    title: 'GOVERNING LAW AND JURISDICTION',
    text: `Any dispute, claim or controversy arising out of or relating to this Terms of Usage including the determination of the scope or applicability of this Terms of Usage to arbitrate, or your use of the Application or information to which it gives access, shall be determined by arbitration in India, before a sole arbitrator mutually appointed by Members and Website. Arbitration shall be conducted in accordance with the Arbitration and Conciliation Act, 1996. The seat of such arbitration shall be New Delhi. All proceedings of such arbitration, including, without limitation, any awards, shall be in the English language. The award shall be final and binding on the parties to the dispute.
	Notwithstanding the foregoing, either party has the right to seek any interim or preliminary relief from a court of competent jurisdiction in New Delhi in order to protect the rights of such party pending the completion of any arbitration hereunder, and both parties agree to submit to the exclusive jurisdiction of the courts of India and venue in New Delhi for any such proceeding. If either party files an action contrary to this provision, the other party may recover attorneys' fees and costs up to One Lakh Rupees INR.
	These Terms of Usage shall be governed by and construed in accordance with the laws of India without giving effect to any choice of law and principles that would require the application of the laws of a different state. If for any reason a court of competent jurisdiction finds any provision or portion of these Terms of Usage or Privacy Policy to be unenforceable or invalid, such provision shall be changed and interpreted so as to best accomplish the objectives of such unenforceable or invalid provision within the limits of applicable law, and the remainder of the Terms of Usage or Privacy Policy, as applicable, will continue in full force and effect. Headings are for reference purposes only and in no way define, limit, construe, or describe the scope or extent of such section. Any waiver of any provision of the Terms of Usage shall be effective only if in writing and signed by AstroScore. These Terms of Usage constitute the entire agreement between the parties with respect to the subject matter hereof and supersedes and replaces all prior or contemporaneous understandings or agreements, written or oral, regarding such subject matter.
  These Terms of Usage and your use of the Services will be interpreted in accordance with the laws of India excluding its rules on conflicts of laws. The parties agree to submit any dispute arising under these Terms of Usage to the jurisdiction of a court located in New Delhi for any actions for which the parties retain the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party's copyrights, trademarks, trade secrets, patents, or other intellectual property rights.`
  }

];

export default function PolicyWhat() {
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'md');
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container >
        <Grid container>
          {TERMS_AND_CONDITIONS.map((section, index) => (
            <Grid item xs={12} md={12} lg={12} key={index}>
              <m.div >
                <Typography
                  variant="h6"
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === 'light' ? 'text.primary' : 'common.white',
                    mt: index !== 0 ? 3 : 0, // Add margin to all but the first item
                    mb: 1,
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
                  }}
                >
                  {section.text}
                </Typography>
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
