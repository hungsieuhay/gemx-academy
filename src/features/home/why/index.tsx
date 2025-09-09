import {
  ChartColumn,
  Earth,
  Gem,
  GraduationCap,
  Lock,
  Trophy,
} from "lucide-react";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const Why = () => {
  const statsGridRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const target = statsGridRef.current; // copy ref value ngay đầu effect

    if (!target) return;

    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const stats = entry.target.querySelectorAll<HTMLElement>(
            `.${styles.statValue}`
          );

          stats.forEach((stat) => {
            const value = stat.textContent || "";
            const isPercentage = value.includes("%");
            const isPlus = value.includes("+");
            const isTime = value.includes("/");

            if (!isTime) {
              const num = parseInt(value.replace(/\D/g, ""), 10);
              let current = 0;
              const increment = num / 50;

              const counter = setInterval(() => {
                current += increment;
                if (current >= num) {
                  stat.textContent = value;
                  clearInterval(counter);
                } else {
                  let display = Math.floor(current).toString();
                  if (isPercentage) display += "%";
                  if (isPlus && num >= 1000) {
                    display = Math.floor(current / 1000) + "K+";
                  } else if (isPlus) {
                    display += "+";
                  }
                  stat.textContent = display.toString();
                }
              }, 30);
            }
          });

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  return (
    <section className={styles.whyGemx}>
      <div className={styles.whyGemxBg}></div>
      <div className={styles.whyContainer}>
        <h2 className={styles.whyTitle}>Why Choose GemX Academy?</h2>
        <p className={styles.whySubtitle}>
          The most comprehensive blockchain education platform
        </p>

        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <GraduationCap size={32} />
            </div>
            <h3 className={styles.featureName}>Expert Instructors</h3>
            <p className={styles.featureDesc}>
              Learn from industry professionals with real-world experience
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Earth size={32} />
            </div>
            <h3 className={styles.featureName}>Global Community</h3>
            <p className={styles.featureDesc}>
              Connect with learners and experts from around the world
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Gem size={32} />
            </div>
            <h3 className={styles.featureName}>Free Access</h3>
            <p className={styles.featureDesc}>
              Quality education accessible to everyone, anywhere
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <ChartColumn size={32} />
            </div>
            <h3 className={styles.featureName}>Real-Time Learning</h3>
            <p className={styles.featureDesc}>
              Stay updated with the latest market trends and technologies
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Trophy size={32} />
            </div>
            <h3 className={styles.featureName}>Certificates</h3>
            <p className={styles.featureDesc}>
              Earn blockchain-verified certificates for your achievements
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Lock size={32} />
            </div>
            <h3 className={styles.featureName}>Security Focused</h3>
            <p className={styles.featureDesc}>
              Master security best practices to protect your assets
            </p>
          </div>
        </div>

        <div className={styles.statsGrid} ref={statsGridRef}>
          <div className={styles.stat}>
            <div className={styles.statValue}>50K+</div>
            <div className={styles.statName}>Active Students</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>200+</div>
            <div className={styles.statName}>Course Modules</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statName}>Success Rate</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statValue}>24/7</div>
            <div className={styles.statName}>Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
