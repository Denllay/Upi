interface Payload {
  type: 'file' | 'dir';
}
export const sortFilesByType = ({ type }: Payload) => {
  if (type === 'dir') {
    return -1;
  }
  return 1;
};
