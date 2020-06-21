import React, { useEffect, useState } from 'react';
import { Line } from 'shared/base';
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { StoreType } from 'core/store';
import { getStatsAsync } from 'data/programs/actions';

import { Page } from './page/Page/Page';

const backgroundColor = [
  '#89B6A5',
  '#4C3B4D',
  '#C9EDDC',
  '#82968C',
  '#6A706E',
  '#FFC857',
  '#B4A0E5',
  '#89B6A5',
  '#4C3B4D',
  '#C9EDDC',
  '#82968C',
  '#6A706E',
  '#FFC857',
  '#B4A0E5',
  '#89B6A5',
  '#4C3B4D',
  '#C9EDDC',
  '#82968C',
  '#6A706E',
  '#FFC857',
  '#B4A0E5'
];

export const BarChartPage: React.FC = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state: StoreType) => state.programs.stats);

  useEffect(() => {
    dispatch(getStatsAsync({}));
  }, [dispatch]);

  return (
    <Page title="Общая статистика вуза">
      {stats && <Line mt="5">
        <Bar
          data={{
            labels: Object.keys(stats),
            datasets: [
              {
                backgroundColor,
                data: Object.values(stats).map(x => x.rating),
              }
            ],
          }}
          options={{
            legend: { display: false },
            tooltips: {
              callbacks: {
                afterLabel: function (tooltipItem, data) {
                  const added = `Добавлено - ${stats[tooltipItem.xLabel]?.diff.added.length ?? 0}\n• `;
                  const addedList = stats[tooltipItem.xLabel]?.diff.added.map(x => x.name).join('\n• ');
                  const removed = `\nЗакрыто - ${stats[tooltipItem.xLabel]?.diff.removed.length ?? 0}\n• `;
                  const removedList = stats[tooltipItem.xLabel]?.diff.removed.map(x => x.name).join('\n• ');
                  return added + addedList + removed + removedList;
                },
              },
            },
          }}
        ></Bar>
      </Line>}
    </Page>
  );
};