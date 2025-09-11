import { VideoPlayer } from "../../../components";
import styles from "./styles.module.scss";

interface LessonContentProps {
  url: string;
}

const LessonContent = ({ url }: LessonContentProps) => {
  return (
    <main className={styles.lessonContent}>
      <VideoPlayer url={url} />
    </main>
  );
};

export default LessonContent;
