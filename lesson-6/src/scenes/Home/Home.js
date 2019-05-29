import React from 'react';
import T from 'prop-types';
import s from './Home.module.scss';
import { Header } from '../../components';

function Home() {
  return (
    <div className={s.container}>
      <Header />
    </div>
  );
}

Home.propTypes = {};

export default Home;
