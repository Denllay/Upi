export const getLocalStorage = <T>(key: string): T => {
  const item = window.localStorage.getItem(key);

  return item ? JSON.parse(item) : null;
};

export const setLocalStorage = <T>(key: string, item: T): void => {
  window.localStorage.setItem(key, JSON.stringify(item));
};
