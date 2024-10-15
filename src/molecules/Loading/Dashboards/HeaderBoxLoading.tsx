import styles from './style.module.css';

export const HeaderBoxLoading = () => {
  return (
    <div className={`${styles.headerBox}`}>
      <div className={`${styles.textWrapper}`}>
        <h4 className={`${styles.count} ${styles.shimmer}`}></h4>
        <p className={`${styles.title} ${styles.shimmer}`}></p>
      </div>

      <div className={`${styles.icon} ${styles.shimmer}`}></div>
    </div>
  );
};
