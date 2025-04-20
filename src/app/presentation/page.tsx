import styles from './page.module.css'; // Reuse skill page CSS module structure

export default function PresentationPage() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.backgroundEmoji}></div> Optionally add an emoji later */}

      <h1 className={styles.mainTitle}>Présentation Générale</h1>

      <section className={styles.section}>
        <p>
          Curieux et motivé​, j'aime me lancer dans des projets techniques et apprendre en avançant. Mes études d'ingénieur m'ont donné les bases, mon alternance chez Val​eco m'a fait travailler sur Next.js et Prisma, et mes projets personnels en Node.js m'ont permis d​'explorer de nouvelles technologies​. J'ai également créé un site pour le Domaine George Roumier en tant qu'auto-entrepreneur, et les retours positifs ont confirmé ma passion pour ce métier​.
        </p>
        <p>
          En tant que développeur full stack, j'apprécie de prendre en charge l​'ensemble du processus : depuis les discussions avec le client pour comprendre ses besoins, jusqu'à la conception, le développement et le déploiement (généralement sur VPS Ubuntu)​. Résoudre des problèmes complexes et optimiser le code me permet d'approfondir mon expertise technique. Je reste à jour grâce à une veille technologique constante et des projets personnels, avec l'ambition de devenir tech lead tout en conservant une implication directe dans le développement.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes ​v​a​l​e​u​r​s</h2>
        <p>
          Curiosité, esprit d'équipe​, rigueur et engag​ement guide​nt mon travail au quotidien, avec une volonté constante de livrer des sol​ut​io​​ns de qua​lité​. Pendant m​es études, j'ai souvent pris des rôl​es de coordination​, comme sur un projet collectif où j'ai réparti les tâches selon les forces de chacun pour avancer efficacement​. Cela m'a appris à guider tout en restant ouvert aux idées des autres, et j'ai vu à quel point une équipe soudée produit des résultats concrets, même face à des obstacles qu'on a surmontés en testant des solutions.
        </p>
        <p>
          Mon expérience en auto-entrepreneur m'a enseigné à respecter les attentes clients tout en m'adaptant à des imprévus. Les bons retours m'ont motivé à m'investir davantage, que ce soit dans des projets pro ou perso. En alternance, je mets ces principes en action quotidiennement : je communique clairement avec mes collègues ou clients, en ajustant mon discours pour qu'il soit utile, surtout avec des non-techniques. J'aime aussi proposer des idées issues de mes apprentissages perso, certaines retenues, d'autres non.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes qualités humaines</h2>
        <p>
          Curieux, sociable, persévérant et autonome, je tire parti de ces traits au quotidien. Ma curiosité me pousse à approfondir mes connaissances, que ce soit en étudiant, en alternance ou sur mes projets. J'échange avec plaisir avec des collègues ou des personnes expérimentés pour mieux comprendre, et j'adapte ma communication selon mon interlocuteur afin d'avoirs des discussions pertinentes qui mène et servent à quelque chose.
        </p>
        <p>
          En alternance, j'ai tendance à remettre en question certaines manières de faire lorsque je pense que celles-ci sont améliorables (en apportant des arguments, ce qui m'a mené à différents changements ou non lorsqu'on me montrait les avantages de la manière actuelle), ce que je veux dire par là c'est que j'aime m'impliquer. De plus j'aime venir en aide aux autres afin de les voir progresser (car ça me fait aussi progresser en fin de compte). Ma persévérance se reflète face aux défis techniques, je creuse une ou plusieurs pistes de complexité jusqu'à trouver une solution​, prenant le temps de mûrir une idée pour faire un code stable et maintenable sur le long terme. Quant à mon autonomie, elle s'est renforcée avec mes projets perso​ où j'ai appris à tester des idées seul et à gagner en assurance, ce qui me permet durant mon alternance d'être plus à l'aise lorsque l'on me confie des tâches.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes centres d'intérêt</h2>
        <p>
          En dehors du travail, je suis un joueur invétéré, captivé par le monde des jeux vidéo et surtout tout ce qui touche leur conception (Level designer, Map Designer, Mod, Création 3D etc etc). C'est cette passion qui m​'a ouvert les portes du développement car mes premières lignes de code ont été utilisées pour modifier mes jeux préférés. Cette première exposition a éveillé ma vocation et m'a naturellement orienté vers ma carrière actuelle. J'aime toujours aujourd'hui créer des mods, concevoir des niveaux ou des idées de mécaniques de jeu, ce qui me pousse à innover, à m'inspirer et à éprouver de nouvelles compétences techniques. Explorer ces mondes de manière virtuelle, rejouer ces moments avec d'autres joueurs ou découvrir les choix de conception qui ont présidé à chaque jeu m'enthousiasment toujours et m'améliorent clairement en tant que développeur.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projets professionnels et personnels</h2>
        <p>
          Sur le plan professionnel, j'aspire à devenir "tech lead" dans un avenir plus ou moins proche (moins de 5 ans). J'aimerais avoir une équipe avec laquelle travailler sur des petits projets ou des projets conséquents et donner du sens à mon évolution de carrière. Mon approche m'a déjà clairement enseigné ce qui guide une équipe, bien comprendre une problématique, savoir apprendre et faire apprendre et bien évidement la coopération (je veux devenir un "leader" pas un "chef" il y a une grande différence), et pour cela je continue à m'améliorer en suivant les nouveautés en lisant des articles, en suivant des contenus d'experts en ligne… etc et de partager ces apprentissages avec d'autres autour de moi (qu'ils soient du métier ou non !) me permet d'apprendre à devenir ce que je souhaite être.
        </p>
      </section>
    </div>
  );
} 