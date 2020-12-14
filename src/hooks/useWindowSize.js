// @flow
import { useState } from 'react';
import useEventListener from '@hooks/useEventListener';

export const MQ = {
  XS: 480,
  SM: 767,
  MD: 992,
  LG: 1100,

  PALM: 480,
  LAP: 767,
  DESK: 1100,
};

// Return {} for window when unsing gatsbyBuild
const getWindow = () => (typeof window === 'undefined') ? {} : window;

const getSize = () => {
  const w = getWindow();

  return ({
    x: w.innerWidth,
    y: w.innerHeight,
  });
};

/**
 * Gets the window size and listens for resizes
 *
 * Usage:
 * const { width, isMobile } = useWindowSize();
 */

const useWindowSize = () => {
  const [size, setSize] = useState(getSize);

  const handleResize = () => {
    setSize(getSize());
  };

  useEventListener('resize', handleResize, getWindow());

  return {
    size,
    width: size.x,
    height: size.y,
    isMobile: (size.x < MQ.XS),
    isPalm: (size.x >= MQ.XS && size.x < MQ.SM),
    isTablet: (size.x >= MQ.SM && size.x < MQ.MD),
    isLaptop: (size.x >= MQ.MD && size.x < MQ.LG),
    isDesktop: (size.x > MQ.LG),

    isPalmAndUp: (size.x > MQ.XS),
    isTabletAndUp: (size.x > MQ.SM),
    isLaptopAndUp: (size.x > MQ.MD),
    isDesktopAndUp: (size.x > MQ.LG),
  };
};

export default useWindowSize;
