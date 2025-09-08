import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface CourseCardPrimaryProps {
  title: string;
  desc: string;
  author: string;
  image: string;
  fee: number;
  slug: string;
  category: string;
}

const CourseCardPrimary = ({
  title,
  desc,
  author,
  image,
  fee,
  slug,
  category,
}: CourseCardPrimaryProps) => {
  return (
    <div className={styles.courseCard} data-category="beginner">
      <Link to={`/course/${slug}`}>
        <div className={styles.courseThumbnail}>
          <span className={styles.courseLevel}>Beginner</span>
          <span className={styles.courseDuration}>⏱ 4h 30m</span>
          <img src={image} alt="card-thumbnail" />
        </div>
        <div className={styles.courseInfo}>
          <div className={styles.courseCategory}>{category}</div>
          <h3 className={styles.courseTitle}>{title}</h3>
          <div className={styles.courseRating}>
            <span className={styles.ratingStars}>⭐⭐⭐⭐⭐</span>
            <span className={styles.ratingCount}>(4.9 • 2,341 reviews)</span>
          </div>
          <p
            className={clsx(styles.courseDescription, "clamp-long-text")}
            dangerouslySetInnerHTML={{ __html: desc }}
          />

          <div className={styles.courseFooter}>
            <div className={styles.courseInstructor}>
              <div className={styles.instructorAvatar}>JD</div>
              <span>{author}</span>
            </div>
            <div className={styles.coursePrice}>{fee !== 0 ? fee : "FREE"}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCardPrimary;
