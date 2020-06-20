import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SidepanelItem } from 'app/sidepanel/sidepanelItem';
import { useLocation } from 'core/router';
import { ImportedIcon } from 'shared/base/icon';
import { Line } from 'shared/base/line';

import './sidepanel.scss';

interface LinkItem {
  type: 'link';
  title: string;
  icon: ImportedIcon;
  prefix?: 'fas' | 'far';
  to: string;
}

export const Sidepanel: React.FC = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<{ to: string }>();

  const menu = useMemo(() => {
    const innerMenu: LinkItem[] = [
      { type: 'link', title: 'Заявки', icon: 'list', to: '/' },
      {
        type: 'link',
        title: 'Карта',
        icon: 'plus-square',
        to: '/create',
        prefix: 'far',
      },
      {
        type: 'link',
        title: 'Плановые отключения',
        icon: 'chart-bar',
        to: '/statistics',
      },
    ];
    return innerMenu;
  }, []);

  useEffect(() => {
    const isActive = (to: string) =>
      RegExp(`^${to}(/\\w*)?$`, 'i').test(location.pathname);
    for (const item of menu) {
      if (item.type === 'link' && isActive(item.to)) {
        setActiveItem(item);
        return;
      }
    }
    setActiveItem(undefined);
  }, [location.pathname, menu]);

  return (
    <Line className="sidepanel">
      <div className="sidebar-container">
        {menu.map((item, itemKey) => {
          return (
            <Link
              key={itemKey}
              to={item.to}
              className={classNames({
                active: item === activeItem,
              })}
            >
              <SidepanelItem icon={item.icon} prefix={item.prefix} />
            </Link>
          );
        })}
      </div>
    </Line>
  );
};
