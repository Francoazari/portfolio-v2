import { useRef, useEffect } from "react";
/**
 * Sets and removes event listeners
 *
 * @param {string} event                              - A string which represents the event to listen
 * @param {Function} callback                         - The callback function for the event listener
 * @param {HTMLElement} [target]                      - Target element (window by default)
 * @param {boolean | AddEventListenerOptions} options - The event listener options
 */
const useEventListener = (event, callback, target = window, options) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const supportsEventListener = target && target.addEventListener;

        if (!supportsEventListener) return;

        const eventListener = (event) => savedCallback.current(event);
        target.addEventListener(event, eventListener, options);
        return () => target.removeEventListener(event, eventListener, options);
    }, [event, target, options]);
};
export default useEventListener;
