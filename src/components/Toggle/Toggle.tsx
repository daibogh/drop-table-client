import React from 'react'
import './Toggle.scss'
import { Button } from 'src/components/shared/base/Button'

interface ToggleProps {
  className?: string
}

const Toggle: React.FC<ToggleProps> = ({ className }) => {
  return <div className={`Toggle ${className}`}>
    <div className="btn-group" role="group" aria-label="Basic example">
      {/* <Button  className="btn btn-primary">Left</Button> */}
      {/* <button type="button" className="btn btn-light">Right</button> */}
    </div>
  </div>
}

export default Toggle
