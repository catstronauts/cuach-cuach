import React from 'react';
import { NavigationBar } from './NavigationBar';
import { SideMenu } from './SideMenu';
import styles from './Navigation.module.scss';

const menuItems = [
  {
    to: "/",
    caption: "Home",
  },
  {
    to: "/blog/",
    caption: "Blog",
  },
  {
    to: "/",
    caption: "About",
  },
  {
    to: "/",
    caption: "Contáctanos",
  },
];

const Navigation = () => (
  <>
    <NavigationBar
      options={menuItems}
      className={styles.navigationBar}
    />
    <SideMenu
      options={menuItems}
      className={styles.sideBar}
    />
  </>
);

export default Navigation;
