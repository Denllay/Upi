import { searchEntryAdded } from '@shared/api/github/SearchEntryAdded';
import { UpdateCountResults } from './slice';

export const GetCountResults = searchEntryAdded.attach(
  (coutResult: number): AppThunk =>
    (dispatch) => {
      dispatch(UpdateCountResults(coutResult));
    }
);
