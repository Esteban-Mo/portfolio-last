'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './page.module.css';
import Link from 'next/link';

// Importer les icônes MUI
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CodeIcon from '@mui/icons-material/Code'; // Pour les expériences de dev
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // Pour les rôles plus orientés gestion/stock

// --- Nouvelles couleurs plus vives ---
const workColor = '#06b6d4'; // Cyan-500 (plus vif)
const schoolColor = '#14b8a6'; // Teal-500 (turquoise)
const volunteerColor = '#f59e0b'; // Amber-500 (doré)
const defaultColor = '#94a3b8'; // Slate-400 (gris un peu plus clair)
// --- Fin des nouvelles couleurs ---

// Définition de l'interface pour un événement de la timeline
interface TimelineEvent {
  date: string;
  icon: React.ReactElement;
  iconStyle: React.CSSProperties;
  title: string;
  subtitle: string;
  location: string;
  description: string | React.ReactElement;
  skills?: string[]; // Marquer comme optionnel car pas toujours présent
  isEducation?: boolean;
  isVolunteer?: boolean;
}

// Structure des données du parcours
const timelineData: TimelineEvent[] = [
  {
    date: "2010 - 2014",
    icon: <AccountBalanceIcon />,
    iconStyle: { background: defaultColor, color: '#fff' },
    title: "Commercial de détail",
    subtitle: "GiFi (CDI)",
    location: "L'Arbresle, Auvergne-Rhône-Alpes, France",
    description: "Gestion des stocks, vente, gestion du stockage et prévisions.",
  },
  {
    date: "2015 (< 1 an)",
    icon: <WorkIcon />,
    iconStyle: { background: defaultColor, color: '#fff' },
    title: "Agent de sécurité privé",
    subtitle: "ONET Sécurité (CDD)",
    location: "Lyon, Auvergne-Rhône-Alpes, France",
    description: "Missions de sécurité privée."
  },
   {
    date: "2015 - 2018",
    icon: <WorkIcon />,
    iconStyle: { background: defaultColor, color: '#fff' },
    title: "Intérimaire",
    subtitle: "Manpower",
    location: "L'Arbresle, Auvergne-Rhône-Alpes, France",
    description: "Diverses missions en intérim."
  },
  {
    date: "2018 - 2019",
    icon: <AccountBalanceIcon />,
    iconStyle: { background: defaultColor, color: '#fff' },
    title: "Responsable stocks",
    subtitle: "Strand cosmétic (Intérimaire)",
    location: "Lentilly, Auvergne-Rhône-Alpes, France",
    description: "Gestion des stocks et application de la méthode CPFR (Gestion collaborative de la planification, de la prévision et des réapprovisionnements).",
  },
  {
    date: "Sept. 2020 - Aujourd'hui",
    icon: <SchoolIcon />,
    iconStyle: { background: schoolColor, color: '#fff' },
    title: "Étudiant Ingénieur (Logiciels)",
    subtitle: "Groupe AEN",
    location: "Nîmes, Occitanie, France",
    description: "Formation d'ingénieur spécialisée dans la conception et le développement de logiciels.",
    isEducation: true
  },
  {
    date: "Mars 2021 - Juil. 2021",
    icon: <CodeIcon />,
    iconStyle: { background: workColor, color: '#fff' },
    title: "Développeur Full Stack (Indépendant)",
    subtitle: "Axians",
    location: "Nîmes, Occitanie, France",
    description: (
      <>
        Mission indépendante axée sur :
        <ul>
          <li>Mise en place d'un cahier des charges</li>
          <li>Organisation et gestion du projet sur Github</li>
          <li>Réalisation d'un site web</li>
        </ul>
      </>
    ),
    skills: ['PostgreSQL', 'HTML5', 'PHP', 'CSS'] 
  },
    {
    date: "Sept. 2021 - Mars 2022",
    icon: <CodeIcon />,
    iconStyle: { background: workColor, color: '#fff' },
    title: "Développeur Logiciels (Indépendant)",
    subtitle: "Vaunage Construction",
    location: "Nîmes, Occitanie, France",
    description: (
      <>
        Développement d'un logiciel métier :
        <ul>
          <li>Établissement du cahier des charges</li>
          <li>Gestion de projet sur Github</li>
          <li>Application de la méthode Agile (rôle de Scrum Master)</li>
          <li>Réalisation du logiciel</li>
        </ul>
      </>
    ),
    skills: ['C#', 'WPF', 'MySQL', 'Scrum Master', 'XAML', 'Méthodes agiles']
  },
  {
    date: "Déc. 2021 - Fév. 2022",
    icon: <CodeIcon />,
    iconStyle: { background: workColor, color: '#fff' },
    title: "Développeur Full Stack (Freelance)",
    subtitle: "Domaine George Roumier",
    location: "Nîmes, Occitanie, France (Remote)",
    description: (
      <>
        Réalisation complète d'un site web vitrine sur mesure. Ce projet a été ma première mission en freelance, gérée en autonomie de bout en bout.
        <br /> Voir le projet : <Link href="/projects/domaine-roumier" className={styles.projectLink}>Domaine Roumier</Link>
      </>
    ),
    skills: ['TypeScript', 'Scss', 'Linux', 'MongoDB', 'AngularJS', 'Déploiement', 'Node.js']
  },
   {
    date: "Mars 2022 - Juil. 2022",
    icon: <CodeIcon />,
    iconStyle: { background: workColor, color: '#fff' },
    title: "Développement Web et API (Indépendant)",
    subtitle: "Yelloh Village - Europe Plein Air SAS",
    location: "Aigues-Mortes, Occitanie, France",
    description: (
      <>
        Développement d'un site web et de son API associée :
        <ul>
          <li>Rédaction du cahier des charges</li>
          <li>Organisation du projet sur Github</li>
          <li>Réalisation technique (site web + API)</li>
        </ul>
      </>
    ),
    skills: ['TypeScript', 'Scss', 'MySQL', 'AngularJS', 'Java']
  },
  {
    date: "Mars 2022 - Juil. 2022",
    icon: <VolunteerActivismIcon />,
    iconStyle: { background: volunteerColor, color: '#fff' },
    title: "Action Environnementale (Indépendant)",
    subtitle: "Projet Personnel / Partenariat",
    location: "L'Escala, Catalogne, Espagne",
    description: (
      <>
        Organisation d'une action de nettoyage de plage :
        <ul>
          <li>Établissement du plan de réalisation</li>
          <li>Stratégie de récolte de fonds</li>
          <li>Gestion du budget</li>
          <li>Communication avec les partenaires (Yelloh! Village et Groupe AEN)</li>
        </ul>
      </>
    ),
    skills: ['Collecte de fonds', 'Gestion budgétaire', 'Sensibilisation environnement', 'Gestion de projet', 'Communication stratégique'],
    isVolunteer: true
  },
  {
    date: "Mi-2024 (Freelance)", // Date approximative ajoutée
    icon: <CodeIcon />,
    iconStyle: { background: workColor, color: '#fff' }, // Utilise la nouvelle couleur travail
    title: "Développeur Web Freelance",
    subtitle: "Serveur GTA V Roleplay",
    location: "Remote",
    description: (
      <>
        Création d'un site web complet pour une agence immobilière virtuelle ("Agence Walker") au sein d'un serveur de jeu GTA V RP, incluant catalogue de biens, système de recherche, cartographie interactive, et panel d'administration.
        <br /> Voir le projet : <Link href="/projects/agence-walker" className={styles.projectLink}>Agence Walker</Link>
      </>
    ),
    skills: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Leaflet', 'Material UI']
  },
  {
    date: "Mars 2023 - Aujourd'hui",
    icon: <CodeIcon />,
    iconStyle: { background: workColor, color: '#fff' }, // Utilise la nouvelle couleur travail
    title: "Ingénieur Conception Logiciels (Alternance)",
    subtitle: "Valeco",
    location: "Montpellier, Occitanie, France (Hybride)",
    description: (
      <>
        Contribution au développement et à la modernisation d'applications web internes stratégiques pour la gestion des données (énergies renouvelables, foncier). Travail en autonomie et en équipe Agile.
        <br /> Projets notables :
        <ul>
            <li><Link href="/projects/bdd-turbine" className={styles.projectLink}>BDD Turbine</Link></li>
            <li><Link href="/projects/atlas" className={styles.projectLink}>Atlas</Link></li>
            <li><Link href="/projects/module-foncier" className={styles.projectLink}>Module Foncier (Act)</Link></li>
        </ul>
      </>
    ),
    skills: ['PostgreSQL', 'TypeScript', 'React.js', 'Next.js', 'Prisma']
  },
];

export default function ParcoursPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Mon Parcours Professionnel</h1>
      <VerticalTimeline lineColor={workColor}> 
        {timelineData.slice().reverse().map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={styles.verticalTimelineElement} 
            contentStyle={{ 
                background: 'rgba(51, 65, 85, 0.7)', 
                color: '#e2e8f0', 
                boxShadow: `0 3px 0 ${item.iconStyle.background || defaultColor}` 
             }} 
            contentArrowStyle={{ borderRight: '7px solid rgba(51, 65, 85, 0.7)' }} 
            date={item.date}
            dateClassName={styles.dateText} 
            iconStyle={item.iconStyle}
            icon={item.icon}
          >
            <h3 className={`vertical-timeline-element-title ${styles.elementTitle}`}>{item.title}</h3>
            <h4 className={`vertical-timeline-element-subtitle ${styles.elementSubtitle}`}>{item.subtitle}</h4>
            <p className={styles.elementLocation}>{item.location}</p>
            <div className={styles.elementDescription}>
              {typeof item.description === 'string' ? <p>{item.description}</p> : item.description}
            </div>
            {item.skills && item.skills.length > 0 && (
              <div className={styles.skillsContainer}>
                <strong>Compétences :</strong> {item.skills.join(' · ')}
              </div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
} 