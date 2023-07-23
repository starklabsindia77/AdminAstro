import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// config
import { PATH_AFTER_LOGIN } from '../config';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'new-password', element: <NewPassword /> },
        { path: 'verify', element: <VerifyCode /> },
      ],
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'app', element: <GeneralApp /> },
        { path: 'ecommerce', element: <GeneralEcommerce /> },
        { path: 'analytics', element: <GeneralAnalytics /> },
        { path: 'banking', element: <GeneralBanking /> },
        { path: 'booking', element: <GeneralBooking /> },

        {
          path: 'e-commerce',
          children: [
            { element: <Navigate to="/dashboard/e-commerce/list" replace />, index: true },
            // { path: 'shop', element: <EcommerceShop /> },
            { path: 'product/:name', element: <EcommerceProductDetails /> },
            { path: 'list', element: <EcommerceProductList /> },
            { path: 'product/new', element: <EcommerceProductCreate /> },
            { path: 'product/:name/edit', element: <EcommerceProductCreate /> },
            // { path: 'checkout', element: <EcommerceCheckout /> },
          ],
        },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
            { path: 'profile', element: <UserProfile /> },
            { path: 'cards', element: <UserCards /> },
            { path: 'list', element: <UserList /> },
            { path: 'new', element: <UserCreate /> },
            { path: ':name/edit', element: <UserCreate /> },
            { path: 'account', element: <UserAccount /> },
          ],
        },
        {
          path: 'expert',
          children: [
            { element: <Navigate to="/dashboard/expert/profile" replace />, index: true },
            { path: 'profile', element: <ExpertProfile /> },
            { path: 'cards', element: <ExpertCards /> },
            { path: 'list', element: <ExpertList /> },
            { path: 'new', element: <ExpertCreate /> },
            { path: ':name/edit', element: <ExpertCreate /> },
            { path: 'account', element: <ExpertAccount /> },
          ],
        },
        {
          path: 'sessions',
          children: [
            { element: <Navigate to="/dashboard/sessions/list" replace />, index: true },
            // { path: 'profile', element: <ExpertProfile /> },
            // { path: 'cards', element: <ExpertCards /> },
            { path: 'list', element: <Sessions /> },
            { path: 'new', element: <SessionsCreate /> },
            // { path: ':name/edit', element: <ExpertCreate /> },
            // { path: 'account', element: <ExpertAccount /> },
          ],
        },
        {
          path: 'schedule',
          children: [
            { element: <Navigate to="/dashboard/schedule/list" replace />, index: true },
            // { path: 'profile', element: <ExpertProfile /> },
            // { path: 'cards', element: <ExpertCards /> },
            { path: 'list', element: <Schedule /> },
            // { path: 'new', element: <ExpertCreate /> },
            // { path: ':name/edit', element: <ExpertCreate /> },
            // { path: 'account', element: <ExpertAccount /> },
          ],
        },
        {
          path: 'order',
          children: [
            { element: <Navigate to="/dashboard/order/list" replace />, index: true },
            { path: 'list', element: <OrderList /> },
            { path: ':id', element: <OrderDetails /> },
            { path: ':id/edit', element: <OrderEdit /> },
            { path: 'new', element: <OrderCreate /> },
          ],
        },
        {
          path: 'blog',
          children: [
            { element: <Navigate to="/dashboard/blog/posts" replace />, index: true },
            { path: 'posts', element: <BlogPosts /> },
            { path: 'post/:title/edit', element: <BlogPost /> },
            { path: 'new', element: <BlogNewPost /> },
          ],
        },
        {
          path: 'mail',
          children: [
            { element: <Navigate to="/dashboard/mail/all" replace />, index: true },
            { path: 'label/:customLabel', element: <Mail /> },
            { path: 'label/:customLabel/:mailId', element: <Mail /> },
            { path: ':systemLabel', element: <Mail /> },
            { path: ':systemLabel/:mailId', element: <Mail /> },
          ],
        },
        {
          path: 'chat',
          children: [
            { element: <Chat />, index: true },
            { path: 'new', element: <Chat /> },
            { path: ':conversationKey', element: <Chat /> },
          ],
        },
        { path: 'calendar', element: <Calendar /> },
        { path: 'kanban', element: <Kanban /> },
        { path: 'permission-denied', element: <PermissionDenied /> },
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'policy', element: <Policy /> },
        { path: 'terms', element: <Terms /> },
        {
          path: 'blog',
          children: [
            { element: <Navigate to="/blog/posts" replace />, index: true },
            { path: 'posts', element: <BlogList /> },
            { path: 'post/:title', element: <BlogSingles /> },
          ],
        },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
        { path: 'howitworks', element: <What /> },
        // { path: 'about-us', element: <About /> },
        // { path: 'policy', element: <Policy /> },
        // { path: 'terms', element: <Terms /> },
        // { path: 'contact-us', element: <Contact /> },
        // { path: 'faqs', element: <Faqs /> },
      ],
    },
    // { path: '/', element: <Navigate to="/auth/login" replace /> },
    // { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
const NewPassword = Loadable(lazy(() => import('../pages/auth/NewPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')));

// DASHBOARD

// GENERAL
const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')));
const GeneralEcommerce = Loadable(lazy(() => import('../pages/dashboard/GeneralEcommerce')));
const GeneralAnalytics = Loadable(lazy(() => import('../pages/dashboard/GeneralAnalytics')));
const GeneralBanking = Loadable(lazy(() => import('../pages/dashboard/GeneralBanking')));
const GeneralBooking = Loadable(lazy(() => import('../pages/dashboard/GeneralBooking')));

// ECOMMERCE
const EcommerceShop = Loadable(lazy(() => import('../pages/dashboard/EcommerceShop')));
const EcommerceProductDetails = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductDetails')));
const EcommerceProductList = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductList')));
const EcommerceProductCreate = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductCreate')));
const EcommerceCheckout = Loadable(lazy(() => import('../pages/dashboard/EcommerceCheckout')));

// INVOICE
const OrderList = Loadable(lazy(() => import('../pages/dashboard/OrderList')));
const OrderDetails = Loadable(lazy(() => import('../pages/dashboard/OrderDetails')));
const OrderCreate = Loadable(lazy(() => import('../pages/dashboard/OrderCreate')));
const OrderEdit = Loadable(lazy(() => import('../pages/dashboard/OrderEdit')));

// BLOG
const BlogPosts = Loadable(lazy(() => import('../pages/dashboard/BlogDashList')));
const BlogPost = Loadable(lazy(() => import('../pages/dashboard/BlogEditPost')));
const BlogNewPost = Loadable(lazy(() => import('../pages/dashboard/BlogNewPost')));

// USER
const UserProfile = Loadable(lazy(() => import('../pages/dashboard/UserProfile')));
const UserCards = Loadable(lazy(() => import('../pages/dashboard/UserCards')));
const UserList = Loadable(lazy(() => import('../pages/dashboard/UserList')));
const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')));
const UserCreate = Loadable(lazy(() => import('../pages/dashboard/UserCreate')));

// Expert 
const ExpertProfile = Loadable(lazy(() => import('../pages/dashboard/ExpertProfile')));
const ExpertCards = Loadable(lazy(() => import('../pages/dashboard/ExpertCards')));
const ExpertList = Loadable(lazy(() => import('../pages/dashboard/ExpertList')));
const ExpertAccount = Loadable(lazy(() => import('../pages/dashboard/ExpertAccount')));
const ExpertCreate = Loadable(lazy(() => import('../pages/dashboard/ExpertCreate')));

// Sessions 
// const ExpertProfile = Loadable(lazy(() => import('../pages/dashboard/ExpertProfile')));
// const ExpertCards = Loadable(lazy(() => import('../pages/dashboard/ExpertCards')));
const Sessions = Loadable(lazy(() => import('../pages/dashboard/Sessions')));
// const ExpertAccount = Loadable(lazy(() => import('../pages/dashboard/ExpertAccount')));
const SessionsCreate = Loadable(lazy(() => import('../pages/dashboard/SessionsCreate')));

// Schedule 
// const ExpertProfile = Loadable(lazy(() => import('../pages/dashboard/ExpertProfile')));
// const ExpertCards = Loadable(lazy(() => import('../pages/dashboard/ExpertCards')));
const Schedule = Loadable(lazy(() => import('../pages/dashboard/Schedule')));
// const ExpertAccount = Loadable(lazy(() => import('../pages/dashboard/ExpertAccount')));
// const ExpertCreate = Loadable(lazy(() => import('../pages/dashboard/ExpertCreate')));

// APP
const Chat = Loadable(lazy(() => import('../pages/dashboard/Chat')));
const Mail = Loadable(lazy(() => import('../pages/dashboard/Mail')));
const Calendar = Loadable(lazy(() => import('../pages/dashboard/Calendar')));
const Kanban = Loadable(lazy(() => import('../pages/dashboard/Kanban')));

// TEST RENDER PAGE BY ROLE
const PermissionDenied = Loadable(lazy(() => import('../pages/dashboard/PermissionDenied')));

// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const About = Loadable(lazy(() => import('../pages/About')));
const What = Loadable(lazy(() => import('../pages/WhatWeDo')));
const AboutUs = Loadable(lazy(() => import('../pages/AboutUs')));
const HomeBlog = Loadable(lazy(() => import('../sections/home')));
const BlogList = Loadable(lazy(() => import('../pages/BlogList')));
const BlogSingles = Loadable(lazy(() => import('../pages/BlogSingle')));
const Policy = Loadable(lazy(() => import('../pages/Policy')));
const Terms = Loadable(lazy(() => import('../pages/Terms')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const Pricing = Loadable(lazy(() => import('../pages/Pricing')));
const Payment = Loadable(lazy(() => import('../pages/Payment')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const Page403 = Loadable(lazy(() => import('../pages/Page403')));
const Page404 = Loadable(lazy(() => import('../pages/Page404')));
