import React, { useMemo } from 'react';
import useSWR from 'swr';
import { http } from "core/http";
import { Graph, GraphConfiguration } from "react-d3-graph";
import { baseUrl } from 'app/constants';

import './ProgramsGraph.scss';
import { calculateGraphData } from './util';

const config: Partial<GraphConfiguration<any, any>> = {
  nodeHighlightBehavior: true,
  node: {
    color: "lightgreen",
    size: 120,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
  d3: {
    gravity: 0,
    linkLength: 180
  },
  directed: true
};
export const ProgramsGraph = () => {
  const { data, error } = useSWR(`${baseUrl}/program/spider`, async (url: string) => (await fetch(url)).json());
  const d = useMemo(() => calculateGraphData(data || []), [data]);
  if (!data) {
    return <>данные обрабатываются... </>;
  }
  console.log({ data });

  return <div className="ProgramsGraph"><Graph
    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
    data={d}
    config={config}
  /></div>;
};
// onClickNode={onClickNode}
  // onDoubleClickNode={onDoubleClickNode}
  // onRightClickNode={onRightClickNode}
  // onClickGraph={onClickGraph}
  // onClickLink={onClickLink}
  // onRightClickLink={onRightClickLink}
  // onMouseOverNode={onMouseOverNode}
  // onMouseOutNode={onMouseOutNode}
  // onMouseOverLink={onMouseOverLink}
  // onMouseOutLink={onMouseOutLink}
  // onNodePositionChange={onNodePositionChange}