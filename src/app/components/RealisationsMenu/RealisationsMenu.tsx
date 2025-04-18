'use client';
import Link from 'next/link';
import { projectsData } from '@/data/searchData'; // Importer les données des projets

export default function RealisationsMenu() {

    // Styles réutilisés ou adaptés de CompetencesMenu
    const linkStyle = {
        display: 'block',
        color: '#e2e8f0', 
        textDecoration: 'none',
        padding: '0.4rem 0.8rem',
        borderRadius: '4px',
        fontSize: '0.9rem',
        transition: 'background-color 0.2s ease, color 0.2s ease',
        backgroundColor: 'transparent',
        whiteSpace: 'nowrap' as 'nowrap',
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget;
        target.style.backgroundColor = 'rgba(96, 165, 250, 0.2)';
        target.style.color = '#90cdf4';
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget;
        target.style.backgroundColor = 'transparent';
        target.style.color = '#e2e8f0';
    };

    const menuTitleStyle: React.CSSProperties = {
        color: '#90cdf4',
        fontSize: '0.85rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: '0.75rem',
        letterSpacing: '0.05em',
        padding: '0 0.8rem',
    };

    return (
        <div style={{
            position: 'absolute',
            top: '100%', 
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#1f2937',
            borderRadius: '8px',
            padding: '1rem 0', // Padding haut/bas, pas horizontal
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
            zIndex: 1000,
            minWidth: '200px', // Largeur minimale pour un bon affichage
        }}>
            <h4 style={menuTitleStyle}>
                Projets
            </h4>
            {projectsData.map((project) => (
                <Link 
                    key={project.title} 
                    href={project.link || '#'} // Utiliser le lien du projet
                    passHref
                    style={linkStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {project.title}
                </Link>
            ))}
        </div>
    );
} 