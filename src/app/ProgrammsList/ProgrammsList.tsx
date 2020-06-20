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

interface ProgrammsListProps {
  category?: string | null
}

export const ProgrammsList = (props: ProgrammsListProps) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProgramsAsync({}));
  // }, []);
  // const programs = useSelector((state: StoreType) => state.programs.programs)
  const esc = encodeURIComponent;
  const params = Object.keys(props)
    .map(k => {
      return params && params[k] ? esc(k) + '=' + esc(props[k]) : ''
    }).join('&');
  const { data: programs, error } = useSWR<any, Program[]>(`${baseUrl}/program`,
    async (url: string) => (await fetch(`${url}?${params}`)).json());
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