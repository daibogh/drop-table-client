import React, { useMemo, useState } from "react";
import { SelectField } from "shared/fields/selectField";
import { Line } from "shared/base/line";
import { Toggle } from "app/Toggle/Toggle";
import { useToggle } from "react-use";
import { Card } from "app/Card/Card";
import { Paginator } from "app/Paginator/Paginator";
import { Page } from "app/page/Page/Page";
import { ProgrammsList } from "app/ProgrammsList/ProgrammsList";
import { ProgramsGraph } from "app/ProgramsGraph/ProgramsGraph";
import { StoreType } from "core/store";
import { useSelector } from "react-redux";

interface ProgramListPageProps {
  className?: string;
}

export const ProgramListPage: React.FC<ProgramListPageProps> = ({
  className,
}) => {
  const programs = useSelector((state: StoreType) => state.programs.programs);
  const [isList, toggle] = useToggle(true);
  const [category, setCategory] = useState<string>('');

  const options = useMemo(() => {
    const map = new Map<string, string>();
    programs.forEach((x) => map.set(x.category, x.category));
    return map;
  }, [programs]);

  return (
    <Page title="Список образовательных программ">
      <Line h="100" vertical className={`ProgramListPage ${className}`}>
        <Line justifyContent="between">
          <SelectField
            value={category}
            options={options}
            getLabel={(x) => x}
            onChange={(v) => setCategory(v)}
          ></SelectField>{" "}
          <Toggle on={isList} toggle={toggle}></Toggle>
        </Line>
        <>{isList ? <ProgrammsList category={category} /> : <ProgramsGraph />}</>
      </Line>
    </Page>
  );
};