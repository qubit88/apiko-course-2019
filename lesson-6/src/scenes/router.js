import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Inbox from './Inbox/Inbox';

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
};

export const routesWithTheme = [
  routes.login,
  routes.register,
  routes.privary,
  routes.register,
];

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.inbox} component={Inbox} />
        <Auth />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
