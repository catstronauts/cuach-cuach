import React from 'react';
import { LINKS } from '@src/constants';
import { NavigationBar } from './NavigationBar';
import { SideMenu } from './SideMenu';
import styles from './Navigation.module.scss';

const menuItems = [
  LINKS.HOME,
  LINKS.GALLERY,
  LINKS.ABOUT,
  LINKS.CONTACT_US,
];

const Navigation = (props) => (
  <>
    <SideMenu options={menuItems} className={styles.mob} {...props} />
    <NavigationBar options={menuItems} className={styles.desk} {...props} />
  </>
);

export default Navigation;
