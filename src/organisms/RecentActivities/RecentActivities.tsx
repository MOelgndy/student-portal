import styles from './style.module.css';

import { formatDate, getDayOfMonth, getWeekday } from '../../helpers/date';
import { RecentActivity, User as UserType } from '../../types/dashboards';
import { UsersList } from '../UsersList/UsersList';

type Props = { recentActivities: RecentActivity[] };

const STATUS = {
  1: 'Todo',
  2: 'In Progress',
  3: 'Closed',
  4: 'Over Due',
};

export const RecentActivities = (props: Props) => {
  const { recentActivities } = props;

  const getRows = () => {
    return (
      <>
        {(recentActivities || []).map((activity: RecentActivity) => {
          const {
            id,
            title,
            status,
            createdAt,
            dueDate,
            reporter,
            assignee,
            watchers,
          } = activity;

          const allUsers: UserType[] = Array.from(
            new Map(
              [reporter, assignee, ...watchers].map((user) => [user.id, user])
            ).values()
          );

          return (
            <div
              key={id}
              className={styles.row}
            >
              <div className={styles.date}>
                <h3 className={styles.dayOfMonth}>
                  {getDayOfMonth(createdAt)}
                </h3>
                <p className={styles.dayOfWeek}> {getWeekday(createdAt)}</p>
              </div>

              <div className={styles.data}>
                <div className={styles.info}>
                  <p className={styles.time}>{formatDate(dueDate)}</p>
                  <p className={styles.name}>
                    {STATUS[status as keyof typeof STATUS]} ({title})
                  </p>
                </div>

                <UsersList
                  allUsers={allUsers}
                  numberOfUsersToShow={3}
                />
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return <div className={styles.recentActivitiesWrapper}>{getRows()}</div>;
};
