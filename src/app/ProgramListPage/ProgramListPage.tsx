import React from 'react';
import { SelectField } from 'shared/fields/selectField';
import { Line } from 'shared/base/line';
import { Toggle } from 'app/Toggle/Toggle';
import { useToggle } from 'react-use';
import { Card } from 'app/Card/Card';
import { Paginator } from 'app/Paginator/Paginator';
import { Page } from 'app/page/Page/Page';
import { ProgrammsList } from 'app/ProgrammsList/ProgrammsList';

interface ProgramListPageProps {
  className?: string;
}

export const callInOptions = new Map([
  ['0', 'Select'],
  ['name', 'Медицина'],
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
  const [isList, toggle] = useToggle(true);
  return (
    <Page title="Список образовательных программ">
    <Line h='100' vertical className={`ProgramListPage ${className}`}>
      <Line justifyContent="between">
        <SelectField
          value={'name'}
          options={callInOptions}
          getLabel={(x) => x}
          onChange={() => {
            console.log('');
          }}></SelectField>{' '}
        <Toggle on={isList} toggle={toggle}></Toggle>
      </Line>
      <div style={{ height: '100vh' }}>
        {isList ? <ProgrammsList /> : <>graph</>}
      </div>
     
    </Line>
    </Page>
  );
};
