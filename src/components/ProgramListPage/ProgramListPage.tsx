import React from 'react'
import './ProgramListPage.scss'
import { Line } from '../shared/base/Line'
import Card from '../Card/Card'
import { Toggle } from '../Toggle'
import { SelectField } from '../shared/fields/selectField'
import { Paginator } from '../Paginator'

interface ProgramListPageProps {
  className?: string
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
])

const ProgramListPage: React.FunctionComponent<ProgramListPageProps> = ({
  className,
}) => {
  return (
    <Line vertical className={`ProgramListPage ${className}`}>
      <Line justifyContent="between" mb="5" mt="2">
        <SelectField
          value={'name'}
          options={callInOptions}
          getLabel={(x) => x}
          onChange={() => {
            console.log('')
          }}
        ></SelectField>{' '}
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
      <Line justifyContent='end'>
        <Paginator
          page={{
            items: [],
            totalItems: 10,
            totalPages: 4,
            currentPage: 1,
            pageSize: 8,
          }}
          setPage={() => {
            console.log()
          }}
        ></Paginator>
      </Line>
    </Line>
  )
}

export default ProgramListPage
