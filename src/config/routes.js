// Layout
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

// Admin Pages
import AdminHome from '../pages/admin';
import AdminSignIn from '../pages/admin/SignIn';

// Pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';

// Other
import Error404 from '../pages/Error404';

const routes = [
  {
    path: '/admin',
    exact: false,
    component: LayoutAdmin,
    routes: [
      { path: '/admin', exact: true, component: AdminHome },
      {
        path: '/admin/login',
        exact: true,
        component: AdminSignIn,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: '/',
    component: LayoutBasic,
    exact: false,
    routes: [
      { path: '/', exact: true, component: Home },
      {
        path: '/contact',
        exact: true,
        component: Contact,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
