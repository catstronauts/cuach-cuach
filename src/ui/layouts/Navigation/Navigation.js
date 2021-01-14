import React from 'react';
import { useAppContext } from '@layouts';
import { LINKS } from '@src/constants';
import { NavigationBar } from './NavigationBar';
import { SideMenu } from './SideMenu';

const menuItems = [
  LINKS.HOME,
  LINKS.GALLERY,
  LINKS.ABOUT,
  LINKS.CONTACT_US,
];

const Navigation = () => {
  const { windowProps = {} } = useAppContext();
  const { isDesktop } = windowProps;
  console.log('Navigation', isDesktop);
  console.log(windowProps);
  
  return (
    <>
      <NavigationBar options={menuItems} className={!isDesktop && 'hidden'} />
      <SideMenu options={menuItems} className={isDesktop && 'hidden'} />
    </>
  );
};
export default Navigation;
