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
import RealisationsMenu from '../RealisationsMenu/RealisationsMenu';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState(() => {
        if (pathname === '/presentation') return 'presentation';
        if (pathname === '/parcours') return 'parcours';
        if (pathname.startsWith('/skills')) return 'skills';
        if (pathname.startsWith('/projects')) return 'projects';
        return 'home';
    });
    const [showCompetencesMenu, setShowCompetencesMenu] = useState(false);
    const [showRealisationsMenu, setShowRealisationsMenu] = useState(false);

    useEffect(() => {
        if (pathname === '/presentation') {
            setActiveSection('presentation');
        } else if (pathname === '/parcours') {
            setActiveSection('parcours');
        } else if (pathname.startsWith('/skills')) {
            setActiveSection('skills');
        } else if (pathname.startsWith('/projects')) {
            setActiveSection('projects');
        } else if (pathname === '/') {
            const handleScroll = () => {
                const sections = [`home`, 'presentation-preview', `skills`, `projects`, `contact`];
                const viewportHeight = window.innerHeight;
                const scrollThreshold = window.scrollY + (viewportHeight * 0.4);
    
                let currentSectionId = sections[0];
                for (const sectionId of sections) {
                    const element = document.getElementById(sectionId);
                    if (element && element.offsetTop <= scrollThreshold) {
                        currentSectionId = sectionId;
                    } else if (element) {
                        break;
                    }
                }
                
                const isAtBottom = window.scrollY + viewportHeight >= document.documentElement.scrollHeight - 50;
                
                let finalActiveSectionId = isAtBottom ? sections[sections.length - 1] : currentSectionId;

                if (finalActiveSectionId === 'presentation-preview') {
                    finalActiveSectionId = 'presentation';
                }
                
                setActiveSection(prev => prev === finalActiveSectionId ? prev : finalActiveSectionId);
            };
    
            window.addEventListener(`scroll`, handleScroll, { passive: true });
            handleScroll();
            
            return () => window.removeEventListener(`scroll`, handleScroll);
        } else {
            // Si on n'est sur aucune des pages gérées (accueil, prez, parcours)
            // On pourrait définir un état par défaut ou ne rien faire
            // Pour l'instant, on ne fait rien, l'état initial reste
        }
    }, [pathname]);

    const getLinkColor = (sectionId: string, linkId: string) => {
        if (activeSection === sectionId || hoveredLink === linkId) return `#60A5FA`;
        return `#fff`;
    };

    const scrollToSection = (sectionId: string) => {
        const targetElementId = sectionId === 'presentation' ? 'presentation-preview' : sectionId;

        const element = document.getElementById(targetElementId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMenuOpen(false);
            return true;
        } else {
            if (['home', 'presentation-preview', 'skills', 'projects', 'contact'].includes(targetElementId)) {
                window.location.href = `/#${targetElementId}`;
            } else {
                console.warn(`Element with ID '${targetElementId}' not found for scrolling.`);
            }
            return false;
        }
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
                <Link 
                    href="/#home"
                    onClick={(e) => {
                        if (pathname === '/') {
                            e.preventDefault();
                            scrollToSection('home');
                        }
                    }}
                    className={styles.link}
                    style={{ color: getLinkColor(`home`, `home`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`home`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <HomeIcon /> Accueil
                </Link>
                <Link 
                    href="/presentation"
                    className={styles.link}
                    style={{ color: getLinkColor(`presentation`, `presentation`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`presentation`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <PersonIcon /> Présentation
                </Link>
                <Link 
                    href="/parcours"
                    className={styles.link}
                    style={{ color: getLinkColor(`parcours`, `parcours`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`parcours`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <WorkHistoryIcon /> Parcours
                </Link>
                <div 
                    style={{ position: 'relative' }}
                    onMouseEnter={() => {
                        setShowCompetencesMenu(true);
                        setHoveredLink('skills');
                    }}
                    onMouseLeave={() => {
                        setShowCompetencesMenu(false);
                        setHoveredLink(null);
                    }}
                >
                    <Link 
                        href="/skills"
                        onClick={(e) => {
                            if (pathname === '/') {
                                e.preventDefault();
                                if (!scrollToSection('skills')) {
                                    window.location.href = '/#skills';
                                }
                            }
                        }}
                        className={styles.link}
                        style={{ color: getLinkColor(`skills`, `skills`), cursor: `pointer` }}
                    >
                        <CodeIcon /> Compétences
                    </Link>
                    {showCompetencesMenu && <CompetencesMenu />}
                </div>
                <div 
                    style={{ position: 'relative' }}
                    onMouseEnter={() => {
                        setShowRealisationsMenu(true);
                        setHoveredLink('realisations');
                    }}
                    onMouseLeave={() => {
                        setShowRealisationsMenu(false);
                        setHoveredLink(null);
                    }}
                >
                    <Link 
                        href="/#projects"
                        onClick={(e) => {
                            if (pathname === '/') {
                                e.preventDefault();
                                scrollToSection('projects');
                            }
                        }}
                        className={styles.link}
                        style={{ color: getLinkColor(`projects`, `realisations`), cursor: `pointer` }}
                    >
                        <WorkIcon /> Réalisations
                    </Link>
                    {showRealisationsMenu && <RealisationsMenu />}
                </div>
                <Link 
                    href="/#contact"
                    onClick={(e) => {
                        if (pathname === '/') {
                            e.preventDefault();
                            scrollToSection('contact');
                        }
                    }}
                    className={styles.link}
                    style={{ color: getLinkColor(`contact`, `contact`), cursor: `pointer` }}
                    onMouseEnter={() => setHoveredLink(`contact`)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <ContactMailIcon /> Contact
                </Link>
            </nav>

            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={styles.mobileMenuButton}
            >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <SearchBar />
                <Link 
                    href="/#home"
                    onClick={(e) => {
                        if (pathname === '/') { e.preventDefault(); scrollToSection('home'); }
                        setIsMenuOpen(false);
                    }}
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor(`home`, `home`), cursor: `pointer` }}
                >
                    <HomeIcon /> Accueil
                </Link>
                <Link 
                    href="/presentation"
                    onClick={() => setIsMenuOpen(false)}
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor(`presentation`, `presentation`), cursor: `pointer` }}
                >
                    <PersonIcon /> Présentation
                </Link>
                <Link 
                    href="/parcours"
                    onClick={() => setIsMenuOpen(false)}
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor(`parcours`, `parcours`), cursor: `pointer` }}
                >
                    <WorkHistoryIcon /> Parcours
                </Link>
                <div 
                    style={{ position: 'relative' }}
                >
                    <Link 
                        href="/skills"
                        onClick={(e) => {
                            if (pathname === '/') { e.preventDefault(); scrollToSection('skills'); }
                            setIsMenuOpen(false);
                        }}
                        className={`${styles.link} ${styles.mobileLink}`}
                        style={{ color: getLinkColor(`skills`, `skills`), cursor: `pointer` }}
                    >
                        <CodeIcon /> Compétences
                    </Link>
                </div>
                <Link 
                    href="/#projects"
                    onClick={(e) => {
                        if (pathname === '/') { e.preventDefault(); scrollToSection('projects'); }
                        setIsMenuOpen(false);
                    }}
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor(`projects`, `realisations`), cursor: `pointer` }}
                >
                    <WorkIcon /> Réalisations
                </Link>
                <Link 
                    href="/#contact"
                    onClick={(e) => {
                        if (pathname === '/') { e.preventDefault(); scrollToSection('contact'); }
                        setIsMenuOpen(false);
                    }}
                    className={`${styles.link} ${styles.mobileLink}`}
                    style={{ color: getLinkColor(`contact`, `contact`), cursor: `pointer` }}
                >
                    <ContactMailIcon /> Contact
                </Link>
            </div>
        </header>
    );
}