import styles from "./styles.module.scss";

const LessonNavigation = () => {
  return (
    <header className={styles.lessonHeader}>
      <div className={styles.headerLeft}>
        <a href="course-detail.html" className={styles.backBtn}>
          <span>←</span>
          <span>Back to Course</span>
        </a>
        <div className={styles.lessonInfo}>
          <div className={styles.courseName}>Smart Contract Development</div>
          <div className={styles.lessonTitle}>
            Lesson 5: Introduction to Smart Contracts
          </div>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.progressIndicator}>
          <span className={styles.progressText}>5 of 11 lessons</span>
          <div className={styles.progressBarMini}>
            <div
              className={styles.progressFillMini}
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>
        <button className={styles.completeBtn} id="completeBtn">
          Mark as Complete
        </button>
      </div>
    </header>
  );
};

export default LessonNavigation;
