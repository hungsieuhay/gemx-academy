import { useState } from "react";
import { LessonNavigation } from "../../features/lesson";
import LessonContent from "../../features/lesson/lesson-content";
import LessonSidebar from "../../features/lesson/lesson-sidebar";
import styles from "./styles.module.scss";
import { BookCopy, X } from "lucide-react";

const LessonPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <section>
      <LessonNavigation />
      <div className={styles.lessonContainer}>
        <LessonSidebar open={open} />
        <LessonContent />
        <button className={styles.sidebarToggle} onClick={() => setOpen(!open)}>
          {open ? <X color="#ffffff" /> : <BookCopy color="#ffffff" />}
        </button>
      </div>
    </section>
  );
};

export default LessonPage;
