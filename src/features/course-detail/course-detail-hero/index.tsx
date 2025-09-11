import clsx from "clsx";
import { Clock, Globe, Star, UsersRound } from "lucide-react";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components";
import { useAppkitModal, useCourse } from "../../../hooks";
import styles from "./styles.module.scss";

const CourseDetailHero = () => {
  const { course } = useCourse();
  const { courseSlug } = useParams();
  const navigate = useNavigate();

  const lessonUrl = useMemo(() => {
    let url: string = "";
    if (!course) return;
    const { sections } = course;

    for (const section of sections) {
      const lessonCompleted = section.lessons.find((item) => item.is_completed);
      if (lessonCompleted) {
        url = `/course/${courseSlug}/${section.slug}/${lessonCompleted.slug}`;
      }
    }
    url = `/course/${courseSlug}/${sections[0].slug}/${sections[0].lessons[0].slug}`;
    return url;
  }, [course, courseSlug]);

  const handleNavigate = () => {
    navigate(lessonUrl as string);
  };

  const { handleOpenAppkit } = useAppkitModal({ func: handleNavigate });

  if (!course) return;

  return (
    <section className={styles.courseHero}>
      <div className={styles.courseHeroContent}>
        <div className={styles.courseInfoSection}>
          <Breadcrumb />
          <div className={styles.courseMeta}>
            <span className={styles.courseCategory}>BLOCKCHAIN</span>
            <span className={styles.courseLevel}>Beginner</span>
          </div>
          <h1 className={styles.courseTitle}>{course.name}</h1>
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
            <button className={styles.enrollBtn} onClick={handleOpenAppkit}>
              Enroll Now
            </button>
            <span className={clsx(styles.priceTag, styles.free)}>FREE</span>
          </div>
        </div>
        <div className={styles.courseVideo}>
          <div className={styles.videoPlaceholder}>
            <div className={styles.playButton} onClick={handleOpenAppkit}>
              <div className={styles.playIcon} />
            </div>
            <img src={course.image} alt="course-thumbnail" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailHero;
