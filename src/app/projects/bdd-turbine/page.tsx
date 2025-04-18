"use client";
import React, { useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image'; // Uncomment when adding real images
import styles from './page.module.css';

// Placeholder data for chips - replace with actual skill paths
const technicalSkills = [
  { name: 'Next.js / React', path: '/skills/frameworks' }, 
  { name: 'TypeScript', path: '/skills/programming' }, 
  { name: 'Prisma', path: '/skills/databases' },      
  { name: 'PostgreSQL', path: '/skills/databases' },
  { name: 'Python', path: '/skills/programming' },      
  { name: 'API Design', path: '/skills/programming' },     
  { name: 'Material UI', path: '/skills/frameworks' },
  // { name: 'Azure DevOps / Git', path: '/skills/tools' }, // Assuming no tools page yet
];

const humanSkills = [
  { name: 'Gestion de Projet', path: '/skills/organization' }, 
  { name: 'Communication Client', path: '/skills/communication' }, 
  { name: 'Autonomie & Adaptabilité', path: '/skills/autonomy' }, // Combined Autonomy/Adaptability
];

// Updated image data
const projectImages = [
    { src: '/images/bdd_1.png', alt: 'BDD Turbine Screenshot 1' }, 
    { src: '/images/bdd_2.png', alt: 'BDD Turbine Screenshot 2' }, 
];


export default function BddTurbinePage() {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);

  // Functions to handle modal
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
      {/* Optional: Background Emoji or Icon */}
      <div className={styles.backgroundEmoji}>⚙️</div>

      <h1 className={styles.mainTitle}>Réalisation : BDD Turbine</h1>

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
                        {/* Use next/image for optimized images */}
                        {/* <Image src={image.src} alt={image.alt} width={500} height={300} objectFit="cover" /> */}
                        <img src={image.src} alt={image.alt} className={styles.projectImage} /> {/* Basic img for now */}
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
          Ce travail, je l'ai réalisé pendant mon expérience chez Valeco. J'ai commencé par un stage en mars 2023, puis j'ai enchaîné avec une alternance dès septembre 2023.
        </p>
        <p>
          Pour vous donner une idée, Valeco est une entreprise spécialisée dans les énergies renouvelables en France. Elle s'occupe de tout: développer, financer, exploiter et maintenir des centrales d'énergie verte partout sur le territoire. C'est un acteur majeur de la transition énergétique, très ancré localement , et son but est d'augmenter la production d'énergie propre dans le pays. C'est une entreprise qui s'engage vraiment pour un avenir durable. Justement , comme Valeco se développait et voulait moderniser ses outils , ils cherchaient un développeur full-stack pour un changement technique important: remplacer leur ancienne gestion de données via un fichier Excel par une application web plus fiable et pensée pour durer.
        </p>
        <p>
          Le projet technique au cœur de tout ça s'appelle BDD Turbine. Ma mission principale a été de faire le lien avec les utilisateurs finaux (mes collègues, en fait !), de bien comprendre leurs besoins pour les traduire en "langage technique", puis de m'occuper de la conception (modèles de données, maquettes) et de la création de l'application. Côté technique, le projet utilisait des outils modernes imposés par l'entreprise, que j'ai dû apprendre à maîtriser : Next.js et React (avec TypeScript) pour la partie visible par l'utilisateur , Prisma pour communiquer avec la base de données, et PostgreSQL comme base de données. L'objectif final était de créer une application web pour ajouter et gérer en détail les informations sur les éoliennes, tout en se connectant de manière sécurisée à une API externe pour récupérer certaines données spécifiques.
        </p>
        <p>
          Le gros problème que ce projet devait résoudre venait de l'ancien système : toutes les infos sur les turbines étaient gérées dans un fichier Excel. Ça a dépanné pendant un temps, mais ça montrait vraiment ses limites (ça "commençait à être à bout de souffle", comme on dit) : c'était limité en capacité, il y avait des risques d'erreurs ou d'infos en double, ce n'était pas pratique pour travailler à plusieurs et ça ne permettait aucune automatisation. Il était donc grand temps de passer à quelque chose de plus solide.
        </p>
        <p>
          Sur cette page, je vais donc vous expliquer les différentes étapes de mon travail sur le projet BDD Turbine : mon arrivée, les échanges avec les utilisateurs, la conception technique et fonctionnelle qu'on a faite ensemble, la réalisation concrète de l'application, sa mise en ligne et le suivi avec les utilisateurs une fois lancée. Il faut savoir que j'étais le principal développeur et concepteur sur ce projet, mais j'ai bien sûr pu compter sur l'aide et le soutien de mon Tech Lead.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2 – OBJECTIFS</h2>
        <p>
          Ce projet chez Valeco, pour moi, c'était bien plus qu'une simple mission d'alternance. Bien sûr, il y avait des objectifs techniques clairs à atteindre pour l'entreprise, c'était la base. Mais au-delà de ça, je le voyais vraiment comme une occasion de grandir, d'apprendre sur le tas, autant sur le plan pro que perso.
        </p>
        <h3 className={styles.subSectionTitle}>2.1 – LES OBJECTIFS TECHNIQUES</h3>
        <p>
          Alors, côté technique, on avait quand même du pain sur la planche avec cette histoire de "BDD Turbine". L'idée de fond, c'était vraiment de les aider à moderniser leur façon de gérer les données des éoliennes.
        </p>
        <ul className={styles.list}>
          <li>Le plus gros morceau du travail, soyons honnêtes, c'était de construire une application web qui puisse enfin envoyer leur vieux fichier Excel à la retraite. Ça peut sembler basique dit comme ça, mais ça impliquait pas mal de choses : il fallait non seulement tout remettre au propre au même endroit, s'assurer que les données soient fiables dans le temps, mais aussi – et c'était important pour eux – concevoir l'outil pour qu'il ne soit pas figé, qu'il puisse évoluer avec leurs besoins futurs. Une base solide, quoi.</li>
          <li>Ensuite, il fallait que l'application soit vraiment utile au quotidien pour les équipes. Donc, oui, on a mis en place la gestion classique des données (le CRUD), mais on a aussi réfléchi à intégrer une logique un peu plus maline pour automatiser certaines tâches, comme la création des "couples de turbines". Le but, c'était qu'ils se sentent à l'aise avec l'outil, que ce soit intuitif pour trouver et modifier leurs infos.</li>
          <li>Il y a eu aussi des défis plus spécifiques. Par exemple, le tableau de bord principal, le fameux "datagrid". Ça demandait pas mal de réflexion parce qu'il devait afficher beaucoup d'informations techniques (sur les modes électriques, acoustiques...) tout en restant super réactif. Trouver la bonne approche technique, c'était un challenge intéressant pour moi.</li>
          <li>Et puis, pour que cet outil ne reste pas isolé, on a développé une API externe sécurisée. Ça ouvre la porte pour que d'autres applications de Valeco puissent venir discuter avec notre base de données, mais de façon bien contrôlée, évidemment. Forcément, tout ça devait être rapide à l'usage, même avec beaucoup de données, et on a mis un point d'honneur à soigner la sécurité, surtout sur cette API qui est, par nature, un peu plus exposée.</li>
        </ul>
        <h3 className={styles.subSectionTitle}>2.2 – MES OBJECTIFS PERSONNELS ET HUMAINS</h3>
        <p>
          Mais comme je le disais, ce projet, ce n'était pas juste une question de lignes de code. C'était aussi une étape vraiment importante pour moi :
        </p>
         <ul className={styles.list}>
          <li>D'abord, je voulais vraiment monter en compétence sur les technologies qu'ils utilisent chez Valeco (Next.js, React...). C'était l'occasion rêvée de plonger dedans sérieusement. Et puis, ça m'a passionné de mieux comprendre comment on conçoit une base de données qui tient la route et comment on construit une API de A à Z. J'ai trouvé ça particulièrement formateur.</li>
          <li>Ensuite, c'était une super opportunité d'apprendre à gérer un projet "pour de vrai", avec tout ce que ça implique : aller discuter avec les futurs utilisateurs pour être sûr qu'on parte dans la bonne direction, faire des choix techniques et les défendre, animer des réunions pour tenir tout le monde au courant... Ça m'a aussi beaucoup appris sur l'importance de savoir communiquer clairement, même sur des sujets techniques.</li>
          <li>Et enfin, comme j'étais le développeur principal sur le coup, c'était important pour moi de montrer que je pouvais être autonome, prendre des initiatives. Au fond, mon but, c'était de me sentir vraiment à ma place dans l'environnement technique de Valeco, pour être prêt et serein pour la suite de mon alternance.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3 – CONTEXTE HUMAIN : AVEC QUI JE TRAVAILLAIS</h2>
        <p>
          Sur ce projet, même si mon travail était destiné au service du Bureau d'Études (le BE), mon "chef" technique, c'était le Tech Lead du service informatique (IT). C'est lui qui me supervisait dans le cadre de mon alternance. Ce qui est important à comprendre, c'est qu'on m'a vraiment confié toute la responsabilité du projet BDD Turbine, de la conception à la réalisation. J'étais donc le seul développeur à travailler dessus, ce qui était à la fois une super opportunité et une sacrée responsabilité !
        </p>
        <p>
          Du coup, mes interlocuteurs principaux au quotidien, c'étaient principalement deux groupes :
        </p>
        <ul className={styles.list}>
          <li>Le "client interne" : En gros, c'étaient mes futurs utilisateurs, les collègues du Bureau d'Études. Leur mission, c'est d'analyser toutes les données qui remontent des turbines. J'avais un contact privilégié là-bas, une sorte de référent principal, mais j'ai fait en sorte de discuter régulièrement avec plusieurs personnes du service. C'était essentieI pour moi de bien comprendre les besoins de chacun, leurs différentes manières de voir les choses et d'utiliser les données.</li>
          <li>Mon Tech Lead : Son rôle a été absolument clé pour moi. Comme j'arrivais chez Valeco et que je ne connaissais pas leur environnement technique spécifique, il a été un peu mon tuteur pour m'accompagner dans cet apprentissage. C'était aussi lui qui venait à la rescousse quand j'étais coincé sur un point technique un peu trop ardu, qui validait l'avancement du projet pour s'assurer qu'on allait dans la bonne direction, et qui, parfois, me recadrait gentiment si je m'éloignais un peu des objectifs initiaux. Son soutien a été vraiment précieux.</li>
        </ul>
        <p>
          Pour que tout ce monde travaille bien ensemble, voilà comment on organisait nos interactions :
        </p>
         <ul className={styles.list}>
          <li>Avec le Bureau d'Études (le client), on avait des réunions assez régulières, environ toutes les une à deux semaines. C'étaient des moments importants pour que je comprenne bien leurs attentes dans le détail, pour que je leur fasse des démonstrations de ce qui avait été développé, et pour qu'ils puissent valider ou demander des modifications. C'était vraiment un échange.</li>
          <li>En parallèle, je participais aussi aux "daily meetings" ( les réunions quotidiennes rapides) de l'équipe IT. Là, c'était plus pour que je partage mon avancement global avec les autres développeurs, même si le projet BDD Turbine lui-même n'était pas géré en mode Agile pur et dur.</li>
          <li>Pour la communication de tous les jours et Ia documentation, on utilisait principalement Microsoft Teams pour les discussions rapides et Notion. Notion, c'était notre "cerveau " centraI où on mettait toute la doc technique, les guides pour les utilisateurs, et même le détail des routes de l'API. Les bons vieux emails servaient, mais plus rarement.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4 – L'ENVIRONNEMENT TECHNIQUE DU PROJET</h2>
        <p>
          Côté technique, pour faire naître cette BDD Turbine, il a donc fallu que je me mette à jour sur l'ensemble des outils utilisés chez Valeco. C'était une stack technologique assez récente, ce qui était plutôt stimulant comme défi, je dois dire.
        </p>
        <p>
          Pour l'interface utilisateur, j'ai principalement bossé avec React et Next.js. Le tout en TypeScript – et franchement, ça aide bien à éviter certaines erreurs bêtes et à mieux structurer le code.
        </p>
        <p>
          La base de données était en PostgreSQL. Pour discuter avec elle de manière fluide, j'ai utilisé l'ORM Prisma ; c'est un outil que j'ai trouvé vraiment efficace pour simplifier cette partie-là.
        </p>
        <p>
          Un chapitre important, ça a été la migration des données au démarrage. Il a fallu que je me penche sérieusement sur leur ancien fichier Excel pour en comprendre les méandres, puis que je développe des scripts Python capables d'extraire tout ça et de l'intégrer proprement dans la nouvelle base SQL. Ça demandait de la méthode, c'est sûr, et pas mal de patience, mais c'était une étape vraiment indispensable pour repartir sur des bases saines.
        </p>
        <p>
          L'application elle-même tourne sur les serveurs internes de Valeco. Pour l'aspect visuel, je me suis bien servi de la bibliothèque Material UI pour obtenir un rendu professionnel sans y passer trop de temps. Et bien sûr, tout le code était versionné avec Git, sur Azure DevOps. Même seul sur le projet, c'est une bonne habitude à prendre pour travailler sérieusement.
        </p>
      </section>
       <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5 – ENJEUX ET RISQUES DU PROJET</h2>
        <h3 className={styles.subSectionTitle}>5.1 – Les Enjeux : Pourquoi c'était important pour Valeco ?</h3>
         <p>
          Valeco avait plusieurs bonnes raisons de vouloir cette application :
        </p>
        <ul className={styles.list}>
          <li>L'objectif numéro un, c'était vraiment d'en finir avec leur fichier Excel historique pour gérer les données critiques des turbines. L'idée, c'était d'avoir enfin un système fiable, bien structuré, et surtout capable d'évoluer sans que ça devienne un casse-tête plus tard.</li>
          <li>Directement lié à ça, il s'agissait de rendre le travail du Bureau d'Études plus fluide. Leur permettre d'accéder plus facilement à l'information, de la gérer avec moins de risques d'erreurs... Bref, leur fournir un outil pour gagner en efficacité et, on l'espère, en sérénité.</li>
          <li>Et puis, c'était aussi préparer l'avenir. Cette application devait poser une fondation technique solide sur laquelle ils pourraient s'appuyer plus tard pour d'autres fonctionnalités ou pour automatiser certains processus.</li>
        </ul>
        <h3 className={styles.subSectionTitle}>5.2 – Les Risques : Les points sensibles qu'on avait en tête</h3>
        <p>
          Tout projet a ses défis, et on avait identifié deux points principaux qui demandaient une certaine vigilance :
        </p>
        <ul className={styles.list}>
          <li>La migration des données : Ça, on savait que ce serait délicat. Transformer les données d'un vieil Excel, avec son vécu, pour les faire coller parfaitement à une nouvelle base de données bien propre, ce n'est jamais évident. Le risque principal, c'était de perdre de l'info ou de mal l'interpréter en cours de route, surtout si les données de départ manquaient un peu de rigueur. Ça demandait une approche très méthodique, et pas mal de contrôles.</li>
          <li>Ma propre courbe d'apprentissage : L'autre point me concernait plus personnellement. Je découvrais une partie de cet environnement technique en arrivant. Apprendre et développer en même temps, ça met quand même une certaine pression : on veut bien faire, on se demande si le code sera de qualité, s'il sera facile à maintenir... Heureusement, j'ai eu la chance que Valeco comprenne ça et me donne le temps nécessaire. Ça m'a permis de souffler un peu, de bien assimiler les choses et de consacrer du temps à la fin pour une bonne phase de refactoring. C'était essentiel pour moi de livrer une application solide et dont je pouvais être fier.</li>
        </ul>
      </section>

      <section className={styles.section}>
         <h2 className={styles.sectionTitle}>6 – LES ÉTAPES DU PROJET : COMMENT ÇA S'EST PASSÉ</h2>
         <p>
          Alors, comment s'еst déroulé ce projet BDD Turbine, concrètement ? On peut découper ça en plusieurs grandes phases, depuis Ie moment οù on a commencé à en parler jusqu'à ce que les utilisateurs aient l'outil entre les mains.
        </p>
        <h3 className={styles.subSectionTitle}>6.1 – Le Démarrage : Comprendre et Cadrer</h3>
        <p>
          Tout a commеncé par une phasе pour biеn comprendre οù on mettait les pieds. Avec mon Tech Lead, on a d'abord regardé de près la stack technique qu'οn allait utiliser . En parallèle, on a eu les premières réuniοns avec les pеrsonnes clés du Bureau d'Études et mon Tech Lead pour bien cerner ce qu'ils attendaiеnt. J'ai aussi passé un temps non négligeable à décortiquer leur fameux fichier Excel pour comprendre comment les données étaient organisées et où ça coinçait. Tout ça nous a permis de définir assez clairement le périmètre : ce que la nouvelle application devait faire, et aussi ce qu'elle ne ferait pas.
        </p>
         <h3 className={styles.subSectionTitle}>6.2 – La Conception : Mettre les idées sur papier (et à l'écran)</h3>
        <p>
          Une fois le cadre posé, je me suis attaqué à la conception. Ça voulait dire plusieurs choses : créer des maquettes de l'interface pour qu'on puisse visualiser à quoi l'outil allait ressembler, préparer le plan détaillé de la future base de données PostgreSQL (le MLD, Modèle Logique de Données – un schéma, en gros), et rédiger des spécifications fonctionnelles pour décrire noir sur blanc comment l'application devait réagir. C'est aussi à ce moment-là qu'on a bien précisé l'objectif final à atteindre, pour avoir une direction claire pendant le développement.
        </p>
         <h3 className={styles.subSectionTitle}>6.3 – Le Développement : Coder, coder, coder !</h3>
         <p>
          Ensuite, la phase de développement à proprement parler. Honnêtement, ça s'est déroulé de manière assez fluide dans l'ensemble. J'ai pu développer les différentes fonctionnalités en respectant plus ou moins le planning qu'on s'était fixé, et il y a eu très peu de bugs bloquants signalés en cours de route. Les principaux défis techniques, je l'ai déjà dit, c'était surtout la mise en place de ce grand tableau de données central (le datagrid), qui demandait d'afficher beaucoup d'infos de manière performante, et la préparation des scripts Python pour la migration des données.
        </p>
         <h3 className={styles.subSectionTitle}>6.4 – La Migration des Données : Le grand déménagement</h3>
         <p>
          Une fois l'application debout et fonctionnelle, il était temps de s'attaquer au gros morceau : la migration des données. Grâce aux scripts Python que j'avais préparés, on a donc transféré les infοrmations de l'Excel vers la nouvelle base PostgreSQL . Ça ne s'est pas fait en un seul coup, biеn sûr. Il a fallu procéder par étapes, identifier les données à nettoyer dans le fichier source, relancer les scripts... Entre chaque étape, on faisait des vérifications poussées pοur s'assurer que tout était transféré correctement et sans perte.
        </p>
         <h3 className={styles.subSectionTitle}>6.5 – Les Tests et la Validation : Le verdict des utilisateurs</h3>
         <p>
          Avant le grand lancement, l'application a passé une série de tests assez rigoureux. D'abοrd, une phase de tests techniques complets réalisés par l'équipe IT interne. Quand ils nous ont donné leur feu vert, on a mis en place un environnement de "pré-production". L'idée, c'était de permettre aux utilisateurs finaux, ceux du Bureau d'Études, de tester l'application dans des conditions très proches du réel, mais sans risque pour leurs vraies données. Leur validation finale était indispensable avant de pouvoir appuyer sur le bouton "Go".
        </p>
         <h3 className={styles.subSectionTitle}>6.6 – La Mise en Prοduction : Ça y est, c'est parti!</h3>
        <p>
          La dernière étape,  Ia mise en production sur les serveurs de Valeco, a été gérée par mon Tech Lead. Tοut s'est bien passé, sans incident majeur. Et le plus gratifiant, c'est que les premiers retours des utilisateurs du Bureau d'Études ont été très pοsitifs . Ils avaient l'air vraiment satisfaits de ce nouvel outil. Il y a juste eu quelques petites retouches mineures à faire juste après le lancement, ce qui est plutôt normal.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7 – FIN DU PROJET ET PERSPECTIVES : ET MAINTENANT ?</h2>
        <p>
          Aujourd'hui (enfin, au moment où j'écris ça !), l'application BDD Turbine est bien installée et fonctionne au quotidien. C'est devenu un outil important pour le Bureau d'Études pour gérer les données des turbines. On peut dire que la mission de remplacer l'ancien système Excel est accomplie.
        </p>
        <p>
          Même si je ne suis plus directement responsable de son suivi au jour le jour, les nouvelles que j'en ai sont bonnes : l'application est toujours utilisée et appréciée. Vu qu'elle est devenue centrale et que la base technique est saine, tout laisse à penser qu'elle a encore de beaux jours devant elle chez Valeco. Et surtout, elle ouvre la porte à d'éventuelles améliorations ou à de nouvelles fonctionnalités si de nouveaux besoins apparaissent à l'avenir.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8 – CE QUE J'EN RETIENS : MON BILAN PERSONNEL</h2>
        <p>
          Franchement, ce projet BDD Turbine, ça restera gravé cοmme une super première expérience pour moi en entreprise, quelque chose de vraiment marquant. Au-delà de l'aspect purement technique, ce qui m'a le plus apporté, je crois, c'est de gagner énormément en autonomie. J'ai aussi dû apprendre à m'adapter très vite à de nouvelles technologies, et ça, je sens que c'est crucial dans notre métier de développeur. Le fait d'avoir mené ce projet à bien, en étant quasiment seul dessus du début à la fin, j'avoue que ça me rend assez fier persοnnellement.
        </p>
        <p>
          Sur le plan des compétences pures, c'était incroyablement riche. J'ai pu non seulement maîtriser concrètement les outils techniques utilisés chez Valeco, mais aussi comprendre comment fonctionne la gestion des versions dans un cadre pro (avec Azure DevOps). Et surtout, j'ai appris à gérer toute la relation avec le "client" interne : depuis les toutes premières discussions pour bien comprendre leurs besoins, jusqu'à naviguer entre leurs attentes et obtenir leur validation finale. Le fait d'avoir eu à penser et réaliser toute la cοnception du projet a aussi été extrêmement formateur.
        </p>
        <p>
          Enfin, et ce n'est pas le moins important, cette expérience a eu un impact énorme sur la confiance que j'ai en mes capacités. Ça m'a vraiment confirmé que j'étais dans le bon domaine, que ce métier de développeur, c'est quelque chose qui me plaît profondément. C'est une étape très significative pour moi, surtout que je savais que l'entreprise se basait aussi sur ce projet pour évaluer ma capacité à apprendre et à m'intégrer. Du coup, n'avoir eu que des retours positifs, que ce soit de la part de mon Tech Lead ou des utilisateurs finaux, ça a été la meilleure des récompenses. C'est vraiment gratifiant et ça renforce ce sentiment d'avoir accompli quelque chose de bien
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
