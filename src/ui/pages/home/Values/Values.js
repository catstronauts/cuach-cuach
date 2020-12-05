import React from 'react';
import { data } from './data';
import { Slides } from './Slides';

const ValuesSection = (props) => {
  console.log('aa');

  return (
    <>
      <Slides data={data} />
    </>
  );
};

export default ValuesSection;
