import React from 'react'
import classNames from 'classnames'

import { SpaceProps, propsToSpace } from './utils/SpaceUtil'
import { StyleProps, propsToStyle } from './utils/StyleUtil'

export interface ButtonProps
  extends SpaceProps,
    StyleProps,
    React.HTMLAttributes<any>,
    React.RefAttributes<any> {
  tag?: React.ElementType
  className?: string
  large?: boolean
  small?: boolean
  block?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      tag: Tag = 'button',
      className,
      large,
      small,
      block,
      children,
      onClick,
      disabled,
      ...other
    },
    ref
  ) => {
    const classes = classNames(
      'btn',
      {
        'btn-lg': large,
        'btn-sm': small,
        'btn-block': block,
      },
      propsToStyle(other),
      propsToSpace(other),
      className
    )
    return (
      <Tag
        ref={ref}
        type={Tag === 'button' ? 'button' : undefined}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        {...other}
      >
        {children}
      </Tag>
    )
  }
)
