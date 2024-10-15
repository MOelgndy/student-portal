// Participants Dashboards
type VisaStatusCounts = {
  completed: number;
  inProgress: number;
  incomplete: number;
};

type ParticipantsStatsResponse = {
  completionRate: number;
  activeSubmissions: number;
  enrolledParticipants: number;
  completedSubmissions: number;
  withdrawnSubmissions: number;
  visaStatusCounts: VisaStatusCounts;
};

// Tasks Dashboard

type NumericResults = {
  completedTasks: number;
  overDueTasks: number;
  pendingTasks: number;
  taskCompletionRate: number;
  totalTasks: number;
};

type PieChartResults = {
  closed: number;
  inProgress: number;
  overDue: number;
  todo: number;
};

type TasksStatsResponse = {
  numericResults: NumericResults;
  pieChartResults: PieChartResults;
};

type TasksOverTimeItem = {
  count: number;
  completionDate: string;
};

type TasksOverTimeResponse = TasksOverTimeItem[];

type UserProfile = {
  profileImage: string | null;
};

type EmployeeRating = {
  id: number;
  firstName: string;
  lastName: string;
  userProfile: UserProfile;
  totalTasksCount: number;
  completionRate: number;
  completedTasksCount: number;
  pendingTasksCount: number;
  overDueTasksCount: number;
};

type FullResponse<T> = {
  rowsTotal: number;
  pagesCount: number;
  pagesStart: number;
  pagesStop: number;
  results: T[];
};

type User = {
  id: number;
  firstName: string;
  lastName: string;
  userProfile: UserProfile;
};

type RecentActivity = {
  id: number;
  title: string;
  content: string;
  status: number;
  priority: number;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  incrementalId: number;
  assignee: User;
  reporter: User;
  watchers: User[];
};

// Financial Dashboard
type RevenueData = {
  month: string;
  totalIncome: string;
};

type ExpenseData = {
  month: string;
  totalExpense: string;
};

type TopRevenueSource = {
  title: string;
  totalRevenue: number;
};

type FinancialDataResponse = {
  revenueData: RevenueData[];
  expenseData: ExpenseData[];
  totalIncomeAmount: string;
  totalExpenseAmount: string;
  totalNetProfitAmount: string;
  totalPendingInvoicesAmount: string;
  totalPaymentsReceivedAmount: string;
  topRevenueSources: TopRevenueSource[];
  totalInvoicesPaymentsDueAmount: string;
};

export type {
  User,
  RevenueData,
  ExpenseData,
  FullResponse,
  RecentActivity,
  EmployeeRating,
  TopRevenueSource,
  TasksOverTimeItem,
  TasksStatsResponse,
  TasksOverTimeResponse,
  FinancialDataResponse,
  ParticipantsStatsResponse,
};
