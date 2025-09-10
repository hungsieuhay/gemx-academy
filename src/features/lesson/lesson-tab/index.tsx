import clsx from "clsx";
import { Check, Play, Lock } from "lucide-react";
import type { Lesson } from "../../../types";
import styles from "./styles.module.scss";
import { Link, useParams } from "react-router-dom";
import type { ReactNode } from "react";

type Mode = "completed" | "play" | "lock";

const LessonItem = ({
  name,
  slug,
  status,
}: {
  name: string;
  slug: string;
  status: Mode;
}) => {
  const { lessonSlug, sectionSlug, courseSlug } = useParams();

  const iconMode: Record<Mode, ReactNode> = {
    completed: <Check size={14} />,
    play: <Play size={14} />,
    lock: <Lock size={14} />,
  };

  return (
    <Link to={`/course/${courseSlug}/${sectionSlug}/${slug}`}>
      <div
        className={clsx(
          styles.lessonItem,
          slug === lessonSlug && styles.active,
          status === "completed" && styles.completed
        )}
      >
        <div className={styles.lessonStatus}>{iconMode[status]}</div>
        <div className={styles.lessonMeta}>
          <div className={styles.lessonName}>{name}</div>
          <div className={styles.lessonDuration}>15:45</div>
        </div>
      </div>
    </Link>
  );
};

interface LessonTabProps {
  data: Lesson[];
}

const LessonTab = ({ data }: LessonTabProps) => {
  const getStatus = (isCompleted: boolean, index: number): Mode => {
    if (isCompleted) return "completed";
    if (index === 0) return "play";

    return "lock";
  };

  return (
    <div className={styles.lessonList}>
      {data.map((item, index) => {
        const status = getStatus(Boolean(item.is_completed), index);
        return <LessonItem name={item.name} slug={item.slug} status={status} />;
      })}
    </div>
  );
};

export default LessonTab;
