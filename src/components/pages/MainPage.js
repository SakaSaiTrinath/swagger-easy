import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Header } from '../modules';
import { blue } from '../../constants';

const MainPage = () => {
  return (
    <>
      <Header as="h2" color={blue} className="card-title">
        Welcome!
      </Header>
      <p className="card-text">
        Make swagger files easily now by answering questions. No more writing
        yaml and json files.
      </p>
      <Link to="/info">
        <Button color={blue} float="right">
          Let's make one!
        </Button>
      </Link>
    </>
  );
};

export default MainPage;
