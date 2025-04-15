'use client';

import { useState, useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

// Données statiques pour la recherche
const searchableContent = {
    competences: {
        frontend: {
            title: 'Développement Frontend',
            url: '/competences/developpement-frontend',
            keywords: ['react', 'vue', 'angular', 'javascript', 'typescript', 'html', 'css', 'frontend', 'développement web'],
            description: 'Expertise en développement d\'interfaces utilisateur modernes et réactives'
        },
        backend: {
            title: 'Développement Backend',
            url: '/competences/developpement-backend',
            keywords: ['node.js', 'python', 'java', 'api', 'rest', 'graphql', 'backend', 'serveur'],
            description: 'Création de serveurs et APIs robustes et performants'
        },
        devops: {
            title: 'DevOps & Cloud',
            url: '/competences/devops',
            keywords: ['docker', 'kubernetes', 'aws', 'ci/cd', 'jenkins', 'gitlab', 'cloud', 'devops'],
            description: 'Automatisation et déploiement d\'applications cloud'
        },
        securite: {
            title: 'Sécurité',
            url: '/competences/securite',
            keywords: ['cybersécurité', 'pentest', 'audit', 'sécurité web', 'cryptographie'],
            description: 'Protection et sécurisation des applications'
        },
        bdd: {
            title: 'Bases de données',
            url: '/competences/base-de-donnees',
            keywords: ['sql', 'nosql', 'mongodb', 'postgresql', 'mysql', 'oracle'],
            description: 'Gestion et optimisation des bases de données'
        }
    },
    sections: {
        accueil: {
            title: 'Accueil',
            url: '/#home',
            keywords: ['accueil', 'présentation', 'portfolio'],
            description: 'Page d\'accueil du portfolio'
        },
        realisations: {
            title: 'Réalisations',
            url: '/#realisations',
            keywords: ['projets', 'portfolio', 'réalisations', 'travaux'],
            description: 'Découvrez mes projets et réalisations'
        },
        contact: {
            title: 'Contact',
            url: '/#contact',
            keywords: ['contact', 'email', 'message', 'communication'],
            description: 'Formulaire de contact et informations'
        }
    }
};

interface SearchResult {
    title: string;
    url: string;
    keywords: string[];
    description: string;
    relevance: number;
}

interface SearchableItem {
    title: string;
    url: string;
    keywords: string[];
    description: string;
}

interface SearchableSection {
    [key: string]: SearchableItem;
}

interface SearchableContent {
    [key: string]: SearchableSection;
}

export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        const results: SearchResult[] = [];
        const searchTerm = query.toLowerCase();

        // Fonction pour calculer le score de pertinence
        const calculateRelevance = (item: SearchableItem, searchTerm: string): number => {
            let score = 0;
            
            // Le titre correspond exactement
            if (item.title.toLowerCase() === searchTerm) score += 10;
            // Le titre contient le terme
            else if (item.title.toLowerCase().includes(searchTerm)) score += 5;
            
            // Les mots-clés contiennent le terme exact
            if (item.keywords.includes(searchTerm)) score += 3;
            
            // Les mots-clés contiennent partiellement le terme
            item.keywords.forEach((keyword: string) => {
                if (keyword.includes(searchTerm) || searchTerm.includes(keyword)) score += 1;
            });
            
            // La description contient le terme
            if (item.description.toLowerCase().includes(searchTerm)) score += 2;
            
            return score;
        };

        // Recherche dans toutes les sections
        Object.values(searchableContent as SearchableContent).forEach((section: SearchableSection) => {
            Object.values(section).forEach((item: SearchableItem) => {
                const relevance = calculateRelevance(item, searchTerm);
                if (relevance > 0) {
                    results.push({
                        ...item,
                        relevance
                    });
                }
            });
        });

        // Trier par pertinence
        results.sort((a, b) => b.relevance - a.relevance);

        setSearchResults(results.slice(0, 5)); // Limiter à 5 résultats
    };

    return (
        <div ref={searchRef} style={{
            position: 'relative',
            width: isOpen ? '300px' : '40px',
            transition: 'width 0.3s ease',
            marginLeft: '1rem'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '0.5rem',
                cursor: 'pointer'
            }}>
                <SearchIcon style={{
                    color: '#fff',
                    fontSize: '1.5rem',
                    cursor: 'pointer'
                }} onClick={() => setIsOpen(true)} />
                
                <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        marginLeft: '0.5rem',
                        width: '100%',
                        outline: 'none',
                        display: isOpen ? 'block' : 'none'
                    }}
                />
                
                {isOpen && searchQuery && (
                    <CloseIcon 
                        style={{
                            color: '#fff',
                            fontSize: '1.2rem',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            setSearchQuery('');
                            setSearchResults([]);
                        }}
                    />
                )}
            </div>

            {isOpen && searchResults.length > 0 && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    right: '0',
                    background: 'rgba(0, 0, 0, 0.9)',
                    borderRadius: '10px',
                    marginTop: '0.5rem',
                    padding: '0.5rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000
                }}>
                    {searchResults.map((result, index) => (
                        <a
                            key={index}
                            href={result.url}
                            style={{
                                display: 'block',
                                padding: '0.8rem',
                                color: '#fff',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            <div style={{ marginBottom: '0.3rem', color: '#60A5FA' }}>
                                {result.title}
                            </div>
                            <div style={{ 
                                fontSize: '0.9rem', 
                                opacity: 0.7,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {result.description}
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}