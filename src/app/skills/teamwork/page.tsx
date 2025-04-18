import styles from './page.module.css'; // Reuse the same CSS module structure

export default function TeamworkSkillPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEmoji}>🤝</div> {/* Background Emoji */}

      <h1 className={styles.mainTitle}>Compétence : Travail d'équipe</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ma définition</h2>
        <p>
          Le travail d'équipe est une compétence extrêmement importante, notamment dans le domaine du développement informatique. Lorsqu'on travaille sur un projet à plusieurs, c'est la cohésion de groupe qui va faire avancer le projet dans la bonne direction, sans créer de conflicts inutiles.
        </p>
        <p>
          Un bon esprit d'équipe permet une connaissance partagée, une architecture bien structurée, et un code propre que tout le monde comprend. Mais surtout, il apporte une vraie sérénité dans le travail : quand on est bloqué, on sait qu'on peut compter sur les autres.
        </p>
        <p>
          Comme le dit très bien la phrase : "Seul on va plus vite, à plusieurs on va plus loin." C'est exactement ce que je ressens dans mes projets.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes éléments de preuve</h2>
        <p>
          Un projet marquant a été celui réalisé pour Yelloh Village, une chaîne de campings présente dans plusieurs pays. L'objectif était de concevoir un site web avec une carte dynamique affichant les différents établissements. Nous étions une équipe de cinq personnes sur ce projet​.
        </p>
        <p>
          Ma mission était de m'occuper de toute la partie back-end liée à la cartographie. Nous avons tenu plusieurs réunions de suivi, mais malheureusement ce projet illustre plutôt le mauvais côté du travail d'équipe. Sur les cinq membres, seuls deux prenaient le projet au sérieux​. Avec l'autre développeur impliqué, nous avons été obligés de reprendre l'intégralité du travail des trois autres, ce qui a considérablement augmenté notre charge.
        </p>
        <p>
          Nous avons d'abord tenté de les remettre dans le bon rythme, sans succès. Finalement, nous avons pris la décision de finaliser le projet à deux​. Et malgré les conditions, Yelloh Village a été ravi du résultat, et nous sommes très fiers d'avoir su relever ce challenge ensemble​.
        </p>
        <p>
          En parallèle, j'ai aussi une expérience très positive sur un projet professionnel réalisé chez Valeco, nommé Module Foncier​. C'est le premier vrai projet en équipe que j'ai mené dans le cadre de mon alternance​.
        </p>
        <p>
          Le projet était bien structuré grâce à notre tech lead : organisation agile, user stories, bonne répartition des rôles. Dès que j'étais bloqué, mes collègues étaient là pour m'aider, et inversement. C'est vraiment dans ce cadre que j'ai appris à respecter les méthodes de chacun, à ne pas avoir peur de demander quand je ne comprenais pas​, et à valoriser la collaboration au quotidien.
        </p>
        <p>
          Je me suis adapté aux outils mis en place, comme Teams pour la communication et GitHub Entreprise pour le suivi technique, ce qui m'a permis de m'intégrer naturellement dans le fonctionnement global de l'équipe​.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon autocritique</h2>
        <p>
          Je dirais que j'ai aujourd​'hui un bon niveau en travail d'équipe, même si c'est une compétence qui reste améliorable en continu. Je n'ai aucuns problèmes à demander de l'aide quand j'en ai besoin, ou à en proposer aux autres​.
        </p>
        <p>
          Je pense que ma bienveillance et ma capacité d'écoute sont de vrais atouts dans les dynamiques d'équipe. J​'aime apprendre des autres, et j'essaie toujours de garder un état d'esprit positif et constructif​.
        </p>
        <p>
          Un point que je peux encore améliorer serait de faire plus de propositions, de prendre davantage le temps d​'examiner le code des autres, et de m'impliquer plus activement dans les décisions techniques de groupe​.
        </p>
        <p>
          Le travail d'équipe est quelque chose d'assez naturel chez moi, mais que j'ai affiné et renforcé avec l'expérience​.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon évolution dans cette compétence</h2>
        <p>
          En tant que futur Tech Lead​, la gestion du travail d​'équipe sera une part centra​le de m​on mé​tier. Il faudra que je sache coordonner​, accompagner​, déléguer et surtout féd​érer une éq​uipe aut​our de projets communs​. C'est une des compétences les plus importantes à ce niveau de responsabilités​.
        </p>
        <p>
          Pour progresser, je vais continuer à travailler sur des projets d'équipe, à faire du pair programming, et à prendre plus de responsabilités sur certains sujets pour approfondir ma posture de collaborateur, voire de leader technique à terme​.
        </p>
        <p>
          Ce sont ces expériences accumulées qui me permettront de construire ma manière de fonctionner en équipe et d'être prêt pour les futures responsabilités que j​'ambitionne​.
        </p>
      </section>
    </div>
  );
} 