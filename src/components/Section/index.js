import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './index.module.scss';
import MainPage from '../pages/MainPage';
import InfoPage from '../pages/InfoPage';
import ServersPage from '../pages/ServersPage';
import PathsPage from '../pages/PathsPage';

const Section = () => {
  return (
    <section className="card mx-auto" id={styles.card}>
      <div className="card-body">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/info" exact component={InfoPage} />
          <Route path="/servers-info" exact component={ServersPage} />
          <Route path="/paths-info" exact component={PathsPage} />
        </Switch>
      </div>
    </section>
  );
};

export default Section;
