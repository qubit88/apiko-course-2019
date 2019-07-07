import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../scenes/router';
import T from 'prop-types';
import s from './Home.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';
import LatestList from '../LatestList/LatestListContainer';

function Home() {
  return (
    <div className={s.container}>
      <Route path={routes.home} component={LatestList} exact />
    </div>
  );
}

Home.propTypes = {};

export default Home;
