import React from 'react';
import { SelectField } from 'shared/fields/selectField';
import { Line } from 'shared/base/line';
import { Toggle } from 'app/Toggle/Toggle';
import { Card } from 'app/Card/Card';
import { Paginator } from 'app/Paginator/Paginator';

interface ProgramListPageProps {
  className?: string;
}

export const callInOptions = new Map([
  ['0', 'Select'],
  ['name', 'Name'],
  ['number', 'Number'],
  ['seniority', 'SeniorityHelper'],
  ['telephone', 'Phone'],
  ['callInSched', 'Call In Schedules'],
  ['bookSelSeq', 'BookSelSeq'],
  ['plant', 'Facility'],
  ['department', 'Department'],
  ['class', 'Class'],
  ['typeFTPT', 'Type'],
]);

export const ProgramListPage: React.FC<ProgramListPageProps> = ({ className }) => {
  return (
    <Line vertical className={`ProgramListPage ${className}`}>
      <Line justifyContent="between">
        <SelectField
          value={'name'}
          options={callInOptions}
          getLabel={(x) => x}
          onChange={() => {
            console.log('');
          }}></SelectField>{' '}
        <Toggle></Toggle>
      </Line>
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
    </Line>
  );
};
