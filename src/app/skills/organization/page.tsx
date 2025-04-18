import styles from './page.module.css'; // Reuse the same CSS module structure
import Link from 'next/link'; // Importer Link

// Définir les projets associés à cette catégorie
const associatedProjects = [
  { name: 'Agence Walker', path: '/projects/agence-walker' },
  { name: 'BDD Turbine', path: '/projects/bdd-turbine' },
  { name: 'Domaine Roumier', path: '/projects/domaine-roumier' },
  { name: 'Module Foncier', path: '/projects/module-foncier' },
  { name: 'Atlas', path: '/projects/atlas' },
];

export default function OrganizationSkillPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEmoji}>📅</div> {/* Background Emoji */}

      <h1 className={styles.mainTitle}>Compétence : Organisation</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ma définition</h2>
        <p>
          L'organisation est une compétence essentielle dans un environnement professionnel, et d'autant plus en informatique. Un manque d'organisation peut entraîner des pertes de temps considérables, des retards ou même des situations où certaines tâches doivent être refaites.
        </p>
        <p>
          Globalement, l'organisation a toujours été quelque chose d'assez naturel pour moi, mais que j'ai clairement affiné et renforcé avec l'expérience. C'est avec les erreurs qu'on apprend à bien s'organiser.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes éléments de preuve</h2>
        <p>
          Aujourd'hui, je considère que j'ai une organisation simple et efficace. Je sais m'adapter aux outils ou aux besoins de l'entreprise, et je suis capable de faire évoluer mes méthodes en fonction du contexte du projet.
        </p>
        <p>
          Un axe d'amélioration que j'identifie, c'est ma capacité à rendre mon organisation plus facilement partageable, notamment si un collègue devait intégrer un projet en cours. Aujourd'hui, certaines de mes habitudes sont très personnelles, et pourraient être difficiles à suivre pour quelqu'un d'autre sans explication. Mon objectif est donc de structurer mon organisation de manière plus collaborative, sans pour autant la complexifier inutilement.
        </p>
        <p>
          Globalement, l'organisation a toujours été quelque chose d'assez naturel pour moi, mais que j'ai clairement affiné et renforcé avec l'expérience. C'est avec les erreurs qu'on apprend à bien s'organiser.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon autocritique</h2>
        <p>
          Aujourd'hui​, je considère que j'ai une organisation simple et efficace. Je sais m'adapter aux outils ou aux besoins de l'entreprise, et je suis capable de faire évoluer mes méthodes en fonction du contexte du projet​.
        </p>
        <p>
          Un axe d'amélioration que j​'identifie, c'est ma capacité à rendre mon organisation plus facilement partageable, notamment si un collègue devait intégrer un projet en cours​. Aujourd'hui, certaines de mes habitudes sont très personnelles, et pourraient être difficiles à suivre pour quelqu'un d'autre sans explication. Mon objectif est donc de structurer mon organisation de manière plus collaborative, sans pour autant la complexifier inutilement.
        </p>
        <p>
          Globalement, l'organisation a toujours été quelque chose d'assez naturel pour moi, mais que j'ai clairement affiné et renforcé avec l'expérience. C'est avec les erreurs qu'on apprend à bien s'organiser.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon évolution dans cette compétence</h2>
        <p>
          Aujourd'hui, je considère que j'ai une organisation simple et efficace. Je sais m'adapter aux outils ou aux besoins de l'entreprise, et je suis capable de faire évoluer mes méthodes en fonction du contexte du projet​.
        </p>
        <p>
          Un axe d'amélioration que j​'identifie, c'est ma capacité à rendre mon organisation plus facilement partageable, notamment si un collègue devait intégrer un projet en cours. Aujourd'hui, certaines de mes habitudes sont très personnelles, et pourraient être difficiles à suivre pour quelqu'un d'autre sans explication​. Mon objectif est donc de structurer mon organisation de manière plus collaborative, sans pour autant la complexifier inutilement.
        </p>
        <p>
          Globalement​, l'organisation a toujours été quelque chose d'assez naturel pour moi, mais que j'ai clairement affiné et renforcé avec l'expérience. C'est avec les erreurs qu'on apprend à bien s'organiser​.
        </p>
      </section>

      {/* Nouvelle section pour les projets associés */}
      <section className={`${styles.section} ${styles.associatedProjectsSection}`}>
        <h2 className={styles.sectionTitle}>Projets Associés</h2>
        <div className={styles.projectChipsContainer}>
          {associatedProjects.map((project) => (
            <Link key={project.name} href={project.path} passHref>
              <span className={`${styles.chip} ${styles.projectChip}`}>
                {project.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 