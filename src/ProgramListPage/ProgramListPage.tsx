import React from 'react'

import { Card } from '~/components/Card'
import { Line } from '~/components/shared/base/Line'
import { Toggle } from '~/components/Toggle'
import './ProgramListPage.scss'
interface ProgramListPageProps {
  className?: string
}

const ProgramListPage: React.FC<ProgramListPageProps> = ({ className }) => {
  return (
    <div className={`ProgramListPage ${className}`}>
      <Line>
        <Card title={'03.05.05 Педиатр'} description={'20 дисциплин'}></Card>
        <Card title={'03.05.05 Педиатр'} description={'20 дисциплин'}></Card>
        <Card title={'03.05.05 Педиатр'} description={'20 дисциплин'}></Card>
        {/* <Toggle></Toggle> */}
      </Line>
    </div>
  )
}

export default ProgramListPage
