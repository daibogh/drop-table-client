import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Line } from "shared/base";
import chunk from "lodash/fp/chunk";
import useSWR from "swr";
import { baseUrl } from "app/constants";
import { Program } from "data/programs/model";
import queryString from "query-string";
import { setPrograms } from "data/programs/actions";
import { useDispatch } from "react-redux";
import { Card } from "app/Card/Card";
import { Paginator } from "app/Paginator/Paginator";

interface ProgrammsListProps {
  category?: string;
}

export const ProgrammsList = (props: ProgrammsListProps) => {
  const [page, setPage] = useState(1);
  let rawParams: any = { offset: (page - 1) * 8, limit: 8 };
  if (props?.category) {
    rawParams = { ...rawParams, category: props?.category };
  }
  const params = queryString.stringify(rawParams);
  const dispatch = useDispatch();

  const { data: programs, error } = useSWR<Program[], Program[]>(
    `${baseUrl}/program?${params}`,
    async (url: string) => (await fetch(url)).json()
  );
  const { data: spiderData, error: spiderError } = useSWR<Program[], Program[]>(
    `${baseUrl}/program/spider?${params}`,
    async (url: string) => (await fetch(url)).json()
  );

  useEffect(() => {
    dispatch(setPrograms(programs));
  }, [programs, dispatch]);

  if (!programs) {
    return <>данные обрабатываются... </>;
  }
  const chunkedPrograms = chunk(4, programs);

  return (
    <Line vertical>
      <Line>
        {chunkedPrograms?.[0]?.map((program, pidx) => (
          <Line pb="1" w="25" key={program.id}>
            <Card
              id={program.id}
              title={program.name}
              description={`${program.disciplines.length} дисциплин`}
            ></Card>
          </Line>
        ))}
      </Line>
      <Line>
        {chunkedPrograms?.[1]?.map((program, pidx) => (
          <Line pb="1" w="25" key={program.id}>
            <Card
              id={program.id}
              title={program.name}
              description={`${program.disciplines.length} дисциплин`}
            ></Card>
          </Line>
        ))}
      </Line>

      <Line mt="2" mb="2" justifyContent="end">
        {spiderData ? (
          <Paginator
            page={{
              items: [...spiderData?.map((_, idx) => idx)],
              totalItems: spiderData?.length,
              totalPages: Math.ceil(spiderData?.length / 8),
              currentPage: page,
              pageSize: 8,
            }}
            setPage={(idx) => {
              setPage(idx);
            }}
          ></Paginator>
        ) : null}
      </Line>
    </Line>
  );
};
