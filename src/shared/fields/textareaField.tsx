import React, { useCallback } from 'react';
import classNames from 'classnames';

interface Props {
  name: string;
  value: string | null | undefined;
  onChange: (value: string) => void;
  className?: string;
}

export const TextareaField: React.FC<Props> = ({ name, value, onChange, children, className }) => {
  value = value == null ? '' : value;

  const onchange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value), [onChange]);

  return (
    <div className={classNames(`textareaField form-group ${className}`)}>
      {children && (
        <label htmlFor={name} className="label">
          {children}
        </label>
      )}
      <div className="input-group">
        <textarea className={classNames('form-control')} id={name} name={name} onChange={onchange} value={value} />
      </div>
    </div>
  );
};
