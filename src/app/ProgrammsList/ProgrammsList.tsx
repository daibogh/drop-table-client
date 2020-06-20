import React, { useCallback, useEffect } from 'react';
import { Line } from 'shared/base';
import { Card } from 'app/Card/Card';
import { Paginator } from 'app/Paginator/Paginator';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { getProgramsAsync } from 'data/programs/actions';
import { StoreType } from 'core/store';
import chunk from 'lodash/fp/chunk'

export const ProgrammsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProgramsAsync({}));
  }, []);
  const programs = useSelector((state: StoreType) => state.programs.programs)
  const chunkedPrograms = chunk(4, programs)
  console.log({ programs })
  return <>
    {
      chunkedPrograms.map((chunk, idx) => <Line key={idx}>
        {chunk.map((program, pidx) => <Card key={`program-${idx}-${pidx}`} title={program.name} description={`${program.disciplines} дисциплин`} />)}
      </Line>)
    }
  </>;
};