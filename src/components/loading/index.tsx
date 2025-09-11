import styles from "./styles.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.hackerLoader}>
        <div className={styles.binaryRing}></div>
        <div className={styles.core}></div>
        <div className={styles.binaryDigits}>
          <span>0</span>
          <span>1</span>
          <span>0</span>
          <span>1</span>
          <span>1</span>
          <span>0</span>
          <span>1</span>
          <span>0</span>
        </div>
        <div className={styles.loadingText}>Loading</div>
      </div>
    </div>
  );
};

export default Loading;
