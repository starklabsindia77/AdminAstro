import { HashLink as Link } from 'react-router-hash-link';

// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../routes/paths';
// components
import { PATH_AFTER_LOGIN } from '../../config';
// components
import Iconify from '../../components/Iconify';


// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '#home',
    
  },
  {
    title: 'What We Do',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: '#howitworks',
    
  },
  {
    title: 'About Us',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: '#aboutus',
    
  },
  {
    title: 'FAQ',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: '#faq',
    
  },
  {
    title: 'Blog',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: '#blog',
    
  },
  {
    title: 'Contact',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: '#contact',
    
  },
];

export default menuConfig;
