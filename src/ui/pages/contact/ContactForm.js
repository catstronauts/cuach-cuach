import React from 'react';
// import { useMail } from 'hooks/useMail';
// import styles from './Contact.module.scss';
// import Icon from '@components/Icon';
import Button from '@components/Button';
import { Form } from '@components/formComponents/Form';
import { Field } from '@components/formComponents/Field';

const Contact = () => {
  // const { isSent, isLoading, actions: mailActions } = useMail();
  const { isSent, isLoading, actions: mailActions } = {};

  const isEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isValid = (vals = {}) => {
    const { name, email, message } = vals;

    return (
      !!name &&
      !!email &&
      !!isEmail(email) &&
      !!message
    );
  };
  const handleSendMail = (vals) => {
    if (isValid(vals)) {
      mailActions.send(vals);
    } else {
    }
  };

  return !isSent ? (
    <Form onSubmit={handleSendMail}>
      <Field
        name='name'
        label='Nombre'
        placeholder="e.g. Alejandro"
        disabled={isLoading}
      />
      <Field
        name='email'
        label='Correo electrónico'
        placeholder="e.g. nombre@ejemplo.com"
        disabled={isLoading}
      />
      <Field
        type='textarea'
        label='Mensaje'
        name='message'
        placeholder="Tu mensaje..."
        disabled={isLoading}
      />
      <Button disabled={isLoading}>Enviar</Button>
    </Form>
  ) : (
    <div>abc</div>
    // <div className={styles.confirmation}>
    //   <Icon className={styles.confirmation_icon} name='check-circle' />
    //   <span className={styles.confirmation_txt}>
    //     Thank, your message has been sent!
    //   </span>
    // </div>
  );
};

export default Contact;
