import React from "react";
import { SelectField } from "shared/fields/selectField";
import { Line } from "shared/base/line";
import { Toggle } from "app/Toggle/Toggle";
import { useToggle } from "react-use";
import { Card } from "app/Card/Card";
import { Paginator } from "app/Paginator/Paginator";
import { Page } from "app/page/Page/Page";
import { Bar } from "react-chartjs-2";

interface StatisticsPageProps {
  className?: string;
}
export const StatisticsPage: React.FC<StatisticsPageProps> = ({
  className,
}) => {
    const data: any = {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Chrome',
              data: [530, 600, 490, 420, 800, 590],
              backgroundColor: '#5e2572',
            },
            {
              label: 'Safari',
              data: [970, 1110, 700, 620, 1020, 1200],
              backgroundColor: '#f4e8f8',
            }
          ]
        },
        options: {
          scales: {
            maxBarThickness: 0.01,
            barThickness: 0.01,
            categoryPercentage: 0.1,
            barPercentage: 0.1,
            xAxes: [{
              barPercentage: 0.4,
              stacked: true,
              gridLines: {
                display: false,
                drawBorder: false
              }
            }],
            yAxes: [{
              barThickness: 'flex',
              stacked: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false
              }
            }]
          },
          legend: {
            responsive: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              boxWidth: 10,
              fontSize: 14,
              fontColor: '#000000'
            },
          }
        }
      };
  return (
    <Page title="Общая статистика">
      <Bar height={165} data={data.data} options={data.options}></Bar>
    </Page>
  );
};
