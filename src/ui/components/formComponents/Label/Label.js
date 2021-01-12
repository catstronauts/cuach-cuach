import React from 'react';

export const Label = ({
  children,
  caption,
  htmlFor,
  className,
}) => {
  const content = children || caption;

  return content ? (
    <label htmlFor={htmlFor} className={className}>{content}</label>
  ) : null;
};

export default Label;
