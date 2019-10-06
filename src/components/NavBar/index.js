import React from 'react';
import styles from './index.module.scss';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg static-top" id={styles.navbar}>
      <a className="navbar-brand" href="/">
        Swagger Easy
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};

export default NavBar;
