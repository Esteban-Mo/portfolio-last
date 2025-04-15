import styles from './page.module.css'; // Reuse the same CSS module structure

export default function CommunicationSkillPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEmoji}>🗣️</div> {/* Background Emoji */}

      <h1 className={styles.mainTitle}>Compétence : Communication</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ma définition</h2>
        <p>
          La communication est une compétence que je considère comme primordiale, en particulier dans le domaine de l'informatique. Elle intervient à tous les niveaux : entre les membres d'une même équipe, avec les clients ou les utilisateurs finaux. Cette communication doit être continue pour permettre un bon déroulement des projets.
        </p>
        <p>
          Dans un projet informatique, une mauvaise transmission d'information peut avoir de lourdes conséquences. Il est donc essentiel que les messages soient transmis au bon moment, de manière claire, et qu'ils soient bien compris. C'est pour cela que la communication doit être une priorité constante. La compréhension précise d'un besoin est un point de départ crucial pour la réussite d'un projet.
        </p>
        <p>
          Cette compétence suppose de savoir expliquer un sujet de manière technique à un professionnel, tout comme de savoir le vulgariser pour un client. Il est tout aussi important d'être capable de bien s'exprimer que de savoir écouter les autres pour comprendre leurs attentes. J'ai eu l'occasion d'écouter plusieurs podcasts sur la gestion de projet, et tous s'accordent sur un point : la communication est un élément moteur dans le développement d'un projet.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes éléments de preuve</h2>
        <p>
          Deux projets réalisés en alternance m'ont permis de développer cette compétence. Le premier, nommé "BDD Turbine", était à la fois un projet de développement et une gestion de relation client, le tout en autonomie. J'ai dû alterner entre des réunions avec le client et des points techniques avec mon tech lead.
        </p>
        <p>
          Ma mission était d'écouter les besoins du client, de les formaliser, de les valider avec lui, puis de passer au développement. Ce processus était cyclique, basé sur des itérations successives, pour avancer progressivement sur le projet. En plus de mon responsable, j'ai aussi échangé à plusieurs reprises avec des utilisateurs finaux qui m'ont fait des retours directs.
        </p>
        <p>
          Par moments, le client avait tendance à ramener ses attentes à ses habitudes sur Excel, ce qui brouillait la vision du nouveau projet. J'ai donc dû plusieurs fois reprendre certains points avec lui pour lui faire comprendre qu'il s'agissait ici d'un nouvel outil, pas d'une simple copie. Le projet est aujourd'hui un élément central dans la gestion de leurs données, et les retours ont été très positifs, autant sur le livrable que sur la qualité des échanges que j'ai su instaurer.
        </p>
        <p>
          Le second projet, "Atlas", a également été réalisé en autonomie complète. Là encore, j'étais directement en contact avec le client. Mais cette fois, le défi principal était l'indécision du client et de son équipe. Il m'est arrivé de devoir modifier plusieurs fois l'existant car ils n'étaient pas sûrs de ce qu'ils voulaient. C'est dans ce contexte que j'ai appris à dire "non", à poser des limites et à demander au client d'organiser une réunion interne afin qu'ils soient certains de leurs besoins avant de poursuivre.
        </p>
        <p>
          Nous avons utilisé Teams pour nos échanges et Notion pour la documentation. Cette expérience m'a vraiment permis de progresser en communication, notamment sur l'aspect gestion des attentes et cadrage des demandes.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon autocritique</h2>
        <p>
          Aujourd'hui, j'estime que mon niveau en communication est situé entre intermédiaire et confirmé. J'ai plusieurs forces qui me permettent d'être efficace dans ce domaine. Je n'ai pas peur de prendre l'initiative de communiquer, de dire quand je ne sais pas ou quand je n'ai pas compris. Cela me permet de gagner du temps et d'être bien plus pertinent dans mes réponses et mes actions. Une autre de mes forces est ma capacité à m'exprimer de manière claire et structurée.
        </p>
        <p>
          Cependant, j'ai encore une marge de progression. Un point à améliorer serait ma prise de parole en grand comité, ainsi que ma capacité à condenser mes propos pour aller plus rapidement à l'essentiel. Ce sont des aspects importants que je compte travailler pour gagner en impact.
        </p>
        <p>
          Il m'arrive parfois de mal communiquer sur des détails mineurs, mais cela reste sans réel impact pour le moment.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon évolution dans cette compétence</h2>
        <p>
          Dans la perspective de devenir Tech Lead, la communication sera au cœur de mon métier. Elle me permettra de piloter des projets efficacement, de guider les membres de mon équipe, et d'assurer un lien fluide entre les différentes parties prenantes.
        </p>
        <p>
          Pour continuer à progresser, je m'efforce de communiquer toujours plus, dans tous les contextes professionnels. Je pratique aussi le jeu de rôle, qui est un excellent exercice pour améliorer sa capacité à s'exprimer avec clarté et assurance dans des situations variées.
        </p>
        <p>
          Enfin, j'ai un objectif important à moyen terme : améliorer considérablement mon anglais, car la communication en anglais est aujourd'hui indispensable pour évoluer dans un environnement technique international. Cela me sera particulièrement utile pour des postes à responsabilités, comme celui de Tech Lead.
        </p>
      </section>
    </div>
  );
} 