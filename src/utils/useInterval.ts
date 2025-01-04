import { useEffect, useRef } from 'react';

type ActiveCallback = (isActive: boolean) => void;

/**
 * Interval hook
 * @param callback the callback function
 * @param delay the delay in milliseconds
 * @param startImmediately true to start the interval immediately, false otherwise
 * @param isActive true to activate the interval, false otherwise
 * @returns a function to set isActive
 */
export const useInterval = (
  callback: () => unknown,
  delay: number,
  startImmediately: boolean = true,
  isActive: boolean = true,
): ActiveCallback => {
  const savedCallback = useRef<() => void>();
  const active = useRef(isActive);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    console.log('Setting up interval, active?', active);
    if (!active.current) {
      return;
    }
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    const id = setInterval(tick, delay);
    return () => clearInterval(id); // Cleanup interval on unmount or delay change.
  }, [delay, active]);

  // Start the interval immediately.
  useEffect(() => {
    if (startImmediately && active) {
      savedCallback.current?.();
    }
  }, [startImmediately, active]);

  // Return a function to set isActive.
  return (isActive: boolean) => {
    active.current = isActive;
  };
};
