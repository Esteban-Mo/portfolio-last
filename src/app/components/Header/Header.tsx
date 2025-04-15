'use client';

import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchBar from '../SearchBar/SearchBar';
import CompetencesMenu from '../CompetencesMenu/CompetencesMenu';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState(`home`);
    const [showCompetencesMenu, setShowCompetencesMenu] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/presentation') {
            setActiveSection('presentation');
            return;
        }
        
        if (pathname === '/parcours') {
            setActiveSection('parcours');
            return;
        }

        const handleScroll = () => {
            // Réalisations temporairement retiré
            const sections = [`home`, `competences`, /* `realisations`, */ `contact`];
            const viewportHeight = window.innerHeight;
            
            // Point de référence au centre de l'écran
            const viewportMiddle = window.scrollY + (viewportHeight / 2);

            // Trouver la section la plus proche du centre de l'écran
            let closestSection = sections[0];
            let closestDistance = Infinity;

            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const sectionMiddle = window.scrollY + rect.top + (rect.height / 2);
                    const distance = Math.abs(viewportMiddle - sectionMiddle);

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestSection = sectionId;
                    }
                }
            });

            // Cas spécial pour la dernière section (contact)
            const isAtBottom = window.scrollY + viewportHeight >= document.documentElement.scrollHeight - 50;
            if (isAtBottom) {
                setActiveSection(`contact`);
            } else {
                setActiveSection(closestSection);
            }
        };

        window.addEventListener(`scroll`, handleScroll);
        handleScroll(); // Appel initial
        
        return () => window.removeEventListener(`scroll`, handleScroll);
    }, [pathname]);

    const getLinkColor = (sectionId: string, linkId: string) => {
        if (activeSection === sectionId) return `#60A5FA`;
        return hoveredLink === linkId ? `#60A5FA` : `#fff`;
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: `smooth` });
        } else {
            // Si l'élément n'existe pas, on est probablement sur une autre page
            window.location.href = `/#${sectionId}`;
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div 
                    className={styles.imageContainer}
                    onClick={() => window.location.href = '/'}
                    style={{ cursor: 'pointer' }}
                >
                    <Image
                        src="/images/me.jpg"
                        alt="Esteban Mortier"
                        fill
                        style={{ objectFit: `cover` }}
                    />
                </div>
                <span onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>
                    Esteban Mortier
                </span>
            </div>

            <nav className={styles.desktopNav}>
                <SearchBar />
                <a 
                    onClick={() => scrollToSection(`home`)}
                    className={styles.link}
                    style={{ color: getLinkColor(`home`, `home`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`home`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <HomeIcon /> Accueil
                </a>
                <a 
                    href="/presentation"
                    className={styles.link}
                    style={{ color: getLinkColor(`presentation`, `presentation`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`presentation`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <PersonIcon /> Présentation
                </a>
                <a 
                    href="/parcours"
                    className={styles.link}
                    style={{ color: getLinkColor(`parcours`, `parcours`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`parcours`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <WorkHistoryIcon /> Parcours
                </a>
                <div 
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setShowCompetencesMenu(true)}
                    onMouseLeave={() => setShowCompetencesMenu(false)}
                >
                    <a 
                        onClick={() => scrollToSection(`competences`)}
                        className={styles.link}
                        style={{ color: getLinkColor(`competences`, `competences`), cursor: `pointer` }}
                        onMouseEnter={() => setHoveredLink(`competences`)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <CodeIcon /> Compétences
                    </a>
                    {showCompetencesMenu && <CompetencesMenu />}
                </div>
                {/* Temporairement retiré
                <a 
                    onClick={() => scrollToSection(`realisations`)}
                    className={styles.link}
                    style={{ color: getLinkColor(`realisations`, `realisations`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`realisations`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <WorkIcon /> Réalisations
                </a>
                */}
                <a 
                    onClick={() => scrollToSection(`contact`)}
                    className={styles.link}
                    style={{ color: getLinkColor(`contact`, `contact`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`contact`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <ContactMailIcon /> Contact
                </a>
            </nav>

            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={styles.mobileMenuButton}
            >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <SearchBar />
                <a 
                    onClick={() => scrollToSection(`home`)}
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor(`home`, `home`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`home`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <HomeIcon /> Accueil
                </a>
                <a 
                    href="/presentation"
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor(`presentation`, `presentation`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`presentation`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <PersonIcon /> Présentation
                </a>
                <a 
                    href="/parcours"
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor(`parcours`, `parcours`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`parcours`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <WorkHistoryIcon /> Parcours
                </a>
                <div 
                    style={{ position: 'relative' }}
                    onClick={() => setShowCompetencesMenu(!showCompetencesMenu)}
                >
                    <a 
                        className={`${styles.link} ${styles.mobileLink}`}
                        style={{ color: getLinkColor(`competences`, `competences`), cursor: `pointer` }}
                        onMouseEnter={() => setHoveredLink(`competences`)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <CodeIcon /> Compétences
                    </a>
                    {showCompetencesMenu && <CompetencesMenu />}
                </div>
                {/* Temporairement retiré
                <a 
                    onClick={() => scrollToSection(`realisations`)}
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor(`realisations`, `realisations`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`realisations`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <WorkIcon /> Réalisations
                </a>
                */}
                <a 
                    onClick={() => scrollToSection(`contact`)}
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor(`contact`, `contact`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`contact`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <ContactMailIcon /> Contact
                </a>
            </div>
        </header>
    );
}