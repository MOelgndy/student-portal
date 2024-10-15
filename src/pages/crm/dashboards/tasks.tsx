import { useMemo } from 'react';

import styles from './style.module.css';

import { TasksStats } from '../../../api/dashboardEndpoints';
import { ClockIcon } from '../../../assets/icons/ClockIcon';
import { PeopleIcon } from '../../../assets/icons/PeopleIcon';
import { SolidTickIcon } from '../../../assets/icons/SolidTickIcon';
import { TimerIcon } from '../../../assets/icons/TimerIcon';
import { DashboardColors } from '../../../data/dashboard.data';
import { useFetch } from '../../../hooks/useFetch';
import { DoughnutChart } from '../../../molecules/Charts/DoughnutChart';
import { LineChart } from '../../../molecules/Charts/LineChart';
import { PieChart } from '../../../molecules/Charts/PieChart';
import { HeaderBox } from '../../../molecules/DashboardHeader/HeaderBox';
import { TasksLoading } from '../../../molecules/Loading/Dashboards/TasksLoading';
import { EmployeeRatings } from '../../../organisms/EmployeeRatingTable/EmployeeRatings';
import { RecentActivities } from '../../../organisms/RecentActivities/RecentActivities';
import {
  EmployeeRating,
  FullResponse,
  RecentActivity,
  TasksOverTimeItem,
  TasksOverTimeResponse,
  TasksStatsResponse,
} from '../../../types/dashboards';

const DASHBOARD_INITIAL_STATE = {
  numericResults: {
    completedTasks: 0,
    overDueTasks: 0,
    pendingTasks: 0,
    taskCompletionRate: 0,
    totalTasks: 0,
  },
  pieChartResults: {
    closed: 0,
    inProgress: 0,
    overDue: 0,
    todo: 0,
  },
};

const RESPONSE_INITIAL_STATE = {
  rowsTotal: 0,
  pagesCount: 0,
  pagesStart: 0,
  pagesStop: 0,
  results: [],
};

// TODO: -sarah- loading shimmer
// TODO: -sarah- Error state - should be separate for each request

const Page = () => {
  const {
    data: dashboardStats,
    error: dashboardStatsError,
    isLoading: isDashboardStatsLoading,
  } = useFetch<TasksStatsResponse>({
    url: TasksStats.getDashboardStats(),
  });

  const {
    data: tasksOverTimeStats,
    error: tasksOverTimeStatsError,
    isLoading: isTasksOverTimeStatsLoading,
  } = useFetch<TasksOverTimeResponse>({
    url: TasksStats.getCompletionOverTime(),
  });

  const {
    data: employeesRatingsResponse,
    error: employeesRatingsError,
    isLoading: isEmployeesRatingsLoading,
  } = useFetch<FullResponse<EmployeeRating>>({
    url: TasksStats.getHighestEmployeeRating(),
  });

  const { results: employeeRatings } =
    employeesRatingsResponse || RESPONSE_INITIAL_STATE;

  const {
    data: recentActivitiesResponse,
    error: latestActivitiesError,
    isLoading: isLatestActivitiesLoading,
  } = useFetch<FullResponse<RecentActivity>>({
    url: TasksStats.getLatestActivities(),
  });

  const { results: recentActivities } =
    recentActivitiesResponse || RESPONSE_INITIAL_STATE;

  const tasksOverTimeStatsLabel = useMemo(
    () =>
      (tasksOverTimeStats || []).map(
        (item: TasksOverTimeItem) => item.completionDate
      ),
    [tasksOverTimeStats]
  );

  const tasksOverTimeStatsPlots = useMemo(
    () =>
      (tasksOverTimeStats || []).map((item: TasksOverTimeItem) => item.count),
    [tasksOverTimeStats]
  );

  const { numericResults, pieChartResults } =
    dashboardStats || DASHBOARD_INITIAL_STATE;

  const {
    totalTasks,
    overDueTasks,
    pendingTasks,
    completedTasks,
    taskCompletionRate,
  } = numericResults;

  const TasksHeaderCards = [
    {
      title: 'Total Tasks',
      count: totalTasks,
      color: DashboardColors.LIGHT_PURPLE,
      Icon: PeopleIcon,
    },
    {
      title: 'Completed Tasks',
      count: completedTasks,
      color: DashboardColors.CYAN,
      Icon: SolidTickIcon,
    },
    {
      title: 'Pending Tasks',
      count: pendingTasks,
      color: DashboardColors.LIGHT_BLUE,
      Icon: ClockIcon,
    },
    {
      title: 'Overdue Tasks',
      count: overDueTasks,
      color: DashboardColors.RED,
      Icon: TimerIcon,
    },
  ];

  const cardsList = TasksHeaderCards.map((card) => (
    <HeaderBox
      {...card}
      key={card.title}
    />
  ));

  const pieData = {
    labels: ['Closed', 'In Progress', 'Overdue', 'Todo'],
    datasets: [
      {
        data: Object.values(pieChartResults),
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
    labels: ['Over due', 'Pending', 'Completed'],
    datasets: [
      {
        data: [overDueTasks, pendingTasks, completedTasks],
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
    labels: tasksOverTimeStatsLabel,
    datasets: [
      {
        data: tasksOverTimeStatsPlots,
        borderColor: DashboardColors.ORANGE,
        backgroundColor: DashboardColors.ORANGE,
      },
    ],
  };

  if (
    isDashboardStatsLoading ||
    isEmployeesRatingsLoading ||
    isLatestActivitiesLoading ||
    isTasksOverTimeStatsLoading
  )
    return <TasksLoading />;
  if (
    dashboardStatsError ||
    employeesRatingsError ||
    latestActivitiesError ||
    tasksOverTimeStatsError
  )
    return <div>Sorry, an error occurred</div>;

  return (
    <div>
      <div className={styles.dashboardHeader}>{cardsList}</div>

      <div className={styles.allChartsContainer}>
        <div className={`${styles.chartOuterContainer}`}>
          <h3 className={styles.chartContainerHeader}>
            Task Completion Over Time
          </h3>
          <div className={styles.chartInnerContainer}>
            <LineChart data={lineData} />
          </div>
        </div>

        <div className={`${styles.chartOuterContainer} ${styles.twoFourth}`}>
          <h3 className={styles.chartContainerHeader}>Tasks Completion Rate</h3>
          <div className={styles.chartInnerContainer}>
            <DoughnutChart
              data={doughnutData}
              legendPosition='bottom'
              centerText={['Completion Rate', taskCompletionRate + '%']}
            />
          </div>
        </div>

        <div className={`${styles.chartOuterContainer} ${styles.twoFourth}`}>
          <h3 className={styles.chartContainerHeader}>Tasks by Status</h3>
          <div className={styles.chartInnerContainer}>
            <PieChart
              data={pieData}
              legendPosition='bottom'
            />
          </div>
        </div>
      </div>

      <div className={`${styles.allChartsContainer} ${styles.threeColumns}`}>
        <div
          className={`${styles.chartOuterContainer} ${styles.twoThird} ${styles.alignStart}`}
        >
          <h3 className={styles.chartContainerHeader}>
            Highest employee rating
          </h3>
          <div className={styles.chartInnerContainer}>
            <EmployeeRatings employeeRatings={employeeRatings} />
          </div>
        </div>

        <div
          className={`${styles.chartOuterContainer} ${styles.oneThird}  ${styles.alignStart}`}
        >
          <h3 className={styles.chartContainerHeader}>
            Recent Task Activities
          </h3>
          <div className={styles.chartInnerContainer}>
            <RecentActivities recentActivities={recentActivities} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
