import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

type Props = {
  title?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  data: ChartData<'line', (string | number)[]>;
  legendPosition?: 'top' | 'bottom' | 'left' | 'right';
};

export const LineChart = (props: Props) => {
  const { data, title, xAxisLabel, yAxisLabel, legendPosition } = props;

  const options: ChartOptions<'line'> = {
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
    scales: {
      x: {
        title: {
          display: !!xAxisLabel,
          text: xAxisLabel,
        },
      },
      y: {
        title: {
          display: !!yAxisLabel,
          text: yAxisLabel,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  return (
    <Line
      data={data}
      options={options}
    />
  );
};
