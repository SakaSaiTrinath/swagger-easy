import React from 'react';
import styles from './index.module.scss';

import MainPage from '../pages/MainPage';

const Section = () => {
  return (
    <section className="card" id={styles.card}>
      <MainPage />
    </section>
  );
};

export default Section;
