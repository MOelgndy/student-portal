import styles from './style.module.css';

import { HeaderBoxLoading } from './HeaderBoxLoading';

export const TasksLoading = () => {
  return (
    <div>
      <div className={styles.dashboardHeader}>
        {[...Array(4)].map((_, index) => (
          <HeaderBoxLoading key={index} />
        ))}
      </div>

      <div className={styles.allChartsContainer}>
        <div className={`${styles.chartOuterContainer}`}>
          <div className={`${styles.chartContainerHeader}`}>
            <div className={`${styles.header} ${styles.shimmer}`} />
          </div>

          <div className={styles.chartInnerContainer}>
            <div className={`${styles.chart} ${styles.shimmer}`} />
          </div>
        </div>

        <div className={`${styles.chartOuterContainer} ${styles.twoFourth}`}>
          <div className={`${styles.chartContainerHeader}`}>
            <div className={`${styles.header} ${styles.shimmer}`} />
          </div>

          <div className={styles.chartInnerContainer}>
            <div className={`${styles.chart} ${styles.shimmer}`} />
          </div>
        </div>

        <div className={`${styles.chartOuterContainer} ${styles.twoFourth}`}>
          <div className={`${styles.chartContainerHeader}`}>
            <div className={`${styles.header} ${styles.shimmer}`} />
          </div>

          <div className={styles.chartInnerContainer}>
            <div className={`${styles.chart} ${styles.shimmer}`} />
          </div>
        </div>
      </div>

      <div className={`${styles.allChartsContainer} ${styles.threeColumns}`}>
        <div className={`${styles.chartOuterContainer} ${styles.twoThird}`}>
          <div className={`${styles.chartContainerHeader}`}>
            <div className={`${styles.header} ${styles.shimmer}`} />
          </div>

          <div className={styles.chartInnerContainer}>
            <div className={`${styles.chart} ${styles.shimmer}`} />
          </div>
        </div>

        <div className={`${styles.chartOuterContainer} ${styles.oneThird}`}>
          <div className={`${styles.chartContainerHeader}`}>
            <div className={`${styles.header} ${styles.shimmer}`} />
          </div>

          <div className={styles.chartInnerContainer}>
            <div className={`${styles.chart} ${styles.shimmer}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
