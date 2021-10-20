import { useState } from 'react';

export const useCopy = () => {
  const [isCopy, setCopy] = useState(false);

  const copyData = (data: string) => {
    if (data) {
      navigator.clipboard.writeText(data);
      setCopy(true);
    }
  };

  const handleClose = () => {
    setCopy(false);
  };

  return { isCopy, copyData, handleClose };
};
