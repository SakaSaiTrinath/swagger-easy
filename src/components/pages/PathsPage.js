import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Header, Dropdown, Button } from '../modules';

import { blue } from '../../constants';

const PathsPage = () => {
  const request_options = [
    { id: 1, name: 'GET', value: 'GET' },
    { id: 2, name: 'POST', value: 'POST' },
    { id: 2, name: 'DELETE', value: 'DELETE' },
  ];

  const in_options = [
    { id: 1, name: 'path', value: 'path' },
    { id: 2, name: 'Header', value: 'Header' },
    { id: 3, name: 'body', value: 'body' },
  ];

  const type_options = [
    { id: 1, name: 'integer', value: 'integer' },
    { id: 1, name: 'long', value: 'long' },
    { id: 1, name: 'float', value: 'float' },
    { id: 1, name: 'double', value: 'double' },
    { id: 3, name: 'string', value: 'string' },
    { id: 1, name: 'byte', value: 'byte' },
    { id: 2, name: 'binary', value: 'binary' },
    { id: 1, name: 'boolean', value: 'boolean' },
    { id: 1, name: 'date', value: 'date' },
    { id: 1, name: 'dateTime', value: 'dateTime' },
    { id: 1, name: 'password', value: 'password' },
  ];

  return (
    <>
      <Header as="h3">Paths (Endpoints) Details</Header>
      <form>
        <Input type="text" placeholder="Endpoint" color={blue} />
        Request Method: <Dropdown color={blue} options={request_options} />
        <Input
          type="text"
          placeholder="Tags (If multiple enter them in comma separated)"
          color={blue}
        />
        <Input type="text" placeholder="Summary" color={blue} />
        <Input type="text" placeholder="OperationId" color={blue} />
        <Header as="h4">- Parameters</Header>
        <Input
          type="text"
          required
          placeholder="Name of parameter"
          color={blue}
        />
        <Input type="text" required placeholder="Description" color={blue} />
        In: <Dropdown required color={blue} options={in_options} />
        <Input
          type="checkbox"
          required
          color={blue}
          label="Is this required?"
          aria-label="Is this required?"
        />
        <Header as="h4">-- Schema</Header>
        Type of schema:{' '}
        <Dropdown required color={blue} options={type_options} />
        <Link to="/servers-info">
          <Button color={blue} float="left">
            Back
          </Button>
        </Link>
        {/* <Link to="/servers-info">
          <Button color={blue} float="right">
            Next
          </Button>
        </Link> */}
      </form>
    </>
  );
};

export default PathsPage;
