//TODO: -sarah- why styles cannot be destructed in TS
import React from 'react';

import styles from './style.module.css';

type Props = {
  title: string;
  count: string | number;
  per?: string;
  Icon: unknown;
  color: string;
};

export const HeaderBox = (props: Props) => {
  const { title = '', count = 0, Icon, color } = props;

  const colorWithOpacity = `rgba(${parseInt(color.slice(1, 3), 16)}, 
                              ${parseInt(color.slice(3, 5), 16)}, 
                              ${parseInt(color.slice(5, 7), 16)}, 0.1)`;

  return (
    <div className={styles.headerBox}>
      <div className={styles.textWrapper}>
        <h4
          className={`${styles.count} ${styles[color]}`}
          style={{ color: color }}
        >
          {count}
        </h4>
        <p className={styles.title}>{title}</p>
      </div>

      <div
        className={styles.icon}
        style={{ backgroundColor: colorWithOpacity }}
      >
        {/* @ts-ignore */}
        <Icon color={color} />
      </div>
    </div>
  );
};
