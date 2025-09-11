import clsx from "clsx";
import { Check, Lock, Play } from "lucide-react";
import type { ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppkitModal } from "../../../hooks";
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
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/course/${courseSlug}/${sectionSlug}/${slug}`);
  };

  const { handleOpenAppkit } = useAppkitModal({ func: handleNavigate });

  return (
    <div
      className={clsx(
        styles.lesson,
        currentMode === "completed" ? styles.completed : ""
      )}
      onClick={handleOpenAppkit}
    >
      <span className={styles.lessonIcon}>{modeIcon[currentMode]}</span>
      <span className={styles.lessonTitle}>{name}</span>
      <span className={styles.lessonDuration}>20:15</span>
    </div>
  );
};

export default ModuleLesson;
