import { library } from '@fortawesome/fontawesome-svg-core';
//solid
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { faChartBar } from '@fortawesome/free-solid-svg-icons/faChartBar';
//regular
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons/faPlusSquare';
//
import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SpaceProps, propsToSpace } from './utils/spaceUtil';

library.add(
  //solid
  faTimes,
  faCheck,
  faAngleDown,
  faSearch,
  faList,
  faChartBar,
  //regular
  faPlusSquare
);

export type ImportedIcon =
  | 'times'
  | 'check'
  | 'angle-down'
  | 'search'
  | 'list'
  | 'plus-square'
  | 'chart-bar'

export interface Props extends SpaceProps, React.HTMLAttributes<any> {
  className?: string
  spin?: boolean
  prefix?: 'fas' | 'far'
  name: ImportedIcon
}

export const Icon: React.FC<Props> = ({
  prefix = 'fas',
  name,
  spin,
  className,
  ...other
}) => {
  const classes = classNames('icon-container', propsToSpace(other), className);
  return (
    <FontAwesomeIcon
      icon={[prefix, name]}
      spin={spin}
      className={classes}
      {...other}
    ></FontAwesomeIcon>
  );
};