import React from 'react'

import { Line } from '../shared/base/Line'
import './ResultPage.scss'

interface ResultPageProps {
  className?: string
}

const ResultPage: React.FunctionComponent<ResultPageProps> = ({
  className,
}) => {
  return (
    <Line h='100' vertical pt="3" w='100' className={`ResultPage ${className}`}>
      <Line vertical h='50'>
        <Line vertical>
          <div className="Title">Программная инженерия</div>
          <div className="Cod">09.03.04</div>
        </Line>
        <Line mt='4' h='75' w='100'>
          <Line w='50' className="Block">Passposrt</Line>
          <Line w='50' className='Block'>Веса критериев</Line>
        </Line>
      </Line>
      <Line mb='2' h='50' className='Block'></Line>
    </Line>
  )
}

export default ResultPage