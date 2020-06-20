import React, { useMemo } from 'react';
import useSWR from 'swr';
import { http } from "core/http";
import { Graph, GraphConfiguration } from "react-d3-graph";
import { baseUrl } from 'app/constants';

import './ProgramsGraph.scss';
import queryString from "query-string";
import { props } from 'lodash/fp';
import { Program } from 'data/programs/model';

import { calculateGraphData } from './util';

const config: Partial<GraphConfiguration<any, any>> = {
  directed: true,
  automaticRearrangeAfterDropNode: true,
  collapsible: true,
  height: 400,
  highlightDegree: 2,
  highlightOpacity: 0.2,
  linkHighlightBehavior: true,
  maxZoom: 12,
  minZoom: 0.05,
  nodeHighlightBehavior: true,
  panAndZoom: false,
  staticGraph: false,
  width: 800,
  d3: {
    alphaTarget: 0.05,
    gravity: -1050,
    linkLength: 120,
    linkStrength: 2,
  },
  node: {
    color: "#d3d3d3",
    fontColor: "black",
    fontSize: 3,
    fontWeight: "normal",
    highlightColor: "red",
    highlightFontSize: 14,
    highlightFontWeight: "bold",
    highlightStrokeColor: "red",
    highlightStrokeWidth: 1.5,
    // labelProperty: n => (n.name ? `${n.id} - ${n.name}` : n.id),
    mouseCursor: "crosshair",
    opacity: 0.9,
    renderLabel: true,
    size: 200,
    strokeColor: "none",
    strokeWidth: 1.5,
    svg: "",
    symbolType: "circle",
    viewGenerator: null,
  },
  link: {
    color: "lightgray",
    highlightColor: "red",
    mouseCursor: "pointer",
    opacity: 1,
    semanticStrokeWidth: true,
    strokeWidth: 3,
    type: "STRAIGHT",
  },
  // nodeHighlightBehavior: true,
  // node: {
  //   color: "lightgreen",
  //   highlightStrokeColor: "blue",
  //   fontSize: 0,
  //   highlightFontSize: 8
  // },
  // link: {
  //   highlightColor: "lightblue",
  // },
  // d3: {
  //   gravity: 0,
  //   linkLength: 180
  // },
  // directed: true
};
export const ProgramsGraph = () => {
  const params = queryString.stringify(props);
  const { data, error } = useSWR<Program[], Program[]>(
    `${baseUrl}/program/spider?${params}`,
    async (url: string) => (await fetch(url)).json()
  );
  console.log(error);
  const d = useMemo(() => data && calculateGraphData(data), [data]);
  console.log({ graph: data })
  if (!data) {
    return <>данные обрабатываются... </>;
  }
  console.log({ data });

  return data.length ? <div className="ProgramsGraph"><Graph
    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
    data={d}
    config={config}
  /></div> : <>данных нет</>;
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