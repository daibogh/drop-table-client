import { createReducer } from 'core/redux';
import { ActionType } from 'data/actionTypes';

import { Program, Discipline } from './model';

export interface ProgramsState {
  programs: Program[];
  disciplines: Discipline[];
}

const initialState: () => ProgramsState = () => ({
  programs: [],
  disciplines: [],
});

export const programsReducer = createReducer<ProgramsState>(initialState, {
  [ActionType.PROGRAM_SETPROGRAMS]: 'programs',
  [ActionType.PROGRAM_SETDISCIPLINES]: 'disciplines',
});
