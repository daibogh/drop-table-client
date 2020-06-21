import React, { useCallback, useEffect, useState, useMemo } from "react";
import { Line } from "shared/base/line";
import { TextBoxField } from "shared/fields/textBoxField";
import { Page } from "app/page/Page/Page";
import { TextareaField } from "shared/fields/textareaField";
import { Button } from "shared/base/button";
import { Icon } from "shared/base";
import { useMatchParams } from "core/router";
import {
  Program,
  NewProgram,
  Parameter,
  Discipline,
} from "data/programs/model";
import { StoreType } from "core/store";
import { useSelector, useDispatch } from "react-redux";
import {
  createProgramAsync,
  getParametrsAsync,
  getDisciplinesAsync,
} from "data/programs/actions";
import { DateTime } from "shared/base/utils/dateTime";
import { getParametrs } from "data/programs/api";
import { SelectField, MultiselectField } from "shared/fields";
import "./ProgramPage.scss";

export const categoriesMap = new Map([
  ["", "все"],
  ["Физика", "Физика"],
  ["Математика", "Математика"],
  ["Биология", "Биология"],
  ["Медицина", "Медицина"],
  ["Информатика", "Информатика"],
  ["Экология", "Экология"],
  ["Экономика", "Экономика"],
  ["Химия", "Химия"],
  ["Социология", "Социология"],
  ["Лингвистика", "Лингвистика"],
  ["Филология", "Филология"],
  ["Философия", "Философия"],
  ["Риторика", "Риторика"],
  ["Программирование", "Программирование"],
  ["Политология", "Политология"],
  ["Правоведение", "Правоведение"],
  ["Культурология", "Культурология"],
  ["Геополитика", "Геополитика"],
  ["Алгебра", "Алгебра"],
]);

export const ProgramPage: React.FC = () => {
  const dispatch = useDispatch();

  const { parametrs, disciplines } = useSelector(
    (state: StoreType) => state.programs
  );

  const [localParamters, setLocalParametrs] = useState<Parameter[]>(parametrs);
  const [localDisciplines, setLocalDisciplines] = useState<string[]>([]);
  const [category, setCategory] = useState<string | undefined>("");

  useEffect(() => {
    dispatch(getDisciplinesAsync({ category: "", offset: 1, limit: 20 }));
    dispatch(getParametrsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (parametrs.length > 0 && localParamters.length === 0)
      setLocalParametrs(parametrs);
  }, [localParamters, parametrs]);

  const [program, setProgram] = useState<NewProgram>({
    name: "Программная инженерия",
    description: "Успешная программа",
    hours: 1252,
    category: "Программирование",
    disciplines: [],
    created_at: "2020-06-21T00:10:12.502Z",
    deleted_at: "2020-06-21T00:10:12.502Z",
    parameters: parametrs,
  });

  const onSave = useCallback(() => {
    const arr = disciplines.flatMap((x) =>
      localDisciplines.includes(x.name) ? [x.id] : []
    );
    dispatch(
      createProgramAsync({
        ...program,
        category: category,
        parameters: parametrs,
        disciplines: arr,
      })
    );
  }, [dispatch, program, localDisciplines, disciplines, category, parametrs]);

  const setParametr = useCallback(
    (v: Parameter, val: number | string, type: string) => {
      return [
        ...localParamters.slice(0, v.id - 1),
        { ...v, [type]: val },
        ...localParamters.slice(v.id),
      ];
    },
    [localParamters]
  );

  const getCriteriaCard = useCallback(
    (criteria: Parameter) => {
      return (
        <Line
          key={criteria.id}
          className="criteria-card"
          alignItems="center"
          justifyContent="between"
        >
          <div className="criteria-name">{criteria.name}</div>
          <TextBoxField
            w="25"
            ml="1"
            mr="2"
            name="criteria-weight"
            value={criteria.value.toString()}
            onChange={(v) =>
              setLocalParametrs(setParametr(criteria, v, "value"))
            }
            type="number"
            inline
          >
            значение
          </TextBoxField>
          <TextBoxField
            w="25"
            name="criteria-weight"
            value={criteria.weight.toString()}
            onChange={(v) =>
              setLocalParametrs(setParametr(criteria, Number(v), "weight"))
            }
            type="number"
            inline
          >
            вес
          </TextBoxField>
        </Line>
      );
    },
    [setParametr]
  );

  const getDisciplineCard = useCallback(() => {
    const map = new Map(disciplines.map((x) => [x.name, x.name]));
    return (
      <MultiselectField
        value={localDisciplines}
        getLabel={(x) => x}
        onChange={(v) => setLocalDisciplines(v)}
        options={map}
      ></MultiselectField>
    );
  }, [disciplines, localDisciplines]);

  return (
    <Page title="Добавление образовательной программы">
      <Line className="ProgramPage" vertical>
        <Line>
          <Line vertical w="50" mr="5">
            <div className="part-title">Паспорт программы</div>
            <TextBoxField
              name="title"
              value={program.name}
              onChange={(v) => setProgram({ ...program, name: v })}
              mb="2"
            >
              Название
            </TextBoxField>
            <TextareaField
              name="description"
              value={program.description}
              onChange={(v) => setProgram({ ...program, description: v })}
            >
              Описание
            </TextareaField>
            <TextBoxField
              name="hours"
              value={program.hours.toString()}
              onChange={(v) => setProgram({ ...program, hours: parseInt(v) })}
              type="number"
              mt="2"
            >
              Количество академических часов
            </TextBoxField>
            <Line w="100" mt="4">
              <SelectField
                value={category}
                options={categoriesMap}
                getLabel={(x) => x}
                onChange={setCategory}
              ></SelectField>
            </Line>
            <Line justifyContent="between" className="part-title" mt="3">
              Дисциплины
            </Line>
            {getDisciplineCard()}
          </Line>
          <Line vertical w="50">
            <div className="part-title">Веса критериев анализа</div>
            {localParamters.map((x) => getCriteriaCard(x))}
          </Line>
        </Line>
      </Line>
      <Line justifyContent="end" mt="3">
        <Button onClick={onSave} className="btn btn-primary">
          Сохранить
        </Button>
      </Line>
    </Page>
  );
};
