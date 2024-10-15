import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  Plugin,
  PluginOptionsByType,
} from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  title?: string;
  centerText?: string[];
  cutoutPercentage?: string;
  legendPosition?: 'top' | 'bottom' | 'left' | 'right';
  data: ChartData<'doughnut'> & { labels: string[] };
};

interface CenterTextPluginOptions {
  text: string[];
  fontSize?: number;
  fontColor?: string;
  fontStyle?: string;
  lineHeight?: number;
}

interface CustomPluginOptions extends PluginOptionsByType<'doughnut'> {
  centerText: CenterTextPluginOptions;
}

const centerTextPlugin: Plugin<'doughnut'> = {
  id: 'centerText',
  beforeDraw: (chart) => {
    const { ctx, chartArea } = chart;
    const { width, height } = chartArea;
    const centerTextOptions = (
      chart?.config?.options?.plugins as CustomPluginOptions
    ).centerText;

    if (!centerTextOptions || !ctx) return;

    const textArray = centerTextOptions.text;
    const fontSize = centerTextOptions.fontSize || 16;
    const fontColor = centerTextOptions.fontColor || '#000';
    const fontStyle = centerTextOptions.fontStyle || 'normal';
    const lineHeight = centerTextOptions.lineHeight || 1.2;

    const centerX = width / 2;
    const centerY = height / 1.9;

    ctx.save();
    ctx.font = `${fontStyle} ${fontSize}px sans-serif`;
    ctx.fillStyle = fontColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const totalTextHeight = textArray.length * fontSize * lineHeight;
    let currentY = centerY - totalTextHeight / 2 + fontSize / 2;

    textArray.forEach((text) => {
      ctx.fillText(text, centerX, currentY);
      currentY += fontSize * lineHeight;
    });

    ctx.restore();
  },
};
export const DoughnutChart = (props: Props) => {
  const {
    data,
    title,
    legendPosition,
    centerText = [],
    cutoutPercentage = '90%',
  } = props;

  const options: ChartOptions<'doughnut'> & {
    plugins: { centerText: CenterTextPluginOptions };
  } = {
    responsive: true,
    cutout: cutoutPercentage,
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
      centerText: {
        text: centerText,
        fontSize: 20,
        fontColor: '#000',
        fontStyle: '600',
        lineHeight: 1.2,
      },
    },
  };

  return (
    <Doughnut
      data={data}
      options={options}
      plugins={[centerTextPlugin]}
    />
  );
};
