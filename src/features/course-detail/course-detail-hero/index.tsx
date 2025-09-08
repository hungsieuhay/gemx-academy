import clsx from "clsx";
import styles from "./styles.module.scss";
import { Star, UsersRound, Clock, Globe } from "lucide-react";
import { Breadcrumb } from "../../../components";

const CourseDetailHero = () => {
  return (
    <section className={styles.courseHero}>
      <div className={styles.courseHeroContent}>
        <div className={styles.courseInfoSection}>
          <Breadcrumb />
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
              <span className={styles.ratingStars}>
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
              </span>
              <span className={styles.ratingValue}>4.9</span>
              <span>(2,341 reviews)</span>
            </div>
            <div className={styles.courseStat}>
              <UsersRound size={16} />
              <span>15,234 students</span>
            </div>
            <div className={styles.courseStat}>
              <Clock size={16} />
              <span>12 hours</span>
            </div>
            <div className={styles.courseStat}>
              <Globe size={16} />
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
