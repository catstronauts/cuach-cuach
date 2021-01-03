import React from 'react';
import classnames from 'classnames';
import { Label } from '@components/formComponents/Label';
import styles from './FieldWrapper.module.scss';

export const FieldWrapper = ({
  children,
  name,
  label,
  placeholder,
  type = 'text',
  className,
}) => (
  <div className={classnames(styles.wrapper, className)}>
    <Label htmlFor={name} caption={label} className={styles.label} />
    {children}
  </div>
);

export default FieldWrapper;
