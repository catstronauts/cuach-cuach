import React from 'react';
import { Field } from 'react-final-form';
import Wrapper from '@components/formComponents/FieldWrapper';
import styles from './InputText.module.scss';

export const InputText = (props) => {
  const { name, placeholder, disabled = false } = props;

  return (
    <Wrapper {...props}>
      <Field name={name}>
        {props => (
          <input
            {...props.input}
            id={name}
            className={styles.input}
            placeholder={placeholder}
            disabled={disabled}
          />
        )}
      </Field>
    </Wrapper>
  );
};

export default InputText;
