import { combineReducers } from 'redux';
import { loaderReducer, LoaderState } from 'core/loader';

import { programsReducer, ProgramsState } from './programs/reducer';

export const rootReducer = combineReducers({
  loader: loaderReducer,
  programs: programsReducer
}) as () => { loader: LoaderState; programs: ProgramsState; };
