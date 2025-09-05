import styles from "./styles.module.scss";

const CourseDetailSidebar = () => {
  return (
    <aside className={styles.courseSidebar}>
      <div className={styles.sidebarCard}>
        <h3 style={{ marginBottom: "1.5rem" }}>This course includes</h3>
        <ul className={styles.courseIncludes}>
          <li>
            <span className={styles.includeIcon}>🎥</span>
            <span>12 hours of video content</span>
          </li>
          <li>
            <span className={styles.includeIcon}>📁</span>
            <span>25 downloadable resources</span>
          </li>
          <li>
            <span className={styles.includeIcon}>📝</span>
            <span>6 practice quizzes</span>
          </li>
          <li>
            <span className={styles.includeIcon}>💻</span>
            <span>Coding exercises</span>
          </li>
          <li>
            <span className={styles.includeIcon}>📱</span>
            <span>Mobile & TV access</span>
          </li>
          <li>
            <span className={styles.includeIcon}>🏆</span>
            <span>NFT Certificate</span>
          </li>
          <li>
            <span className={styles.includeIcon}>♾️</span>
            <span>Lifetime access</span>
          </li>
        </ul>
      </div>

      <div className={styles.sidebarCard}>
        <h3 style={{ marginBottom: "1.5rem" }}>Requirements</h3>
        <ul className="requirements-list">
          <li>A computer with internet connection</li>
          <li>No programming experience required</li>
          <li>Basic computer skills</li>
          <li>Enthusiasm to learn!</li>
        </ul>
      </div>

      <div className={styles.sidebarCard} style={{ textAlign: "center" }}>
        <h3 style={{ marginBottom: "1.5rem" }}>Share this course</h3>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button
            style={{
              width: "50px",
              height: "50px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            📘
          </button>
          <button
            style={{
              width: "50px",
              height: "50px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            🐦
          </button>
          <button
            style={{
              width: "50px",
              height: "50px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            💼
          </button>
          <button
            style={{
              width: "50px",
              height: "50px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          >
            🔗
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CourseDetailSidebar;
