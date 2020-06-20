import React from 'react';
import { Line } from 'shared/base';

import './messageView.scss';

interface Props {
  message?: string;
}

export const MessagesView: React.FC<Props> = ({ message }) => {
  return (
    <Line pr="2" className="messageView" alignItems="center">
      {message}
    </Line>
  );
};
