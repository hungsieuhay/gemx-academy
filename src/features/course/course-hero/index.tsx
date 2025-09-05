import styles from "./styles.module.scss";

const CourseHero = () => {
  return (
    <section className={styles.learnHero}>
      <div className={styles.learnHeroContent}>
        <div className={styles.learnHeroText}>
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span>/</span>
            <span>Learn</span>
          </div>
          <h1 className="gradient-text">Master Blockchain & Cryptocurrency</h1>
          <p>
            Start your journey with our comprehensive courses designed by
            industry experts. From beginner to advanced, we've got you covered.
          </p>

          <div className={styles.searchBox}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search for courses, topics, instructors..."
            />
            <button className={styles.searchBtn}>Search</button>
          </div>

          <div className={styles.learnStats}>
            <div className={styles.learnStat}>
              <div className={styles.learnStatIcon}>📚</div>
              <div>
                <div className={styles.learnStatValue}>200+</div>
                <div className={styles.learnStatLabel}>Courses</div>
              </div>
            </div>
            <div className={styles.learnStat}>
              <div className={styles.learnStatIcon}>👥</div>
              <div>
                <div className={styles.learnStatValue}>50K+</div>
                <div className={styles.learnStatLabel}>Students</div>
              </div>
            </div>
            <div className={styles.learnStat}>
              <div className={styles.learnStatIcon}>🏆</div>
              <div>
                <div className={styles.learnStatValue}>98%</div>
                <div className={styles.learnStatLabel}>Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.learnHeroVisual}>
          <div className={styles.floatingCards}>
            <div className={styles.floatCard}>
              <div className="badge">New</div>
              <h4>DeFi Mastery</h4>
              <p>Advanced Course</p>
            </div>
            <div className={styles.floatCard}>
              <div className="badge badge-dark">Popular</div>
              <h4>Smart Contracts</h4>
              <p>15 Lessons</p>
            </div>
            <div className={styles.floatCard}>
              <div className="badge">Free</div>
              <h4>Blockchain 101</h4>
              <p>Beginner Friendly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
