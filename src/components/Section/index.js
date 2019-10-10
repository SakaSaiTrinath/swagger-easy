import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './index.module.scss';
import MainPage from '../pages/MainPage';
import InfoPage from '../pages/InfoPage';

const Section = () => {
  return (
    <section className="card mx-auto" id={styles.card}>
      <div className="card-body">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/info" exact component={InfoPage} />
        </Switch>
      </div>
    </section>
  );
};

export default Section;
