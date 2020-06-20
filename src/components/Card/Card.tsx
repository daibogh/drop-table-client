import React from 'react'

import { Line } from '../shared/base/Line'
import doctor from './doctor.jpg'

import './Card.scss'
interface CardProps {
  className?: string
  title: string
  description: string
}

const Card: React.FunctionComponent<CardProps> = ({
  className,
  description,
  title,
}) => {
  return (
    <div className={`Card ${className}`}>
      <Line w="100" h="100" vertical>
        <Line h="75" justifyContent="center">
          <img className='img' alt='' src={doctor}></img>
        </Line>
        <div>{title}</div>
        <div className="Description">{description}</div>
      </Line>
    </div>
  )
}

export default Card
