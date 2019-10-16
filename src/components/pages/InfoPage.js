import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Dropdown, Header, Button } from '../modules';

import { blue, orange } from '../../constants';

const InfoPage = () => {
  const options = [
    { id: 1, name: '2.0.0', value: '2.0.0' },
    { id: 2, name: '3.0.0', value: '3.0.0' },
  ];

  return (
    <>
      <Header as="h3">Info</Header>
      <form>
        Open Api Version: <Dropdown color={blue} options={options} />
        <Input type="text" required placeholder="Title" color={orange} />
        <Input type="text" placeholder="Description" color={blue} />
        <Input
          type="text"
          required
          placeholder="Version of your API"
          color={orange}
        />
        <Input type="text" placeholder="Url for termsOfService" color={blue} />
        <Header as="h4">Contact Details</Header>
        <Input type="text" placeholder="Name of contact" color={blue} />
        <Input type="text" placeholder="Url of contact" color={blue} />
        <Input type="text" placeholder="Email of contact" color={blue} />
        <Header as="h4">License Details</Header>
        <Input
          type="text"
          required
          placeholder="Name of license"
          color={orange}
        />
        <Input type="text" placeholder="Url of license" color={blue} />
        <Link to="/">
          <Button color={blue} float="left">
            Back
          </Button>
        </Link>
        <Link to="/servers-info">
          <Button color={blue} float="right">
            Next
          </Button>
        </Link>
      </form>
    </>
  );
};

export default InfoPage;
