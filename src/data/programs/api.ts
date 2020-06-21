import { http } from "core/http";
import { baseUrl } from "app/constants";

import { Program, Discipline, Parameter, NewProgram } from "./model";

export function getPrograms(
  offset: number,
  limit: number,
  category: string,
  start_time: string,
  end_time: string
) {
  return http.get<Program[]>(baseUrl + "/program", {
    offset,
    limit,
    category,
    start_time,
    end_time,
  });
}

export function getDisciplines(
  category: string,
  offset: number,
  limit: number
) {
  return http.get<Discipline[]>(baseUrl + "/discipline", {
    category,
    offset,
    limit,
  });
}

export function createDiscipline(
  name: string,
  category: string,
  parametrs: Parameter[]
) {
  return http.post(baseUrl + "/discipline", { name, category, parametrs });
}
export function getStats() {
  return http.get(baseUrl + "/program/stats");
}

export function getProgram(id: number) {
  return http.get(baseUrl + `/program/%7Bid%7D?program_id=${id}`);
}

export function createProgram(program: NewProgram) {
  return http.post(baseUrl + "/program", JSON.stringify(program));
}

export function getParametrs() {
  return http.get<Parameter[]>(baseUrl + "/parameter");
}