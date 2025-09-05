import clsx from "clsx";
import styles from "./styles.module.scss";

const CourseDetailHero = () => {
  return (
    <section className={styles.courseHero}>
      <div className={styles.courseHeroContent}>
        <div className={styles.courseInfoSection}>
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span>/</span>
            <a href="learn.html">Course</a>
            <span>/</span>
            <span>Blockchain Fundamentals</span>
          </div>
          <div className={styles.courseMeta}>
            <span className={styles.courseCategory}>BLOCKCHAIN</span>
            <span className={styles.courseLevel}>Beginner</span>
          </div>
          <h1 className={styles.courseTitle}>
            Blockchain Fundamentals & Cryptocurrency Basics
          </h1>
          <p className={styles.courseDescription}>
            Master the core concepts of blockchain technology from the ground
            up. This comprehensive coursecovers everything from basic
            cryptography to consensus mechanisms and real-world applications.
          </p>
          <div className={styles.courseStats}>
            <div className={styles.courseRating}>
              <span className={styles.ratingStars}>⭐⭐⭐⭐⭐</span>
              <span className={styles.ratingValue}>4.9</span>
              <span>(2,341 reviews)</span>
            </div>
            <div className={styles.courseStat}>
              <span>👥</span>
              <span>15,234 students</span>
            </div>
            <div className={styles.courseStat}>
              <span>⏱</span>
              <span>12 hours</span>
            </div>
            <div className={styles.courseStat}>
              <span>🌐</span>
              <span>English</span>
            </div>
          </div>
          <div className={styles.courseActions}>
            <button className={styles.enrollBtn}>Enroll Now</button>
            <span className={clsx(styles.priceTag, styles.free)}>FREE</span>
          </div>
        </div>
        <div className={styles.courseVideo}>
          <div className={styles.videoPlaceholder}>
            <div className={styles.playButton}>
              <div className={styles.playIcon}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailHero;
