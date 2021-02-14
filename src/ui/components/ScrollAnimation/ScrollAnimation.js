// https://dbramwell.github.io/react-animate-on-scroll/#home
// https://github.com/roderickhsiao/react-in-viewport

import React from 'react';
import classnames from 'classnames';
import handleViewport from 'react-in-viewport';
import { useBoolean } from '@hooks/useBoolean';
import styles from './ScrollAnimation.module.scss';

const Block = ({ children, className, forwardedRef }) => (
  <div className={className} ref={forwardedRef}>
    {children}
  </div>
);

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

const Component = ({ children, animation, className }) => {
  const [viewed, viewedActions] = useBoolean(false);

  return (
    <ViewportBlock
      onEnterViewport={viewedActions.setTrue}
      // onLeaveViewport={() => console.log('leave')}
      className={classnames(
        animation,
        styles.animation,
        viewed
          ? styles.active
          : styles.inactive,
        className
      )}
    >
      {children}
    </ViewportBlock>
  );
};

export default Component;
