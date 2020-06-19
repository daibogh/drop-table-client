import React, { useState, useRef } from 'react'
import classNames from 'classnames'

import { usePopper } from '~/components/hooks/UsePopper'

import './Dropdown.scss'

interface DropdownProps {
  target: (
    ref: React.MutableRefObject<any>,
    className: string
  ) => React.ReactElement
  tag?: React.ElementType
  className?: string
  rightAlignment?: boolean
  closeAfterClick?: boolean
  disabled?: boolean
}

export const Dropdown: React.FC<DropdownProps> = ({
  tag: Tag = 'div',
  className,
  rightAlignment,
  children,
  closeAfterClick,
  disabled,
  target,
}) => {
  const [show, setShow] = useState(false)
  const focusHolder = useRef<any>(null)
  const activate = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShow(true)
    focusHolder.current.focus()
  }
  const deactivate = () => setShow(false)
  const { reference, popper } = usePopper({
    positionFixed: true,
    placement: rightAlignment ? 'bottom-end' : 'bottom-start',
  })
  return (
    <Tag
      className={classNames('customDropdown', className)}
      onMouseDown={!disabled ? activate : undefined}
      onBlur={deactivate}
      tabIndex={0}
      role="button"
      ref={focusHolder}
    >
      {target(reference, 'dropdown-toggle')}
      {show && (
        <div
          ref={popper}
          onClick={closeAfterClick ? deactivate : undefined}
          className="dropdown-menu show"
        >
          {children}
        </div>
      )}
    </Tag>
  )
}
