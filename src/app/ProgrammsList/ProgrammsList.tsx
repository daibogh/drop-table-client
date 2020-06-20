import React, { useCallback, useEffect, useMemo } from "react";
import { Line } from "shared/base";
import { Card } from "app/Card/Card";
import { Paginator } from "app/Paginator/Paginator";
import { useDispatch, useStore, useSelector } from "react-redux";
import { getProgramsAsync, setPrograms } from "data/programs/actions";
import { StoreType } from "core/store";
import chunk from "lodash/fp/chunk";
import useSWR from "swr";
import { baseUrl } from "app/constants";
import { Program } from "data/programs/model";
import queryString from "query-string";

interface ProgrammsListProps {
  category?: string;

}

export const ProgrammsList = (props: ProgrammsListProps) => {
  const params = queryString.stringify(props);
  const dispatch = useDispatch();

  const { data: programs, error } = useSWR<Program[], Program[]>(
    `${baseUrl}/program?${params}`,
    async (url: string) => (await fetch(url)).json()
  );

  useEffect(() => {
    dispatch(setPrograms(programs));
  }, [programs]);

  if (!programs) {
    return <>данные обрабатываются... </>;
  }
  const chunkedPrograms = chunk(4, programs);
  console.log({ programs });
  if (!programs.length) {
    return <>данных нет</>;
  }
  return (
    <Line vertical>
      {chunkedPrograms.map((chunk, idx) => (
        <Line key={idx}>
          {chunk.map((program, pidx) => (
            <Line pb="1" w="25" key={`program-${idx}-${pidx}`}>
              <Card
                id={program.id}
                title={program.name}
                description={`${program.disciplines.length} дисциплин`}
              ></Card>
            </Line>
          ))}
        </Line>
      ))}

      <Line mt="2" mb="2" justifyContent="end">
        <Paginator
          page={{
            items: [],
            totalItems: programs?.length,
            totalPages: programs?.length / 8,
            currentPage: 1,
            pageSize: 8,
          }}
          setPage={() => {
            console.log();
          }}
        ></Paginator>
      </Line>
    </Line>
  );
};