import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Inbox from './Inbox/Inbox';
import Privacy from './Privacy/Privacy';
import Terms from './Terms/Terms';
import AddProduct from './AddProduct/AddProductContainer';

export const routes = {
  home: '/',
  login: '/auth/login',
  register: '/auth/register',
  auth: '/auth',
  inbox: '/inbox',
  terms: '/terms',
  privacy: '/privacy',
  bookmarks: '/bookmarks',
  profile: '/profile',
  users: 'users/:id',
  listings: '/listings/:id',
  search: '/search',
  addProduct: '/products/add',
};

export const routesWithTheme = [
  routes.login,
  routes.register,
  routes.privacy,
  routes.terms,
];

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <PrivateRoute exact path={routes.inbox} component={Inbox} />
        <Route exact path={routes.privacy} component={Privacy} />
        <Route exact path={routes.terms} component={Terms} />
        <Route
          exact
          path={routes.addProduct}
          component={AddProduct}
        />
        <Auth />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
