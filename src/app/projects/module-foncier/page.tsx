"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

// Remplacement du tableau vide par des exemples
const projectImages = [
    { src: '/images/module_foncier_1.png', alt: 'Module Foncier Aperçu 1' }, 
    { src: '/images/module_foncier_2.png', alt: 'Module Foncier Aperçu 2' }, 
    // Ajoutez d'autres images ici si nécessaire
];

// Skills data for Module Foncier (Act)
const technicalSkills = [
  { name: 'Next.js / React', path: '/skills/frameworks' }, 
  { name: 'TypeScript', path: '/skills/programming' }, 
  { name: 'Prisma', path: '/skills/databases' },      
  { name: 'PostgreSQL', path: '/skills/databases' },
  { name: 'Material UI', path: '/skills/frameworks' },
  { name: 'GitHub', path: '/skills/tools' }, // Replaced Azure DevOps
  { name: 'Figma', path: '/skills/tools' },
  { name: 'Draw.io', path: '/skills/tools' },
  // { name: 'Performance Optimization', path: '/skills/programming' }, // Mentioned but maybe too specific?
];

const humanSkills = [
  { name: 'Travail en Équipe', path: '/skills/communication' }, 
  { name: 'Méthodologie Agile', path: '/skills/organization' }, 
  { name: 'Gestion de Projet (Agile)', path: '/skills/organization' },
  { name: 'Communication Technique', path: '/skills/communication' },
  { name: 'Revue de Code', path: '/skills/tools' }, // Could be tools or communication
  { name: 'Adaptabilité', path: '/skills/autonomy' },
  // { name: 'Pair Programming', path: '/skills/communication' }, // Mentioned as punctual
  // { name: 'Résolution de Conflits (Merge)', path: '/skills/tools' }, // Maybe too specific?
];

export default function ModuleFoncierPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageSrc(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundEmoji}>📜</div> {/* Changed emoji */}

      <h1 className={styles.mainTitle}>Réalisation : Module Foncier (Act)</h1>

      {/* Image Section - Render only if images exist */}
      {projectImages.length > 0 && (
          <section className={`${styles.section} ${styles.imageSection}`}>
             <h2 className={styles.sectionTitle}>Présentation Visuelle</h2>
             <div className={styles.imageGrid}>
                {projectImages.map((image, index) => (
                    <div 
                      key={index} 
                      className={styles.imageWrapper} 
                      onClick={() => openModal(image.src)}
                    >
                        <img src={image.src} alt={image.alt} className={styles.projectImage} />
                        <p className={styles.imageCaption}>{image.alt}</p>
                    </div>
                ))}
             </div>
          </section>
      )}

      {/* Associated Skills Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Compétences Associées</h2>
        <div className={styles.chipsContainer}>
            <h3 className={styles.chipCategoryTitle}>Techniques</h3>
            <div className={styles.chipsGroup}>
                {technicalSkills.map((skill) => (
                    <Link key={skill.name} href={skill.path} passHref>
                       <span className={`${styles.chip} ${styles.technicalChip}`}>{skill.name}</span>
                    </Link>
                ))}
            </div>
        </div>
         <div className={styles.chipsContainer}>
            <h3 className={styles.chipCategoryTitle}>Humaines</h3>
             <div className={styles.chipsGroup}>
                {humanSkills.map((skill) => (
                    <Link key={skill.name} href={skill.path} passHref>
                       <span className={`${styles.chip} ${styles.humanChip}`}>{skill.name}</span>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1 – INTRODUCTION</h2>
        <p>
          Cette troisième réalisation s'inscrit dans la continuité de mon parcours en alternance chez Valeco et concerne ma participation au développement d'un nouveau projet majeur, nommé Act, qui a démarré après la finalisation du projet Atlas. Il s'agit d'un projet distinct des précédents.
        </p>
        <p>
          Le projet Act vise à fournir une application moderne pour la gestion des aspects fonciers (gestion des terrains, contrats, etc.) essentiels à l'activité de Valeco. De nombreux services au sein de l'entreprise sont concernés par cette thématique et constituent les utilisateurs cibles de cette nouvelle solution. Leur besoin principal était de disposer d'un outil capable d'accueillir de nouvelles fonctionnalités, ce que ne permettait plus l'ancien "Module Foncier" qu'Act vient remplacer.
        </p>
        <p>
          La motivation première de ce projet était donc de moderniser une solution vieillissante, qui n'était plus maintenue et sur laquelle toute évolution était devenue impossible. Contrairement à mes projets précédents menés en autonomie, j'ai rejoint le projet Act en cours de route, intégrant ainsi une équipe de développement déjà constituée. Ce fut ma première expérience de travail en équipe et suivant une véritable méthode Agile au sein de Valeco. Les technologies employées restaient cohérentes avec l'environnement technique de l'entreprise : Next.js, React, TypeScript et Prisma.
        </p>
        <p>
          Cette description se concentrera sur mon intégration au sein de l'équipe projet, ma contribution full-stack au développement du module Act, et mon expérience du travail collaboratif dans un cadre Agile.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2 – OBJECTIFS</h2>
        <p>
          En rejoignant le projet Act en cours de développement, mes objectifs se sont articulés autour des ambitions globales du projet et de mon propre développement au sein de cette nouvelle dynamique d'équipe.
        </p>
        <h3 className={styles.subSectionTitle}>2.1 – OBJECTIFS TECHNIQUES (du Projet Act)</h3>
        <p>
          Le projet visait collectivement plusieurs buts techniques majeurs :
        </p>
        <ul className={styles.list}>
          <li>Moderniser et centraliser la gestion foncière : L'objectif principal était de remplacer l'ancien outil par une application moderne, capable de centraliser efficacement toutes les informations relatives aux terrains, aux contacts associés, aux actes juridiques, etc.</li>
          <li>Permettre l'évolutivité fonctionnelle : Une attente forte était de rendre possible l'ajout de nouvelles fonctionnalités cruciales pour les utilisateurs, telles que des systèmes de priorisation de tâches, des notifications intégrées, et potentiellement bien d'autres améliorations futures.</li>
          <li>Améliorer les performances et la maintenabilité : Une amélioration significative des performances par rapport à l'ancien outil était recherchée, tout comme une architecture logicielle garantissant la modularité et la maintenabilité à long terme. Il est à noter que, par manque de temps sur la globalité du projet, la mise en place de tests unitaires n'a pas été priorisée par l'équipe.</li>
        </ul>
        <h3 className={styles.subSectionTitle}>2.2 – OBJECTIFS HUMAINS / PERSONNELS (En rejoignant l'équipe)</h3>
        <p>
          Pour ma part, intégrer ce projet représentait plusieurs objectifs personnels et professionnels clés :
        </p>
        <ul className={styles.list}>
          <li>Intégration et collaboration Agile : Mon premier objectif était de réussir mon intégration au sein d'une équipe Agile fonctionnant avec ses rituels : revues de code, pair programming ponctuel, participation active aux réunions client, présentations lors des points quotidiens/hebdomadaires, rétrospectives, et surtout les sprint planning (sélection des User Stories, estimation, définition des objectifs de sprint...). Je visais à contribuer activement à l'effort collectif.</li>
          <li>Adaptation technique et montée en compétences : Il était essentiel pour moi de rapidement comprendre et m'adapter à l'architecture existante d'Act. Je souhaitais travailler sur les logiques métiers spécifiques au foncier et aborder de nouvelles problématiques de performance, comme l'optimisation de l'affichage de grands volumes de données (plus de 150 000 contacts). Un objectif constant était également de maintenir une cohérence logique dans mon code par rapport à celui de mes collègues.</li>
          <li>Développement des compétences d'équipe : Ce projet était une opportunité majeure pour développer mes compétences relationnelles au sein d'une équipe technique, de comprendre les méthodes Agiles en pratique, de bénéficier de l'appui de collègues sur des sujets nécessitant plusieurs expertises, d'apprendre à lire et comprendre efficacement le code d'autrui, de renforcer ma communication et de gérer les résolutions de conflits (notamment lors des merges de code).</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3 – CONTEXTE HUMAIN</h2>
        <p>
          En rejoignant le projet Act, j'ai intégré une équipe dédiée de cinq personnes, fonctionnant selon une méthodologie Agile. L'équipe était composée de trois développeurs Fullstack (dont moi-même), d'un Product Owner (PO) et de mon Tech Lead, qui endossait également le rôle de Scrum Master pour faciliter le processus Agile. Le Product Owner est le membre de l'équipe responsable de représenter les besoins des utilisateurs finaux, de définir et prioriser les fonctionnalités à développer (notamment via la rédaction des User Stories) et de maximiser la valeur du produit créé.
        </p>
        <p>
          Au quotidien, ma collaboration s'effectuait principalement avec l'ensemble de l'équipe. Le Product Owner était un interlocuteur clé, présent à chaque réunion, et la personne à contacter pour toute clarification nécessaire sur les User Stories ou les détails fonctionnels. Si les décisions techniques majeures étaient prises par le Tech Lead, celui-ci nous consultait systématiquement afin de recueillir nos avis et expertises de développeurs.
        </p>
        <p>
          Le rythme de travail et les interactions étaient ponctués par les cérémonies Agiles classiques : daily stand-ups pour la synchronisation quotidienne, sprint planning pour définir le contenu de chaque itération, revues de sprint (démos) pour présenter les avancées, et rétrospectives pour l'amélioration continue de l'équipe.
        </p>
        <p>
          La communication avec les utilisateurs finaux du Bureau d'Études était principalement assurée par le Product Owner, servant d'interface entre leurs besoins et l'équipe de développement. Cependant, lors des démonstrations de fin de sprint, l'équipe entière participait collectivement, et chaque membre avait l'occasion de présenter les fonctionnalités qu'il avait personnellement réalisées.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4 – CONTEXTE TECHNIQUE</h2>
        <p>
          L'application Act repose sur le socle technique standard de Valeco : Next.js avec React et TypeScript pour le développement front-end et back-end, l'ORM Prisma et une base de données PostgreSQL hébergée sur les serveurs internes. La bibliothèque Material UI a été utilisée pour les composants d'interface. En rejoignant le projet, j'ai dû m'adapter à une structure spécifique de dossiers et de fichiers déjà mise en place par l'équipe, ce qui s'est fait sans difficulté majeure.
        </p>
        <p>
          Un changement notable par rapport aux outils précédents a été l'adoption de GitHub comme plateforme centrale. GitHub était utilisé non seulement pour le versioning du code (en remplacement d'Azure DevOps), mais également pour la gestion de projet Agile (suivi des User Stories, planification des sprints, etc., probablement via GitHub Projects ou Issues). Pour la collaboration et la conception, l'équipe utilisait Microsoft Teams pour la communication, Figma pour la réalisation des maquettes d'interface, et Draw.io pour la modélisation des données (MCD/MLD). Notion restait l'outil privilégié pour la documentation détaillée.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5 – ENJEUX ET RISQUES</h2>
        <h3 className={styles.subSectionTitle}>5.1 – ENJEUX</h3>
        <p>
          Le projet Act revêtait plusieurs enjeux majeurs pour Valeco. Il s'agissait avant tout de garantir la continuité et l'évolutivité de la gestion foncière, un processus critique pour l'entreprise. Le succès du projet devait aussi démontrer la capacité de l'équipe à livrer rapidement un outil moderne et enfin débloquer l'implémentation de nouvelles fonctionnalités attendues depuis longtemps par les utilisateurs. Un enjeu clé était d'ailleurs de livrer une première version viable en production dans un délai court.
        </p>
        <p>
          Secondairement, ce projet contribuait à l'objectif d'harmoniser les outils de gestion internes chez Valeco et de fournir aux utilisateurs une application performante au quotidien, notamment en termes de rapidité de recherche et de création de données.
        </p>
        <h3 className={styles.subSectionTitle}>5.2 – RISQUES</h3>
        <p>
          Plusieurs risques ont été identifiés ou rencontrés durant le projet :
        </p>
        <ul className={styles.list}>
          <li>Contrainte temporelle : Le délai très limité avant la mise en production de la première version a engendré une légère surcharge de travail pour l'équipe, bien que cela n'ait pas conduit à une situation de "rush" préjudiciable.</li>
          <li>Migration des données : Bien que je n'aie pas directement participé à cette phase, le risque le plus significatif identifié collectivement concernait la migration des données depuis l'ancien système vers la nouvelle base de données, en raison de la complexité potentielle de l'opération.</li>
          <li>Performances sur gros volumes : Des ralentissements notables ont été effectivement observés lors du chargement de certains jeux de données volumineux (comme les contacts). Face à cela, l'équipe a dû revoir l'approche technique en implémentant des techniques de virtualisation de données et de mise en cache passif afin d'assurer une navigation fluide pour l'utilisateur final.</li>
        </ul>
      </section>

      <section className={styles.section}>
         <h2 className={styles.sectionTitle}>6 – ÉTAPES DU PROJET</h2>
         <p>
          Mon intervention sur le projet Act s'est déroulée en plusieurs phases, marquées par l'intégration dans une équipe Agile et la contribution à un projet déjà initié.
        </p>
        <h3 className={styles.subSectionTitle}>6.1 – Intégration et Prise en Main</h3>
        <p>
          Mon intégration au sein de l'équipe s'est très bien déroulée, facilitée par un environnement de travail ouvert. Pour me familiariser avec la base de code existante, j'ai procédé par lecture de code, en sollicitant ponctuellement des explications auprès de mes collègues sur certains principes d'architecture, avant de commencer à expérimenter. Ma première contribution majeure a été le développement d'une fonctionnalité conséquente : la gestion des "Événements", en commençant par la phase de maquettage.
        </p>
         <h3 className={styles.subSectionTitle}>6.2 – Contribution au Développement des Fonctionnalités Clés</h3>
        <p>
          Par la suite, mes contributions full-stack se sont concentrées sur des modules centraux de l'application, notamment le Tableau de bord et le module d'Activités et Événements. Ce travail impliquait typiquement la gestion de données complexes, la création et la validation de formulaires, ainsi que les interactions avec la base de données (création, lecture, mise à jour, suppression) pour implémenter les différentes User Stories définies par le Product Owner (concernant par exemple la gestion des contacts, des missions foncières, des statuts, des commentaires, etc.).
        </p>
         <h3 className={styles.subSectionTitle}>6.3 – Participation Active au Cycle Agile</h3>
         <p>
          J'ai pleinement participé à l'ensemble des rituels Agiles de l'équipe. Lors des daily stand-ups, je présentais le travail de la veille et mon avancement par rapport aux prévisions. Les weekly étaient l'occasion de faire un bilan hebdomadaire et de présenter nos avancées aux autres équipes IT. Durant les sprint planning, je participais à la sélection et à l'estimation de l'effort des User Stories prioritaires. En fin de sprint, les rétrospectives permettaient d'analyser collectivement nos méthodes de travail. Pour les démos de fin de sprint, après avoir testé mes propres ajouts sur un environnement commun, je préparais une "feuille de route" pour présenter mes réalisations de manière claire et fluide.
        </p>
         <h3 className={styles.subSectionTitle}>6.4 – Adaptation Technique et Collaboration</h3>
         <p>
          Un défi notable a été l'intégration avec certaines parties du code existant, développées par des collègues ayant parfois des approches de codage très spécifiques et différentes des conventions habituelles. Cela a nécessité un effort d'adaptation, mais grâce aux discussions avec les collègues concernés et à l'appui de mon Tech Lead, l'intégration s'est finalement bien déroulée.
        </p>
        <h3 className={styles.subSectionTitle}>6.5 – Processus de Qualité et Validation</h3>
         <p>
          La qualité du code était assurée par un processus basé sur les Pull Requests (PR). Une PR est une demande faite par un développeur pour intégrer les modifications de son code dans la branche principale du projet, permettant ainsi la revue par ses pairs. À la création d'une PR, un environnement de test personnel était automatiquement déployé, sur lequel je réalisais une validation complète de mes développements. Une fois cette étape passée, le Product Owner effectuait sa propre vérification fonctionnelle. Si tout était conforme, la PR était validée et fusionnée à la branche principale ("main").
        </p>
         <h3 className={styles.subSectionTitle}>6.6 – Projet en Cours</h3>
        <p>
          Contrairement aux projets précédents, la première mise en production n'a pas marqué la fin de mon intervention. Le projet Act est toujours en développement très actif à ce jour, avec des améliorations et de nouvelles fonctionnalités ajoutées continuellement par l'équipe. Aucune documentation spécifique de transfert n'a été nécessaire pour mes contributions, le travail se poursuivant de manière itérative.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7 – FIN DU PROJET ET PERSPECTIVES D'AVENIR</h2>
        <p>
          À ce jour, l'application Act est dans un état stable et déployée en production, mais elle demeure en phase d'amélioration continue. Son adoption par les différents services concernés par le foncier chez Valeco est progressive, avec de plus en plus d'utilisateurs qui réalisent la transition depuis l'ancien outil.
        </p>
        <p>
          L'équipe de développement, dont je fais partie, se concentre actuellement sur le traitement des retours utilisateurs (corrections de bugs ou modifications mineures) afin de consolider l'existant. Dans un second temps, la roadmap prévoit l'implémentation de nouvelles fonctionnalités importantes, comme la gestion fine des droits par utilisateur, parmi d'autres évolutions planifiées pour enrichir l'application.
        </p>
        <p>
          La vision à long terme pour Act est claire : cet outil a vocation à devenir la plateforme centrale et unique pour l'ensemble de la gestion foncière au sein de Valeco. Le projet est donc loin d'être terminé et représente un investissement stratégique avec un potentiel d'évolution important pour l'entreprise.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8 – CE QUE JE RETIENS</h2>
        <p>
          Ma participation au projet Act a été une expérience particulièrement formatrice, notamment grâce à la découverte et à l'application de la méthodologie Agile. J'ai énormément apprécié cette manière de procéder : avoir des tâches prédéfinies dans un cadre structuré (les sprints) et une vision claire de la direction du projet est un vrai plus. Cela m'a appris à mieux ordonner mon travail pour pouvoir en rendre compte efficacement chaque jour lors des daily stand-ups, et à expliciter clairement mes avancées ou mes éventuels points de blocage.
        </p>
        <p>
          Au-delà de la méthode, j'ai développé de nombreuses compétences liées au travail collaboratif : la communication constante avec l'équipe et le PO, la pratique des revues de code, l'apprentissage de la lecture et de la compréhension du code écrit par d'autres, ainsi que la gestion des conflits techniques (comme les merges). J'ai aussi appris l'importance de bien se concentrer sur le périmètre défini par les User Stories ("savoir ce restreindre à ce qu'on attend") et j'ai nettement amélioré ma maîtrise de la gestion de projet sur GitHub, notamment via une utilisation rigoureuse des branches pour chaque tâche spécifique.
        </p>
        <p>
          Cette expérience contraste fortement avec mes projets précédents menés en autonomie. Le travail en équipe et le cadre Agile apportent une dynamique différente. De plus, le fait que le projet Act soit toujours en cours représente une opportunité précieuse : cela me permet un apprentissage continu sur des fonctionnalités souvent plus avancées que dans un projet à durée déterminée, ce qui constitue un vrai bonus pour mon alternance et ma montée en compétences globale.
        </p>
      </section>

      {/* Modal for Enlarged Image (even if no images yet) */}
      {isModalOpen && selectedImageSrc && (
        <div className={styles.modalOverlay} onClick={closeModal}> 
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}> 
            <button className={styles.modalCloseButton} onClick={closeModal}>×</button>
            <img src={selectedImageSrc} alt="Enlarged project view" className={styles.modalImage} />
          </div>
        </div>
      )}

    </div>
  );
} 