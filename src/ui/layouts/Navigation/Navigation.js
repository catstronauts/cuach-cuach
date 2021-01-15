import React from 'react';
// import { useAppContext } from '@layouts';
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

const Navigation = () => {
  // const { windowProps = {} } = useAppContext();
  // const { isDesktop } = windowProps;
  // console.log('Navigation', isDesktop);
  // console.log(windowProps);

  return (
    <>
      <SideMenu options={menuItems} className={styles.mob} />
      <NavigationBar options={menuItems} className={styles.desk} />
      {/* <NavigationBar options={menuItems} className={!isDesktop && 'hidden'} />
      <SideMenu options={menuItems} className={isDesktop && 'hidden'} /> */}
    </>
  );
};

export default Navigation;
