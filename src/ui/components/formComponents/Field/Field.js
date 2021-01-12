import React from 'react';
import { InputText } from '@components/formComponents/InputText';
import { Textarea } from '@components/formComponents/Textarea';

export const Field = (props) => {
  const {
    type = 'text',
    ...rest
  } = props;

  switch (type) {
    case 'textarea':
      return <Textarea {...rest} />;
    case 'text':
    default:
      return <InputText {...rest} />;
  }
};

export default Field;
