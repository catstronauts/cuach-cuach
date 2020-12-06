// @flow
import { useRef, useEffect } from 'react';

/**
 * Adds an event listener
 *
 * Usage:
 * useEventListener('mousemove', handlePosition, window);
 *
 * @param  eventName Name of event.
 * @param  handler A function that will be called whenever eventName fires on element.
 * @param  element An optional element to listen on. Defaults to window (i.e., document).
 */

const useEventListener = (
  eventName,
  handler,
  element = window
) => {
  // Create a ref that stores handler
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Make sure element supports addEventListener
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    // Create event listener that calls handler function stored in ref
    const eventListener = (event) => savedHandler.current(event);

    // Add event listener
    element.addEventListener(eventName, eventListener);

    // Remove event listener on cleanup
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]); // Re-run if eventName or element changes
};

export default useEventListener;
