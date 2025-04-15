export default function CompetencesMenu() {
    const competences = [
        {
            id: 'frameworks-libraries',
            name: 'Framework & Librairies',
            category: 'technique',
            items: [
                { id: 'react', name: 'React' },
                { id: 'next', name: 'Next.js' },
                { id: 'prisma', name: 'Prisma' }
            ]
        },
        {
            id: 'langages',
            name: 'Langages de Programmation',
            category: 'technique',
            items: [
                { id: 'typescript', name: 'TypeScript' },
                { id: 'python', name: 'Python' }
            ]
        },
        {
            id: 'geo-systems',
            name: 'Systèmes Géographiques',
            category: 'technique',
            items: [
                { id: 'geoserver', name: 'Geoserver' },
                { id: 'leaflet', name: 'Leaflet' }
            ]
        },
        {
            id: 'base-de-donnees',
            name: 'Base de Données',
            category: 'technique',
            items: [
                { id: 'postgresql', name: 'PostgreSQL' },
                { id: 'mongodb', name: 'MongoDB' }
            ]
        },
        {
            id: 'competences-humaines',
            name: 'Compétences Humaines',
            category: 'humaine',
            items: [
                { id: 'communication', name: 'Communication' },
                { id: 'leadership', name: 'Leadership' },
                { id: 'adaptabilite', name: 'Adaptabilité' },
                { id: 'resolution-de-problemes', name: 'Résolution de Problèmes' }
            ]
        }
    ];

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
        transition: 'all 0.2s ease',
        backgroundColor: 'transparent'
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget;
        target.style.backgroundColor = '#333';
        target.style.color = '#60A5FA';
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.currentTarget;
        target.style.backgroundColor = 'transparent';
        target.style.color = '#fff';
    };

    return (
        <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#1a1a1a',
            borderRadius: '8px',
            padding: '1rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            width: 'max-content',
            maxWidth: '90vw'
        }}>
            <div style={{
                gridColumn: '1 / -1',
                borderBottom: '1px solid #333',
                paddingBottom: '0.5rem',
                marginBottom: '0.5rem',
                color: '#60A5FA',
                fontWeight: 'bold'
            }}>
                Compétences
            </div>
            {competences.map(category => (
                <div key={category.id} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                }}>
                    <div style={{
                        color: '#60A5FA',
                        fontWeight: 'bold',
                        marginBottom: '0.5rem'
                    }}>
                        {category.name}
                    </div>
                    {category.items.map(item => (
                        <a
                            key={item.id}
                            href={`/competences/${item.id}`}
                            style={linkStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            ))}
        </div>
    );
} 