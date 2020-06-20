import { combineReducers } from 'redux';
import { loaderReducer } from 'core/loader';

export const rootReducer = combineReducers({
  loader: loaderReducer,
});
