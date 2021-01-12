import React from 'react';
import useWindowSize from '@hooks/useWindowSize';
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
  const { isDesktop } = useWindowSize();

  return (
    <>
      <NavigationBar options={menuItems} className={!isDesktop && 'hidden'} />
      <SideMenu options={menuItems} className={isDesktop && 'hidden'} />
    </>
  );
};
export default Navigation;
