import Chip from '@mui/material/Chip'; // Import Chip
import styles from './page.module.css'; // Reuse the same CSS module structure

const pageChips = ["Scrum", "Kanban"]; // Define chips for this page

export default function AgileSkillPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEmoji}>🔄</div> {/* Background Emoji */}

      <h1 className={styles.mainTitle}>Compétence : Méthode Agile</h1>

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
          La méthode Agile est une manière de gérer les projets informatiques qui reposent sur l​​​'adaptabilité, l'itération et la communication constante entre les membres de l'équipe. Contrairement aux méthodes classiques​​​, elle ne cherche pas à tout figer dès le départ, mais à avancer pas à pas, en s'adaptant aux retours et aux imprévus​​.
        </p>
        <p>
          Pour moi​​, l'Agilité est un cadre de travail qui colle parfaitement à la réalité du métier​​, où les besoins changent, les priorités évoluent et les idées s'affinent au fil du développement​. C'est une méthode qui met l​​​'humain au centre du projet, tout en gardant un œil constant sur l'efficacité et la qualité.
        </p>
        <p>
          Travailler en Agile​​, c'est avancer ensemble, de manière structurée, mais sans rigidité. C'est aussi, à mes yeux, ce qui rend un projet dynamique​, vivant et plus proche des attentes du client.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes éléments de preuve</h2>
        <p>
          J​'ai pu mettre en pratique la méthode Agile dans plusieurs contextes, mais le projet le plus formateur a été le projet Module Foncier chez Valeco​, dans le cadre de mon alternance.
        </p>
        <p>
          C'était un projet d'envergure​, mené en équipe avec un tech lead qui avait structuré l'ensemble du travail selon une organisation agile : découpage en User Stories, gestion via GitHub Entreprise, communication via Teams, rituels réguliers, etc. Ce projet m​'a permis de comprendre en profondeur les bénéfices d'une méthode Agile bien appliquée : visibilité claire sur ce qui est à faire​, meilleure anticipation, entraide naturelle entre les membres de l'équipe et plus grande réactivité en cas de problème​.
        </p>
        <p>
          Lorsque j​'étais bloqué, je pouvais compter sur mes collègues, et inversement. Tout était pensé pour que personne ne reste isolé. L'ambiance de travail était fluide, structurée, et très efficace. J'ai aussi appris à respecter la logique de travail des autres​, à poser des questions sans crainte, et à m'adapter à des méthodes d'organisation plus poussées que ce que j'avais connu auparavant.
        </p>
        <p>
          Dans d'autres projets comme Atl​as ou Turbine​​​, même si la structure était moins formelle, j'ai intégré certains réflexes issus de l'agilité : travail par itérations​, communication fréquente avec les clients, gestion des priorités au fur et à mesure. C'est notamment grâce à cette approche que j'ai pu mieux gérer l​'indécision de certains clients, en leur demandant de clarifier leurs besoins avant d'avancer, pour éviter les allers-retours inutiles.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon autocritique</h2>
        <p>
          Aujourd'hui​, je me sens à l'aise dans un environnement Agile​​​. Je comprends bien les principes, j'ai l'habitude de travailler avec des User Stories​​, de suivre un backlog​​​, de collaborer avec une équipe via des outils adaptés. Je pense avoir intégré les bases solides de cette méthode, aussi bien dans l'aspect technique que dans les échanges humains​.
        </p>
        <p>
          Mes points forts sont ma capacité d'adaptation, mon écoute, et le fait que je n'ai aucun mal à demander de l'aide ou à en proposer​, ce qui s​'aligne bien avec l'esprit Agile​​​. J'ai aussi compris l'importance du feedback continu, que ce soit envers les collègues ou avec les clients.
        </p>
        <p>
          Un axe d'amélioration serait de prendre davantage de responsabilités dans la gestion Agile d'un projet​. J​'aimerais à terme être capable de guider une équipe en animant des rituels, en structurant des sprints ou en améliorant l'écriture des User Stories.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon évolution dans cette compétence</h2>
        <p>
          La méthode Agile fait pleinement partie des compétences que je veux continuer à développer, car elle est indispensable dans le métier de Tech Lead​​. Gérer une équipe, coordonner les développements, organiser les priorités, recueillir les retours et les transformer en actions concrètes… tout cela repose en grande partie sur une bonne maîtrise de l'agilité.
        </p>
        <p>
          Pour progresser, je continue à observer les process mis en place chez Valeco​, à m​'y adapter et à en tirer le meilleur. Je pratique aussi au quotidien dans mes autres projets, même en solo, en gardant un esprit agile dans ma façon de découper le travail, de prioriser les tâches et d'ajuster le développement aux retours des utilisateurs​.
        </p>
        <p>
          Mon objectif à moyen terme serait de pouvoir prendre la main sur un sprint complet​, ou même d'animer une rétrospective d'équipe, pour renforcer mes compétences en coordination et gestion de projet dans un cadre agile​.
        </p>
      </section>
    </div>
  );
} 