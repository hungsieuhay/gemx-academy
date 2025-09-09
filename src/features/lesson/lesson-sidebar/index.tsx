import clsx from "clsx";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Check, Play } from "lucide-react";

interface LessonSidebarProps {
  open?: boolean;
}

const lessonTab = [
  { key: "lessons-tab", label: "Lessons" },
  { key: "resources-tab", label: "Resources" },
  { key: "notes-tab", label: "Notes" },
];

const LessonSidebar = ({ open = false }: LessonSidebarProps) => {
  const [tabKey, setTabKey] = useState<string>("lessons-tab");

  const onClick = (key: string) => {
    setTabKey(key);
    document
      .querySelectorAll(`.${styles.tabContent}`)
      .forEach((item) => item.classList.remove(styles.active));
    const tab = document.getElementById(key);
    if (tab) {
      tab.classList.add(styles.active);
    }
  };

  return (
    <aside
      className={clsx(styles.lessonSidebar, open && styles.active)}
      id="sidebar"
    >
      <div className={styles.sidebarTabs}>
        {lessonTab.map((item) => (
          <button
            key={item.key}
            className={clsx(
              styles.tabBtn,
              item.key === tabKey && styles.active
            )}
            data-tab={item.key}
            onClick={() => onClick(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className={clsx(styles.tabContent, styles.active)} id="lessons-tab">
        <div className={styles.lessonList}>
          <div className={clsx(styles.lessonItem, styles.completed)}>
            <div className={styles.lessonStatus}>
              <Check size={14} />
            </div>
            <div className={styles.lessonMeta}>
              <div className={styles.lessonName}>
                2. Blockchain Basics Review
              </div>
              <div className={styles.lessonDuration}>15:45</div>
            </div>
          </div>
          <div className={clsx(styles.lessonItem, styles.active)}>
            <div className={styles.lessonStatus}>
              <Play size={14} />
            </div>
            <div className={styles.lessonMeta}>
              <div className={styles.lessonName}>
                5. Introduction to Smart Contracts
              </div>
              <div className={styles.lessonDuration}>18:30</div>
            </div>
          </div>
          <div className={styles.lessonItem}>
            <div className={styles.lessonStatus}>6</div>
            <div className={styles.lessonMeta}>
              <div className={styles.lessonName}>
                6. Writing Your First Smart Contract
              </div>
              <div className={styles.lessonDuration}>30:00</div>
            </div>
          </div>
          <div className={styles.lessonItem}>
            <div className={styles.lessonStatus}>7</div>
            <div className={styles.lessonMeta}>
              <div className={styles.lessonName}>7. Solidity Basics</div>
              <div className={styles.lessonDuration}>35:20</div>
            </div>
          </div>
          <div className={styles.lessonItem}>
            <div className={styles.lessonStatus}>8</div>
            <div className={styles.lessonMeta}>
              <div className={styles.lessonName}>
                8. Variables and Data Types
              </div>
              <div className={styles.lessonDuration}>22:10</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tabContent} id="resources-tab">
        <a href="#" className={styles.resourceItem}>
          <div className={styles.resourceIcon}>📄</div>
          <div className={styles.resourceInfo}>
            <div className={styles.resourceName}>Lesson Slides</div>
            <div className={styles.resourceSize}>PDF • 2.3 MB</div>
          </div>
        </a>
        <a href="#" className={styles.resourceItem}>
          <div className={styles.resourceIcon}>📝</div>
          <div className={styles.resourceInfo}>
            <div className={styles.resourceName}>Code Examples</div>
            <div className={styles.resourceSize}>ZIP • 156 KB</div>
          </div>
        </a>
        <a href="#" className={styles.resourceItem}>
          <div className={styles.resourceIcon}>📚</div>
          <div className={styles.resourceInfo}>
            <div className={styles.resourceName}>Additional Reading</div>
            <div className={styles.resourceSize}>PDF • 5.1 MB</div>
          </div>
        </a>
        <a href="#" className={styles.resourceItem}>
          <div className={styles.resourceIcon}>🔗</div>
          <div className={styles.resourceInfo}>
            <div className={styles.resourceName}>Useful Links</div>
            <div className={styles.resourceSize}>External Resources</div>
          </div>
        </a>
        <a href="#" className={styles.resourceItem}>
          <div className={styles.resourceIcon}>🎯</div>
          <div className={styles.resourceInfo}>
            <div className={styles.resourceName}>Practice Exercises</div>
            <div className={styles.resourceSize}>Interactive</div>
          </div>
        </a>
      </div>

      <div className={styles.tabContent} id="notes-tab">
        <div className={styles.notesContainer}>
          <textarea
            className={styles.notesTextarea}
            placeholder="Take your notes here..."
          />
          <button className={styles.saveNotesBtn}>Save Notes</button>
        </div>
      </div>
    </aside>
  );
};

export default LessonSidebar;
