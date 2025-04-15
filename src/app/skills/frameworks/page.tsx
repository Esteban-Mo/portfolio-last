import styles from './page.module.css'; // Reuse the same CSS module structure

export default function FrameworksSkillPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEmoji}>📚</div> {/* Background Emoji */}

      <h1 className={styles.mainTitle}>Compétence : Frameworks et Librairies</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ma définition</h2>
        <p>
          Les frameworks et librairies modernes permettent aujourd'hui d'avoir un veritable environnement de travail collaboratif, structuré, et surtout soutenu par une communauté très active. Que ce soit via des forums, des documentations officielles, ou des tutoriels, il existe une multitude de ressources pour accompagner les développeurs dans leur montée en compétences. Cette accessibilité est une vraie force dans le monde du développement web.
        </p>
        <p>
          Dans la stack que j'utilise, React gère la partie front-end, autrement dit l'apparence du site ou de l'application. Next.js se charge de la couche back-end, en prenant en charge le routage, l'API et le rendu côté serveur. Enfin, Prisma fait le lien avec la base de données. C'est un ORM moderne, qui simplifie la gestion des interactions entre le code applicatif et des bases comme PostgreSQL.
        </p>
        <p>
          En entreprise, ces outils permettent d'unifier l'environnement de travail. Toute l'équipe évolue sur une seule et même stack, ce qui permet non seulement une meilleure collaboration, mais aussi une spécialisation plus poussée. À terme, cela améliore la productivité, la maintenabilité, et la qualité globale des projets.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes éléments de preuve</h2>
        <p>
          Mon premier contact avec cette stack complète s'est fait sur le projet BDD Turbine, au tout début de mon alternance. C'est là que j'ai découvert React, Next.js et Prisma, que je n'avais jamais utilisés auparavant. Ce projet a été une vraie rampe de lancement, car j'ai dû apprendre très vite pour être autonome.
        </p>
        <p>
          J'étais chargé du développement, avec la responsabilité de plusieurs user stories. Même si la courbe d'apprentissage était là, l'ensemble de la stack est suffisamment bien pensée pour permettre une prise en main rapide. C'est grâce à ce projet que j'ai pu apprendre les bases du SSR (Server Side Rendering), qui permet d'afficher les pages web côté serveur pour optimiser les performances et le SEO.
        </p>
        <p>
          Par la suite, j'ai mis à profit cette expérience sur un second projet de plus grande envergure : Module Foncier, chez Valeco. Ce projet structuré en Agile m'a permis de consolider mes compétences sur l'ensemble de la stack. J'ai travaillé aussi bien sur le front (interfaces React) que sur le back-end (logique métier, API Next.js) et les accès base de données avec Prisma.
        </p>
        <p>
          Ces expériences m'ont permis d'être à l'aise sur le développement fullstack, et d'apprécier toute la logique de la stack JavaScript moderne, de la base de données jusqu'à l'affichage à l'écran.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon autocritique</h2>
        <p>
          Aujourd'hui, je dirais que j'ai un niveau avancé sur React et Next.js, et intérmédiaire sur Prisma. Je suis capable de gérer des projets complets, d'implémenter des composants réutilisables, de concevoir des pages dynamiques avec SSR, et de connecter efficacement le tout à une base de données relationnelle.
        </p>
        <p>
          J'ai encore une marge de progression sur la partie "services", notamment pour tout ce qui concerne la découpe avancée des responsabilités dans l'architecture applicative. J'aimerais renforcer cette partie pour rendre mes projets encore plus modulaires et maintenables sur le long terme.
        </p>
        <p>
          Je me sens totalement à l'aise en fullstack, car j'aime autant la logique front-end que back-end, et le fait de pouvoir passer de l'un à l'autre sans rupture me donne une vraie fluidité dans mon travail.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon évolution dans cette compétence</h2>
        <p>
          React, Next.js et Prisma sont aujourd'hui des technologies très populaires et largement utilisées, ce qui en fait un atout majeur dans un profil technique. Leur maîtrise est un vrai levier de crédibilité et de productivité.
        </p>
        <p>
          Pour continuer à progresser, je m'intéresse de plus en plus à l'architecture orientée composants, afin d'améliorer la maintenabilité de mes projets. Je mène actuellement des projets personnels dans lesquels j'expérimente de nouvelles manières de structurer mon code, tout en suivant des conseils, tutoriels et bonnes pratiques de la communauté.
        </p>
        <p>
          Mes priorités actuelles sont claires : architecture propre, lisibilité du code, et maintenabilité à long terme. Ces axes sont essentiels pour mon objectif professionnel de devenir tech lead, car ils me permettront à terme d'accompagner une équipe sur des projets solides, cohérents et évolutifs.
        </p>
      </section>
    </div>
  );
} 