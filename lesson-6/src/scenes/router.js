import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Auth from './Auth/Auth';
import Inbox from './Inbox/InboxContainer';
import Privacy from './Privacy/Privacy';
import Terms from './Terms/Terms';
import AddProduct from './AddProduct/AddProductView';
import Product from './Product/ProductContainer';
import User from './User/UserContainer';
import Search from './Search/SearchContainer';
import LikedList from './LikedList/LikedListContainer';

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
  addProduct: '/products',
  product: '/products/:id',
  user: '/users/:id',
  chat: '/inbox/:id',
  liked: '/api/products/saved',
};

export const routesWithTheme = [
  routes.login,
  routes.register,
  routes.privacy,
  routes.terms,
];

export const routesWithSearchBar = [
  routes.home,
  routes.product,
  routes.user,
  routes.search,
  routes.liked,
];

export default function Router() {
  return (
    <BrowserRouter>
      <Route component={ModalSwitch} />
    </BrowserRouter>
  );
}

class ModalSwitch extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path={routes.home} component={Home} exact />
          <Route path={routes.search} component={Search} />
          <Route path={routes.product} component={Product} exact />
          <Route path={routes.user} component={User} exact />
          <PrivateRoute path={routes.inbox} component={Inbox} />
          <PrivateRoute path={routes.chat} component={Inbox} />
          <PrivateRoute
            path={routes.liked}
            component={LikedList}
            exact
          />
          <Route exact path={routes.privacy} component={Privacy} />
          <Route exact path={routes.terms} component={Terms} />
          <PrivateRoute
            exact
            path={routes.addProduct}
            component={AddProduct}
          />
          <Auth />
          <Route component={NotFound} />
        </Switch>
        {isModal ? (
          <PrivateRoute
            path={routes.addProduct}
            render={(props) => <AddProduct isModal {...props} />}
          />
        ) : null}
      </>
    );
  }
}
