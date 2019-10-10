import React from 'react';
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
      <Button color={blue} float="right">
        Let's make one!
      </Button>
    </>
  );
};

export default MainPage;
