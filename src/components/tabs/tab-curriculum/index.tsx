import { ModuleHeader, ModuleLesson } from "../../../features/lesson";
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

  return (
    <div className="tab-panel" id="curriculum">
      <h2 className="section-title">Course Curriculum</h2>
      {course && (
        <div>
          {course.sections.map((section, moduleIndex) => (
            <div className={styles.module} key={section.id}>
              <ModuleHeader
                moduleOrder={moduleIndex}
                title={section.title}
                total={section.lessons.length}
              />
              <div className={styles.moduleContent}>
                {section.lessons.map((lesson, lessonIndex) => {
                  const currentMode = getLessonMode(
                    moduleIndex,
                    lessonIndex,
                    Boolean(lesson.is_completed)
                  );
                  return (
                    <ModuleLesson
                      key={lesson.id}
                      currentMode={currentMode}
                      name={lesson.name}
                      slug={lesson.slug}
                      sectionSlug={section.slug}
                    />
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
