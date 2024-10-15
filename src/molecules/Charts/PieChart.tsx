import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  title?: string;
  legendPosition?: 'top' | 'bottom' | 'left' | 'right';
  data: ChartData<'pie'> & { labels: string[] };
};

export const PieChart = (props: Props) => {
  const { data, title, legendPosition } = props;

  const options: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: !!legendPosition,
        position: legendPosition,
      },
      title: {
        display: !!title,
        text: title,
      },
    },
  };

  return (
    <Pie
      data={data}
      options={options}
    />
  );
};
