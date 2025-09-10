import { useQuery } from "@tanstack/react-query";
import { BookCopy, X } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import sectionApi from "../../api/section-api";
import {
  LessonContent,
  LessonNavigation,
  LessonSidebar,
} from "../../features/lesson";
import styles from "./styles.module.scss";
import lessonApi from "../../api/lesson-api";

const LessonPage = () => {
  const { sectionSlug, lessonSlug } = useParams();
  const [open, setOpen] = useState<boolean>(false);

  const { data: sectionData, status: sectionStatus } = useQuery({
    queryFn: () => sectionApi.getSection(sectionSlug as string),
    queryKey: ["section-detail", sectionSlug],
  });

  const { data: lessonData, status: lessonStatus } = useQuery({
    queryFn: () => lessonApi.getLesson(lessonSlug as string),
    queryKey: ["lesson-detail", lessonSlug],
  });

  const totalCompleted = sectionData?.data.lessons.filter(
    (item) => item.is_completed === 1
  ).length;

  if (sectionStatus === "pending" || lessonStatus === "pending")
    return <div>Loading ...</div>;
  if (sectionStatus === "error" || lessonStatus === "error") return;

  return (
    <section>
      <LessonNavigation
        sectionTitle={sectionData.data.title}
        lessonTitle={lessonData.data.name}
        total={sectionData.data.lessons.length}
        totalCompleted={totalCompleted ?? 0}
      />
      <div className={styles.lessonContainer}>
        <LessonSidebar data={sectionData.data.lessons} open={open} />
        <LessonContent src={lessonData.data.link} />
        <button className={styles.sidebarToggle} onClick={() => setOpen(!open)}>
          {open ? <X color="#ffffff" /> : <BookCopy color="#ffffff" />}
        </button>
      </div>
    </section>
  );
};

export default LessonPage;
