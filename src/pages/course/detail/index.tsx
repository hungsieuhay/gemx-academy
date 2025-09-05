import {
  CourseDetailHero,
  CourseDetailSidebar,
  CourseDetailTab,
} from "../../../features/course-detail";
import styles from "./styles.module.scss";

const CourseDetailPage = () => {
  return (
    <main>
      <CourseDetailHero />
      <div className={styles.courseContent}>
        <CourseDetailTab />
        <CourseDetailSidebar />
      </div>
    </main>
  );
};

export default CourseDetailPage;
