import clsx from "clsx";
import { Check, Lock, Play } from "lucide-react";
import { type ReactNode } from "react";
import { useCourse } from "../../../hooks";
import styles from "./styles.module.scss";

type Mode = "completed" | "play" | "lock";

const TabCurriculum = () => {
  const { course } = useCourse();

  const getLessonMode = (
    moduleIndex: number,
    lessonIndex: number,
    isCompleted: boolean = false
  ): Mode => {
    if (isCompleted) return "completed";
    if (moduleIndex === 0 && lessonIndex === 0) return "play";
    if (lessonIndex === 0) return "play";

    return "lock";
  };

  const modeIcon: Record<Mode, ReactNode> = {
    completed: <Check size={20} style={{ color: "#fff" }} />,
    play: <Play size={20} style={{ color: "var(--primary-green)" }} />,
    lock: <Lock size={20} style={{ color: "var(--primary-green)" }} />,
  };

  return (
    <div className="tab-panel" id="curriculum">
      <h2 className="section-title">Course Curriculum</h2>
      {course && (
        <div>
          {course.sections.map((section, moduleIndex) => (
            <div className={styles.module} key={section.id}>
              <div className={styles.moduleHeader}>
                <div className={styles.moduleTitle}>
                  <span className={styles.moduleNumber}>
                    Module {moduleIndex + 1}
                  </span>
                  <span>{section.title}</span>
                </div>
                <span className={styles.moduleInfo}>
                  {section.lessons.length} lessons • 1h 30m
                </span>
              </div>
              <div className={styles.moduleContent}>
                {section.lessons.map((lesson, lessonIndex) => {
                  const currentMode = getLessonMode(
                    moduleIndex,
                    lessonIndex,
                    Boolean(lesson.is_completed)
                  );

                  return (
                    <div
                      className={clsx(
                        styles.lesson,
                        currentMode === "completed" ? styles.completed : ""
                      )}
                      key={lesson.id}
                    >
                      <span className={styles.lessonIcon}>
                        {modeIcon[currentMode]}
                      </span>
                      <span className={styles.lessonTitle}>{lesson.name}</span>
                      <span className={styles.lessonDuration}>20:15</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TabCurriculum;
