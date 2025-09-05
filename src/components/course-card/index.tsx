import clsx from "clsx";
import styles from "./styles.module.scss";
import { Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface CourseCardProps {
  title: string;
  imgUrl: string;
  desc: string;
  author: string;
  slug: string;
}

const CourseCard = ({ title, imgUrl, desc, author, slug }: CourseCardProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/course/${slug}`);
  };

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
          <button className={styles.courseAction} onClick={onClick}>
            Start Learning →
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
