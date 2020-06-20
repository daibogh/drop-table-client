import React from 'react'
import { Line } from 'shared/base';
import { Card } from 'app/Card/Card';
import { Paginator } from 'app/Paginator/Paginator';


export const ProgrammsList = () => {
  return <>
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
    <Line justifyContent="end">
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
  </>
}