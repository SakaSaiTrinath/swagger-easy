import React from 'react';
import styles from './index.module.scss';

import MainPage from '../pages/MainPage';

const Section = () => {
  // console.log(styles.card);
  return (
    <section className="card mx-auto" id={styles.card}>
      <MainPage />
    </section>
  );
};

export default Section;
