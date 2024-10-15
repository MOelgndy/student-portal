import styles from './style.module.css';

import { HeaderBoxLoading } from './HeaderBoxLoading';

export const FinancialLoading = () => {
  return (
    <div>
      <div className={`${styles.dashboardHeader} ${styles.grid6_OrMore}`}>
        {[...Array(6)].map((_, index) => (
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

        <div className={`${styles.chartOuterContainer}`}>
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
