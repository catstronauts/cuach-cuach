import React from 'react';
import useWindowSize from '@hooks/useWindowSize';
import { NavigationBar } from './NavigationBar';
import { SideMenu } from './SideMenu';

const menuItems = [
  {
    to: '/',
    caption: 'Home',
  },
  {
    to: '/blog/',
    caption: 'Blog',
  },
  {
    to: '/',
    caption: 'About',
  },
  {
    to: '/',
    caption: 'Contáctanos',
  },
];

const Navigation = () => {
  const { isDesktop } = useWindowSize();

  return isDesktop
    ? <NavigationBar options={menuItems} />
    : <SideMenu options={menuItems} />;
};
export default Navigation;
