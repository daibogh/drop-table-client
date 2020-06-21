import React, { useEffect } from "react";
import { Sidepanel } from "app/sidepanel/sidepanel";
import { Switch, Route, useLocation } from "react-router-dom";
import { Line } from "shared/base/line";
import { useDispatch } from "react-redux";
import { getDisciplinesAsync } from "data/programs/actions";

import { ProgramPage } from "./ProgramPage/ProgramPage";
import { ResultPage } from "./ResultPage/ResultPage";
import { ProgramListPage } from "./ProgramListPage/ProgramListPage";
import { BarChartPage } from "./barChartPage";
import "./app.scss";

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
          <Route path="/result/:id" component={ResultPage} />
          <Route path="/statistics" component={BarChartPage} />
          <Route path="/" component={ProgramListPage} />
        </Switch>
      </div>
    </Line>
  );
};
