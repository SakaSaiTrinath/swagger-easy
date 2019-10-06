import React from 'react';
import { Input } from '../modules';

import { blue } from '../../constants';

const InfoPage = () => {
  return (
    <section>
      <div className="card-title">Welcome</div>
      <form>
        <Input type="text" placeholder="Enter text please!" color={blue} />
      </form>
    </section>
  );
};

export default InfoPage;
