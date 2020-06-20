import React, { useCallback, useEffect } from 'react';
import { Line } from 'shared/base';
import { Card } from 'app/Card/Card';
import { Paginator } from 'app/Paginator/Paginator';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { getProgramsAsync } from 'data/programs/actions';
import { StoreType } from 'core/store';
import chunk from 'lodash/fp/chunk';

export const ProgrammsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProgramsAsync({}));
  }, [dispatch]);
  const programs = useSelector((state: StoreType) => state.programs.programs);
  const chunkedPrograms = chunk(4, programs);
  console.log({ programs });
  return <>
    {/* {
      chunkedPrograms.map((chunk, idx) => <Line key={idx}>
        {chunk.map((program, pidx) => <Card key={`program-${idx}-${pidx}`} title={program.name} description={`${program.disciplines} дисциплин`} />)}
      </Line>)
    } */}
     <Line>
        <Card title={'03.05.05 Педиатр'} description={'20 дисциплин'}></Card>
        <Card title={'03.05.05 Педиатр'} description={'20 дисциплин'}></Card>
        <Card title={'03.05.05 Педиатр'} description={'20 дисциплин'}></Card>
        <Card title={'03.05.05 Педиатр'} description={'20 дисциплин'}></Card>
      </Line>
      <Line>
        <Card title={'03.05.05 Педиатр'} description={'20 дисциплин'}></Card>
        <Card title={'03.05.05 Педиатр'} description={'20 дисциплин'}></Card>
        <Card title={'03.05.05 Педиатр'} description={'20 дисциплин'}></Card>
        <Card title={'03.05.05 Педиатр'} description={'20 дисциплин'}></Card>
      </Line>
      <Line mt='2' mb='2' justifyContent="end">
        <Paginator
          page={{
            items: [],
            totalItems: 10,
            totalPages: 4,
            currentPage: 1,
            pageSize: 8,
          }}
          setPage={() => {
            console.log();
          }}></Paginator>
      </Line>
  </>;
};