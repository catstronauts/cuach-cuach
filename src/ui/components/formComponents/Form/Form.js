
import React, { useEffect } from 'react';
import { Form as RFFForm } from 'react-final-form';

const Form = ({ children, className, onSubmit, onChange, iniValues = {} }) => {
  const handleSubmit = (values) => {
    // TODO: check if it is valid
    onSubmit(values);
  };

  return (
    <RFFForm
      onSubmit={handleSubmit}
      initialValues={iniValues}
      // validate={formValidate}
      render={({ handleSubmit, values }) => {
        // const valid = formIsValid(values);

        useEffect(() => {
          onChange && onChange(values);
        }, [values]);

        return (
          <form onSubmit={handleSubmit} className={className}>
            {children}
          </form>
        );
      }}
    />
  );
};

export default Form;
