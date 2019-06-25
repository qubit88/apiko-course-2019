import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../scenes/router';
import T from 'prop-types';
import s from './Home.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
import LatestList from '../LatestList/LatestListContainer';
import Product from '../Product/ProductContainer';

function Home() {
  return (
    <div className={s.container}>
      <Header />
      <Switch>
        <Route path={routes.home} component={LatestList} exact />
        <Route path={routes.product} component={Product} />
      </Switch>
      <Footer />
    </div>
  );
}

Home.propTypes = {};

export default Home;
