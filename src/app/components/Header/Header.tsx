'use client';

import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkIcon from '@mui/icons-material/Work';
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
            const sections = [`home`, `skills`, `projects`, `contact`];
            const viewportHeight = window.innerHeight;
            
            const scrollThreshold = window.scrollY + (viewportHeight * 0.4);

            let currentSection = sections[0];
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element && element.offsetTop <= scrollThreshold) {
                    currentSection = sectionId;
                } else {
                    break;
                }
            }
            
            const isAtBottom = window.scrollY + viewportHeight >= document.documentElement.scrollHeight - 50;
            if (isAtBottom) {
                setActiveSection(sections[sections.length - 1]);
            } else {
                 setActiveSection(currentSection);
            }
        };

        window.addEventListener(`scroll`, handleScroll, { passive: true });
        handleScroll();
        
        return () => window.removeEventListener(`scroll`, handleScroll);
    }, [pathname]);

    const getLinkColor = (sectionId: string, linkId: string) => {
        if (activeSection === sectionId || hoveredLink === linkId) return `#60A5FA`;
        return `#fff`;
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        } else {
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
                        onClick={() => scrollToSection(`skills`)}
                        className={styles.link}
                        style={{ color: getLinkColor(`skills`, `skills`), cursor: `pointer` }}
                        onMouseEnter={() => setHoveredLink(`skills`)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <CodeIcon /> Compétences
                    </a>
                    {showCompetencesMenu && <CompetencesMenu />}
                </div>
                <a 
                    onClick={() => scrollToSection(`projects`)}
                    className={styles.link}
                    style={{ color: getLinkColor(`projects`, `realisations`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`realisations`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <WorkIcon /> Réalisations
                </a>
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
                        onClick={() => scrollToSection(`skills`)}
                        className={`${styles.link} ${styles.mobileLink}`}
                        style={{ color: getLinkColor(`skills`, `skills`), cursor: `pointer` }}
                        onMouseEnter={() => setHoveredLink(`skills`)}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <CodeIcon /> Compétences
                    </a>
                </div>
                <a 
                    onClick={() => scrollToSection(`projects`)}
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor(`projects`, `realisations`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`realisations`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <WorkIcon /> Réalisations
                </a>
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