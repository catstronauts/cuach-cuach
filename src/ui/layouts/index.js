import React from 'react';
import Footer from './Footer';
// import { Container } from './Container';
import { Navigation } from './Navigation';
import './base.scss';

const Template = ({ children }) => (
  <>
    <Navigation />
      {/* {children} */}
    {/* <Container> */}
      {children}
    {/* </Container> */}
    <Footer />
  </>
);

export default Template;
