import React from 'react'
import { Button } from '../shared/base/Button'
import './Toggle.scss'

interface ToggleProps {
  className?: string
}

const Toggle: React.FunctionComponent<ToggleProps> = ({ className }) => {
  return (
    <div className={`Toggle ${className}`}>
      <div className="btn-group" role="group">
        <Button className="LeftButton btn btn-primary">
        Список
        </Button>
        <Button className="RightButton btn btn-outline-primary">Граф</Button>
      </div>
    </div>
  )
}

export default Toggle