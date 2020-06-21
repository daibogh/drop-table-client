import React from 'react';
import classnames from 'classnames';
import { Button } from 'shared/base';
import './Toggle.scss';

interface ToggleProps {
  className?: string;
  on: boolean;
  toggle: () => void;
}

export const Toggle: React.FC<ToggleProps> = ({ className, on, toggle }) => {
  return (
    <div className={`Toggle ${className}`}>
      <div className="btn-group" role="group" onClick={toggle}>
        <Button
          className={classnames("LeftButton", "btn", { "btn-primary": on })}
        >
          Список
        </Button>
        <Button
          className={classnames("RightButton", "btn", { "btn-primary": !on })}
        >
          Граф
        </Button>
      </div>
    </div>
  );
};
