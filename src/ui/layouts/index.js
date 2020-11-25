import React from 'react';
import Container from './Container';
import Navigation from './Navigation';
import './base.css';

const Template = ({ children }) => (
  <Container>
    <Navigation />
    {children}
  </Container>
);

export default Template;
