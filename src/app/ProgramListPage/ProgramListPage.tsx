import React, { useState, useCallback } from 'react';
import { SelectField } from 'shared/fields/selectField';
import { Line } from 'shared/base/line';
import { Toggle } from 'app/Toggle/Toggle';
import { useToggle } from 'react-use';

import { Card } from 'app/Card/Card';
import { Paginator } from 'app/Paginator/Paginator';
import { Page } from 'app/page/Page/Page';
import { ProgrammsList } from 'app/ProgrammsList/ProgrammsList';
import { ProgramsGraph } from 'app/ProgramsGraph/ProgramsGraph';
import { Program } from 'data/programs/model';

interface ProgramListPageProps {
  className?: string;
}

export const categoriesMap = new Map([
  ['', 'все'],
  ['Физика', 'Физика'],
  ['Математика', 'Математика'],
  ['Биология', 'Биология'],
  ['Медицина', 'Медицина'],
  ['Информатика', 'Информатика'],
  ['Экология', 'Экология'],
  ['Экономика', 'Экономика'],
  ['Химия', 'Химия'],
  ['Социология', 'Социология'],
  ['Лингвистика', 'Лингвистика'],
  ['Филология', 'Филология'],
  ['Философия', 'Философия'],
  ['Риторика', 'Риторика'],
  ['Программирование', 'Программирование'],
  ['Политология', 'Политология'],
  ['Правоведение', 'Правоведение'],
  ['Культурология', 'Культурология'],
  ['Геополитика', 'Геополитика'],
  ['Алгебра', 'Алгебра'],
]);

export const ProgramListPage: React.FC<ProgramListPageProps> = ({ className }) => {
  const [isList, toggle] = useToggle(true);
  const [category, setCategory] = useState<string | undefined>('')
  return (
    <Page title="Список образовательных программ">
      <Line h='100' vertical className={`ProgramListPage ${className}`}>
        <Line justifyContent="between">
          <SelectField
            value={category}
            options={categoriesMap}
            getLabel={(x) => x}
            onChange={setCategory} />
          <Toggle on={isList} toggle={toggle} />
        </Line>
        <div style={{ height: '100vh' }}>
          {isList ? <ProgrammsList category={category === 'все' ? null : category} /> : <ProgramsGraph />}
        </div>
        {/* <Line>
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
      </Line> */}
      </Line>
    </Page>
  );
};
