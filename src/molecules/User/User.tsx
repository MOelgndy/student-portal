import styles from './style.module.css';

import { userColors } from '../../data/users.data';

type Props = {
  index: number;
  firstName: string;
  lastName: string;
  profileImage: string | null;
};

export const User = (props: Props) => {
  const { index = 1, firstName, lastName, profileImage } = props;

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  const backgroundColor = userColors[index % userColors.length];

  const Initials = () => (
    <div
      className={styles.initials}
      style={{ backgroundColor }}
    >
      {initials}
    </div>
  );

  return (
    <div className={styles.user}>
      {profileImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt='User'
          src={profileImage}
        />
      ) : (
        <Initials />
      )}
    </div>
  );
};
