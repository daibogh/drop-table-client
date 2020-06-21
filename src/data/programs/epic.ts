import { createEpic } from "core/epic";
import { map, ignoreElements, tap } from "rxjs/operators";
import { combineEpics } from "redux-observable";

import {
  getPrograms,
  getDisciplines,
  createDiscipline,
  createProgram,
  getParametrs,
  getStats,
  getProgram,
  updateProgram,
} from "./api";
import {
  getProgramsAsync,
  setPrograms,
  getDisciplinesAsync,
  setDisciplines,
  createDisciplineAsync,
  getStatsAsync,
  setStats,
  getProgramAsync,
  setProgram,
  createProgramAsync,
  getParametrsAsync,
  setParametrs,
  updateProgramAsync,
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

const getStatsEpic = createEpic(getStatsAsync, (data) => {
  return getStats().pipe(map((response) => setStats(response)));
});

const getProgramEpic = createEpic<{ id: number }>(getProgramAsync, (data) => {
  return getProgram(data.id).pipe(map((response) => setProgram(response)));
});

const createProgramEpic = createEpic(createProgramAsync, (data) => {
  return createProgram(data.newProgram).pipe(
    tap((response) => data.onResponseCallback(response)),
    ignoreElements()
  );
});

const getParametrsEpic = createEpic(getParametrsAsync, () => {
  return getParametrs().pipe(map((response) => setParametrs(response)));
});

const updateProgramEpic = createEpic(updateProgramAsync, (data) => {
  return updateProgram(data).pipe(ignoreElements());
});

export const programsEpic = combineEpics(
  getProgramsEpic,
  getDisciplinesEpic,
  createDisciplineEpic,
  getStatsEpic,
  getProgramEpic,
  createProgramEpic,
  getParametrsEpic,
  updateProgramEpic
);
