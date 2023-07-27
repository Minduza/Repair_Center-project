import Main from '../pages/Main/Main'
import Register from '../pages/Register/Register'
import Status from '../pages/Status/Status'
import Contact from '../pages/Contact/Contact'
import AboutUs from '../pages/AboutUs/AboutUs'

export const MAIN_ROUTE='/'
export const REGISTER_ROUTE='/register'
export const STATUS_ROUTE='/status'
export const CONTACT_ROUTE='/contact'
export const ABOUT_US_ROUTE='/about'

export const routes = [
    {path: MAIN_ROUTE,
    Component: Main
    },
    {path: REGISTER_ROUTE,
    Component: Register
    },
    {path: STATUS_ROUTE,
    Component: Status
    },
    {path: CONTACT_ROUTE,
    Component: Contact
    },
    {path: ABOUT_US_ROUTE,
    Component: AboutUs
    }
]