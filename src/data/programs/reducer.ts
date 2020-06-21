import { createReducer } from "core/redux";
import { ActionType } from "data/actionTypes";

import { Program, Discipline, Parameter } from "./model";

export interface ProgramsState {
  programs: Program[];
  disciplines: Discipline[];
  parametrs: Parameter[];
}

const initialState: () => ProgramsState = () => ({
  programs: [],
  disciplines: [],
  parametrs: [],
});

export const programsReducer = createReducer<ProgramsState>(initialState, {
  [ActionType.PROGRAM_SETPROGRAMS]: "programs",
  [ActionType.PROGRAM_SETDISCIPLINES]: "disciplines",
  [ActionType.PROGRAM_SETPARAMETRS]: "parametrs",
});
