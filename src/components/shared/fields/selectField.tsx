import React, { ReactChild } from 'react'

import { SpaceProps } from '../base/utils/SpaceUtil'
import { SizeProps } from '../base/utils/SizeUtil'
import { SelectBaseField } from './selectBaseField'

interface Props<TOption extends  string | number>
  extends SpaceProps,
    SizeProps {
  getContent?: (option: TOption) => ReactChild
  options: Map<string, TOption>
  getLabel: (option: TOption) => string
  onChange: (option: string) => void
  label?: string
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'
  className?: string
  value?: string | null
  fieldPath?: string
  disabledOptions?: (key: string) => boolean
  disable?: boolean
  name?: string
  showSearch?: boolean
  admitRemove?: boolean
  onRemove?: () => void
  inline?: boolean
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  noWrap?: boolean
  title?: string
}

export const SelectField = <TOption extends  string | number>({
  getContent,
  options,
  getLabel,
  onChange,
  value,
  showSearch,
  disable,
  disabledOptions,
  admitRemove,
  onRemove,
  inline,
  alignItems = 'center',
  noWrap = false,
  title,
  ...other
}: Props<TOption>) => {

  return (
    <>
      <SelectBaseField
        inline={inline}
        getContent={getContent}
        options={options}
        getLabel={getLabel}
        onChange={(options: string | string[]) => onChange(options as string)}
        value={value}
        showSearch={showSearch}
        disable={disable}
        disabledOptions={disabledOptions}
        admitRemove={admitRemove}
        onRemove={onRemove}
        alignItems={alignItems}
        noWrap={noWrap}
        title={title}
        {...other}
      ></SelectBaseField>
    </>
  )
}
