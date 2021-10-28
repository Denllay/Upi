import { useEffect, useRef, useState, SyntheticEvent } from 'react';

export const usePopper = <T = HTMLElement>() => {
  const [isOpen, setOpen] = useState(false);
  const anchorEl = useRef<T>(null);

  useEffect(() => {
    const closePopper = () => setOpen(false);
    window.addEventListener('click', closePopper);
    return () => {
      window.removeEventListener('click', closePopper);
    };
  }, []);

  const togglePopper = (e: SyntheticEvent) => {
    e.stopPropagation();

    setOpen((prev) => !prev);
  };

  const openPopper = (e: SyntheticEvent) => {
    e.stopPropagation();

    setOpen(true);
  };

  const closePopper = (e: SyntheticEvent) => {
    e.stopPropagation();

    setOpen(false);
  };

  return { isOpen, togglePopper, openPopper, closePopper, anchorEl };
};
