import React from 'react';
import classnames from 'classnames';
import styles from './SideMenu.module.scss';

const Overlay = ({ isOpen, onClose }) => (
  <div className={classnames(
    styles.overlay,
    isOpen && styles.overlay__isOpen
  )}
  onClick={onClose}
  />
);

export default Overlay;
