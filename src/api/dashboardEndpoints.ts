const ParticipantsStats = {
  getDashboardStats: () => `program/get_participants_stats`,
};

const TasksStats = {
  getHighestEmployeeRating: () => `tickets/get_highest_employee_rating`,
  getCompletionOverTime: () => `tickets/get_tickets_completion_overtime`,
  getLatestActivities: () => `tickets/get_tickets_latest_activities`,
  getDashboardStats: () => `tickets/get_tickets_numeric_and_pie_chart_data`,
};

const FinancialStats = {
  getDashboardStats: () => `dashboard/get_financial_details`,
};

export { ParticipantsStats, TasksStats, FinancialStats };
