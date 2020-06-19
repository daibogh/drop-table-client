import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'

import { SpaceProps, propsToSpace } from './utils/SpaceUtil'
import { SizeProps, propsToSize } from './utils/SizeUtil'

interface Props extends SpaceProps, SizeProps, HTMLAttributes<any> {
  tag?: React.ElementType
  className?: string
  vertical?: boolean
  wrap?: boolean
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around'
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  inline?: boolean
}

export const Line: React.FC<Props> = ({
  tag: Tag = 'div',
  className,
  vertical,
  justifyContent,
  alignItems,
  wrap,
  children,
  inline,
  ...other
}) => {
  const { responsive } = other
  const classes = classNames(
    `d-${responsive ? 'md-' : inline ? 'inline-' : ''}flex`,
    `flex-${responsive ? 'md-' : ''}${vertical ? 'column' : 'row'}`,
    {
      [`justify-content-${responsive ? 'md-' : ''}${justifyContent}`]:
        justifyContent != null,
      [`align-items-${responsive ? 'md-' : ''}${alignItems}`]:
        alignItems != null,
      [`flex-${responsive ? 'md-' : ''}wrap`]: wrap,
    },
    propsToSpace(other),
    propsToSize(other),
    className
  )
  return (
    <Tag className={classes} {...other}>
      {children}
    </Tag>
  )
}
