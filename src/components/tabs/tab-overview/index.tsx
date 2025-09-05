import styles from "./styles.module.scss";

const TabOverview = () => {
  return (
    <div className="tab-panel active" id="overview">
      <section className={styles.curriculumSection}>
        <h2 className="section-title">What you'll learn</h2>
        <div
          className="requirements-list"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <li>✓ Understand blockchain technology fundamentals</li>
          <li>✓ Learn how cryptocurrencies work</li>
          <li>✓ Master consensus mechanisms (PoW, PoS)</li>
          <li>✓ Explore smart contracts basics</li>
          <li>✓ Understand cryptography in blockchain</li>
          <li>✓ Learn about decentralized networks</li>
          <li>✓ Explore real-world blockchain use cases</li>
          <li>✓ Security best practices</li>
        </div>
      </section>

      <section className={styles.curriculumSection}>
        <h2 className="section-title">Course Description</h2>
        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginTop: "1rem",
          }}
        >
          This comprehensive blockchain fundamentals course is designed to take
          you from zero knowledge to a solid understanding of blockchain
          technology and cryptocurrencies. Whether you're a complete beginner or
          have some basic knowledge, this course will provide you with the
          foundation you need to understand this revolutionary technology.
        </p>
        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginTop: "1rem",
          }}
        >
          Throughout the course, you'll learn through a combination of video
          lectures, practical examples, quizzes, and hands-on exercises. We'll
          explore the history of blockchain, understand how it works under the
          hood, and examine its potential to transform various industries. By
          the end of this course, you'll have a strong grasp of blockchain
          concepts and be ready to explore more advanced topics.
        </p>
      </section>

      <section className={styles.curriculumSection}>
        <h2 className="section-title">Who this course is for</h2>
        <ul className="requirements-list" style={{ marginTop: "1.5rem" }}>
          <li>Complete beginners interested in blockchain technology</li>
          <li>Developers wanting to understand blockchain fundamentals</li>
          <li>Business professionals exploring blockchain opportunities</li>
          <li>Students and researchers studying emerging technologies</li>
          <li>Anyone curious about cryptocurrencies and how they work</li>
        </ul>
      </section>
    </div>
  );
};

export default TabOverview;
