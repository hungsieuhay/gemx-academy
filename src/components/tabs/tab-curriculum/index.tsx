import clsx from "clsx";
import styles from "./styles.module.scss";

const TabCurriculum = () => {
  return (
    <div className="tab-panel" id="curriculum">
      <h2 className="section-title">Course Curriculum</h2>

      <div className={styles.module}>
        <div className={styles.moduleHeader}>
          <div className={styles.moduleTitle}>
            <span className={styles.moduleNumber}>Module 1</span>
            <span>Introduction to Blockchain</span>
          </div>
          <span className={styles.moduleInfo}>4 lessons • 1h 30m</span>
        </div>
        <div className={styles.moduleContent}>
          <div className={clsx(styles.lesson, styles.completed)}>
            <span className={styles.lessonIcon}>✓</span>
            <span className={styles.lessonTitle}>What is Blockchain?</span>
            <span className={styles.lessonDuration}>15:30</span>
          </div>
          <div className={clsx(styles.lesson, styles.completed)}>
            <span className={styles.lessonIcon}>✓</span>
            <span className={styles.lessonTitle}>History and Evolution</span>
            <span className={styles.lessonDuration}>12:45</span>
          </div>
          <div className={styles.lesson}>
            <span className={styles.lessonIcon}>▶</span>
            <span className={styles.lessonTitle}>
              Key Concepts and Terminology
            </span>
            <span className={styles.lessonDuration}>20:15</span>
          </div>
          <div className={styles.lesson}>
            <span className={styles.lessonIcon}>🔒</span>
            <span className={styles.lessonTitle}>Quiz: Blockchain Basics</span>
            <span className={styles.lessonDuration}>10 questions</span>
          </div>
        </div>
      </div>

      <div className={styles.module}>
        <div className={styles.moduleHeader}>
          <div className={styles.moduleTitle}>
            <span className={styles.moduleNumber}>Module 2</span>
            <span>Cryptography Fundamentals</span>
          </div>
          <span className={styles.moduleInfo}>5 lessons • 2h 15m</span>
        </div>
      </div>

      <div className={styles.module}>
        <div className={styles.moduleHeader}>
          <div className={styles.moduleTitle}>
            <span className={styles.moduleNumber}>Module 3</span>
            <span>How Blockchain Works</span>
          </div>
          <span className={styles.moduleInfo}>6 lessons • 2h 45m</span>
        </div>
      </div>

      <div className={styles.module}>
        <div className={styles.moduleHeader}>
          <div className={styles.moduleTitle}>
            <span className={styles.moduleNumber}>Module 4</span>
            <span>Consensus Mechanisms</span>
          </div>
          <span className={styles.moduleInfo}>4 lessons • 1h 50m</span>
        </div>
      </div>

      <div className={styles.module}>
        <div className={styles.moduleHeader}>
          <div className={styles.moduleTitle}>
            <span className={styles.moduleNumber}>Module 5</span>
            <span>Cryptocurrencies</span>
          </div>
          <span className={styles.moduleInfo}>5 lessons • 2h 20m</span>
        </div>
      </div>

      <div className={styles.module}>
        <div className={styles.moduleHeader}>
          <div className={styles.moduleTitle}>
            <span className={styles.moduleNumber}>Module 6</span>
            <span>Real-World Applications</span>
          </div>
          <span className={styles.moduleInfo}>3 lessons • 1h 20m</span>
        </div>
      </div>
    </div>
  );
};

export default TabCurriculum;
