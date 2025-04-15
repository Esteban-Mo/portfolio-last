import Image from "next/image";
import styles from "./page.module.css";
import StarryBackground from "./components/StarryBackground/StarryBackground";

export default function Home() {
  return (
    <div className={styles.container}>
      <StarryBackground />

      {/* Section Hero */}
      <section id="home" className={styles.heroSection}>
        <h1 className={styles.heroName}>
          ESTEBAN MORTIER
        </h1>
        
        <div className={styles.heroDivider} />
        
        <h2 className={styles.heroTitle}>
          EXPERT EN INGÉNIERIE LOGICIELLE
        </h2>

        {/* Indicateur de scroll avec chevrons améliorés */}
        <div className={styles.scrollIndicator}>
          <div className={styles.chevronContainer}>
            <div className={`${styles["scroll-chevron"]} ${styles["scroll-chevron-1"]}`} />
            <div className={`${styles["scroll-chevron"]} ${styles["scroll-chevron-2"]}`} />
            <div className={`${styles["scroll-chevron"]} ${styles["scroll-chevron-3"]}`} />
          </div>
        </div>
      </section>

    </div>
  );
}
