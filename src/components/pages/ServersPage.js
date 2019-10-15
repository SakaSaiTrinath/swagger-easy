import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Header, Button } from '../modules';

import { blue } from '../../constants';

const ServersPage = () => {
  return (
    <>
      <Header as="h3">Server Details</Header>
      <form>
        <p classNamw="text-muted">
          Resultant url =>
          https://(username).gigantic-server.com:(port)/(basePath)
        </p>
        <Input type="text" required placeholder="Server url" color={blue} />
        <Input type="text" placeholder="description" color={blue} />
        <Header as="h4">- Server Varibles Details</Header>
        <Header as="h5">-- Username</Header>
        <Input type="text" placeholder="Default Username" color={blue} />
        <Input type="text" placeholder="description" color={blue} />
        <Header as="h5">-- Port</Header>
        {/* enum */}
        <Input
          type="text"
          placeholder="Port numbers (If multiple enter them in comma separated)"
          color={blue}
        />{' '}
        <Input
          type="text"
          required
          placeholder="default port (Choose one of the above entered ports)"
          color={blue}
        />
        <Input type="text" placeholder="description" color={blue} />
        <Header as="h5">-- basePath</Header>
        <Input type="text" placeholder="default basePath" color={blue} />
        <Link to="/info">
          <Button color={blue} float="left">
            Back
          </Button>
        </Link>
        <Link to="/paths-info">
          <Button color={blue} float="right">
            Next
          </Button>
        </Link>
      </form>
    </>
  );
};

export default ServersPage;
