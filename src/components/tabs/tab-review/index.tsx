import styles from "./styles.module.scss";

const TabReview = () => {
  return (
    <div className="tab-panel" id="reviews">
      <h2 className="section-title">Student Reviews</h2>
      <div className={styles.reviewSummary}>
        <div className={styles.reviewAverage}>
          <div className={styles.reviewScore}>4.9</div>
          <div className={styles.reviewStarsLarge}>⭐⭐⭐⭐⭐</div>
          <div className={styles.reviewCount}>2,341 reviews</div>
        </div>

        <div className={styles.reviewBreakdown}>
          <div className={styles.ratingBar}>
            <span className={styles.ratingLabel}>5 stars</span>
            <div className={styles.ratingProgress}>
              <div className={styles.ratingFill} style={{ width: "85%" }}></div>
            </div>
            <span className={styles.ratingPercent}>85%</span>
          </div>
          <div className={styles.ratingBar}>
            <span className={styles.ratingLabel}>4 stars</span>
            <div className={styles.ratingProgress}>
              <div className={styles.ratingFill} style={{ width: "10%" }}></div>
            </div>
            <span className={styles.ratingPercent}>10%</span>
          </div>
          <div className={styles.ratingBar}>
            <span className={styles.ratingLabel}>3 stars</span>
            <div className={styles.ratingProgress}>
              <div className={styles.ratingFill} style={{ width: "3%" }}></div>
            </div>
            <span className={styles.ratingPercent}>3%</span>
          </div>
          <div className={styles.ratingBar}>
            <span className={styles.ratingLabel}>2 stars</span>
            <div className={styles.ratingProgress}>
              <div className={styles.ratingFill} style={{ width: "1%" }}></div>
            </div>
            <span className={styles.ratingPercent}>1%</span>
          </div>
          <div className={styles.ratingBar}>
            <span className={styles.ratingLabel}>1 star</span>
            <div className={styles.ratingProgress}>
              <div className={styles.ratingFill} style={{ width: "1%" }}></div>
            </div>
            <span className={styles.ratingPercent}>1%</span>
          </div>
        </div>
      </div>

      <div className={styles.reviewList}>
        <div className={styles.reviewItem}>
          <div className={styles.reviewHeader}>
            <div className={styles.reviewer}>
              <div className={styles.reviewerAvatar}>AK</div>
              <div>
                <div className={styles.reviewerName}>Alice Kim</div>
                <div className={styles.reviewDate}>2 weeks ago</div>
              </div>
            </div>
            <div className={styles.reviewRating}>⭐⭐⭐⭐⭐</div>
          </div>
          <p className={styles.reviewText}>
            Excellent course! Dr. Chen explains complex concepts in a way that's
            easy to understand. The practical examples really helped solidify my
            understanding of blockchain technology.
          </p>
        </div>

        <div className={styles.reviewItem}>
          <div className={styles.reviewHeader}>
            <div className={styles.reviewer}>
              <div className={styles.reviewerAvatar}>MS</div>
              <div>
                <div className={styles.reviewerName}>Michael Smith</div>
                <div className={styles.reviewDate}>1 month ago</div>
              </div>
            </div>
            <div className={styles.reviewRating}>⭐⭐⭐⭐⭐</div>
          </div>
          <p className={styles.reviewText}>
            As a complete beginner, I found this course incredibly valuable. The
            progression from basic to more advanced topics was perfect, and I
            now feel confident discussing blockchain technology.
          </p>
        </div>

        <div className={styles.reviewItem}>
          <div className={styles.reviewHeader}>
            <div className={styles.reviewer}>
              <div className={styles.reviewerAvatar}>RJ</div>
              <div>
                <div className={styles.reviewerName}>Robert Johnson</div>
                <div className={styles.reviewDate}>2 months ago</div>
              </div>
            </div>
            <div className={styles.reviewRating}>⭐⭐⭐⭐</div>
          </div>
          <p className={styles.reviewText}>
            Great comprehensive overview of blockchain. The only reason I'm not
            giving 5 stars is that I would have liked more hands-on coding
            exercises, but overall an excellent course.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabReview;
