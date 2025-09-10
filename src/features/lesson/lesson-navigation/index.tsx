import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

interface LessonNavigationProps {
  sectionTitle: string;
  lessonTitle: string;
  total: number;
  totalCompleted: number;
}

const LessonNavigation = ({
  sectionTitle,
  lessonTitle,
  total,
  totalCompleted,
}: LessonNavigationProps) => {
  const { courseSlug } = useParams();

  return (
    <header className={styles.lessonHeader}>
      <div className={styles.headerLeft}>
        <a href={`/course/${courseSlug}`} className={styles.backBtn}>
          <span>←</span>
          <span>Back to Course</span>
        </a>
        <div className={styles.lessonInfo}>
          <div className={styles.courseName}>{sectionTitle}</div>
          <div className={styles.lessonTitle}>{lessonTitle}</div>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.progressIndicator}>
          <span className={styles.progressText}>
            {totalCompleted} of {total} lessons
          </span>
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
