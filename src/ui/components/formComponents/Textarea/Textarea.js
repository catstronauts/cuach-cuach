import React from 'react';
import { Field } from 'react-final-form';
import Wrapper from '@components/formComponents/FieldWrapper';
import styles from './Textarea.module.scss';

export const Textarea = (props) => {
  const { name, placeholder, disabled = false } = props;

  return (
    <Wrapper {...props}>
      <Field name={name}>
        {props => (
          <textarea
            {...props.input}
            id={name}
            className={styles.textarea}
            placeholder={placeholder}
            disabled={disabled}
            rows="4"
          />
        )}
      </Field>
    </Wrapper>
  );
};

export default Textarea;
