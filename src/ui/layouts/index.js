import React from 'react';
import Container from './Container';
import Navigation from './Navigation';
import './base.scss';

const Template = ({ children }) => (
  <>
    <Navigation />
    <Container>
      {children}
    </Container>
  </>
);

export default Template;
