'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation'; // Import pour la navigation
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress'; // Pour l'indicateur de chargement
import { debounce } from 'lodash'; // Pour le debounce

// Suppression des données statiques searchableContent

// Interface mise à jour pour correspondre à l'API
interface SearchResult {
    title: string;
    description: string;
    link: string | undefined;
    type: 'project' | 'skill' | 'human-skill';
}

export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const router = useRouter(); // Hook pour la navigation

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchResults([]); // Fermer aussi les résultats
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // --- Début Logique API --- 
    const fetchResults = async (query: string) => {
        if (!query.trim()) {
            setSearchResults([]);
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSearchResults(data.results || []);
        } catch (error) { 
            console.error("Failed to fetch search results:", error);
            setSearchResults([]); // Vider les résultats en cas d'erreur
        } finally {
            setIsLoading(false);
        }
    };

    // Utilisation de debounce pour limiter les appels API
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedFetchResults = useCallback(debounce(fetchResults, 300), []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
        debouncedFetchResults(query);
    };
    // --- Fin Logique API ---

    const handleResultClick = (url: string | undefined) => {
        if (url) {
            router.push(url); // Naviguer vers l'URL
            setIsOpen(false); // Fermer la barre de recherche
            setSearchQuery(''); // Vider la recherche
            setSearchResults([]); // Vider les résultats
        }
    }

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
                background: isOpen ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)', // Fond plus clair quand ouvert
                borderRadius: '20px',
                padding: '0.5rem',
                cursor: 'pointer',
                border: isOpen ? '1px solid rgba(255, 255, 255, 0.3)' : 'none' // Bordure quand ouvert
            }}>
                <SearchIcon style={{
                    color: '#fff',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    marginRight: isOpen ? '0.5rem' : '0' // Espace quand ouvert
                }} onClick={() => {!isOpen && setIsOpen(true); /* Ouvre seulement si fermé */ }} />
                
                <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchQuery}
                    onChange={handleInputChange} // Utiliser la nouvelle fonction
                    onFocus={() => setIsOpen(true)} // Ouvre la barre au focus
                    style={{
                        flexGrow: 1, // Prendre l'espace disponible
                        background: 'none',
                        border: 'none',
                        color: '#fff',
                        // marginLeft: '0.5rem', // Géré par le parent flex
                        // width: '100%', // Géré par flexGrow
                        outline: 'none',
                        display: isOpen ? 'block' : 'none'
                    }}
                />
                
                {isOpen && (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {isLoading && <CircularProgress size={20} style={{ color: '#fff', marginRight: '8px' }} />} 
                        {searchQuery && !isLoading && (
                            <CloseIcon 
                                style={{
                                    color: '#fff',
                                    fontSize: '1.2rem',
                                    cursor: 'pointer'
                                }}
                                onClick={(e) => {
                                    e.stopPropagation(); // Empêche la fermeture par le clickOutside
                                    setSearchQuery('');
                                    setSearchResults([]);
                                    // Garder le focus sur l'input si possible?
                                }}
                            />
                        )}
                    </div>
                )}
            </div>

            {/* Affichage des résultats */}
            {isOpen && searchResults.length > 0 && (
                <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 5px)', // Légèrement décalé vers le bas
                    left: '0',
                    right: '0',
                    background: '#2d3748', // Fond sombre (tailwind gray-800)
                    borderRadius: '8px',
                    marginTop: '0.5rem',
                    padding: '0.5rem',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                    zIndex: 1000,
                    maxHeight: '300px', // Hauteur maximale
                    overflowY: 'auto' // Scroll si nécessaire
                }}>
                    {searchResults.map((result, index) => (
                        <div // Remplacer <a> par <div> pour gérer le clic en JS
                            key={index}
                            onClick={() => handleResultClick(result.link)} // Gérer le clic ici
                            style={{
                                display: 'block',
                                padding: '0.8rem',
                                color: '#e2e8f0', // Texte clair (slate-200)
                                textDecoration: 'none',
                                borderRadius: '5px',
                                transition: 'background-color 0.2s ease',
                                cursor: result.link ? 'pointer' : 'default' // Curseur seulement si lien existe
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            <div style={{ marginBottom: '0.3rem', fontWeight: '600', color: '#90cdf4' }}> {/* Bleu clair (blue-300) */}
                                {result.title}
                            </div>
                            <div style={{
                                fontSize: '0.85rem', 
                                color: '#a0aec0', // Gris moyen (gray-500)
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {result.description}
                            </div>
                        </div>
                    ))}
                </div>
            )}
             {isOpen && !isLoading && searchQuery && searchResults.length === 0 && (
                 <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 5px)',
                    left: '0',
                    right: '0',
                    background: '#2d3748',
                    borderRadius: '8px',
                    marginTop: '0.5rem',
                    padding: '1rem',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                    zIndex: 1000,
                    color: '#a0aec0' // Gris moyen
                 }}>
                    Aucun résultat trouvé pour "{searchQuery}"
                 </div>
            )}
        </div>
    );
}