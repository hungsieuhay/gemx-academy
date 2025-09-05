import styles from "./styles.module.scss";

const Partners = () => {
  return (
    <section className={styles.partners}>
      <div className={styles.partnersContainer}>
        <p className={styles.partnersTitle}>Trusted by Industry Leaders</p>
        <div className={styles.partnersGrid}>
          <div className={styles.partnerLogo}>BINANCE</div>
          <div className={styles.partnerLogo}>Coinbase</div>
          <div className={styles.partnerLogo}>CoinMarketCap</div>
          <div className={styles.partnerLogo}>Kraken</div>
          <div className={styles.partnerLogo}>OKX</div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
