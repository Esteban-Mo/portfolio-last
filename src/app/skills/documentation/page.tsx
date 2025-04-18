import Chip from '@mui/material/Chip'; // Import Chip
import styles from './page.module.css'; // Reuse the same CSS module structure
import Link from 'next/link'; // Importer Link

const pageChips = ["Notion", "Markdown"]; // Define chips for this page

// Définir les projets associés à cette catégorie
const associatedProjects = [
  { name: 'Agence Walker', path: '/projects/agence-walker' },
];

export default function DocumentationSkillPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEmoji}>📝</div> {/* Background Emoji */}

      <h1 className={styles.mainTitle}>Compétence : Documentation</h1>

      {/* Chip Container */}
      <div className={styles.chipContainer}>
        {pageChips.map((chip, index) => (
          <Chip 
            key={index} 
            label={chip} 
            variant="outlined" 
            size="small"
            sx={{ /* Reusing Chip styles */
              color: '#e2e8f0', 
              borderColor: 'rgba(148, 163, 184, 0.3)',
              backgroundColor: 'rgba(100, 116, 139, 0.1)',
              borderRadius: '4px',
              fontSize: '0.85rem',
              margin: '0.3rem',
              '&:hover': {
                backgroundColor: 'rgba(100, 116, 139, 0.2)',
              }
            }}
          />
        ))}
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ma définition</h2>
        <p>
          La documentation est une partie essentielle d'un projet. C'est elle qui permet aux autres développeurs de comprendre rapidement une fonctionnalité, d'identifier la logique derrière une architecture, ou tout simplement de prendre en main un projet existant. Elle est aussi indispensable pour les nouveaux arrivants sur un projet, en leur évitant de perdre du temps à tout redécouvrir par eux-mêmes.
        </p>
        <p>
          Dans mes projets, je rédige aussi bien de la documentation technique (structure, fonctions, API) que fonctionnelle (guides d'utilisation, présentations pour des utilisateurs finaux). En entreprise, j'ai pris l'habitude de documenter de plus en plus au fil du temps, même si dans mes projets personnels, c'est une pratique que j'applique déjà de façon très naturelle​​​.
        </p>
        <p>
          En général, je commence la documentation pendant le projet pour tout ce qui est fonctionnel, puis je finalise une documentation technique claire et complète à la fin, pour garantir une bonne transmission du projet.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes éléments de preuve</h2>
        <p>
          J'utilise principalement deux outils pour documenter mes projets :
        </p>
        <ul className={styles.list}>
            <li>Notion, pour tout ce qui concerne les présentations lisibles, claires, partagées facilement en ligne (utilisation, guides, onboarding​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​…)</li>
            <li>Markdown​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​, pour la documentation technique "​développeur​" : structure de projet, logique métier, endpoints API​​​, fonctionnement interne, etc.</li>
        </ul>
        <p>
          Sur le projet Agence Walker, par exemple, j'ai rédigé une documentation détaillée pour les clients qui allaient reprendre le projet. Elle comprenait à la fois des instructions d'utilisation et des précisions techniques essentielles.
        </p>
        <p>
          Un autre exemple fort est le projet Atlas, dans le cadre de mon alternance. J'ai rédigé une documentation complète sur les API​​​​​​​​​​​​​ que j'avais mises en place dans le projet​​, mais aussi une documentation d'utilisation à destination d'utilisateurs non-techniques.
        </p>
        <p>
          J'ai eu beaucoup de retours positifs sur cette partie, notamment sur la clarté de mes explications et ma capacité à vulgariser des concepts parfois techniques​.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon autocritique</h2>
        <p>
          Je m'adapte à chaque besoin : j'utilise des listes, des tableaux, des schémas selon la situation. Mon but est que l'information soit lisible et utile, sans sur-documenter inutilement. Je documente ce qui vaut vraiment la peine d'être écrite.
        </p>
        <p>
          Ma manière de structurer une documentation est assez proche de celle que j'ai pour écrire du code : claire, logique, lisible, même si je me permets plus de souplesse. Je ne mets pas Notion et Markdown en compétition — les deux ont leur rôle, et je sais choisir le bon outil selon le public et le besoin.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon évolution dans cette compétence</h2>
        <p>
          Ce que je souhaite améliorer, c'est rédiger de la documentation encore plus systématiquement, même sur mes petits projets. C'est une vraie compétence, pas juste un bonus. Elle permet de transmettre, de clarifier, de structurer sa pensée.
        </p>
        <p>
          Certaines documentations sont destinées à des profils techniques, d'autres à des profils métiers — je m'adapte aux deux. En tant que futur Tech Lead, je vois clairement la documentation comme un outil de transmission indispensable, que ce soit pour accompagner une équipe, préparer une passation, ou assurer la pérennité d'un projet.
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