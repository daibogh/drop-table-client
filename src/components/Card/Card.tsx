import React from 'react'

import './Card.scss'
import { Line } from '../shared/base/Line'
import { title } from 'process'
// import  doctor  from './images/doctor.jpg'

interface CardProps {
  className?: string
  title:string;
  description:string;
}

const Card: React.FC<CardProps> = ({ className, title, description }) => {
  return (
    <div className={`Card ${className}`}>
      <Line w="100" h="100" vertical>
        <Line h="75" justifyContent="center">
          <div className="img"></div>
          {/* <img alt='' src={doctor}></img> */}
        </Line>
        <div>{title}</div>
        <div className='Description'>{description}</div>
      </Line>
    </div>
  )
}

export default Card
