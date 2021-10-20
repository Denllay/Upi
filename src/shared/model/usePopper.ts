import { useEffect, useRef, useState } from 'react';

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

  const togglePopper = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  return { isOpen, togglePopper, anchorEl };
};
