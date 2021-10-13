import { Viewer } from './slice';

export { useViewer } from './selectors';
export { initialViewer } from './actions';
export default Viewer.reducer;
export const { UpdateUserDetails, ClearUserDetails } = Viewer.actions;
