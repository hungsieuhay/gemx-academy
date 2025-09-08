import clsx from "clsx";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface CourseCardSecondaryProps {
  title: string;
  imgUrl: string;
  desc: string;
  author: string;
  slug: string;
}

const CourseCardSecondary = ({
  title,
  imgUrl,
  desc,
  author,
  slug,
}: CourseCardSecondaryProps) => {
  return (
    <div className={styles.courseCard}>
      <Link to={`/course/${slug}`}>
        <div className={styles.courseThumbnail}>
          <div className={styles.courseBadge}>
            <Eye size={14} /> 10.5K
          </div>
          <img src={imgUrl} alt="thumbnail" />
        </div>
        <div className={styles.courseInfo}>
          <h3 className={styles.courseTitle}>{title}</h3>
          <p
            className={clsx("clamp-text", styles.courseDescription)}
            dangerouslySetInnerHTML={{ __html: `${desc}` }}
          />

          <p className={styles.courseMeta}>Author: {author} • 12 Lessons</p>
          <button className={styles.courseAction}>Start Learning →</button>
        </div>
      </Link>
    </div>
  );
};

export default CourseCardSecondary;
