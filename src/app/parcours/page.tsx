'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { skillsData, humanSkillsData } from '@/data/searchData'; // Import skill data

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

// Updated interface with optional logoUrl
interface TimelineEvent {
  date: string;
  icon?: React.ReactElement;
  iconStyle: React.CSSProperties;
  title: string;
  subtitle: string;
  location: string;
  description: string | React.ReactElement;
  skills?: string[];
  isEducation?: boolean;
  isVolunteer?: boolean;
  logoUrl?: string;
}

// Updated data structure with logo URLs and CONSISTENT white background for logos
const timelineData: TimelineEvent[] = [
  {
    date: "2010 - 2014",
    iconStyle: { background: '#fff', color: defaultColor, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    title: "Commercial de détail",
    subtitle: "GiFi",
    location: "L'Arbresle, Auvergne-Rhône-Alpes, France",
    description: "Gestion des stocks, vente, gestion du stockage et prévisions.",
    logoUrl: "/images/gifi.png"
  },
  {
    date: "2015 (< 1 an)",
    iconStyle: { background: '#fff', color: defaultColor, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    title: "Agent de sécurité privé",
    subtitle: "ONET Sécurité",
    location: "Lyon, Auvergne-Rhône-Alpes, France",
    description: "Missions de sécurité privée.",
    logoUrl: "/images/Onet.png"
  },
   {
    date: "2015 - 2018",
    iconStyle: { background: '#fff', color: defaultColor, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    title: "Intérimaire",
    subtitle: "Manpower",
    location: "L'Arbresle, Auvergne-Rhône-Alpes, France",
    description: "Diverses missions en intérim.",
    logoUrl: "/images/manpower.png"
  },
  {
    date: "2018 - 2019",
    iconStyle: { background: '#fff', color: defaultColor, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    title: "Responsable stocks",
    subtitle: "Strand cosmétic",
    location: "Lentilly, Auvergne-Rhône-Alpes, France",
    description: "Gestion des stocks et application de la méthode CPFR (Gestion collaborative de la planification, de la prévision et des réapprovisionnements).",
    logoUrl: "/images/strand.png"
  },
  {
    date: "Sept. 2020 - Aujourd'hui",
    icon: <SchoolIcon />,
    iconStyle: { background: schoolColor, color: '#fff' },
    title: "Étudiant Ingénieur (Logiciels)",
    subtitle: "Groupe AEN",
    location: "Nîmes, Occitanie, France",
    description: (
      <>
        Formation d'ingénieur spécialisée dans la conception et le développement de logiciels au{' '}
        <a href="https://www.esiea.fr/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
          Groupe ESIEA
        </a>.
      </>
    ),
    isEducation: true
  },
  {
    date: "Mars 2021 - Juil. 2021",
    iconStyle: { background: '#fff', color: defaultColor, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
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
    skills: ['PostgreSQL', 'HTML5', 'PHP', 'CSS'],
    logoUrl: "/images/axians.png"
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
    iconStyle: { background: '#fff', color: defaultColor, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    title: "Développeur Full Stack (Freelance)",
    subtitle: "Domaine George Roumier",
    location: "Nîmes, Occitanie, France (Remote)",
    description: (
      <>
        Réalisation complète d'un site web vitrine sur mesure. Ce projet a été ma première mission en freelance, gérée en autonomie de bout en bout.
        <br /> Voir le projet : <Link href="/projects/domaine-roumier" className={styles.projectLink}>Domaine Roumier</Link>
      </>
    ),
    skills: ['TypeScript', 'Scss', 'Linux', 'MongoDB', 'AngularJS', 'Déploiement', 'Node.js'],
    logoUrl: "/images/valeco.png"
  },
   {
    date: "Mars 2022 - Juil. 2022",
    iconStyle: { background: '#fff', color: defaultColor, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
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
    skills: ['TypeScript', 'Scss', 'MySQL', 'AngularJS', 'Java'],
    logoUrl: "/images/yelloh.png"
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
    date: "Mi-2024 (Freelance)",
    icon: <CodeIcon />,
    iconStyle: { background: workColor, color: '#fff' },
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
    iconStyle: { background: '#fff', color: defaultColor, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
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
    skills: ['PostgreSQL', 'TypeScript', 'React.js', 'Next.js', 'Prisma'],
    logoUrl: "/images/valeco.png"
  },
];

// Create a map for skill names to paths (CORRECTED)
const skillPathMap = new Map<string, string>();

// Process Technical Skills (with chips)
skillsData.forEach(skill => {
  if (skill.link && skill.title) {
    skillPathMap.set(skill.title.toLowerCase(), skill.link); // Map the main category title

    // Add specific technologies from 'chips'
    if (skill.chips) {
      // Map specific technologies based on the category title
      if (skill.title === "Framework & Librairies") {
          ["React", "Next.js", "Prisma", "Material UI", "AngularJS", "Node.js", "Scss"].forEach(chip => skillPathMap.set(chip.toLowerCase(), skill.link));
      }
      if (skill.title === "Langages de Programmation") {
          ["TypeScript", "Python", "PHP", "C#", "Java", "HTML5", "XAML", "WPF"].forEach(chip => skillPathMap.set(chip.toLowerCase(), skill.link));
      }
       if (skill.title === "Systèmes Géographiques") {
          ["Leaflet", "GeoServer"].forEach(chip => skillPathMap.set(chip.toLowerCase(), skill.link));
      }
      if (skill.title === "Base de Données") {
          ["PostgreSQL", "MongoDB", "MySQL"].forEach(chip => skillPathMap.set(chip.toLowerCase(), skill.link));
      }
      // Potentially map other chips if needed (e.g., from Documentation)
      if (skill.title === "Documentation") {
          ["Notion", "Markdown"].forEach(chip => skillPathMap.set(chip.toLowerCase(), skill.link));
      }
    }
  }
});

// Process Human Skills (no chips)
humanSkillsData.forEach(skill => {
  if (skill.link && skill.title) {
    skillPathMap.set(skill.title.toLowerCase(), skill.link);
    // Add variations if needed for human skills found in timelineData
    if (skill.title === "Autonomie") {
        skillPathMap.set("autonomie & adaptabilité", skill.link);
    }
    if (skill.title === "Communication") {
        skillPathMap.set("communication client", skill.link);
        skillPathMap.set("communication stratégique", skill.link); // Added from volunteer experience
    }
    if (skill.title === "Organisation") {
        skillPathMap.set("gestion de projet", skill.link);
    }
     if (skill.title === "Méthode Agile") {
        skillPathMap.set("méthodes agiles", skill.link);
        skillPathMap.set("scrum master", skill.link);
    }
    // Map other specific human skills from timeline if necessary
    skillPathMap.set("collecte de fonds", "/skills/organization"); // Example mapping
    skillPathMap.set("gestion budgétaire", "/skills/organization"); // Example mapping
    skillPathMap.set("sensibilisation environnement", "/skills/communication"); // Example mapping
  }
});

// Add any remaining skills from timelineData not covered above
skillPathMap.set("linux", "/skills/programming"); // Or create a dedicated "OS/Tools" skill page
skillPathMap.set("déploiement", "/skills/programming"); // Or dedicated DevOps/Deployment page

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
            icon={item.logoUrl ? (
              <div className={styles.logoContainer}>
                <Image
                  src={item.logoUrl}
                  alt={`${item.subtitle} logo`}
                  fill
                  style={{ objectFit: 'contain', padding: '5px' }}
                />
              </div>
            ) : (
              item.icon
            )}
          >
            <h3 className={`vertical-timeline-element-title ${styles.elementTitle}`}>{item.title}</h3>
            <h4 className={`vertical-timeline-element-subtitle ${styles.elementSubtitle}`}>{item.subtitle}</h4>
            <p className={styles.elementLocation}>{item.location}</p>
            <div className={styles.elementDescription}>
              {typeof item.description === 'string' ? <p>{item.description}</p> : item.description}
            </div>
            {item.skills && item.skills.length > 0 && (
              <div className={styles.skillsChipContainer}>
                {item.skills.map((skillName, skillIndex) => {
                  const skillLower = skillName.toLowerCase();
                  const path = skillPathMap.get(skillLower);
                  if (path) {
                    return (
                      <Link key={skillIndex} href={path} passHref>
                        <span className={`${styles.chip} ${styles.skillChip}`}>
                          {skillName}
                        </span>
                      </Link>
                    );
                  } else {
                    return (
                      <span key={skillIndex} className={`${styles.chip} ${styles.skillChip} ${styles.nonClickableChip}`}>
                        {skillName}
                      </span>
                    );
                  }
                })}
              </div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
} 