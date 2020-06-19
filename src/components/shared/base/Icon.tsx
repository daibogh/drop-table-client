import { library } from '@fortawesome/fontawesome-svg-core'
//solid
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
//regular
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons/faFolderPlus'
//
import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SpaceProps, propsToSpace } from './utils/SpaceUtil'

library.add(
  //solid
  faTimes,
  faCheck,
  faAngleDown,
  faSearch,
  //regular
  faFolderPlus
)

export type ImportedIcon =
  | 'times'
  | 'folder-plus'
  | 'check'
  | 'angle-down'
  | 'search'

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
  const classes = classNames('icon-container', propsToSpace(other), className)
  return (
    <FontAwesomeIcon
      icon={[prefix, name]}
      spin={spin}
      className={classes}
      {...other}
    ></FontAwesomeIcon>
  )
}
