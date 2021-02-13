// https://dbramwell.github.io/react-animate-on-scroll/#home
// https://github.com/roderickhsiao/react-in-viewport

import React, { useState } from 'react';
import classnames from 'classnames';
import handleViewport from 'react-in-viewport';

const Block = ({ children, className, forwardedRef }) => (
  <div className={className} ref={forwardedRef}>
    {children}
  </div>
);

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

const Component = ({
  children,
  className,
  classNameIn = '',
}) => {
  const [viewed, setViewed] = useState(false);
  const handleOnView = () => {
    setViewed(true);
  };

  return (
    <ViewportBlock
      onEnterViewport={handleOnView}
      // onLeaveViewport={() => console.log('leave')}
      className={classnames(
        viewed && classNameIn,
        className
      )}
    >
      {children}
    </ViewportBlock>
  );
};

export default Component;
