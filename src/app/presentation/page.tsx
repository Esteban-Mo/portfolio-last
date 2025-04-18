import styles from './page.module.css'; // Reuse skill page CSS module structure

export default function PresentationPage() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.backgroundEmoji}></div> Optionally add an emoji later */}

      <h1 className={styles.mainTitle}>Presentation Générale</h1>

      <section className={styles.section}>
        <p>
          Curieux et motivé, j'aime me lancer dans des projets techniques et apprendre en avançant. Mes étudies d'ingénieur m'ont donné les bases, mon alternance m'a fait travailler sur Next.js et Prisma, et mes projets perso en Node.js m'ont permis d'essayer des choses. J'ai aussi créé un site pour des vignerons en auto-entrepreneur, et les bons retours m'ont confirmé que ce metier est fait pour moi.
        </p>
        <p>
          En full stack, j'aime tout prendre en charge : discuter avec le client pour comprendre ses besoins, concevoir le projet, coder – souvent avec SQL ou TypeScript – et le déployer. Résoudre des problèmes et améliorer le code, c'est ce qui me plaît. Je me tiens à jour avec de la veille technique et des petits projets perso, et à terme, je me vois tech lead tout en gardant un pied dans le développement.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes valeurs</h2>
        <p>
          Curiosité, esprit d'équipe, rigeur et engagement guident mon travail, avec une volonté constante de livrer quelque chose de qualité. Pendant mes étudies, j'ai souvent pris des rôles de coordination, comme sur un projet collectif où j'ai réparti les tâches selon les forces de chacun pour avancer efficacement. Cela m'a appris à guider tout en restant ouvert aux idées des autres, et j'ai vu à quel point une équipe soudée produit des résultats concrets, même face à des obstacles qu'on a surmontés en testant des solutions.
        </p>
        <p>
          Mon expérience en auto-entrepreneur m'a enseigné à respecter les attentes clients tout en m'adaptant à des imprévus. Les bons retours m'ont motivé à m'investir davantage, que ce soit dans des projets pro ou perso. En alternance, je mets ces principes en action quotidiennement : je communique clairement avec mes collègues ou clients, en ajustant mon discours pour qu'il soit utile, surtout avec des non-techniques. J'aime aussi proposer des idées issues de mes apprendissages perso, certaines retenues, d'autres non.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes qualités humaines</h2>
        <p>
          Curieux, sociable, persévérant et autonome, je tire parti de ces traits au quotidien. Ma curiosité me pousse à approfondir mes connaissances, que ce soit en étudiant, en alternance ou sur mes projets Node.js. J'échange avec plaisir avec des collègues ou des expérimentés pour mieux comprendre, et j'adapte ma communication selon mon interlocuteur pour des discussions pertinentes.
        </p>
        <p>
          En alternance, j'ai tendance à remettre en question certaines manières de faire lorsque je pense celles-ci améliorables (apportant des arguments, ce qui m'a mené à différents changements ou non lorsqu'on me montrait les avantages de la manière actuelle). De plus, j'aime venir en aide aux autres afin de les voir progresser et grâce à cela je progresse aussi. Ma persévérance se reflète face aux défis techniques : je creuse une ou plusieurs pistes de complexité jusqu'à trouver une solution, prenant le temps de mûrir une idée faire un code stable et maintenable. Quant à mon autonomie, elle s'est renforcée avec mes projets perso, où l'on m'apprêt à tester des idées seul et à gagner en assurance, ce qui me permet durant mon alternance d'être plus à l'aise quand je prends le temps de mon tech lead pour des demandes futiles.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes centres d'intérêt</h2>
        <p>
          En dehors du travail, je suis un joueur sérieux, captivé par le monde des jeux vidéo et leur conception. C'est cette passion qui m'a ouvert les portes du développement : mes premières lignes de code ont été utilisées pour modifier mes jeux préférés. Cette première exposition a éveillé ma vocation et m'a naturellement orienté vers ma carrière actuelle. J'aime toujours aujourd'hui créer des mods, concevoir des niveaux ou des idées de mécaniques de jeu, ce qui me pousse à innover, à m'inspirer et à éprouver de nouvelles compétences techniques. Explorer ces monds de manière virtuelle, rejouer ces moments avec d'autres joueurs ou découvrir les choix de conception qui ont présidé à chacun jeu m'enthousiasment toujours et m'améliorent en tant que développeur.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projets professionnels et personnels</h2>
        <p>
          Sur le plan professionnel, j'aspire à devenir tech lead dans un avenir proche. J'aimerais avoir une équipe qui tire vers le haut et donner du sens derrière la couche de code. Mon approche clairement m'a enseigné déjà ce qui guide une équipe : bien comprendre une problématique, bien transmettre des méthodes de gestion de projet, bien y voir seul, cela me donne envie de m'améliorer, de me tenir au courant des nouveautés en lisant des articles, suivant des contenus experts… et de partager ces apprendissages avec d'autres autour de moi.
        </p>
      </section>
    </div>
  );
} 