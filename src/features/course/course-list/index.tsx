import styles from "./styles.module.scss";

const CourseList = () => {
  return (
    <section className={styles.coursesSection}>
      <div className={styles.coursesGrid}>
        <div className={styles.courseCard} data-category="beginner">
          <div className={styles.courseThumbnail}>
            <span className={styles.courseLevel}>Beginner</span>
            <span className={styles.courseDuration}>⏱ 4h 30m</span>
            🔗
          </div>
          <div className={styles.courseInfo}>
            <div className={styles.courseCategory}>BLOCKCHAIN BASICS</div>
            <h3 className={styles.courseTitle}>
              Introduction to Blockchain Technology
            </h3>
            <div className={styles.courseRating}>
              <span className={styles.ratingStars}>⭐⭐⭐⭐⭐</span>
              <span className={styles.ratingCount}>(4.9 • 2,341 reviews)</span>
            </div>
            <p className={styles.courseDescription}>
              Learn the fundamentals of blockchain technology, how it works, and
              its real-world applications.
            </p>
            <div className={styles.courseFooter}>
              <div className={styles.courseInstructor}>
                <div className={styles.instructorAvatar}>JD</div>
                <span>John Doe</span>
              </div>
              <div className={styles.coursePrice}>FREE</div>
            </div>
          </div>
        </div>

        <div className={styles.courseCard} data-category="intermediate">
          <div className={styles.courseThumbnail}>
            <span className={styles.courseLevel}>Intermediate</span>
            <span className={styles.courseDuration}>⏱ 8h 15m</span>
            💎
          </div>
          <div className={styles.courseInfo}>
            <div className={styles.courseCategory}>SMART CONTRACTS</div>
            <h3 className={styles.courseTitle}>
              Ethereum Smart Contract Development
            </h3>
            <div className={styles.courseRating}>
              <span className={styles.ratingStars}>⭐⭐⭐⭐⭐</span>
              <span className={styles.ratingCount}>(4.8 • 1,892 reviews)</span>
            </div>
            <p className={styles.courseDescription}>
              Master Solidity programming and build decentralized applications
              on Ethereum.
            </p>
            <div className={styles.courseFooter}>
              <div className={styles.courseInstructor}>
                <div className={styles.instructorAvatar}>AS</div>
                <span>Alice Smith</span>
              </div>
              <div className={styles.coursePrice}>$49</div>
            </div>
          </div>
        </div>

        <div className={styles.courseCard} data-category="advanced">
          <div className={styles.courseThumbnail}>
            <span className={styles.courseLevel}>Advanced</span>
            <span className={styles.courseDuration}>⏱ 12h 45m</span>
            🚀
          </div>
          <div className={styles.courseInfo}>
            <div className={styles.courseCategory}>DEFI</div>
            <h3 className={styles.courseTitle}>
              Advanced DeFi Protocols & Yield Farming
            </h3>
            <div className={styles.courseRating}>
              <span className={styles.ratingStars}>⭐⭐⭐⭐⭐</span>
              <span className={styles.ratingCount}>(4.9 • 987 reviews)</span>
            </div>
            <p className={styles.courseDescription}>
              Deep dive into DeFi protocols, liquidity mining, and advanced
              trading strategies.
            </p>
            <div className={styles.courseFooter}>
              <div className={styles.courseInstructor}>
                <div className={styles.instructorAvatar}>MB</div>
                <span>Mike Brown</span>
              </div>
              <div className={styles.coursePrice}>$99</div>
            </div>
          </div>
        </div>

        <div className={styles.courseCard} data-category="beginner">
          <div className={styles.courseThumbnail}>
            <span className={styles.courseLevel}>Beginner</span>
            <span className={styles.courseDuration}>⏱ 3h 20m</span>
            💰
          </div>
          <div className={styles.courseInfo}>
            <div className={styles.courseCategory}>TRADING</div>
            <h3 className={styles.courseTitle}>
              Cryptocurrency Trading for Beginners
            </h3>
            <div className={styles.courseRating}>
              <span className={styles.ratingStars}>⭐⭐⭐⭐⭐</span>
              <span className={styles.ratingCount}>(4.7 • 3,456 reviews)</span>
            </div>
            <p className={styles.courseDescription}>
              Learn the basics of crypto trading, market analysis, and risk
              management.
            </p>
            <div className={styles.courseFooter}>
              <div className={styles.courseInstructor}>
                <div className={styles.instructorAvatar}>SJ</div>
                <span>Sarah Jones</span>
              </div>
              <div className={styles.coursePrice}>FREE</div>
            </div>
          </div>
        </div>

        <div className={styles.courseCard} data-category="intermediate">
          <div className={styles.courseThumbnail}>
            <span className={styles.courseLevel}>Intermediate</span>
            <span className={styles.courseDuration}>⏱ 6h 10m</span>
            🔐
          </div>
          <div className={styles.courseInfo}>
            <div className={styles.courseCategory}>SECURITY</div>
            <h3 className={styles.courseTitle}>
              Blockchain Security & Best Practices
            </h3>
            <div className={styles.courseRating}>
              <span className={styles.ratingStars}>⭐⭐⭐⭐⭐</span>
              <span className={styles.ratingCount}>(4.9 • 1,234 reviews)</span>
            </div>
            <p className={styles.courseDescription}>
              Understand security vulnerabilities and implement best practices
              for secure blockchain development.
            </p>
            <div className={styles.courseFooter}>
              <div className={styles.courseInstructor}>
                <div className={styles.instructorAvatar}>RT</div>
                <span>Robert Taylor</span>
              </div>
              <div className={styles.coursePrice}>$69</div>
            </div>
          </div>
        </div>

        <div className={styles.courseCard} data-category="advanced">
          <div className={styles.courseThumbnail}>
            <span className={styles.courseLevel}>Advanced</span>
            <span className={styles.courseDuration}>⏱ 10h 30m</span>
            ⛓️
          </div>
          <div className={styles.courseInfo}>
            <div className={styles.courseCategory}>LAYER 2</div>
            <h3 className={styles.courseTitle}>
              Layer 2 Solutions & Scaling Technologies
            </h3>
            <div className={styles.courseRating}>
              <span className={styles.ratingStars}>⭐⭐⭐⭐⭐</span>
              <span className={styles.ratingCount}>(4.8 • 678 reviews)</span>
            </div>
            <p className={styles.courseDescription}>
              Explore Layer 2 scaling solutions, rollups, sidechains, and state
              channels.
            </p>
            <div className={styles.courseFooter}>
              <div className={styles.courseInstructor}>
                <div className={styles.instructorAvatar}>LW</div>
                <span>Lisa Wong</span>
              </div>
              <div className={styles.coursePrice}>$89</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseList;
