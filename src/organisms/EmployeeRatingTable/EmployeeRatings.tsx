import styles from './style.module.css';

import { User } from '../../molecules/User/User';
import { EmployeeRating } from '../../types/dashboards';

type Props = { employeeRatings: EmployeeRating[] };

export const EmployeeRatings = (props: Props) => {
  const { employeeRatings } = props;

  const tableRows = () => {
    return (
      <>
        {(employeeRatings || []).map((employeeRating: EmployeeRating) => {
          const {
            id,
            firstName,
            lastName,
            //userProfile,
            completionRate,
            completedTasksCount,
            pendingTasksCount,
            overDueTasksCount,
          } = employeeRating;

          return (
            <tr
              key={id}
              className={styles.row}
            >
              <td className={`${styles.candidateName} ${styles.dataItem}`}>
                <div className={styles.candidateImage}>
                  <User
                    key={id}
                    index={1}
                    firstName={firstName}
                    lastName={lastName}
                    profileImage={null}
                    //profileImage={userProfile.profileImage}
                  />
                </div>
                {/* TODO: -sarah- until fixed from backend */}
                {/*<Image
                  width={32}
                  height={32}
                  alt='Candidate Image'
                  src={userProfile.profileImage || '/'}
                />*/}
                <span>
                  {firstName} {lastName}
                </span>
              </td>
              <td className={styles.dataItem}>{overDueTasksCount}</td>
              <td className={styles.dataItem}>{pendingTasksCount}</td>
              <td className={styles.dataItem}>{completedTasksCount}</td>
              <td className={`${styles.dataItem} ${styles.completionRate}`}>
                {completionRate}
              </td>
            </tr>
          );
        })}
      </>
    );
  };

  return (
    <table
      border={0}
      className={styles.table}
    >
      <thead className={styles.tableHeader}>
        <tr className={styles.headerRow}>
          <th className={styles.headerItem}>Candidate Name</th>
          <th className={styles.headerItem}>Overdue Tasks</th>
          <th className={styles.headerItem}>Pending Tasks</th>
          <th className={styles.headerItem}>Completed Tasks</th>
          <th className={styles.headerItem}>Completion Rate</th>
        </tr>
      </thead>
      <tbody>{tableRows()}</tbody>
    </table>
  );
};
