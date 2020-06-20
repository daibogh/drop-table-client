import React from 'react';
import classnames from 'classnames';
import { Line } from 'shared/base/line';
import { Icon, ImportedIcon } from 'shared/base/icon';

import './sidepanelItem.scss';

export interface Props {
  icon: ImportedIcon;
  isActive?: boolean;
  prefix?: 'fas' | 'far';
}

export const SidepanelItem: React.FC<Props> = ({ icon, isActive, prefix }) => {
  return (
    <Line
      className={classnames('sidepanel-item', {
        isActive: isActive,
      })}
      alignItems="center"
    >
      <Icon name={icon} prefix={prefix ?? 'fas'}></Icon>
    </Line>
  );
};
