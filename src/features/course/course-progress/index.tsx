import styles from "./styles.module.scss";

const CourseProgress = () => {
  return (
    <section className="container mt-5">
      <h2 className="section-title mb-3">Your Learning Progress</h2>

      <div className={styles.progressCard}>
        <div className={styles.progressHeader}>
          <div>
            <h3 className={styles.progressTitle}>Blockchain Fundamentals</h3>
            <p className="text-secondary">12 of 15 lessons completed</p>
          </div>
          <div className={styles.progressPercentage}>80%</div>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "80%" }}></div>
        </div>
      </div>

      <div className={styles.progressCard}>
        <div className={styles.progressHeader}>
          <div>
            <h3 className={styles.progressTitle}>Smart Contract Development</h3>
            <p className="text-secondary">5 of 20 lessons completed</p>
          </div>
          <div className={styles.progressPercentage}>25%</div>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "25%" }}></div>
        </div>
      </div>

      <div className={styles.progressCard}>
        <div className={styles.progressHeader}>
          <div>
            <h3 className={styles.progressTitle}>DeFi Protocols</h3>
            <p className="text-secondary">8 of 10 lessons completed</p>
          </div>
          <div className={styles.progressPercentage}>80%</div>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "80%" }}></div>
        </div>
      </div>
    </section>
  );
};

export default CourseProgress;
