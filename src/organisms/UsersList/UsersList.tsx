import styles from './style.module.css';

import { userColors } from '../../data/users.data';
import { User } from '../../molecules/User/User';
import { User as UserType } from '../../types/dashboards';

type Props = {
  allUsers: UserType[];
  numberOfUsersToShow: number;
};

export const UsersList = (props: Props) => {
  const { allUsers, numberOfUsersToShow = 0 } = props;
  const usersToShow = allUsers.slice(0, numberOfUsersToShow);
  const remainingCount = allUsers.length - numberOfUsersToShow;

  const getUser = (user: UserType, index: number) => {
    const { id, firstName, lastName } = user;
    //userProfile

    return (
      <div className={styles.user}>
        <User
          key={id}
          index={index}
          firstName={firstName}
          lastName={lastName}
          profileImage={null}
          //profileImage={userProfile.profileImage}
        />
      </div>
    );
  };

  return (
    <div className={styles.users}>
      {usersToShow.map((user, index) => getUser(user, index))}

      {remainingCount > 0 && (
        <div
          className={styles.more}
          style={{ backgroundColor: userColors[userColors.length - 1] }}
        >
          <span>+{remainingCount}</span>
        </div>
      )}
    </div>
  );
};
