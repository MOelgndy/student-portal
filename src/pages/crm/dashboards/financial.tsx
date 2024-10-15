import { useMemo } from 'react';

import styles from './style.module.css';

import { FinancialStats } from '../../../api/dashboardEndpoints';
import { ChartIcon } from '../../../assets/icons/ChartIcon';
import { MoneySendIcon } from '../../../assets/icons/MoneySendIcon';
import { PeopleIcon } from '../../../assets/icons/PeopleIcon';
import { ReceiptItemIcon } from '../../../assets/icons/ReceiptItemIcon';
import { ReceiveSquareIcon } from '../../../assets/icons/ReceiveSquareIcon';
import { TimerIcon } from '../../../assets/icons/TimerIcon';
import { DashboardColors } from '../../../data/dashboard.data';
import { useFetch } from '../../../hooks/useFetch';
import { BarChart } from '../../../molecules/Charts/BarChart';
import { LineChart } from '../../../molecules/Charts/LineChart';
import { HeaderBox } from '../../../molecules/DashboardHeader/HeaderBox';
import { FinancialLoading } from '../../../molecules/Loading/Dashboards/FinancialLoading';
import {
  ExpenseData,
  FinancialDataResponse,
  RevenueData,
  TopRevenueSource,
} from '../../../types/dashboards';

// TODO: -sarah- Error state

const INITIAL_STATE = {
  expenseData: [],
  revenueData: [],
  totalIncomeAmount: 0,
  topRevenueSources: [],
  totalExpenseAmount: 0,
  totalNetProfitAmount: 0,
  totalPendingInvoicesAmount: 0,
  totalPaymentsReceivedAmount: 0,
  totalInvoicesPaymentsDueAmount: 0,
};

const Page = () => {
  const { data, error, isLoading } = useFetch<FinancialDataResponse>({
    url: FinancialStats.getDashboardStats(),
  });

  const {
    revenueData,
    expenseData,
    topRevenueSources,
    totalIncomeAmount,
    totalExpenseAmount,
    totalNetProfitAmount,
    totalPendingInvoicesAmount,
    totalPaymentsReceivedAmount,
    totalInvoicesPaymentsDueAmount,
  } = data || INITIAL_STATE;

  const FinancialHeaderCards = [
    {
      title: 'Total Revenue',
      count: totalIncomeAmount,
      color: DashboardColors.LIGHT_PURPLE,
      Icon: PeopleIcon,
    },
    {
      title: 'Total Expenses',
      count: totalExpenseAmount,
      color: DashboardColors.CYAN,
      Icon: ChartIcon,
    },
    {
      title: 'Net Profit',
      count: totalNetProfitAmount,
      color: DashboardColors.BLUE,
      Icon: MoneySendIcon,
    },
    {
      title: 'Pending Invoices',
      count: totalPendingInvoicesAmount,
      color: DashboardColors.LIGHT_BLUE,
      Icon: ReceiptItemIcon,
    },
    {
      title: 'Payment Received',
      count: totalPaymentsReceivedAmount,
      color: DashboardColors.ORANGE,
      Icon: ReceiveSquareIcon,
    },
    {
      title: 'Payment Due',
      count: totalInvoicesPaymentsDueAmount,
      color: DashboardColors.RED,
      Icon: TimerIcon,
    },
  ];

  const lineGraphLabels = useMemo(
    () => (revenueData || []).map((item: RevenueData) => item.month),
    [revenueData]
  );

  const revenueDataPlots = useMemo(
    () => (revenueData || []).map((item: RevenueData) => item.totalIncome),
    [revenueData]
  );

  const expenseDataPlots = useMemo(
    () => (expenseData || []).map((item: ExpenseData) => item.totalExpense),
    [expenseData]
  );

  const lineData = {
    labels: lineGraphLabels,
    datasets: [
      {
        label: 'Revenue',
        data: revenueDataPlots,
        borderColor: DashboardColors.LIGHT_PURPLE,
        backgroundColor: DashboardColors.LIGHT_PURPLE,
      },
      {
        label: 'Expenses',
        data: expenseDataPlots,
        borderColor: DashboardColors.ORANGE,
        backgroundColor: DashboardColors.ORANGE,
      },
    ],
  };

  const topRevenueSourcesLabels = useMemo(
    () => (topRevenueSources || []).map((item: TopRevenueSource) => item.title),
    [topRevenueSources]
  );

  const topRevenueSourcesData = useMemo(
    () =>
      (topRevenueSources || []).map(
        (item: TopRevenueSource) => item.totalRevenue
      ),
    [topRevenueSources]
  );

  const cardsList = FinancialHeaderCards.map((card) => (
    <HeaderBox
      {...card}
      key={card.title}
    />
  ));

  const stagesData = {
    labels: topRevenueSourcesLabels,
    datasets: [
      {
        data: topRevenueSourcesData,
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

  if (isLoading) return <FinancialLoading />;
  if (error) return <div>Sorry, an error occurred</div>;

  return (
    <div>
      <div className={`${styles.dashboardHeader} ${styles.grid6_OrMore}`}>
        {cardsList}
      </div>

      <div className={styles.allChartsContainer}>
        <div className={`${styles.chartOuterContainer}`}>
          <h3 className={styles.chartContainerHeader}>Revenue & Expenses</h3>
          <div className={styles.chartInnerContainer}>
            <LineChart
              data={lineData}
              legendPosition='top'
            />
          </div>
        </div>

        <div className={`${styles.chartOuterContainer} `}>
          <h3 className={styles.chartContainerHeader}>Stages Chart</h3>
          <div className={styles.chartInnerContainer}>
            <BarChart data={stagesData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
