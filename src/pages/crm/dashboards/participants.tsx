import styles from './style.module.css';

import { ParticipantsStats } from '../../../api/dashboardEndpoints';
import { ChartIcon } from '../../../assets/icons/ChartIcon';
import { PeopleIcon } from '../../../assets/icons/PeopleIcon';
import { ReceiveSquareIcon } from '../../../assets/icons/ReceiveSquareIcon';
import { SolidTickIcon } from '../../../assets/icons/SolidTickIcon';
import { UserTickIcon } from '../../../assets/icons/UserTickIcon';
import { DashboardColors } from '../../../data/dashboard.data';
import { useFetch } from '../../../hooks/useFetch';
import { BarChart } from '../../../molecules/Charts/BarChart';
import { DoughnutChart } from '../../../molecules/Charts/DoughnutChart';
import { HeaderBox } from '../../../molecules/DashboardHeader/HeaderBox';
import { ParticipantsLoading } from '../../../molecules/Loading/Dashboards/ParticipantsLoading';
import { ParticipantsStatsResponse } from '../../../types/dashboards';

const INITIAL_STATE = {
  completionRate: 0,
  activeSubmissions: 0,
  enrolledParticipants: 0,
  completedSubmissions: 0,
  withdrawnSubmissions: 0,
  visaStatusCounts: {
    completed: 0,
    inProgress: 0,
    incomplete: 0,
  },
};

const Page = () => {
  const { data, error, isLoading } = useFetch<ParticipantsStatsResponse>({
    url: ParticipantsStats.getDashboardStats(),
  });

  const {
    completionRate,
    visaStatusCounts,
    activeSubmissions,
    completedSubmissions,
    enrolledParticipants,
    withdrawnSubmissions,
  } = data || INITIAL_STATE;

  const { completed, inProgress, incomplete } = visaStatusCounts;
  const totalVisas = (
    Number(completed) +
    Number(inProgress) +
    Number(incomplete)
  ).toString();

  const ParticipantsHeaderCards = [
    {
      title: 'Enrolled Participants',
      count: enrolledParticipants,
      color: DashboardColors.LIGHT_PURPLE,
      Icon: PeopleIcon,
    },
    {
      title: 'Completion Rate',
      count: completionRate + '%',
      color: DashboardColors.CYAN,
      Icon: ChartIcon,
    },
    {
      title: 'Completed Applications',
      count: completedSubmissions,
      color: DashboardColors.BLUE,
      Icon: SolidTickIcon,
    },
    {
      title: 'Active Participants',
      count: activeSubmissions,
      color: DashboardColors.LIGHT_BLUE,
      Icon: UserTickIcon,
    },
    {
      title: 'Withdrawn',
      count: withdrawnSubmissions,
      color: DashboardColors.ORANGE,
      Icon: ReceiveSquareIcon,
    },
  ];

  const cardsList = ParticipantsHeaderCards.map((card) => (
    <HeaderBox
      {...card}
      key={card.title}
    />
  ));

  const partnersChartData = {
    labels: [
      'Partner 1',
      'Partner 2',
      'Partner 3',
      'Partner 4',
      'Partner 5',
      'Partner 6',
      'Partner 7',
    ],
    datasets: [
      {
        label: 'Leads',
        data: [120, 150, 180, 200, 220, 250, 320],
        backgroundColor: DashboardColors.LIGHT_CYAN,
      },
    ],
  };

  const stagesData = {
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
        barPercentage: 0.25,
      },
    ],
  };

  const visaStats = {
    labels: ['Completed', 'In Progress', 'Incomplete'],
    datasets: [
      {
        data: [completed, inProgress, incomplete],
        backgroundColor: [
          DashboardColors.LIGHT_PURPLE,
          DashboardColors.ORANGE,
          DashboardColors.LIGHT_CYAN,
          DashboardColors.RED,
        ],
        borderColor: [
          DashboardColors.LIGHT_PURPLE,
          DashboardColors.ORANGE,
          DashboardColors.LIGHT_CYAN,
          DashboardColors.RED,
        ],
        borderWidth: 1,
      },
    ],
  };

  if (isLoading) return <ParticipantsLoading />;
  if (error) return <div>Sorry, an error occurred</div>;

  return (
    <div>
      <div className={styles.dashboardHeader}>{cardsList}</div>

      <div className={styles.allChartsContainer}>
        <div className={`${styles.chartOuterContainer}`}>
          <h3 className={styles.chartContainerHeader}>Partners Chart</h3>
          <div className={styles.chartInnerContainer}>
            <BarChart
              barDirection='vertical'
              data={partnersChartData}
            />
          </div>
        </div>

        <div className={`${styles.chartOuterContainer} ${styles.threeFourth}`}>
          <h3 className={styles.chartContainerHeader}>Stages Chart</h3>
          <div className={styles.chartInnerContainer}>
            <BarChart data={stagesData} />
          </div>
        </div>

        <div className={`${styles.chartOuterContainer} ${styles.oneFourth}`}>
          <h3 className={styles.chartContainerHeader}>Visa Results</h3>
          <div className={styles.chartInnerContainer}>
            <DoughnutChart
              data={visaStats}
              legendPosition='bottom'
              centerText={['Total Visas:', totalVisas]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
