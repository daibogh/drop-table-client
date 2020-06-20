import { createAction } from "core/redux";
import { ActionType } from "data/actionTypes";

import { Program, Discipline, Parameter } from "./model";

export const getProgramsAsync = createAction<{
  offset?: number;
  limit?: number;
  category?: string;
  start_time?: string;
  end_time?: string;
}>(ActionType.PROGRAM_GETPROGRAMSASYNC);
export const setPrograms = createAction<Program[]>(
  ActionType.PROGRAM_SETPROGRAMS
);

export const getDisciplinesAsync = createAction<{
  category: string;
  offset: number;
  limit: number;
}>(ActionType.PROGRAM_GETDISCIPLINESASYNC);
export const setDisciplines = createAction<Discipline[]>(
  ActionType.PROGRAM_SETDISCIPLINES
);

export const createDisciplineAsync = createAction<{
  name: string;
  category: string;
  parametrs: Parameter[];
}>(ActionType.PROGRAM_CREATEDISCIPLINEASYNC);
