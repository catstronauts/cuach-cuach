import React from 'react';
import Icon from './Icon';

const iconNamesMap = {
  facebook: 'facebook-f',
  pinterest: 'pinterest-p',
  twitter: 'twitter',
  instagram: 'instagram',
  email: 'envelope',
  linkedin: 'linkedin-in',
};

const IconSocial = ({
  name,
  className,
}) => {
  const iconName = iconNamesMap[name] || null;

  return iconName ? (
    <Icon
      name={iconName}
      className={className}
      type="fab"
    />
  ) : null;
};

export default IconSocial;
