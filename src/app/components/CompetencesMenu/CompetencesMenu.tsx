'use client';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import { skillsData, humanSkillsData } from '@/data/searchData';

export default function CompetencesMenu() {
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

    const sectionTitleStyle: React.CSSProperties = {
        color: '#90cdf4',
        fontSize: '0.85rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        marginBottom: '0.75rem',
        letterSpacing: '0.05em',
        paddingLeft: '0.8rem'
    };

    return (
        <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#1f2937',
            borderRadius: '8px',
            padding: '1rem 0.5rem',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
            zIndex: 1000,
            display: 'flex',
            gap: '1.5rem',
        }}>
            <div>
                <h4 style={sectionTitleStyle}>
                    Techniques
                </h4>
                {skillsData.map((skill) => (
                    <Link 
                        key={skill.title}
                        href={skill.link || '#'}
                        passHref
                        style={linkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                       {skill.title}
                    </Link>
                ))}
            </div>

            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />

            <div>
                 <h4 style={sectionTitleStyle}>
                    Humaines
                </h4>
                {humanSkillsData.map((skill) => (
                     <Link 
                        key={skill.title}
                        href={skill.link || '#'}
                        passHref
                        style={linkStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                       {skill.title}
                    </Link>
                ))}
            </div>
        </div>
    );
} 