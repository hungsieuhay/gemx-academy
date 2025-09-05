import {
  CourseDetailHero,
  CourseDetailSidebar,
} from "../../../features/course-detail";
import styles from "./styles.module.scss";
import { Tabs } from "../../../components";

const CourseDetailPage = () => {
  return (
    <main>
      <CourseDetailHero />
      <div className={styles.courseContent}>
        <Tabs />
        <CourseDetailSidebar />
      </div>
    </main>
  );
};

export default CourseDetailPage;
