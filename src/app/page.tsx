"use client"; // Mark as client component

import Image from "next/image";
import { useRouter } from 'next/navigation'; // Import useRouter
import styles from "./page.module.css";
import StarryBackground from "./components/StarryBackground/StarryBackground";

export default function Home() {
  const router = useRouter(); // Initialize useRouter

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

      {/* Section Présentation Générale */}
      <section 
        id="presentation-preview"
        className={styles.presentationSection}
        onClick={() => router.push(`/presentation`)}
      >
        <div className={styles.presentationContainer}>
          <h2 className={styles.presentationTitle}>
            Présentation Générale
            <div className={styles.presentationTitleUnderline}/>
          </h2>

          <div className={styles.presentationTextContainer}>
            <p style={{ marginBottom: `2rem` }}>
              Curieux et motivé , j`aime me lancer dans des projets techniques et apprendre en avançant. Mes études d`ingénieur m`ont donné les bases , mon alternance m`a fait travailler sur Next.js et Prisma , et mes projets perso en Node.js m`ont permis d`essayer des choses. J`ai aussi créé un site pour des vignerons en auto-entrepreneur , et les bons retours m`ont confirmé que ce métier est fait pour moi.
            </p>
            <p>
              En full stack , j`aime tout prendre en charge : discuter avec le client pour comprendre ses besoins , concevoir le projet , coder – souvent avec SQL ou TypeScript – et le déployer. Résoudre des problèmes et améliorer le code , c`est ce qui me plaît. Je me tiens à jour avec de la veille et des petits projets perso , et à terme, je me vois tech lead tout en gardant un pied dans le développement.
            </p>
            <div className={styles.learnMoreLink}>
              <span>En savoir plus</span>
              <span className={styles.learnMoreArrow}>→</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
