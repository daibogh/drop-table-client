import React from 'react';
import { Line } from 'shared/base/line';
import './Page.scss';

interface PageProps {
  title: string;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <Line className="Page" vertical>
      <Line className="title">{title}</Line>
      {children}
    </Line>
  );
};
