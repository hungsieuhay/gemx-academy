import clsx from "clsx";
import { Check, Lock, Play } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.scss";

type Mode = "completed" | "play" | "lock";

interface ModuleLessonProps {
  currentMode: Mode;
  name: string;
  slug: string;
  sectionSlug: string;
}

const modeIcon: Record<Mode, ReactNode> = {
  completed: <Check size={20} style={{ color: "#fff" }} />,
  play: <Play size={20} style={{ color: "var(--primary-green)" }} />,
  lock: <Lock size={20} style={{ color: "var(--primary-green)" }} />,
};

const ModuleLesson = ({
  currentMode,
  name,
  slug,
  sectionSlug,
}: ModuleLessonProps) => {
  const { courseSlug } = useParams();

  return (
    <Link to={`/course/${courseSlug}/${sectionSlug}/${slug}`}>
      <div
        className={clsx(
          styles.lesson,
          currentMode === "completed" ? styles.completed : ""
        )}
      >
        <span className={styles.lessonIcon}>{modeIcon[currentMode]}</span>
        <span className={styles.lessonTitle}>{name}</span>
        <span className={styles.lessonDuration}>20:15</span>
      </div>
    </Link>
  );
};

export default ModuleLesson;
