import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Dropdown, Header, Button } from '../modules';

import { blue, orange } from '../../constants';

const InfoPage = () => {
  const initialState = {
    swagger: '',
    info: {
      title: 'Sample Pet Store App',
      description: 'This is a sample server for a pet store.',
      termsOfService: 'http://example.com/terms/',
      contact: {
        name: 'API Support',
        url: 'http://www.example.com/support',
        email: 'support@example.com',
      },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
      version: '1.0.1',
    },
  };

  const [state, setState] = useState(initialState);

  const options = [
    { id: 1, name: '2.0.0', value: '2.0.0' },
    { id: 2, name: '3.0.0', value: '3.0.0' },
  ];

  const handleChange = (e, attr) => {
    // console.log(e.target);
    const attr_list = attr.split('.');
    switch (attr_list[0]) {
      case 'swagger':
        setState({ ...state, swagger: e.target.value });
        break;
      case attr_list[0]:
        if (attr_list[2]) {
          setState({
            [attr_list[0]]: {
              ...state[attr_list[0]],
              [attr_list[1]]: {
                ...state[attr_list[0]][attr_list[1]],
                [attr_list[2]]: e.target.value,
              },
            },
          });
        } else {
          setState({ info: { ...state.info, [attr_list[1]]: e.target.value } });
        }
        break;
      default:
        break;
    }
  };

  // const handleChange1 = (e, attr) => {
  //   const al = attr.split('.');
  //   const al_len = al.length;
  //   switch (al[0]) {
  //     case al[0]:
  //       for(let i = 0; i < al_len; i++) {
  //         if(al[i]) {

  //         }
  //       }
  //       break
  //     default:
  //       break
  //   }
  // }

  return (
    <>
      <Header as="h3">Info</Header>
      <form>
        Open Api Version:
        <Dropdown
          color={blue}
          options={options}
          value={state.swagger}
          onChange={e => handleChange(e, 'swagger')}
        />
        <Input
          required
          type="text"
          placeholder="Title"
          color={orange}
          value={state.info.title}
          onChange={e => handleChange(e, 'info.title')}
        />
        <Input
          type="text"
          placeholder="Description"
          color={blue}
          value={state.info.description}
          onChange={e => handleChange(e, 'info.description')}
        />
        <Input
          type="text"
          required
          placeholder="Version of your API"
          color={orange}
          value={state.info.version}
          onChange={e => handleChange(e, 'info.version')}
        />
        <Input
          type="text"
          placeholder="Url for termsOfService"
          color={blue}
          value={state.info.termsOfService}
          onChange={e => handleChange(e, 'info.termsOfService')}
        />
        <Header as="h4">Contact Details</Header>
        <Input
          type="text"
          placeholder="Name of contact"
          color={blue}
          value={state.info.contact.name}
          onChange={e => handleChange(e, 'info.contact.name')}
        />
        <Input
          type="text"
          placeholder="Url of contact"
          color={blue}
          value={state.info.contact.url}
          onChange={e => handleChange(e, 'info.contact.url')}
        />
        <Input
          type="text"
          placeholder="Email of contact"
          color={blue}
          value={state.info.contact.email}
          onChange={e => handleChange(e, 'info.contact.email')}
        />
        <Header as="h4">License Details</Header>
        <Input
          type="text"
          required
          placeholder="Name of license"
          color={orange}
          value={state.info.license.name}
          onChange={e => handleChange(e, 'info.license.name')}
        />
        <Input
          type="text"
          placeholder="Url of license"
          color={blue}
          value={state.info.license.url}
          onChange={e => handleChange(e, 'info.license.url')}
        />
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
