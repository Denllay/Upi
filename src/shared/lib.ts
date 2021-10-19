export const getLocalStorage = <T>(key: string): T => {
  const item = window.localStorage.getItem(key);

  return item ? JSON.parse(item) : null;
};

export const setLocalStorage = <T>(key: string, item: T): void => {
  window.localStorage.setItem(key, JSON.stringify(item));
};

export const Base64Decode = (str: string) => {
  return decodeURIComponent(
    atob(str)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
};

interface SortFilesByTypePayload {
  type: 'file' | 'dir';
}

export const sortFilesByType = ({ type }: SortFilesByTypePayload) => {
  if (type === 'dir') {
    return -1;
  }
  return 1;
};
