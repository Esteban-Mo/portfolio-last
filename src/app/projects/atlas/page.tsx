"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const projectImages = [
    { src: '/images/atlas_1.png', alt: 'Atlas Screenshot 1' }, 
    { src: '/images/atlas_2.png', alt: 'Atlas Screenshot 2' }, 
];

// Skills data for Atlas
const technicalSkills = [
  { name: 'Next.js / React', path: '/skills/frameworks' }, 
  { name: 'TypeScript', path: '/skills/programming' }, 
  { name: 'Prisma', path: '/skills/databases' },      
  { name: 'PostgreSQL', path: '/skills/databases' },
  { name: 'Leaflet', path: '/skills/tools' },      
  { name: 'GeoServer', path: '/skills/tools' },     
  { name: 'API Design', path: '/skills/programming' },     
  { name: 'Material UI', path: '/skills/frameworks' },
];

const humanSkills = [
  { name: 'Gestion de Projet', path: '/skills/organization' }, 
  { name: 'Communication Client', path: '/skills/communication' }, 
  { name: 'Autonomie & Adaptabilité', path: '/skills/autonomy' }, 
  { name: 'Prise de Décision', path: '/skills/organization' },
  { name: 'Transfert de Connaissances', path: '/skills/communication' }, 
];

export default function AtlasPage() {
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
      <div className={styles.backgroundEmoji}>🗺️</div>

      <h1 className={styles.mainTitle}>Réalisation : Atlas</h1>

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

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1 – INTRODUCTION : APRÈS BDD TURBINE, PLACE À ATLAS !</h2>
        <p>
          Après l'aventure BDD Turbine, ma deuxième grosse mission pendant mon alternance chez Valeco (qui a démarré en septembre 2023), ça a été le développement d'une application baptisée Atlas.
Valeco, toujours à fond dans les énergies renouvelables en France, a un Bureau d'Études (le BE) qui manipule toutes sortes de données. Pour ce projet Atlas, le besoin venait très spécifiquement de l'équipe qui s'occupe de cartographie au sein de ce BE.
Atlas, c'est une application web que j'ai développée pour visualiser des données géographiques cruciales pour Valeco : le relief des terrains (topographie), la densité de l'air, la vitesse du vent, ce genre de choses. L'idée de base, c'était de pouvoir afficher tout ça de manière interactive sur une carte dynamique.
Côté technique, on est reparti sur les mêmes fondations que pour BDD Turbine (Next.js, React, TypeScript, Prisma pour parler à la base de données PostgreSQL). Mais il y avait des nouveautés, spécifiques au monde de la géo : j'ai dû intégrer la bibliothèque Leaflet pour afficher la carte et permettre aux utilisateurs d'interagir avec, et GeoServer, un serveur open-source spécialisé pour gérer et diffuser les différentes couches de données géographiques.
Pourquoi créer Atlas ? En fait, elle venait remplacer une ancienne application qui existait déjà. Celle-ci avait été faite par une personne moins expérimentée et, pour le dire gentiment, c'était un peu le fouillis : code qualifié de "brouillon", des lenteurs qui gênaient les utilisateurs, et une structure qui rendait la maintenance ou la moindre évolution très compliquée. Le but d'Atlas, c'était donc clair : repartir sur des bases techniques saines, performantes et plus faciles à gérer.
Dans ce qui suit, je vais donc vous raconter les différentes étapes de ce projet Atlas, un parcours assez similaire à celui de BDD Turbine (comment je suis rentré dedans, le contact avec le client, la conception, le développement, la mise en production...), mais je vais aussi prendre un moment pour expliquer pourquoi j'ai choisi d'utiliser Leaflet et GeoServer spécifiquement.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2 – OBJECTIFS : CE QU'ON VOULAIT ATTEINDRE AVEC ATLAS</h2>
        <h3 className={styles.subSectionTitle}>2.1 – Les Objectifs Techniques</h3>
        <p>
          Le projet Atlas visait un double objectif. D'un côté, il fallait répondre à un besoin technique bien précis de l'équipe cartographique de Valeco. De l'autre, c'était pour moi l'occasion de continuer à apprendre et à me développer, en touchant à de nouvelles technologies et méthodes de travail.
        </p>
        <p>
          Sur le pIan purement technique, voilà ce qu'on visait principalement :
        </p>
        <ul className={styles.list}>
          <li>Une super carte interactive : Le cœur du projet, c'était d'offrir une interface cartographique qui soit à la fois performante et facile à prendre en main . Elle devait permettre de visualiser toutes sortes de données géospatiales importantes : densité de l'air, vitesse du vent, topographie (avec la possibilité de superposer différentes couches), mais aussi l'emplacement des éoliennes en France (en faisant la différence entre celles de Valeco et les autres), et même des infos pratiques comme pouvoir calculer des distances.</li>
          <li>Intégrer les données proprement : L'application devait être capable d'afficher toutes ces couches d'informations de manière fluide, en allant chercher les données nécessaires (fonds de carte, infos géo) directement dans GeoServer via son API. Et bien sûr, il fallait que l'utilisateur puisse naviguer sur la carte (zoomer, se déplacer) sans que ça rame .</li>
          <li>Moderniser et fluidifier : Comme on remplaçait une vieille application, un but essentiel était d'offrir une expérience beaucoup plus fluide et moderne. La qualité du code et sa maintenabilité étaient importantes, évidemment, mais l'accent était vraiment mis sur le ressenti de l'utilisateur : il fallait que ce soit rapide et agréable à utiliser.</li>
        </ul>
        <h3 className={styles.subSectionTitle}>2.2 – Mes Objectifs Personnels / Humains</h3>
        <p>
          Ce deuxième projet chez Valeco, c'était aussi une étape clé pour moi :
        </p>
        <ul className={styles.list}>
          <li>Apprendre les outils géo : Un de mes gros objectifs perso, c'était de plonger dans le monde du géospatial, un domaine que je ne connaissais pas du tout. Je voulais vraiment découvrir et apprendre à utiliser les outils spécifiques comme Leaflet et GeoServer. Comprendre les enjeux liés à la manipulation de ces données, c'était passionnant, tout en continuant bien sûr à renforcer mes bases sur la stack web habituelle (Next.js, React...).</li>
          <li>Prendre plus de responsabilités : Ce projet m'a donné l'opportunité de faire des choix d'architecture technique importants (autour de Leaflet et GeoServer) et, surtout, d'apprendre à les justifier et à les défendre. Gérer les spécificités d'un projet de refonte d'une application existante et continuer à affiner ma gestion de projet en autonomie, y compris le contact direct avec le client, c'était aussi un point important pour moi.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3 – CONTEXTE HUMAIN : LES ACTEURS DU PROJET</h2>
        <p>
          Pour Atlas, l'organisation humaine était assez similaire à celle de BDD Turbine. Mon travail était toujours destiné au Bureau d'Études, mais cette fois plus spécifiquement à leur équipe cartographique. Et je restais sous la supervision technique de mon Tech Lead au service IT. Encore une fois, j'étais le seul développeur en charge de la réalisation.
        </p>
        <p>
          Mon interlocuteur principal côté "client" était une personne assez particulière : c'était celui qui avait développé (un peu en amateur, d'après ce que j'ai compris) la première version d'Atlas, et qui était depuis devenu le référent sur les sujets carto au BE. C'est donc lui qui m'a transmis les besoins fonctionnels et avec qui j'échangeais le plus pour les démos et les retours. Mon Tech Lead, lui, a gardé son rôle de support technique, de validation des grandes orientations que je prenais, et de tuteur si j'avais besoin d'un coup de pouce .
        </p>
        <p>
          Nos interactions fonctionnaient sur le même modèle : des points réguliers (toutes les semaines ou toutes les deux semaines) avec mon référent client pour affiner les besoins, lui montrer où j'en étais, et valider les développements. On utilisait toujours Teams pour les discussions rapides et Notion pour centraliser la documentation. Petite différence notable : j'ai aussi eu l'occasion de présenter l'avancement d'Atlas à l'équipe complète du Bureau d'Études lors de quelques démonstrations.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4 – CONTEXTE TECHNIQUE : LA BOÎTE À OUTILS D'ATLAS</h2>
        <p>
          Pour la base technique d'Atlas, on n'a pas tout changé par rapport à BDD Turbine : l'application web a été développée en Next.js avec React et TypeScript. On a utilisé Prisma comme ORM pour communiquer avec la base de données PostgreSQL. L'application principale tournait sur un serveur interne chez Valeco. Notion nous a servi pour toute la documentation du projet, et la bibliothèque Material UI pour pas mal de composants d'interface.
        </p>
        <p>
          Là où c'était nouveau, c'était pour la partie cartographique :
        </p>
        <p>
          Leaflet a été choisi pour afficher la carte et gérer les interactions (clics, survols, etc.). Ça permettait d'afficher simplement les fonds de carte, les points d'intérêt, et j'ai aussi utilisé un plugin pour regrouper les points (le "clustering") afin que la carte reste lisible même avec beaucoup de données.
        </p>
        <p>
          Pour fournir les données géospatiales à Leaflet, on s'est appuyé sur GeoServer. C'est lui qui hébergeait et diffusait les différentes couches de données dont l'application avait besoin, via son API et des formats standards comme WMS et WFS. Point intéressant : c'est moi qui me suis occupé de A à Z du déploiement de GeoServer sur un serveur dédié (un VPS), de sa configuration initiale, et de rédiger sa documentation technique. J'ai même fait une petite session de partage de connaissances avec l'équipe IT de Valeco pour leur expliquer son fonctionnement et son administration.
        </p>
        <p>
          Et bien sûr, tout le code source était versionné avec Git sur Microsoft Azure DevOps.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5 – ENJEUX ET RISQUES : CE QUI ÉTAIT EN JEU (ET LES POINTS DÉLICATS)</h2>
        <h3 className={styles.subSectionTitle}>5.1 – Les Enjeux : Pourquoi c'était important pour Valeco ?</h3>
        <p>
          Moderniser l'outil cartographique avec Atlas, ça représentait plusieurs enjeux pour Valeco :
        </p>
        <p>
          Le premier, c'était de gagner nettement en performance et en fiabilité pour toutes les analyses cartographiques faites en interne . L'objectif direct était d'améliorer la productivité de l'équipe spécialisée du BE carto.
        </p>
        <p>
          Au-delà de l'efficacité pure, l'idée était aussi de doter Valeco d'un outil pérenne, facile à maintenir et prêt pour d'éventuelles évolutions futures, le tout basé sur une fondation technique moderne et solide.
        </p>
        <p>
          Enfin, ce projet visait aussi à améliorer l'expérience des utilisateurs, à mieux valoriser le patrimoine de données géospatiales de l'entreprise et à rendre plus simple le partage de ces informations en interne.
        </p>
        <h3 className={styles.subSectionTitle}>5.2 – Les Risques : Les défis qu'on avait identifiés</h3>
        <p>
          Le principal défi technique qu'on avait repéré pour ce projet, c'était Ia maîtrise de GeoServer . La plus grosse difficulté anticipée, c'était d'arriver à comprendre assez finement son fonctionnement pour pouvoir configurer et exposer les données via son API de manière parfaitement exacte, pour que ça colle pile aux besoins d'analyse de l'équipe carto.
        </p>
        <p>
          La courbe d'apprentissage de GeoServer, qui est connue pour être assez raide (on entend parfois dire que c'est "un enfer" !) , était aussi un point de vigilance. Ça aurait pu impacter les délais du projet. Heureusement, en comparaison, Leaflet s'est avéré beaucoup plus simple à prendre en main. Concernant l'infrastructure de GeoServer, même si j'ai géré son déploiement initial sur un VPS, le risque lié à sa gestion au quotidien était limité, car la supervision et la maintenance courante ont ensuite été reprises par mon Tech Lead .
        </p>
      </section>

      <section className={styles.section}>
         <h2 className={styles.sectionTitle}>6 – ÉTAPES DU PROJET : LE DÉROULEMENT</h2>
         <p>
          La réalisation du projet Atlas a suivi un processus assez structuré, depuis la définition des besoins jusqu'à la livraison de l'outil modernisé .
        </p>
        <h3 className={styles.subSectionTitle}>6.1 – Cadrage et Conception Initiale</h3>
        <p>
          Les premières étapes ont été assez classiques et similaires à celles de BDD Turbine : des réunions avec mon contact clé au BE (le responsable carto) pour bien comprendre ce qu'ils attendaient, la réalisation de maquettes pour visualiser la future interface, et la création du modèle de données (MLD) pour savoir comment on allait organiser les informations dans la base .
        </p>
         <h3 className={styles.subSectionTitle}>6.2 – Choix Technologiques Géospatiaux</h3>
        <p>
          Le choix des outils spécifiques à la carto a été un moment important. On a choisi Leaflet pour l'affichage interactif, parce que c'est une bibliothèque réputée et que j'avais déjà eu une petite occasion de la tester. Pour servir les données, le choix s'est porté sur GeoServer, notamment parce que l'équipe SIG (Système d'Information Géographique) de Valeco avait déjà une certaine expérience avec, et que c'est reconnu comme une des solutions open-source les plus complètes sur le marché.
        </p>
         <h3 className={styles.subSectionTitle}>6.3 – Préparation de l'Infrastructure GeoServer</h3>
        <p>
          Mettre en place GeoServer a été une étape clé. J'ai commencé par l'installer et le configurer sur un serveur de test (un VPS Ubuntu). Ça m'a permis de bien documenter tout le processus avant de le refaire proprement sur le serveur définitif de Valeco . L'ajout des différentes couches de données s'est fait un peu plus tard dans le projet, et leur donner le bon style directement dans GeoServer a présenté une certaine complexité technique.
        </p>
         <h3 className={styles.subSectionTitle}>6.4 – Développement de l'Application Atlas</h3>
         <p>
          Le développement de l'application Atlas elle-même a débuté par l'intégration de la partie carte avec Leaflet. Ensuite, j'ai avancé module par module, en développant les différents panneaux d'information et les fonctionnalités associées, en les connectant à l'API de GeoServer et à la base de données via Prisma .
        </p>
         <h3 className={styles.subSectionTitle}>6.5 – Tests, Validation et Reprise</h3>
         <p>
          Le processus de validation a été le même que pour BDD Turbine : d'abord des tests internes par l'équipe IT, puis une période de tests en pré-production par les utilisateurs finaux du Bureau d'Études . On a fait aussi des tests de performance, en particulier sur la fluidité de l'affichage cartographique. Une fois l'application validée par tout le monde, il a été convenu que la maintenance et les futures évolutions seraient directement prises en charge par le Bureau d'Études lui-même.
        </p>
         <h3 className={styles.subSectionTitle}>6.6 – Déploiement et Transfert de Connaissances</h3>
        <p>
          La mise en production sur l'infrastructure interne a été gérée par mon Tech Lead. Pour le passage de relais, Ia documentation que j'avais rédigée (notamment sur l'installation et la configuration de GeoServer) a été transmise à mon référent au BE, qui s'est chargé ensuite de la partager avec ses équipes .
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7 – FIN DU PROJET ET PERSPECTIVES D'AVENIR : LA SUITE POUR ATLAS</h2>
        <p>
          Quand mon intervention sur le projet s'est terminée, l'application Atlas était non seulement déployée en production, mais déjà activement utilisée par l'équipe cartographique du Bureau d'Études. Les retours qu'on a eus étaient excellents, ce qui confirmait que la solution déveIoppée répondait bien à leurs attentes . Comme c'était prévu, c'est le Bureau d'Études qui a pris directement la main sur la maintenance et les éventuelles évolutions futures dès la mise en production.
        </p>
        <p>
          Le projet ayant parfaitement rempli ses objectifs initiaux, il n'y avait pas d'évolutions majeures planifiées juste après le lancement, hormis quelques ajustements mineurs. En interne, l'outil est perçu comme apportant un gain de temps considérable sur les tâches de consultation et d'analyse de données cartographiques, surtout pour des activités clés comme la prospection de terrains. Il a donc bien consolidé sa place comme outil de référence pour l'équipe .
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8 – CE QUE JE RETIENS : MON BILAN PERSONNEL (BIS)</h2>
        <p>
          Le projet Atlas a été une expérience particulièrement enrichissante, et ce, notamment par la découverte de tout ce domaine de la cartographie. Pour moi, c'était un peu comme entrer dans un monde complètement nouveau . Ça m a permis non seulement d'acquérir de nouvelles connaissances techniques bien spécifiques, mais aussi de mieux comprendre certains aspects du métier même de Valeco . J'ai vraiment beaucoup aimé cette immersion dans un nouveau domaine.
        </p>
        <p>
          Sur le plan technique, j'ai pu énormément développer mes compétences en React et Next.js, et bien sûr, j'ai acquis ce qui me semble être une bonne maîtrise de Leaflet. Mais au-deIa du code , ce projet m'a surtout permis de franchir une étape dans la prise de responsabilités. J'ai dû faire des choix techniques importants, en particulier sur les outils géospatiaux, et apprendre à "défendre" mes choix, à les argumenter face aux clients et à mon Tech Lead. Ce processus d'apprentissage par la justification, je l'ai trouvé vraiment passionnant .
        </p>
        <p>
          Enfin, cette deuxième réalisation réussie a indéniablement renforcé ma position en tant que développeur auprès de mes responsables chez Valeco. J'ai pu, une nouvelle fois, démontrer mon autonomie et ma capacité à apporter de la valeur à travers le développement d'une solution qui a été appréciée. Ce fut, encore une fois, une très bonne expérience professionnelle et personnelle .
        </p>
      </section>

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