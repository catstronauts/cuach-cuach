import React from 'react';
import classnames from 'classnames';
// import TransitionLink from 'gatsby-plugin-transition-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from './Link.module.scss';

const Component = ({
  to,
  onClick = null,
  children,
  className,
  classNameActive,
  withEffectTransition = true,
  highlight = false,
}) => (
  <AniLink
    to={to}
    onClick={onClick}
    activeClassName={classNameActive}
    className={classnames(
      styles.link,
      highlight && styles.highlight,
      className
    )}

    fade={withEffectTransition}

    // cover={withEffectTransition}
    // direction="right"

    // paintDrip={withEffectTransition}
    // hex="#57b0ec"

    // exit={{ length: 0.5 }}
    // entry={{ delay: 5.5 }}
  >
    {children}
  </AniLink>
);

export default Component;
