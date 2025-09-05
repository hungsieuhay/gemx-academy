import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>
            <div
              className={styles.logoIcon}
              style={{ width: "25px", height: "25px" }}
            />
            GEMX ACADEMY
          </div>
          <p className={styles.footerDesc}>
            Empowering the next generation of blockchain developers and crypto
            enthusiasts through comprehensive education and practical learning.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              f
            </a>
            <a href="#" className={styles.socialLink}>
              𝕏
            </a>
            <a href="#" className={styles.socialLink}>
              in
            </a>
            <a href="#" className={styles.socialLink}>
              ▶
            </a>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h4>Platform</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Learning Paths</a>
            </li>
            <li>
              <a href="#">Certificates</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Resources</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">API Reference</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Research</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Company</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Newsletter</h4>
          <div className={styles.newsletter}>
            <p className={styles.newsletterTitle}>
              Stay updated with our latest courses
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                className={styles.newsletterInput}
                placeholder="Enter your email"
              />
              <button type="submit" className={styles.newsletterBtn}>
                →
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © 2025 GemX Academy. All rights reserved.
        </p>
        <div className={styles.legalLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
