"use client"; // Mark as client component

import Image from "next/image";
import { useRouter } from 'next/navigation'; // Import useRouter
import Chip from '@mui/material/Chip'; // Import MUI Chip
import styles from "./page.module.css";
import StarryBackground from "./components/StarryBackground/StarryBackground";
// Importer les données centralisées
import { skillsData, humanSkillsData, projectsData } from "../data/searchData"; 

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

      {/* Section Compétences Techniques */}
      <section id="skills" className={styles.skillsSection}>
        <div className={styles.skillsContainer}>
          <h2 className={styles.skillsTitle}>
            Compétences Techniques
            <div className={styles.skillsTitleUnderline}/>
          </h2>
          <div className={styles.skillsGrid}>
            {skillsData.map((skill, index) => (
              <div 
                key={index} 
                className={`${styles.skillCard} ${skill.link ? styles.clickableCard : ''}`}
                onClick={skill.link ? () => router.push(skill.link) : undefined}
              >
                <span className={styles.skillCardEmoji}>{skill.emoji}</span>
                <h3 className={styles.skillCardTitle}>{skill.title}</h3>
                <p className={styles.skillCardDescription}>{skill.description}</p>
                <div className={styles.skillCardChips}>
                  {skill.chips.map((chip, chipIndex) => (
                    <Chip 
                      key={chipIndex} 
                      label={chip} 
                      variant="outlined" 
                      size="small"
                      sx={{ 
                        color: '#e2e8f0', // slate-200
                        borderColor: 'rgba(148, 163, 184, 0.3)', // slate-400 with alpha
                        backgroundColor: 'rgba(100, 116, 139, 0.1)', // slate-500 with alpha
                        fontSize: '0.75rem',
                        borderRadius: '4px',
                        margin: '0.2rem',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 116, 139, 0.2)', // slightly darker on hover
                        }
                      }}
                    />
                  ))}
                </div>
                <a href="#" className={styles.skillCardLink}>
                  <span>En savoir plus</span>
                  <span className={styles.learnMoreArrow}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Compétence Humaine */}
      <section id="human-skills" className={styles.humanSkillsSection}>
        <div className={styles.skillsContainer}>
          <h2 className={styles.skillsTitle}>
            Compétences Humaines
            <div className={styles.skillsTitleUnderline}/>
          </h2>
          <div className={styles.humanSkillsGrid}>
            {humanSkillsData.map((skill, index) => (
              <div 
                key={index} 
                className={`${styles.humanSkillCard} ${skill.link ? styles.clickableCard : ''}`}
                onClick={skill.link ? () => router.push(skill.link) : undefined}
              >
                <span className={styles.humanSkillCardEmoji}>{skill.emoji}</span>
                <h3 className={styles.humanSkillCardTitle}>{skill.title}</h3>
                <p className={styles.humanSkillCardDescription}>{skill.description}</p>
                <a href="#" className={`${styles.skillCardLink} ${styles.humanSkillCardLink}`}>
                  <span>En savoir plus</span>
                  <span className={styles.learnMoreArrow}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Réalisations */}
      <section id="projects" className={styles.projectsSection}>
        <div className={styles.skillsContainer}>
          <h2 className={styles.skillsTitle}>
            Réalisations
            <div className={styles.skillsTitleUnderline}/>
          </h2>
          <div className={styles.projectsGrid}>
            {projectsData.map((project, index) => (
              <div 
                key={index} 
                className={`${styles.projectCard} ${project.link ? styles.clickableCard : ''}`}
                onClick={project.link ? () => router.push(project.link) : undefined}
              >
                <span className={styles.skillCardEmoji}>{project.emoji}</span>
                <h3 className={styles.skillCardTitle}>{project.title}</h3>
                <p className={styles.skillCardDescription}>{project.description}</p>
                <div className={styles.skillCardChips}>
                  {project.chips.map((chip, chipIndex) => (
                    <Chip 
                      key={chipIndex} 
                      label={chip} 
                      variant="outlined" 
                      size="small"
                      sx={{ 
                        color: '#e2e8f0', 
                        borderColor: 'rgba(148, 163, 184, 0.3)', 
                        backgroundColor: 'rgba(100, 116, 139, 0.1)',
                        fontSize: '0.75rem',
                        borderRadius: '4px',
                        margin: '0.2rem',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 116, 139, 0.2)',
                        }
                      }}
                    />
                  ))}
                </div>
                {project.link && (
                  <a href="#" className={`${styles.skillCardLink} ${styles.projectCardLink}`}>
                    <span>Voir le projet</span>
                    <span className={styles.learnMoreArrow}>→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.skillsContainer}>
          <h2 className={styles.skillsTitle}>
            Contact
            <div className={styles.skillsTitleUnderline}/>
          </h2>
          <div className={styles.contactContainer}>
            <div className={styles.contactItem}>
              <span>📧 Email :</span>
              <a href="mailto:e.mortier@proton.me" className={styles.contactLink}>
                e.mortier@proton.me
              </a>
            </div>
            <div className={styles.contactItem}>
              <span>🔗 LinkedIn :</span>
              <a 
                href="https://www.linkedin.com/in/esteban-mortier/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Esteban Mortier
              </a>
            </div>
            <div className={styles.contactItem}>
              <span>🐙 GitHub :</span>
              <a 
                href="https://github.com/Esteban-Mo" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Esteban-Mo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Esteban Mortier - Portfolio.</p>
      </footer>

    </div>
  );
}
