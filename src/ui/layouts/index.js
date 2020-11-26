import React from 'react';
import Container from './Container';
import Navigation from './Navigation';
import Footer from './Footer';
import './base.css';

const Template = ({ children }) => (
  <>
    <Navigation />
    <Container>
      {children}
    </Container>
    <Footer />
  </>
);

export default Template;
