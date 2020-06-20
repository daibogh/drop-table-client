import React from 'react';
import { Sidepanel } from 'app/sidepanel/sidepanel';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Line } from 'shared/base/line';

import { ProgramPage } from './ProgramPage/ProgramPage';
import { ResultPage } from './ResultPage/ResultPage';
import { ProgramListPage } from './ProgramListPage/ProgramListPage';

import './app.scss';

export const App: React.FC = () => {
  const location = useLocation();
  return (
    <Line className="app">
      <div className="sidepanel-container">
        <Sidepanel />
      </div>
      <div className="main-container">
      <Switch location={location}>
        <Route path="/create" component={ProgramPage} />
        <Route path="/statistics" component={ResultPage} />
        <Route path="/" component={ProgramListPage} />
        </Switch>
      </div>
    </Line>
  );
};
