import Main from '../pages/Main/Main';
import Register from '../pages/Register/Register';
import Status from '../pages/Status/Status';
import Contact from '../pages/Contact/Contact';
import AboutUs from '../pages/AboutUs/AboutUs';
import OrderParts from '../pages/OrderParts/OrderParts';

import { FaWrench } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { FaCommentAlt } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import MainLayout from '../layouts/MainLayout';
import Layout from '../layouts/Layout';

export const MAIN_ROUTE = '/';
export const REGISTER_ROUTE = '/register';
export const STATUS_ROUTE = '/status';
export const ORDER_ROUTE = '/order';
export const CONTACT_ROUTE = '/contact';
export const ABOUT_US_ROUTE = '/about';

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
    title: 'Home',
    Icon: FaHome,
    Layout: Layout,
  },
  {
    path: REGISTER_ROUTE,
    Component: Register,
    title: 'Register',
    Icon: FaWrench,
    Layout: MainLayout,
  },
  {
    path: STATUS_ROUTE,
    Component: Status,
    title: 'Repair status',
    Icon: FaGear,
    Layout: MainLayout,
  },
  {
    path: ORDER_ROUTE,
    Component: OrderParts,
    title: 'Order spare parts',
    Icon: FaShoppingCart,
    Layout: MainLayout,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contact,
    title: 'Contact Us',
    Icon: FaCommentAlt,
    Layout: MainLayout,
  },
  {
    path: ABOUT_US_ROUTE,
    Component: AboutUs,
    title: 'About Us',
    Icon: FaEllipsisH,
    Layout: MainLayout,
  },
];
