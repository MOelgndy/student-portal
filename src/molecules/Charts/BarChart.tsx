import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  title?: string;
  stacked?: boolean;
  barDirection?: 'vertical' | 'horizontal';
  legendPosition?: 'top' | 'bottom' | 'left' | 'right';
  data: ChartData<'bar'> & { labels: string[] };
};

export const BarChart = (props: Props) => {
  const {
    data,
    title,
    legendPosition,
    stacked = false,
    barDirection = 'horizontal',
  } = props;

  const options: ChartOptions<'bar'> = {
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
    indexAxis: barDirection === 'vertical' ? 'y' : 'x',
    scales: {
      x: {
        stacked,
        grid: {
          display: false,
        },
      },
      y: {
        stacked,
        beginAtZero: true,
      },
    },
  };

  return (
    <Bar
      data={data}
      //@ts-ignore
      options={options}
    />
  );
};
