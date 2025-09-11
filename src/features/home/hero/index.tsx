import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Hero = () => {
  const navigate = useNavigate();

  const handleStarted = () => {
    navigate("/course");
  };
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBg}></div>

      <div className={styles.floatingElements}>
        <div className={styles.gemShape}></div>
        <div className={styles.gemShape}></div>
        <div className={styles.gemShape}></div>
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          BLOCKCHAIN & CRYPTO EDUCATION PLATFORM
        </h1>
        <p className={styles.heroSubtitle}>
          Join a Global Community & Learn About Crypto and Blockchain for Free!
        </p>

        <div className={styles.heroButtons}>
          <button className="btn btn-primary" onClick={handleStarted}>
            Get Started
          </button>
          <button className="btn btn-secondary">Watch Demo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
