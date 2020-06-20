import { combineEpics } from 'redux-observable';

import { programsEpic} from './programs/epic';

export const rootEpic = combineEpics(programsEpic);
