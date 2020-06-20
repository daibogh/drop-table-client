import { createEpic } from "core/epic";
import { map, ignoreElements } from "rxjs/operators";
import { combineEpics } from "redux-observable";

import { getPrograms, getDisciplines, createDiscipline } from "./api";
import {
  getProgramsAsync,
  setPrograms,
  getDisciplinesAsync,
  setDisciplines,
  createDisciplineAsync,
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

export const programsEpic = combineEpics(getProgramsEpic, getDisciplinesEpic, createDisciplineEpic);
