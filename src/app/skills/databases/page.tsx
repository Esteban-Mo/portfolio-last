import Chip from '@mui/material/Chip';
import styles from './page.module.css';

const pageChips = ["PostgreSQL", "MongoDB"];

export default function DatabaseSkillPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEmoji}>🗄️</div>

      <h1 className={styles.mainTitle}>Compétence : Base de Données</h1>

      <div className={styles.chipContainer}>
        {pageChips.map((chip, index) => (
          <Chip 
            key={index} 
            label={chip} 
            variant="outlined" 
            size="small"
            sx={{
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
          La base de données, c​'est le cœur d'un projet, le socle sur lequel repose toute la logique metier, la persistance des informations et l'interconnexion entre les modules​. En tant que developpeur fullstack, la gestion de la base de données fait partie integrante de mon quotidien, autant côté conception que manipulation.
        </p>
        <p>
          J'ai choisi de me spécialiser principalement sur PostgreSQL​, un système de gestion relationnelle complet​, robuste et très bien adapté à des structures complexes. Je l​'utilise à la fois en entreprise et en projets personnels, et c'est devenu mon outil de référence pour tout ce qui concerne la gestion de données​.
        </p>
        <p>
          J'ai aussi eu l'occasion de découvrir MongoDB dans certains projets perso plus anciens, notamment pour stocker des données simples comme des utilisateurs ou du texte. C'était surtout dans une logique d'expérimentation autour du NoSQL, mais ce n'est pas mon outil principal aujourd'hui​. Je préfère nettement la rigeur du relationnel, surtout pour des projets de taille réelle ou à long terme.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes éléments de preuve</h2>
        <p>
          J'ai été amené à modéliser des bases de données complètes, de A à Z, sur plusieurs projets importants comme BDD Turbine, Atlas, Agence Walker ou encore George Roumier.
        </p>
        <p>
          Dans BDD Turbine, la base PostgreSQL était le cœur du projet. Toute la logique de l​'application reposait sur la structure des données, leur cohérence, leur integrité et leur accès rapide. J'ai conçu la structure, défini les relations, les types​, gére les migrations et travaille à l'optimisation.
        </p>
        <p>
          Dans le projet Module Foncier, j'ai eu à faire des optimisations de requêtes et à refactor la structure pour la rendre plus lisible​, plus performante et plus souple à l'usage. C'est ce genre de contexte qui m'a fait comprendre à quel point une base mal pensée peut freiner un projet entier​.
        </p>
        <p>
          Sur les projets avec MongoDB, l'utilisation était plus ponctuelle et basique : stockage de données simples, sans besoin de relations complexes. C'était une bonne initiation au NoSQL, mais ce n'est pas un usage que je maintiens aujourd'hui dans mes stacks actuelles​.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon autocritique</h2>
        <p>
          Je me considère comme avancé sur PostgreSQL​, avec une vraie aisance sur la modélisation, l'usage quotidien​, et l'interfacage via des ORM comme Prisma. J'utilise Pg​Admin pour l'administration, mais je suis aussi à l'aise avec les requêtes en SQL brut quand j'ai besoin de précision ou de liberté.
        </p>
        <p>
          Je maîtrise les jointures, les types personnalisés​, et j'ai de bonnes bases sur les migrations, les vues et la normalisation. Je sais que je peux encore progresser sur les CTE (​Common Table Expressions​), les fonctions SQL avancées et l'optimisation fine des performances.
        </p>
        <p>
          Sur MongoDB, j'ai un niveau de base suffisant pour des projets simples, mais je n'ai pas encore creusé les requêtes d'agrégation complexes​, et ce n'est pas ma priorité actuelle.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon évolution dans cette compétence</h2>
        <p>
          La base de données est pour moi l'un des piliers du developpement web​, et encore plus pour un futur Tech Lead​. Savoir concevoir, sécuriser, maintenir et faire évoluer une base est un prérequis absolu​.
        </p>
        <p>
          Je veux continuer à pousser cette compétence, notamment en approfondissant :
        </p>
        <ul className={styles.list}>
          <li>La gestion des droits utilisateurs</li>
          <li>Les systèmes de sauvegarde et de récupération (backup / restore)</li>
          <li>Les fonctions SQL personnalisées</li>
          <li>Et tout ce qui touche à la sécurisation d'une base sur un VPS</li>
        </ul>
        <p>
          Actuellement, je gère moi-même une base PostgreSQL sur un serveur privé Ubuntu, ce qui me permet de sortir du cadre « dev local » et de toucher à la partie réelle « en prod » : déploiement, config​, sécurité​.
        </p>
        <p>
          Mon objectif à court terme est d'être totalement à l'aise pour prendre en main une base PostgreSQL complète, du design initial jusqu'à la gestion en production, et ce de façon autonome.
        </p>
      </section>
    </div>
  );
} 