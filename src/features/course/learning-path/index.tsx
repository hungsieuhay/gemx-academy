import styles from "./styles.module.scss";

const LearningPath = () => {
  return (
    <section className={styles.pathsSection}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Structured Learning Paths</h2>
          <a href="#" className="view-all">
            View all paths →
          </a>
        </div>

        <div className={styles.pathsGrid}>
          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>🎯</div>
            <h3 className={styles.pathTitle}>Blockchain Developer</h3>
            <p className={styles.pathDescription}>
              Complete path to become a professional blockchain developer from
              scratch.
            </p>
            <div className={styles.pathStats}>
              <div className={styles.pathStat}>
                <div className={styles.pathStatValue}>12</div>
                <div className={styles.pathStatLabel}>Courses</div>
              </div>
              <div className={styles.pathStat}>
                <div className={styles.pathStatValue}>40h</div>
                <div className={styles.pathStatLabel}>Duration</div>
              </div>
              <div className={styles.pathStat}>
                <div className={styles.pathStatValue}>5</div>
                <div className={styles.pathStatLabel}>Projects</div>
              </div>
            </div>
          </div>

          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>📊</div>
            <h3 className={styles.pathTitle}>DeFi Specialist</h3>
            <p className={styles.pathDescription}>
              Master decentralized finance protocols and become a DeFi expert.
            </p>
            <div className={styles.pathStats}>
              <div className={styles.pathStat}>
                <div className={styles.pathStatValue}>8</div>
                <div className={styles.pathStatLabel}>Courses</div>
              </div>
              <div className={styles.pathStat}>
                <div className={styles.pathStatValue}>25h</div>
                <div className={styles.pathStatLabel}>Duration</div>
              </div>
              <div className={styles.pathStat}>
                <div className={styles.pathStatValue}>3</div>
                <div className={styles.pathStatLabel}>Projects</div>
              </div>
            </div>
          </div>

          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>💹</div>
            <h3 className={styles.pathTitle}>Crypto Trader Pro</h3>
            <p className={styles.pathDescription}>
              Learn professional trading strategies and technical analysis.
            </p>
            <div className={styles.pathStats}>
              <div className={styles.pathStat}>
                <div className={styles.pathStatValue}>10</div>
                <div className={styles.pathStatLabel}>Courses</div>
              </div>
              <div className={styles.pathStat}>
                <div className={styles.pathStatValue}>30h</div>
                <div className={styles.pathStatLabel}>Duration</div>
              </div>
              <div className={styles.pathStat}>
                <div className={styles.pathStatValue}>4</div>
                <div className={styles.pathStatLabel}>Projects</div>
              </div>
            </div>
          </div>

          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>🔒</div>
            <h3 className={styles.pathTitle}>Security Auditor</h3>
            <p className={styles.pathDescription}>
              Become a blockchain security expert and smart contract auditor.
            </p>
            <div className={styles.pathStats}>
              <div className={styles.pathStat}>
                <div className={styles.pathStatValue}>15</div>
                <div className={styles.pathStatLabel}>Courses</div>
              </div>
              <div className={styles.pathStat}>
                <div className={styles.pathStatValue}>50h</div>
                <div className={styles.pathStatLabel}>Duration</div>
              </div>
              <div className={styles.pathStat}>
                <div className={styles.pathStatValue}>6</div>
                <div className={styles.pathStatLabel}>Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
