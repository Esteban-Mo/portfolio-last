import Chip from '@mui/material/Chip'; // Import Chip
import styles from './page.module.css'; // Reuse the same CSS module structure

const pageChips = ["TypeScript", "Python"]; // Define chips for this page

export default function ProgrammingSkillPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEmoji}>&lt;/&gt;</div> {/* Background Emoji */}

      <h1 className={styles.mainTitle}>Compétence : Langages de Programmation</h1>

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
        <h2 className={styles.sectionTitle}>Ma definition</h2>
        <p>
          Dans le developpement web, le choix du langage de programmation est essentiel, car il conditionne à la fois la manière de réfléchir, la structure du code, et les possibilités techniques offertes pour chaque projet.
        </p>
        <p>
          Mon usage principal se concentre aujourd'hui sur TypeScript et Python. TypeScript est un sur-ensemble de JavaScript qui ajoute un système de typage statique. En d'autres terms, là où JavaScript laisse une grande liberté (et donc parfois des erreurs difficiles à detecter), TypeScript impose une vérification des types à l'écriture du code. Cela permet d'éviter des bugs, d'avoir une meilleure lisibilité et de rendre le projet bien plus maintenable à long terme.
        </p>
        <p>
          Python, de son côté, est un langage que j'utilise surtout dans un cadre utilitaire : scripts de traitement de données, d'analyse, ou de conversion. Il est particulièrement adapté à des tâches spécifiques, rapides à écrire, et qui ne nécessitent pas forcément d'interface graphique ou de logique front-end. Dans ma stack, TypeScript est au cœur du projet, et Python vient en appui pour des tâches ponctuelles que React ou Next.js ne sont pas faits pour gérer aussi simplement.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes éléments de preuve</h2>
        <p>
          J'ai découvert TypeScript dès mon arrivée chez Valeco, dans le cadre de mon alternance. C'est la stack technique de l'entreprise, que j'ai adoptée aussi bien dans mes projets pros que persos. Tous les projets que j'ai réalisés en React / Next.js sont codés en TypeScript . Le typage strict m'a énormément aidé à structurer les données, à mieux documenter mon code, et à anticiper des erreurs qui auraient été invisibles en JavaScript pur. C'est un vrai confort sur les projets moyen / long terme.
        </p>
        <p>
          Concernant Python, j'ai eu l'occasion de beaucoup l'utiliser dans les projets Atlas et BDD Turbine. Ces deux projets ont nécessité un traitement de données pré-existantes, souvent stockées dans des fichiers Excel ou en base de données. J'ai donc utilise Python pour écrire des scripts d'analyse, de nettoyage, et de conversion de ces données en formats exploitables, notamment pour une importation dans des bases PostgreSQL ,
        </p>
        <p>
          Même si j'aurais pu tenter de faire ça avec du code JavaScript, je savais que ça serait moins simple, moins rapide à écrire, et moins lisible. Python était donc le bon outil au bon moment, et m'a permis de gagner beaucoup de temps .
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon autocritique</h2>
        <p>
          Aujourd'hui, je dirais que j'ai un niveau avancé en TypeScript, notamment grâce à mon usage quotidien en alternance et sur mes projets personnels. J'écris toujours du code typé strictement, ce qui me permet de garder un projet lisible, robuste, et facilement maintenable. Je maîtrise bien l'ensemble du cycle de developpement fullstack avec TypeScript dans un environnement Next.js.
        </p>
        <p>
          Sur Python, mon niveau est functionnel et ciblé. Je m'en sers principalement pour écrire des scripts utilitaires, sans forcément aller dans des architectures complexes ou des projets full Python. Mon objectif n'est pas d'en faire mon langage principal, mais plutôt de maintenir un bon niveau, suffisant pour repondre à mes besoins ponctuels .
        </p>
        <p>
          Je n'ai pas rencontré de blocage majeur avec l'un ou l'autre de ces langages, mais je sais que je pourrais encore progresser sur le typage avancé en TypeScript, notamment les types génériques, qui permettent d'écrire du code plus reutilisable et encore mieux encastré.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon évolution dans cette compétence</h2>
        <p>
          La maîtrise de TypeScript est aujourd'hui une compétence clé dans l'écosystème web moderne. Elle fait partie integrante de mon projet professionnel, car la plupart des projets récents — qu'ils soient persos ou pros —  sont pensés avec cette stack .
        </p>
        <p>
          Je continue à progresser en expérimentant sur des projets personnels, en testant des architectures plus complexes, et en suivant des tutoriels ou bonnes pratiques autour de TypeScript et Next.js. J'ai aussi pour objectif de creuser les notions de typage avancé, pour encore améliorer la qualité de mon code .
        </p>
        <p>
          Côté Python, je ne prévois pas de montée en compétence massive à court terme, mais je veille à maintenir un bon niveau, pour rester efficace dès que j'ai besoin de traiter des données, d'automatiser une tâche, ou de générer un script rapide. C'est un outil complémentaire dans ma boîte à outils.
        </p>
        <p>
          En tant que futur Tech Lead, la maîtrise de ces deux langages me permettra de choisir les bons outils selon les besoins, d'accompagner des développeurs juniors sur leur montée en compétences, et de guarantir un haut niveau de qualité sur les projets que je pilote — quel que soit le langage utilisé.
        </p>
      </section>
    </div>
  );
} 