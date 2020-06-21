import React, { useState } from "react";
import { Page } from "app/page/Page/Page";
import { Line } from "shared/base";
import { useToggle } from "react-use";
import { useSelector } from "react-redux";
import { SelectField } from "shared/fields";
import { Toggle } from "app/Toggle/Toggle";
// import { ProgramsGraph } from "app/ProgramsGraph/ProgramsGraph";
import { StoreType } from "core/store";
import { ProgrammsList } from "app/ProgrammsList/ProgrammsList";

interface ProgramListPageProps {
  className?: string;
}

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

export const ProgramListPage: React.FC<ProgramListPageProps> = ({
  className,
}) => {

  const [isList, toggle] = useToggle(true);
  const [category, setCategory] = useState<string | undefined>("");

  return (
    <Page title="Список образовательных программ">
      <Line h="100" vertical className={`ProgramListPage ${className}`}>
        <Line justifyContent="between">
          <SelectField
            value={category}
            options={categoriesMap}
            getLabel={(x) => x}
            onChange={setCategory}
          ></SelectField>
          <Toggle on={isList} toggle={toggle}></Toggle>
        </Line>
        <div style={{ height: "100vh" }}>
          {isList ? (
            <ProgrammsList category={category} />
          ) : (
            // <ProgramsGraph />
            <></>
          )}
        </div>
      </Line>
    </Page>
  );
};
