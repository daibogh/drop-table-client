import React from 'react'
import './ProgramListPage.scss'
import { Line } from '../shared/base/Line'
import Card from '../Card/Card'

interface ProgramListPageProps {
  className?: string
}

const ProgramListPage: React.FunctionComponent<ProgramListPageProps> = ({
  className,
}) => {
  return (
    <Line vertical className={`ProgramListPage ${className}`}>
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
    </Line>
  )
}

export default ProgramListPage
