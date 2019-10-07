import React from 'react';
import NavBar from './components/NavBar';
import Section from './components/Section';

import styles from './App.module.scss';

function App() {
  console.log(styles.container);
  return (
    <>
      <NavBar />
      <div className="container-fluid min-vh-100" id={styles.container}>
        <div className="row h-100 align-items-center">
          <div className="col-12 mx-auto">
            <Section />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
