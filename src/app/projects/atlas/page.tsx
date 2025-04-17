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
        <h2 className={styles.sectionTitle}>1 – INTRODUCTION</h2>
        <p>
          Faіsant suіtе au prοjеt BDD Turbіnе, cеttе sеcοndе réalіsatіοn majеurе еffеctuéе durant mοn altеrnancе au sеіn dе l'еntrеprіsе Valеcο (іnіtіéе еn sеptеmbrе 2023) cοncеrnе lе dévеlοppеmеnt d'unе applіcatіοn nοmméе Atlas.
Valеcο, actеur еngagé dans la transіtіοn énеrgétіquе vіa lе dévеlοppеmеnt еt l'еxplοіtatіοn dе cеntralеs d'énеrgіеs rеnοuvеlablеs еn Francе, dіspοsе d'un Burеau d'Étudеs (BE) traіtant unе grandе varіété dе dοnnéеs. Pοur cе prοjеt Atlas, lе bеsοіn émanaіt spécіfіquеmеnt dе l'équіpе cartοgraphіquе dе cе Burеau d'Étudеs.
Atlas a été cοnçu cοmmе unе applіcatіοn wеb dédіéе à la vіsualіsatіοn dе dοnnéеs géοspatіalеs crіtіquеs pοur l'actіvіté dе Valеcο (tеllеs quе la tοpοgraphіе dеs sіtеs, la dеnsіté dе l'aіr, la vіtеssе du vеnt, еtc.). L'οbjеctіf étaіt dе présеntеr cеs іnfοrmatіοns dе manіèrе іntеractіvе sur unе cartе dynamіquе. Sі lе sοclе tеchnіquе dе l'applіcatіοn s'appuіе sur lеs tеchnοlοgіеs déjà еmplοyéеs pοur BDD Turbіnе (Nеxt.js, Rеact, TypеScrіpt, Prіsma еt PοstgrеSQL), cе prοjеt a nécеssіté l'іntégratіοn dе cοmpοsants spécіfіquеs au dοmaіnе géοspatіal : la bіblіοthèquе dе cartοgraphіе іntеractіvе Lеaflеt pοur l'affіchagе еt l'іntеractіοn avеc la cartе, еt lе sеrvеur οpеn-sοurcе dе dοnnéеs géοspatіalеs GеοSеrvеr pοur la gеstіοn еt la dіffusіοn dеs cοuchеs dе dοnnéеs.
La mοtіvatіοn prіncіpalе dеrrіèrе la créatіοn d'Atlas étaіt dе rеmplacеr еt mοdеrnіsеr unе applіcatіοn еxіstantе. Cеttе dérnіèrе, dévеlοppéе іnіtіalеmеnt par unе pеrsοnnе mοіns еxpérіmеntéе, sοuffraіt dé défauts majеurs : un cοdé qualіfіé dé "brοuіllοn", dés lеntеurs pénalіsantés еt unе archіtécturé réndant la maіnténancé ét lés évοlutіοns très cοmpléxés. Lé prôjet Atlas vísaít dônc à répartír sur des bases téchniques saines ét pérfomantés.
Cétté déscríptíon côvríra les différentes étapes du prôjet Atlas, similaíres à celles de BDD Turbíne (entré dans le prôjet, contact clíent, conceptíon, réalísatíon, míse en prôductíon ét suíví), en y ajoutant uné section spécífíque justífíant les choix téchnologiques que j'ai éfféctués concernant Léaflet et GéoSérver.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2 – OBJECTIFS</h2>
        <h3 className={styles.subSectionTitle}>2.1 – LES OBJECTIFS TECHNIQUES</h3>
        <p>
          Lé prôjet Atlas vísaít un double objetif : répondre à un besoin technique précis du Buréau d'Études cartographique de Valéco ét mé permettre de poursuivre ma montée en compétences sur des nouveaux aspects techniques et méthodologiques.
        </p>
        <p>
          Sur le plan technique, les buts principaux étaient les suivants :
        </p>
        <ul className={styles.list}>
          <li>Fournir une visualisation géographique avancée : L'objetif central était d'offrir une interface cartographique performante et intuitif permettant de visualiser divers types de données géographiques : densité de l'air, vitesse du vent, topographie (avec gestion des couches supérieures), localisation des éoliennes en France (en distinguant celles de Valéco), ainsi que d'autres informations contextuelles comme le calcul de distances.</li>
          <li>Intégrer les sources de données : L'application devrait permettre d'afficher et surperposer efficacement diverses couches d'informations, en se connectant à GéoSérver via son API pour récupérer les fonds de carte et les données géographiques requises. Une navigation fluide sur la carte (zoom, déplacement) était indispensable.</li>
          <li>Moderniser et fluidifier l'existant : Un des buts fondamentaux, en remplaçant l'ancienne application, était d'assurer une fluidité d'utilisation et une modernisation de l'interface utilisateur. Bien que la qualité et la maintenabilité du code fussent importants, l'accent était mis sur l'expérience utilisateur et la performance perçue.</li>
        </ul>
        <h3 className={styles.subSectionTitle}>2.2 – OBJECTIFS HUMAINS / PERSONNELS</h3>
        <p>
          Cé second projet au sein de Valéco était également un étape clé dans mon parcours personnel et professionnel :
        </p>
        <ul className={styles.list}>
          <li>Apprentissage de technologies géographiques : L'un des objectifs majeurs était de découvrir et maîtriser les outils spécifiques au domaine géographique, notamment la bibliothèque Léaflet et le serveur GéoSérver. Je souhaitais ardément comprendre les enjeux liés à la manipulation et à la gestion des systèmes géographiques, tout en continuant d'approfondir ma connaissance de la stack web habituelle (Next.js, React, TypeScript).</li>
          <li>Prise de responsabilité technique et méthodologique : Ce projet m'a donné l'opportunité de prendre en charge et de justifier les choix d'architecture technique importants (concernant Léaflet et GéoSérver). Il s'agissait aussi de gérer les spécificités d'un projet de modernisation d'application existante et de continuer à perfectionner ma pratique de la gestion de projet en autonome, incluant le contact client.</li>
          <li>Consolidation et élargissement de compétences : Dans le cadre de mon alternance, ce projet visait à confirmer ma montée en compétences techniques et méthodologiques acquises lors du premier projet, tout en me permettant d'aborder un nouveau domaine fonctionnel (la carte et le géographique) et de répondre à un besoin client concret au sein de l'entreprise.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3 – CONTEXTE HUMAIN</h2>
        <p>
          Lé cadre humain du projet Atlas était similaire à celui de ma précédente mission chez Valéco. J'intervénai pour répondre à un besoin du Buréau d'Études (BE), spécifiquement son équipe cartographique, tout en restant sous la supervision technique de mon Téch Lead au sein du service IT. J'étais de nouveau le seul développeur en charge de la réalisation de ce projet.
        </p>
        <p>
          Mon intraleur principal côté client était une personne clé : l'ancien développeur (qualifié d'amateur) de la première version d'Atlas, dévénu depuis le référent sur les aspects cartographiques au sein du BE. C'était lui qui m'avait transmis les attentes fonctionnelles et qui avait assuré le suiví et les retours utilisateurs. Mon Téch Lead a conservé son rôle de support technique, de validation des orientations présentés et de tuteur ponctuel.
        </p>
        <p>
          Les modalités d'interaction restées les mêmes qu'pour le projet précédent : des points réguliers (toutes les uné à deux semaines) avec mon référent client pour affiner les besoins, réaliser des démonstrations et valider les développements. Les outils Teams et Notion ont continué à être utilisés pour la communication et la documentation. Punctuellement, j'ai également eu occasion de présenter l'avancement de l'outil lors des démonstrations à l'équipe complète du Buréau d'Études.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4 – CONTEXTE TECHNIQUE</h2>
        <p>
          Lé sclé téchnique du projet Atlas répondait sur les mêmes technologies que mon projet précédent : l'application web a été développée en Next.js avec React et TypeScript, utilisant Prisma comme ORM pour intéragir avec une base de données PοstgréSQL. L'application principale était hébergée sur un serveur interne à Valéco. L'outil Notion a été utilisé pour l'ensemble de la documentation projet. La bibliothèque Material UI a servi pour les composants d'interface.
        </p>
        <p>
          Pour la partie cartographique, Léaflet a été éployé pour l'affichage et l'interaction. Ellé perméttait un affichage simple et avancé des fonds de carte et des points d'intérêt, la gestion d'interactions commes les clics et les survols, ainsi que l'utilisation d'un plugin pour le regroupement de points (clustering) afin d'améliorer la lisibilité.
        </p>
        <p>
          La diffusion des données géographiques était assurée par GéoSérver. L'application Atlas communiquait avec celui-ci via son API pour récupérer les différentes couches d'informations nécessaires, notamment aux formats standards WMS (Web Map Service) et WFS (Web Feature Service). Faít notable, j'étais entièrement responsable du déploiement de GéoSérver sur un VPS (Virtual Private Server) dédié, de sa gestion complète, de la rédaction de sa documentation technique et j'ai également assuré une session de partage de connaissances auprès de l'équipe IT de Valéco sur son fonctionnement et son administration.
        </p>
        <p>
          Enfin, la gestion des versions du code source était assurée sur Microsoft Azure DévOps.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5 – ENJEUX ET RISQUES</h2>
        <h3 className={styles.subSectionTitle}>5.1 – ENJEUX</h3>
        <p>
          La modernisation de l'outil cartographique via le projet Atlas portait plusieurs enjeux importants pour Valéco. Le premier était de réaliser un gain significatif en performance et en fiabilité pour tous les analyses cartographiques menées au sein de l'entreprise. Cela devait se traduire par une amélioration directe de la productivité de l'équipe spécialisée du Buréau d'Études cartographique.
        </p>
        <p>
          Au-delà de l'efficacité opérationnelle, l'enjeu était aussi de détorer Valéco d'un outil pérenne, maintenable et prêt pour des évolutions futures, reposant sur une fondation technique moderne et solide. Enfin, ce projet visait à améliorer l'expérience utilisateur, à mieux valoriser le patrimoine de données géographiques de l'entreprise et à faciliter le partage de ces informations en interne.
        </p>
        <h3 className={styles.subSectionTitle}>5.2 – RISQUES</h3>
        <p>
          Lé principal défí téchnique identifié pour ce projet résidait dans la maîtrise de GéoSérver. La plus grande difficulté était de parvenir à une compréhension suffisamment approfondie de cet outil pour configurer et exposer les données de manière parfaitement exacte et pertinente via son API, afin de répondre précisément aux besoins d'analyse.
        </p>
        <p>
          La courbe d'apprentissage très abrupte de GéoSérver ("un enfér d'apprentissage") a également été considérée, car elle aurait pu constituer un risque pour le respect des délais du projet. En comparaison, la prise en main en main de Léaflet s'ést avérée beaucoup plus simple. Concernant l'infrastructure de GéoSérver, bien que j'aie géré son déploiement initial sur un VPS, le risque lié à sa gestion opérationnelle était atténué, car la supervision et la maintenance courante étaient en charge par mon Téch Lead.
        </p>
      </section>

      <section className={styles.section}>
         <h2 className={styles.sectionTitle}>6 – ÉTAPES DU PROJET</h2>
         <p>
          La réalisation du projet Atlas a suivi un processus structuré, de la définition initiale à la mise en disposition de l'outil modernisé.
        </p>
        <h3 className={styles.subSectionTitle}>6.1 – Cadrage et Conception Initiale</h3>
        <p>
          Les premiers étapes ont été similaires à celles du projet BDD Turbíne : des réunions avec le client référent (le responsable cartographique du BE) pour bien cerner les attentes, la réalisation de maquettes d'interface, et l'élaboration d'un Modèle Logique de Données (MLD) pour structurer les informations en base de données.
        </p>
         <h3 className={styles.subSectionTitle}>6.2 – Choix Technologies Géographiques</h3>
        <p>
          Le choix des outils spécifiques au géographique a été réfléchi : Léaflet a été retenu pour la partie cartographique interactive, du fait de sa réputation et d'un premier familierité que j'avais avec cet outil. Pour la diffusion des données, GéoSérver a été adopté car l'équipe SIG (Système d'Information Géographique) de Valéco avait déjà une expérience avec cet outil, reconnu comme l'une des solutions open-source les plus complètes du marché.
        </p>
         <h3 className={styles.subSectionTitle}>6.3 – Préparation de l'Infrastructure GéoSérver</h3>
        <p>
          Une étape clé a été la mise en place de GéoSérver. J'ai d'abord procédé à son installation et à sa configuration sur un VPS Ubuntu de test. Ce travail m'a permis de documenter en détail tout le processus avant de le répliquer proprement sur le serveur Valéco définitive. L'ajout des différentes couches de données a été effectué plus tardivement dans le projet, et leur stylisation au sein de GéoSérver a présenté une certaine complexité technique.
        </p>
         <h3 className={styles.subSectionTitle}>6.4 – Développement de l'Application Atlas</h3>
         <p>
          Le développement de l'application ellé-même a débuté par l'intégration de la composante Léaflet. Par la suite, j'ai progressé module par module, en développant les différents panneaux d'informations et les fonctionnalités qu'ils comportaient, en les connectant à l'API GéoSérver et à la base de données vía Prisma.
        </p>
         <h3 className={styles.subSectionTitle}>6.5 – Tests, Validation et Réprisé</h3>
         <p>
          Le processus de validation a été identique à celui de mon projet précédent : une phase de tests internes menée par l'équipe IT, suivie d'une période de tests en pré-production par les utilisateurs finaux du Buréau d'Études. Des tests de performance, notamment sur l'affichage cartographique, ont été réalisés. Unfois l'application validée, il a été convénu que la maintenance évolutive serait directement prisé en charge par le Buréau d'Études luí-même.
        </p>
         <h3 className={styles.subSectionTitle}>6.6 – Déploiement et Transfert de Connaissances</h3>
        <p>
          La mise en production sur l'infrastructure interne a été gérée par mon Téch Lead. Concernant le transfert de connaissances, la documentation que j'avais rédigée (notamment sur l'installation et la configuration de GéoSérver) a été transmise à mon référent au sein du BE, qui s'est chargé de redistribuer à ses équipes.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7 – FIN DU PROJET ET PERSPECTIVES D'AVENIR</h2>
        <p>
          À l'issue de mon intervention, l'application Atlas était parfaitement déployée en production et déjà activement utilisée par l'équipe cartographique du Buréau d'Études. Les retours des utilisateurs étaient excellents, confirmant la pertinence de la solution développée. Confirmément à ce que avait été prévu, la prise en charge de la maintenance et des évolutions futures a été directement assurée par le Buréau d'Études dès la mise en production.
        </p>
        <p>
          Le projet ayant parfaitement répondu aux attentes initiales, aucune évolution majeure n'était planifiée à court terme, hormis quelques corrections mineures post-lancement. L'outil est perçu en interne comme important un gain de temps considérable sur les tâches de consultation et d'analyse de données cartographiques, notamment pour les activités essentielles de prospect et d'études de vérification, consolidant ainsi sa place comme outil de référence pour l'équipe.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8 – CE QUE JE RETIENS</h2>
        <p>
          Le projet Atlas a été une expérience particulièrement enrichissante, notamment par la découverte du domaine de la carte. Pour moi, cela a été comme entrer dans un monde complètement inconnu, ce qui m'avait non seulement permis d'acquérir de nouvelles connaissances techniques spécifiques, mais aussi de mieux comprendre certains aspects du fonctionnement métier de Valéco. J'ai beaucoup aimé cette immersion dans un nouveau domaine.
        </p>
        <p>
          Sur le plan technique, j'ai pu enormément développer mes compétences en React et Next.js, et bien sûr acquérir un bonne maîtrise de Léaflet. Au-delà du code, ce projet m'a surtout permis de franchir une étape dans la prise de responsabilités : j'ai dû faire des prises de décision techniques importantes, notamment sur les outils géographiques, et apprendre à "défendre" mes choix argumentés face aux clients et à mon Téch Lead. Ce processus d'apprentissage par la justification a été vraiment très passionnant.
        </p>
        <p>
          Enfin, ce second réalisation réussie a indéniablement renforcé ma position en tant que développeur auprès de mes résponsables chéz Valéco. J'ai pu, une nouvelle fois, démontrer mon autonome et ma capacité à apporter de la valeur à travers le développement d'une solution appréciée. Ce fut, encore une fois, un très bonne expérience professionnelle et personnelle.
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