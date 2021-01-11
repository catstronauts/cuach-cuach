// https://transitionlink.tylerbarnes.ca/docs/transitionportal/
// https://gatsby-plugin-transition-link.netlify.app/

import React from 'react';
import { TransitionState } from "gatsby-plugin-transition-link";

const Portal = () => (
  <TransitionState>
    {({ mount, transitionStatus }) => {
      console.log(transitionStatus);
      console.log(mount);

      return (
        <div />
      )
    }}
  </TransitionState>
);

export default Portal;
