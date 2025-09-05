import clsx from "clsx";
import styles from "./styles.module.scss";

const CourseFilter = () => {
  return (
    <section className={styles.filterSection}>
      <div className={styles.filterContainer}>
        <div className={styles.filterTabs}>
          <button
            className={clsx(styles.filterBtn, styles.active)}
            data-filter="all"
          >
            All Courses
          </button>
          <button className={styles.filterBtn} data-filter="beginner">
            Beginner
          </button>
          <button className={styles.filterBtn} data-filter="intermediate">
            Intermediate
          </button>
          <button className={styles.filterBtn} data-filter="advanced">
            Advanced
          </button>
          <button className={styles.filterBtn} data-filter="free">
            Free
          </button>
          <button className={styles.filterBtn} data-filter="premium">
            Premium
          </button>
        </div>

        <div className={styles.filterOptions}>
          <select className={styles.filterSelect}>
            <option>Sort by: Popularity</option>
            <option>Sort by: Newest</option>
            <option>Sort by: Rating</option>
            <option>Sort by: Price</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default CourseFilter;
