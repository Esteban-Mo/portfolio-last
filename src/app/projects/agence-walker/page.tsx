"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

// Placeholder images - replace with actual paths
const projectImages = [
    { src: '/images/walker_1.png', alt: 'Agence Walker Aperçu 1' }, 
    { src: '/images/walker_2.png', alt: 'Agence Walker Aperçu 2' }, 
];

// Deduced skills from the text
const technicalSkills = [
  { name: 'Next.js', path: '/skills/frameworks' }, 
  { name: 'TypeScript', path: '/skills/programming' }, 
  { name: 'PostgreSQL', path: '/skills/databases' },
  { name: 'Prisma', path: '/skills/databases' },
  { name: 'Leaflet', path: '/skills/geographics' }, 
  { name: 'Material UI', path: '/skills/frameworks' },
  { name: 'Custom Mapping', path: '/skills/geographics' }, // Specific Leaflet usage
  { name: 'Parallax Effects', path: '/skills/frameworks' }, // UI enhancement
  { name: 'Authentication / Roles', path: '/skills/frameworks' }, // Implied features
];

const humanSkills = [
  { name: 'Client Communication (Virtual)', path: '/skills/communication' }, 
  { name: 'Project Management (Iterative)', path: '/skills/organization' }, 
  { name: 'Community Feedback Integration', path: '/skills/communication' },
  { name: 'Documentation', path: '/skills/documentation' },
];

export default function AgenceWalkerPage() {
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
      <div className={styles.backgroundEmoji}>🏠</div> {/* House emoji */}

      <h1 className={styles.mainTitle}>Réalisation : Agence Walker (GTA RP)</h1>

      {/* Image Section */}
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
          Cette réalisation décrit une mission freelance particulière, menée mi-2024​, pour le compte d'un grand serveur de jeu Roleplay (RP​) basé sur Grand Theft Auto V (GTA V​). Bien que s'inscrivant dans un univers virtuel​, ce projet a été abordé avec le même sérieux et la même méthodologie qu'une véritable réalisation d'entreprise​.
        </p>
        <p>
          Le client était l​'entité virtuelle "​Agence Walker​", une agence immobilière opérant au sein de l'univers du serveur de jeu. L'objectif fondamental des administrateurs du serveur était d'accroître l'immersion des joueurs en créant des services web réels interagissant avec leur environnement virtuel. Ma réputation préexistante en tant que développeur et modder au sein de la communauté des serveurs de jeu m'a permis d'être contacté pour ce projet​.
        </p>
        <p>
          La mission consistait à créer de A à Z un site web fonctionnel pour l'Agence Walker. Ce site devait inclure un catalogue consu​ltable des biens immobiliers disponibles dans le jeu, une fonctionnalité de recherche avancée​, ainsi qu'un formulaire de contact et de demande d'estimation​. Pour réaliser ce projet, j'ai utili​sé une stack technique moderne et maîtrisée : Next.js avec TypeScript pour le front-end et potentiell​ement le back-​end (API routes)​, PostgreSQL comme base de données gérée via l'ORM Prisma, et Leaflet pour intégrer une dimension cartographique (probablement pour localiser les biens dans le mon​de virtuel)​.
        </p>
        <p>
          Cette réalisation n​'était pas une reprise, mais bien une création originale, motivée par la volonté du serveur d'investir dans des outils web réalistes. Ce document détaillera le processus de réalisation de ce site, la communication avec les commanditaires (administrateurs du serveur / responsables de l'agence virtuelle)​, la mise en place du système cartographique personnalisé, la conception d'un catalogue moderne au design avancé, et la livraison du produit finalisé​.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2 – OBJECTIFS</h2>
        <p>
          Le développement du site web pour l​'agence immobilière virtuelle "Agence Walker" poursuivait des objectifs techniques précis visant à enrichir l'expérience de jeu, ainsi que des objectifs personnels liés à ce contexte de mission atypique​.
        </p>
        <h3 className={styles.subSectionTitle}>2.1 – OBJECTIFS TECHNIQUES (Pour l'Agence Virtuelle / Serveur)</h3>
        <p>
          Les objectifs techniques et fonctionnels pour le site étaient ambitieux :
        </p>
        <ul className={styles.list}>
          <li>Créer un portail immobilier réaliste : Fournir aux joueurs un catalogue web consultable et réaliste des biens disponibles "en jeu​", renforçant ainsi l'immersion en créant un lien tangible entre l'univers virtuel et un outil externe fonctionnel​. Les outils d'interaction de base (recherche, contact, estimation) devaient être opérationnels​.</li>
          <li>Développer des fonctionnalités avancées : Au-delà du catalogue public, le site devait inclure un espace personnel permettant aux joueurs de visualiser leurs propriétés acquises ou louées. Pour les gestionnaires de l'agence virtuelle​, un panel d​'administration complet était requis pour gérer les comptes utilisateurs, créer et gérer les biens immobiliers, et centraliser la visualisation des documents d'achat ou de location​.</li>
          <li>Intégrer les spécificités Roleplay : L​'utilisation de Leaflet était nécessaire pour afficher les biens sur une carte personnalisée représentant l​'univers du jeu. Le système devait également gérer des statuts de propriété et des types de biens spécifiques au contexte Roleplay du serveur.</li>
          <li>Assurer une haute qualité perçue : Le site devait arborer un design moderne et "luxueux​", en accord avec l​'image souhaitée pour l'agence virtuelle​, tout en garantissant une performance accrue pour une navigation fluide​.</li>
        </ul>
        <h3 className={styles.subSectionTitle}>2.2 – OBJECTIFS HUMAINS / PERSONNELS</h3>
        <p>
          Cette mission représentait pour moi une opportunité intéressante sur plusieurs plans :
        </p>
        <ul className={styles.list}>
          <li>Explorer un nouveau contexte : J​'avais pour objectif d'appliquer mes compétences en développement web dans un cadre original et créatif (un serveur de jeu vidéo)​, et d'apprendre à travailler avec un type de client spécifique (les administrateurs de serveur)​. C'était aussi une occasion d'étendre mon réseau dans ce milieu particulier.</li>
          <li>Relever des défis techniques spécifiques : Je souhaitais me confronter à l'adaptation de Leaflet pour une cartographie "custom" issue d'un jeu​, et à la conception d'une application gérant une logique métier complexe et profonde liée au contexte Roleplay​.</li>
          <li>Développer mes compétences en design : Le besoin d'une interface à la fois intuitive et originale, avec une esthétique "moderne avancée"​, m'a poussé à me fixer comme objectif d'étudier et d'appliquer plus en profondeur les principes d'UX/UI​.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3 – CONTEXTE HUMAIN</h2>
        <p>
          La collaboration sur ce projet s'est articulée autour de deux types d'interlocuteurs principaux au sein de l'écosystème du serveur GTA RP. D'une part, les administrateurs du serveur, qui validaient la faisabilité technique et l'intégration globale des projets web, et d'autre part, le gérant ("directeur") de l'entité virtuelle "Agence Walker"​, qui agissait comme le client direct pour l'expression des besoins fonctionnels et spécifiques au Roleplay​. J'avais un contact référent désigné au sein de l'administration et travaillais en lien étroit avec le directeur de l'agence virtuelle​.
        </p>
        <p>
          Tous les échanges et le suivi du projet se sont déroulés exclusivement via Discord. Nous avions instauré des points de suivi très réguliers​, typiquement une fois par semaine, pour discuter des avancées, des besoins et des éventuels blocages​.
        </p>
        <p>
          Bien qu'il n'y ait pas eu d'interaction directe avec la communauté des joueurs pendant la phase de développement initial, une étape importante a eu lieu après la première mise en production​. J​'ai alors pu recueillir directement les retours des joueurs utilisant le site​, ce qui a permis d'affiner les fonctionnalités et de corriger les bugs découverts pour mieux répondre à leurs attentes concrètes​.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4 – CONTEXTE TECHNIQUE</h2>
        <p>
          L'application "Agence Walker" a été développée en utilisant Next.js avec TypeScript​. Contrairement à une approche API distincte, la logique côté serveur (récupération de données, etc.) était principalement gérée via les fonctionnalités server-side intégrées de Next.js. La base de données PostgreSQL, structurée avec l'ORM Prisma, contenait les informations sur les biens immobiliers, incluant des données spécifiques au contexte Roleplay (​coordonnées en jeu, statuts RP, etc.). Le gestionnaire de paquets npm a été utilisé​.
        </p>
        <p>
          Pour l'interface utilisateur​, la bibliothèque Material UI a fourni les composants de base. Un aspect technique clé était l'utilisation de Leaflet pour afficher les propriétés sur un fond de carte personnalisé (une image représentant la carte du jeu GTA V)​, offrant ainsi une expérience immersive. Toutes les données initiales des biens ont été entrées manuellement par le gérant de l'agence virtuelle via le panel d'administration après le lancement​, sans import de données préexistantes​. Pour améliorer l​'attractivité visuelle, un package gérant des effets parallax a été intégré lors du défilement des listes de biens​.
        </p>
        <p>
          Concernant l​'infrastructure, une documentation complète a été fournie par mes soins​, et l'application a été hébergée directement sur un serveur dédié appartenant aux administrateurs du serveur de jeu​.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5 – ENJEUX ET RISQUES</h2>
        <h3 className={styles.subSectionTitle}>5.1 – ENJEUX</h3>
        <p>
          Pour le serveur GTA V RP et sa communauté, l​'enjeu principal de ce projet était d'augmenter radicalement l'immersion et le réalisme de l'expérience Roleplay​. En offrant un outil web unique et innovant lié à l'agence immobilière virtuelle​, les administrateurs visaient également à renforcer l'attractivité générale de leur serveur​.
        </p>
        <p>
          De mon côté, ce projet représentait l​'opportunité de prouver ma capacité à transposer des compétences web professionnelles dans un univers ludique et créatif, tout en maintenant des standards professionnels élevés​. C'était aussi une occasion d​'explorer le marché spécifique des serveurs de jeu et de relever un défi technique et conceptuel original​.
        </p>
        <h3 className={styles.subSectionTitle}>5.2 – RISQUES</h3>
        <p>
          Plusieurs risques spécifiques à ce contexte ont été identifiés ou anticipés :
        </p>
        <ul className={styles.list}>
          <li>Gestion des Exigences et Communauté : Une difficulté poten​tielle résidait dans l'obtention de spécifications claires et stables de la part des responsables d'une ent​ité virtuelle, dont les besoins pouvaient évoluer avec la dynamique du jeu​. La gestion des attentes de la com​munauté de joueurs, susceptible de réagir au produit final, était également un point de vigilance​.</li>
          <li>Défis Techniques Spécifiques : L​'utilisation d'une carte de jeu non standard avec Leaflet présentait une complexité technique certaine​. De même, la modélisation adéquate des données Roleplay pour une base de données relationnelle et la mise en place d'une gestion sécurisée et com​plexe des droits utilisateurs et de l'affichage des informations constituaient des défis tech​niques importants.</li>
          <li>Relation Client : Bien qu'un risque potentiel ait pu être la "​non-prise au sérieux​" d'un projet lié à un jeu, cette crainte ne s​'est pas matérialisée et la collaboration avec les administrateurs et le gérant de l'agence virtuelle s'est déroulée de manière professionnelle​.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6 – ÉTAPES DU PROJET</h2>
        <p>
          La création du site "Agence Walker​" a suivi une approche itérative, permettant une validation progressive par le client​.
        </p>
        <h3 className={styles.subSectionTitle}>6.1 – Conception et Développement par Jalons</h3>
        <p>
          Le projet a avancé étape par étape (​"jalon par jalon")​. Pour chaque jalon, une phase de conception et de maquettage aboutissait à une proposition visuelle et fonctionnelle qui était validée par mon contact référent et les administrateurs. Une fois la validation obtenue​, je procédais au développement de cette partie avant de passer à la conception du jalon suivant​. Cette méthode a permis d'assurer un alignement constant avec les attentes​.
        </p>
        <h3 className={styles.subSectionTitle}>6.2 – Implémentation de la Carte Personnalisée</h3>
        <p>
          L'intégration de Leaflet avec le fond de carte image de GTA V a présenté un défi technique spécifique​. Le point le plus complexe a été de gérer correctement les limites ("bounce​") et le centrage de la carte personnalisée pour offrir un affichage propre et cohérent lors de la navigation​. La superposition des marqueurs représentant les biens immobiliers s'est avérée moins problématique une fois cette base maîtrisée​.
        </p>
        <h3 className={styles.subSectionTitle}>6.3 – Développement des Fonctionnalités</h3>
        <p>
          Le développement des fonctionnalités (​catalogue, recherche, espace utilisateur, formulaires) a été une phase de programmation très sympathique, bien qu'exigeante car beaucoup d'éléments devaient être pris en compte pour assurer le réalisme et l'immersion. J'ai procédé fonction par fonction, en tenant une réunion de validation avec mon contact après chaque développement significatif avant d'enchaîner sur le suivant​.
        </p>
        <h3 className={styles.subSectionTitle}>6.4 – Mise en Place du Double Panel d'Administration</h3>
        <p>
          Pour la gestion des contenus par le client​, une double interface a été mise en place : un panel d'administration classique sur une page dédiée, ainsi qu'un système de gestion directement intégré à la carte Leaflet, permettant d'effectuer les opérations CRUD (création, gestion, suppression) sur les biens et locations directement depuis la visualisation cartographique​.
        </p>
        <h3 className={styles.subSectionTitle}>6.5 – Tests et Intégration des Retours Utilisateurs</h3>
        <p>
          À la fin de chaque jalon de développement​, la version était mise en ligne sur un environnement de test. J'effectuais les premiers tests techniques​, suivis par des tests fonctionnels réalisés par l'administrateur référent et le gérant de l'agence virtuelle​. Leur validation débloquait la poursuite du projet​. Après la mise en production initiale accessible aux joueurs, le gérant de l'agence centralisait les retours et les signalements de bugs de la communauté ; je prenais ensuite en charge les corrections et modifications nécessaires pour affiner le produit​.
        </p>
        <h3 className={styles.subSectionTitle}>6.6 – Livraison Fina​le et Documentation</h3>
        <p>
          La mission s'est achevée par la livraison complète du projet validé​. J'ai fourni une documentation technique exhaustive permettant à l'équipe du serveur de jeu de prendre en main la gestion, la maintenance et les évolutions futures de l'application de manière autonome​.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7 – FIN DU PROJET ET PERSPECTIVES D'AVENIR</h2>
        <p>
          Ma mission sur le projet Agence Walker s'est achevée mi​-​2024 avec la livraison d'un site web entièrement fonctionnel, mis en ligne et accompagné d​'une documentation technique complète. L'équipe du serveur de jeu et le gérant de l'agence virtuelle disposaient ainsi de tous les éléments pour prendre en main l'outil de manière autonome​.
        </p>
        <p>
          Après la fin officielle du contrat, j'ai maintenu un contact occasionnel avec l'équipe cliente, répondant ponctuellement à des questions ou fournissant un soutien factuel sur certaines évolutions, principalement par passion pour le projet.
        </p>
        <p>
          Il est à noter que l'application a été effectivement maintenue et régulièrement mise à jour par l'équipe du serveur après mon départ. Ils ont notamment pu, sur la base du travail fourni​, implémenter de nouvelles sections comme une FAQ ou encore un système de chat direct avec les membres de l'agence virtuelle​, démontrant la bonne prise en main de l'outil et sa capacité à évoluer​.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8 – CE QUE JE RETIENS</h2>
        <p>
          La création du site "​Agence Walker" a été une superbe expérience​, très différente des précédentes mais tout aussi enrichissante. Le fait de savoir que le site est aujourd'hui utilisé activement par plusieurs dizaines de joueurs au sein de leur univers Roleplay est une source de grande fierté​. De manière intéressante, ce projet m'a donné l'envie et l'inspiration de transposer ces compétences à la réalisation future d'un site pour une véritable agence immobilière​.
        </p>
        <p>
          Sur le plan technique, j​'ai pu encore énormément apprendre et approfondir ma maîtrise des stacks technologiques que j'utilise régulièrement​. Ce projet m'a particulièrement permis de me confronter à la mise en place de systèmes d'authentification sécurisés et à la gestion d'une base de données plus poussée en termes de structure et de volume de données spécifiques au contexte​.
        </p>
        <p>
          Enfin, tout comme ma première mission pour le Domaine George Roumier, ce projet a constitué une expérience très enrichissante dans mon parcours de développeur freelance​. Réussir à mener à bien ce projet complexe en solo m'a à nouveau apporté une plus grande confiance en moi concernant ma capacité à gérer des projets de manière autonome et à livrer des solutions de qualité​.
        </p>
      </section>

      {/* Modal for Enlarged Image */}
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