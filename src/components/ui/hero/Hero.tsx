/* eslint-disable react/react-in-jsx-scope */
import styles from "../hero/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTitleContainer}>
        <h1>
          Super flash sale <span>50% off</span>
        </h1>
      </div>
    </div>
  );
}
