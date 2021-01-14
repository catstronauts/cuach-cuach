import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  children,
  caption,
  type = 'button',
  className,
  disabled = false,
  block = false,
  onClick,
}) => {
  const content = children || caption;
  const handleClick = () => {
    (!disabled && onClick) && onClick();
  };

  return content ? (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={classnames(
        styles.btn,
        block && styles.block,
        disabled && styles.disabled,
        className
      )}
    >
      {content}
    </button>
  ) : null;
};

export default Button;
