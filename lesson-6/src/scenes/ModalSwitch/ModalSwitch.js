import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import LatestList from '../LatestList/LatestListContainer';
import AddProduct from '../AddProduct/AddProductView';
import { routes } from '../router';

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
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path={routes.home} component={Home} />
          <PrivateRoute exact path={routes.inbox} component={Inbox} />
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
            component={AddProduct}
            isModal
          />
        ) : null}
      </div>
    );
  }
}

export default ModalSwitch;
