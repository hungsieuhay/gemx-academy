import styles from "./styles.module.scss";

const TabInstructor = () => {
  return (
    <div className="tab-panel" id="instructor">
      <h2 className="section-title">Your Instructor</h2>
      <div className={styles.instructorSection}>
        <div className={styles.instructorProfile}>
          <div className={styles.instructorAvatar}>JC</div>
          <div className={styles.instructorInfo}>
            <h3 className={styles.instructorName}>Dr. John Chen</h3>
            <p className={styles.instructorTitle}>
              Blockchain Expert & Software Engineer
            </p>
            <div className={styles.instructorStats}>
              <span>⭐ 4.9 Rating</span>
              <span>👥 45,234 Students</span>
              <span>📚 12 Courses</span>
            </div>
          </div>
        </div>
        <p className={styles.instructorBio}>
          Dr. John Chen is a renowned blockchain expert with over 10 years of
          experience in distributed systems and cryptography. He has worked with
          Fortune 500 companies to implement blockchain solutions and has
          published numerous research papers on consensus mechanisms and smart
          contract security.
        </p>
        <p className={styles.instructorBio} style={{ marginTop: "1rem" }}>
          As an educator, John is passionate about making complex technical
          concepts accessible to everyone. His teaching philosophy emphasizes
          practical understanding through real-world examples and hands-on
          exercises.
        </p>
      </div>
    </div>
  );
};

export default TabInstructor;
