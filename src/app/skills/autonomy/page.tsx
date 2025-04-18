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

export default function AutonomySkillPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEmoji}>💡</div> {/* Background Emoji */}

      <h1 className={styles.mainTitle}>Compétence : Autonomie</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ma définition</h2>
        <p>
          L'autonomie est une compétence extrêmement cruciale dans le domaine du développement, car nous sommes confrontés quotidiennement à des imprévus, que ce soit en cours de développement, dans la gestion de projet ou dans l'échange avec les clients. En entreprise, c'est également un atout précieux qui permet d'avancer efficacement sans mobiliser inutilement ses collègues.
        </p>
        <p>
          Être autonome​, c'est être capable de faire face à des situations complexes sans attendre constamment de l'aide. C'est une compétence qui renforce la fluidité des projets​, réduit les blocages et permet d'apporter des solutions concrètes avec réactivité​.
        </p>
        <p>
          Une personne autonome est quelqu'un sur qui l​'on peut compter, capable de s'adapter rapidement à de nouveaux projets et qui devient naturellement un point d'appui pour les autres​. Pour moi, l'autonomie est une condition à l'efficacité​.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes éléments de preuve</h2>
        <p>
          Le premier exemple qui me vient est le projet George Roumier, qui a été le tout premier que j'ai réalisé en tant qu'auto-entrepreneur. Une connaissance travaillant dans le domaine viticole cherchait un développeur web pour créer un site vitrine pour leur domaine. Après avoir consulté plusieurs agences, il m'a demandé une maquette et un devis. Mon travail a été retenu par leur comité, car ma proposition correspondait parfaitement à leurs attentes (grâce notamment à une bonne communication avec eux).
        </p>
        <p>
          Dans ce projet, j'ai tout réalisé moi-même : conception de la maquette, choix techniques, développement complet, mise en production, rédaction de documentations de suivi, ainsi qu'un guide d'utilisation. Certaines parties techniques étaient nouvelles pour moi, et j'ai dû les apprendre sur le tas. J'ai donc travaillé à partir de documentations, expérimenté, échoué, corrigé, et finalement réussi à livrer un produit final de qualité.
        </p>
        <p>
          Les retours ont été très positifs. Ce projet reste pour moi une vraie fierté, autant pour le résultat technique que pour ce qu'il m'a appris : notamment l'importance de structurer son organisation, et la gestion administrative spécifique à l'auto-entrepreneuriat.
        </p>
        <p>
          Un second projet, déjà évoqué auparavant, est le projet Atlas, mené aussi en autonomie complète. Ici, j'ai été confronté à une autre forme de difficulté : le client n'avait pas une vision claire de ses besoins, ce qui a provoqué de nombreux changements en cours de route. J'ai donc dû apprendre à poser des limites, à dire "non", et à cadrer les échanges pour que l'équipe cliente prenne le temps de se mettre d'accord en interne avant de revenir vers moi. Cette capacité à prendre du recul et à orienter le dialogue m'a permis d'avancer plus efficacement.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon autocritique</h2>
        <p>
          Je considère aujourd'hui avoir un niveau confirmé en matière d'autonomie. J​'ai la capacité de résoudre rapidement des problèmes, de m'adapter à de nouvelles demandes ou technologies, et de rester efficace sans avoir besoin d'un accompagnement constant​.
        </p>
        <p>
          Cependant, j​'ai aussi appris que l'autonomie en équipe n'est pas la même chose que l'autonomie en solitaire. Lors de mon tout premier projet en équipe, j'ai parfois pris des initiatives sans assez prendre en compte ces dynamiques collectives. J'ai donc compris qu'il fallait trouver un équilibre : savoir avancer seul​, mais aussi savoir s'aligner avec les autres pour que l'équipe reste cohérente et efficace​.
        </p>
        <p>
          L'autonomie est donc une compétence qui se travaille en lien avec l'environnement. Elle ne se résume pas à savoir tout faire seul, mais plutôt à savoir quand agir par soi-même, et quand consulter les autres​.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon évolution dans cette compétence</h2>
        <p>
          Dans le cadre de mon projet professionnel, où j'ambitionne de devenir tech lead, l​'autonomie sera une compétence fondamentale​. Mes collègues devront pouvoir compter sur moi pour les guider, les débloquer, ou trouver rapidement des solutions aux problèmes qu'ils rencontrent. Cela demande à la fois des connaissances solides, mais aussi une capacité à travailler en autonomie pour absorber rapidement de nouvelles informations​.
        </p>
        <p>
          Aujourd'hui, je continue de progresser dans cette compétence en demandant régulièrement des retours sur mon travail, en les analysant​, et en cherchant toujours à m'améliorer​. Être en perpétuelle remise en question, c'est selon moi le meilleur moyen de devenir encore plus autonome.
        </p>
        <p>
          Je n'ai pas d'objectif figé sur ce point, mais je m'efforce simplement d'apprendre chaque jour, de façon régulière et continue, pour gagner en confiance et en maîtrise.
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