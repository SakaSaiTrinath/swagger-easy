import React from 'react';
import { Input, Dropdown, Accordian } from '../modules';

import { blue } from '../../constants';

const InfoPage = () => {
  const options = [
    { id: 1, name: '2.0.0', value: '2.0.0' },
    { id: 2, name: '3.0.0', value: '3.0.0' },
  ];

  return (
    <>
      <div className="card-title">Info</div>
      <form>
        <Dropdown color={blue} options={options} />
        <Input type="text" required placeholder="Title" color={blue} />
        <Accordian>Other options</Accordian>
      </form>
    </>
  );
};

export default InfoPage;
