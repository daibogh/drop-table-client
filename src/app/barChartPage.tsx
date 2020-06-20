import React from 'react';
import { Page } from './page/Page/Page';
import { Line } from 'shared/base';
import { Bar } from 'react-chartjs-2';

const backgroundColor = [
  '#89B6A5',
  '#4C3B4D',
  '#C9EDDC',
  '#82968C',
  '#6A706E',
  '#FFC857',
  '#B4A0E5'
]

export const BarChartPage: React.FC = () => {
  return <Page title="Общая статистика вуза">
    <Line mt="5">
      <Bar data={{
        labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013"],
        datasets: [{
          backgroundColor,
          data: [65, 59, 80, 81, 56, 55, 40],
        }]
      }}
      options={{ legend: { display: false }, tooltips: {
        callbacks: {
          title: function(tooltipItem, data) {
            return 'Рекомендации';
          },
          afterLabel: function(tooltipItem, data) {
            return 'Тело';
          }
      }}}}></Bar>
    </Line>
  </Page>
}