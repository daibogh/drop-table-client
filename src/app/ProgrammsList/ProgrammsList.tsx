import React, { useCallback, useEffect, useMemo } from 'react';
import { Line } from 'shared/base';
import { Card } from 'app/Card/Card';
import { Paginator } from 'app/Paginator/Paginator';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { getProgramsAsync } from 'data/programs/actions';
import { StoreType } from 'core/store';
import chunk from 'lodash/fp/chunk'
import useSWR from 'swr';
import { baseUrl } from 'app/constants';
import { Program } from 'data/programs/model';
import queryString from 'query-string'
interface ProgrammsListProps {
  category?: string
}

export const ProgrammsList = (props: ProgrammsListProps) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProgramsAsync({}));
  // }, []);
  // const programs = useSelector((state: StoreType) => state.programs.programs)
  const params = queryString.stringify(props)
  const { data: programs, error } = useSWR<any, Program[]>(`${baseUrl}/program?${params}`,
    async (url: string) => (await fetch(url)).json());
  // const d = useMemo(() => calculateGraphData(data || []), [data]);
  console.log(error)
  if (!programs) {
    return <>данные обрабатываются... </>;
  }
  const chunkedPrograms = chunk(4, programs)
  console.log({ programs })
  return <>
    {
      chunkedPrograms.map((chunk, idx) => <Line key={idx}>
        {chunk.map((program, pidx) => <Card key={`program-${idx}-${pidx}`} title={program.name} description={`${program.disciplines.length} дисциплин`} />)}
      </Line>)
    }
  </>;
}