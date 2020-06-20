import { createReducer } from 'core/redux';
import { ActionType } from 'data/actionTypes';

import { Program, Discipline } from './model';

interface ProgramsInitialState {
  programs: Program[];
  disciplines: Discipline[];
}

const initialState: () => ProgramsInitialState = () => ({
  programs: [],
  disciplines: [],
});

export const programsReducer = createReducer(initialState, {
  [ActionType.PROGRAM_SETPROGRAMS]: 'programs',
  [ActionType.PROGRAM_SETDISCIPLINES]: 'disciplines',
});
