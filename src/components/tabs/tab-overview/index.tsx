import { useCourse } from "../../../hooks";
import styles from "./styles.module.scss";

const TabOverview = () => {
  const { course } = useCourse();

  if (!course) return;

  return (
    <div className="tab-panel active" id="overview">
      <section className={styles.curriculumSection}>
        <h2 className="section-title">Course Description</h2>
        <p
          dangerouslySetInnerHTML={{ __html: `${course.description}` }}
          style={{ marginTop: "2rem" }}
        />
      </section>
    </div>
  );
};

export default TabOverview;
