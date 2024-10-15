import styles from './style.module.css';

import { ChartIcon } from '../../../assets/icons/ChartIcon';
import { CopySuccessIcon } from '../../../assets/icons/CopySuccessIcon';
import { PeopleIcon } from '../../../assets/icons/PeopleIcon';
import { PlusIcon } from '../../../assets/icons/PlusIcon';
import { UserTickIcon } from '../../../assets/icons/UserTickIcon';
import { DashboardColors } from '../../../data/dashboard.data';
import { BarChart } from '../../../molecules/Charts/BarChart';
import { DoughnutChart } from '../../../molecules/Charts/DoughnutChart';
import { LineChart } from '../../../molecules/Charts/LineChart';
import { PieChart } from '../../../molecules/Charts/PieChart';
import { HeaderBox } from '../../../molecules/DashboardHeader/HeaderBox';

const Page = () => {
  const LeadsHeaderCards = [
    {
      title: 'Total Leads',
      count: 1450,
      color: DashboardColors.LIGHT_PURPLE,
      Icon: PeopleIcon,
    },
    {
      title: 'New Leads',
      count: 120,
      per: 'week',
      color: DashboardColors.CYAN,
      Icon: PlusIcon,
    },
    {
      title: 'Active Leads',
      count: 15,
      color: DashboardColors.BLUE,
      Icon: UserTickIcon,
    },
    {
      title: 'Conversion Rate',
      count: '66.80%',
      color: DashboardColors.ORANGE,
      Icon: ChartIcon,
    },
    {
      title: 'Converted Leads',
      count: 50,
      color: DashboardColors.LIGHT_BLUE,
      Icon: CopySuccessIcon,
    },
  ];

  const cardsList = LeadsHeaderCards.map((card) => (
    <HeaderBox
      {...card}
      key={card.title}
    />
  ));

  const data = {
    labels: [
      'Source 1',
      'Source 2',
      'Source 3',
      'Source 4',
      'Source 5',
      'Source 6',
      'Source 7',
      'Source 8',
    ],
    datasets: [
      {
        data: [300, 400, 200, 500, 600, 700, 600, 100],
        barPercentage: 0.25,
        backgroundColor: [
          DashboardColors.LIGHT_PURPLE,
          DashboardColors.ORANGE,
          DashboardColors.LIGHT_CYAN,
          DashboardColors.LIGHT_BLUE,
          DashboardColors.YELLOW,
          DashboardColors.RED,
          DashboardColors.CYAN,
          DashboardColors.PURPLE,
        ],
        borderColor: [
          DashboardColors.LIGHT_PURPLE,
          DashboardColors.ORANGE,
          DashboardColors.LIGHT_CYAN,
          DashboardColors.LIGHT_BLUE,
          DashboardColors.YELLOW,
          DashboardColors.RED,
          DashboardColors.CYAN,
          DashboardColors.PURPLE,
        ],
        borderWidth: 1,
      },
    ],
  };

  const stackedData = {
    labels: [
      'Site Visitors',
      'Advertisement',
      'Word of Mouth',
      'Employee Referral',
      'Cold call / Prospecting',
      'Customer Referral',
      'Others',
    ],
    datasets: [
      {
        label: 'Leads',
        data: [120, 150, 180, 200, 220, 250, 320],
        backgroundColor: DashboardColors.LIGHT_PURPLE,
      },
      {
        label: 'Converted Leads',
        data: [80, 100, 120, 140, 160, 180, 200],
        backgroundColor: DashboardColors.ORANGE,
      },
    ],
  };

  const pieData = {
    labels: [
      'Program 1',
      'Program 2',
      'Program 3',
      'Program 4',
      'Program 5',
      'Program 6',
      'Program 7',
    ],
    datasets: [
      {
        label: 'Sales',
        data: [60, 40, 30, 20, 10],
        backgroundColor: [
          DashboardColors.LIGHT_PURPLE,
          DashboardColors.ORANGE,
          DashboardColors.LIGHT_CYAN,
          DashboardColors.LIGHT_BLUE,
          DashboardColors.YELLOW,
          DashboardColors.RED,
          DashboardColors.CYAN,
          DashboardColors.PURPLE,
        ],
        borderColor: [
          DashboardColors.LIGHT_PURPLE,
          DashboardColors.ORANGE,
          DashboardColors.LIGHT_CYAN,
          DashboardColors.LIGHT_BLUE,
          DashboardColors.YELLOW,
          DashboardColors.RED,
          DashboardColors.CYAN,
          DashboardColors.PURPLE,
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Sales',
        data: [200, 300, 500],
        backgroundColor: [
          DashboardColors.LIGHT_BLUE,
          DashboardColors.ORANGE,
          DashboardColors.RED,
        ],
        borderColor: [
          DashboardColors.LIGHT_BLUE,
          DashboardColors.ORANGE,
          DashboardColors.RED,
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: [
      'Jan 2024',
      'Feb 2024',
      'Mar 2024',
      'Apr 2024',
      'May 2024',
      'Jun 2024',
    ],
    datasets: [
      {
        data: [100, 200, 250, 400, 150, 300],
        borderColor: DashboardColors.ORANGE,
        backgroundColor: DashboardColors.ORANGE,
      },
    ],
  };

  return (
    <div>
      <div className={styles.dashboardHeader}>{cardsList}</div>

      <div className={styles.allChartsContainer}>
        <div className={`${styles.chartOuterContainer} ${styles.threeFourth}`}>
          <h3 className={styles.chartContainerHeader}>
            Leads VS. Converted Leads by Source
          </h3>
          <div className={styles.chartInnerContainer}>
            <BarChart
              stacked
              data={stackedData}
              legendPosition='top'
              barDirection='vertical'
            />
          </div>
        </div>

        <div className={`${styles.chartOuterContainer} ${styles.oneFourth}`}>
          <h3 className={styles.chartContainerHeader}>
            Leads VS. Converted Leads by Source
          </h3>
          <div className={styles.chartInnerContainer}>
            <PieChart
              data={pieData}
              legendPosition='bottom'
            />
          </div>
        </div>

        <div className={`${styles.chartOuterContainer} ${styles.threeFourth}`}>
          <h3 className={styles.chartContainerHeader}>
            Leads VS. Converted Leads by Source
          </h3>
          <div className={styles.chartInnerContainer}>
            <BarChart data={data} />
          </div>
        </div>

        <div className={`${styles.chartOuterContainer} ${styles.oneFourth}`}>
          <h3 className={styles.chartContainerHeader}>
            Leads VS. Converted Leads by Source
          </h3>
          <div className={styles.chartInnerContainer}>
            <DoughnutChart
              data={doughnutData}
              legendPosition='bottom'
              centerText={['Total Leads:', '460']}
            />
          </div>
        </div>

        <div className={`${styles.chartOuterContainer}`}>
          <h3 className={styles.chartContainerHeader}>Leads Growth</h3>
          <div className={styles.chartInnerContainer}>
            <LineChart data={lineData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
