import { combineReducers } from 'redux';
import { loaderReducer } from 'core/loader';

import {programsReducer} from './programs/reducer';

export const rootReducer = combineReducers({
  loader: loaderReducer,
  programs: programsReducer
});
