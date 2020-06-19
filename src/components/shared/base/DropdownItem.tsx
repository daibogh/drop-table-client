import React, { CSSProperties } from 'react'
import classNames from 'classnames'
import { LocationDescriptor } from 'history'

import './DropdownItem.scss'

interface Props extends React.HTMLAttributes<any> {
  tag?: React.ElementType
  to?: LocationDescriptor
  className?: string
  style?: CSSProperties
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  disabled?: boolean
  flex?: boolean
}

export const DropdownItem: React.FC<Props> = ({
  tag: Tag = 'a',
  className,
  onClick,
  children,
  disabled,
  flex,
  ...other
}) => {
  const classes = classNames(
    'dropdown-item',
    { displayFlex: flex },
    className,
    { disabled }
  )
  return (
    <Tag className={classes} onClick={onClick} {...other}>
      {children}
    </Tag>
  )
}
