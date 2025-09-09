import styles from "./styles.module.scss";
import { Volume2, Play, Pause, Maximize } from "lucide-react";

const LessonContent = () => {
  return (
    <main className={styles.lessonContent}>
      <div className={styles.videoSection}>
        <div className={styles.videoPlaceholder}>
          <div className={styles.playOverlay}>
            <div className={styles.playBtnLarge}>
              <Play size={40} color="var(--bg-primary)" />
            </div>
          </div>

          <div className={styles.videoControls}>
            <Pause size={20} strokeWidth={1.2} />
            <span className={styles.timeDisplay}>06:45 / 18:30</span>
            <div className={styles.progressSlider}>
              <div className={styles.progressSliderFill}></div>
            </div>
            <div className={styles.volumeControl}>
              <Volume2 size={20} strokeWidth={1.2} />
              <div className={styles.volumeSlider}>
                <div className={styles.volumeFill}></div>
              </div>
            </div>
            <Maximize size={20} strokeWidth={1.2} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LessonContent;
