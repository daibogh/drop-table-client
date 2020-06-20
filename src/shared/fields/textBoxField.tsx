import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { ObjectSchema } from 'yup';
import { SizeProps, propsToSize } from 'shared/base/utils/sizeUtil';
import { SpaceProps, propsToSpace } from 'shared/base/utils/spaceUtil';

import './textBoxField.scss';

interface Props extends SizeProps, SpaceProps {
  name: string;
  value: string | null | undefined;
  onChange: (value: string) => void;
  placeholder?: string;
  schema?: ObjectSchema<any>;
  fieldPath?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
  type?: string;
  prepend?: JSX.Element;
  autofocus?: boolean;
  className?: string;
  inline?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  disabled?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<any>) => void;
}

export const TextBoxField: React.FC<Props> = ({
  name,
  value,
  type = 'text',
  onChange,
  placeholder,
  schema,
  fieldPath,
  size,
  children,
  prepend,
  autofocus,
  className,
  inline,
  min,
  max,
  required,
  disabled,
  onKeyDown,
  ...other
}) => {
  value = value == null ? '' : value;
  const [message, setMessage] = useState(null);
  useEffect(() => {
    let canceled = false;
    if (schema != null && fieldPath != null)
      schema
        .validateAt(fieldPath, value)
        .then(() => {
          if (!canceled) setMessage(null);
          return null;
        })
        .catch(x => {
          if (!canceled) setMessage(x.message);
          return null;
        });
    return () => {
      canceled = true;
    };
  });

  const onchange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);
  const onkeydown = useCallback((e: React.KeyboardEvent<any>) => (onKeyDown ? onKeyDown(e) : undefined), [onKeyDown]);

  return (
    <div
      className={classNames(
        `textBoxField form-group `,
        className,
        {
          [`col-md-${size}`]: size != null,
          ' inline': inline
        },
        propsToSize(other),
        propsToSpace(other)
      )}>
      {children && (
        <label htmlFor={name} className="label">
          {children}
        </label>
      )}
      <div className={classNames('input-group', { required })}>
        {prepend && (
          <div className="input-group-prepend">
            <div className="input-group-text">{prepend}</div>
          </div>
        )}
        <input
          disabled={disabled}
          type={type}
          className={classNames('form-control', { 'is-invalid': message })}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onchange}
          onKeyDown={onKeyDown ?? onkeydown}
          value={value}
          autoFocus={autofocus}
          min={min}
          max={max}
        />
      </div>
      <div className="invalid-feedback">{message}</div>
    </div>
  );
};
