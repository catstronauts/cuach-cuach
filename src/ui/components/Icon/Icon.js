import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import styles from './Icon.module.scss';

library.add(fab, fas);

const Icon = ({
  name = 'coffee',
  type = 'fas',
  clickable = false,
  className,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={classnames(
      styles.wrapper,
      clickable && styles.clickable,
      className
    )}
  >
    <FontAwesomeIcon
      icon={[type, name]}
      className={styles.icon}/>
  </div>
);

export default Icon;
