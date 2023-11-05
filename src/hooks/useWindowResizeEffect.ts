import { useEffect } from 'react'

import debounce from 'lodash.debounce';

/**
 * Custom React hook for handling window resize events with debouncing.
 * Automatically triggers a callback when the window width exceeds a specified breakpoint.
 *
 * @param onResize - A callback function to execute when the window width exceeds the breakpoint.
 * @param breakpoint - The breakpoint width (default: 768 pixels) at which the callback should be triggered.
 * @param delay - The debounce delay (default: 250 milliseconds) to throttle the event listener.
 *
 * @example
 * const handleWindowResize = () => {
 *   // Handle window resize logic here
 * };
 *
 * useWindowResizeEffect(handleWindowResize, 768, 250);
 */
const useWindowResizeEffect = (onResize: () => void, breakpoint: number = 768, delay: number = 250) => {

    const handleResize = debounce(() => {

        if (window.innerWidth >= breakpoint) {
            onResize();
        }

    }, delay);

    useEffect(() => {

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);
}

export default useWindowResizeEffect;