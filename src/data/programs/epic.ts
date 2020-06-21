import { createEpic } from "core/epic";
import { map, ignoreElements } from "rxjs/operators";
import { combineEpics } from "redux-observable";

import {
  getPrograms,
  getDisciplines,
  createDiscipline,
  createProgram,
  getParametrs,
} from "./api";
import {
  getProgramsAsync,
  setPrograms,
  getDisciplinesAsync,
  setDisciplines,
  createDisciplineAsync,
  createProgramAsync,
  getParametrsAsync,
  setParametrs,
} from "./actions";

const getProgramsEpic = createEpic(getProgramsAsync, (data) => {
  return getPrograms(
    data.offset,
    data.limit,
    data.category,
    data.start_time,
    data.end_time
  ).pipe(map((response) => setPrograms(response)));
});

const getDisciplinesEpic = createEpic(getDisciplinesAsync, (data) => {
  return getDisciplines(data.category, data.offset, data.limit).pipe(
    map((response) => setDisciplines(response))
  );
});

const createDisciplineEpic = createEpic(createDisciplineAsync, (data) => {
  return createDiscipline(data.name, data.category, data.parametrs).pipe(
    ignoreElements()
  );
});

const createProgramEpic = createEpic(createProgramAsync, (data) => {
  return createProgram(data).pipe(ignoreElements());
});

const getParametrsEpic = createEpic(getParametrsAsync, () => {
  return getParametrs().pipe(map((response) => setParametrs(response)));
});

export const programsEpic = combineEpics(
  getProgramsEpic,
  getDisciplinesEpic,
  createDisciplineEpic,
  createProgramEpic,
  getParametrsEpic
);
