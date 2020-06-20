import React from 'react';
import { Line } from 'shared/base/line';
import './Page.scss';

interface PageProps {
  title: string;
}

export const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <Line className="Page" vertical>
      <Line className="title">{title}</Line>
      {children}
    </Line>
  );
};
