import styles from "./styles.module.scss";
import { Clock } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className={styles.comingSoon}>
      {/* Background Pattern */}
      <div className={styles.backgroundPattern}>
        <svg
          className={styles.patternSvg}
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                stopColor="var(--gradient-start)"
                stopOpacity="0.1"
              />
              <stop
                offset="100%"
                stopColor="var(--gradient-end)"
                stopOpacity="0.05"
              />
            </linearGradient>
            <pattern
              id="hexPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="50,1 95,25 95,75 50,99 5,75 5,25"
                fill="none"
                stroke="var(--pattern-color)"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gradient1)" />
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <div
          className={styles.floatingCircle}
          style={{ "--delay": "0s" } as React.CSSProperties}
        />
        <div
          className={styles.floatingCircle}
          style={{ "--delay": "2s" } as React.CSSProperties}
        />
        <div
          className={styles.floatingCircle}
          style={{ "--delay": "4s" } as React.CSSProperties}
        />
        <div
          className={styles.floatingSquare}
          style={{ "--delay": "1s" } as React.CSSProperties}
        />
        <div
          className={styles.floatingSquare}
          style={{ "--delay": "3s" } as React.CSSProperties}
        />
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.glassCard}>
          <div className={styles.iconWrapper}>
            <div className={styles.iconGlow} />
            <Clock className={styles.icon} />
            <div className={styles.iconRing} />
          </div>

          <h1 className={styles.title}>Coming Soon</h1>

          {/* Progress Indicator */}
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div className={styles.progressFill} />
              <div className={styles.progressGlow} />
            </div>
            <p className={styles.progressText}>In Development</p>
          </div>

          {/* Interactive Elements */}
          <div className={styles.particleContainer}>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={styles.particle}
                style={
                  { "--particle-delay": `${i * 0.5}s` } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
