import { NextRequest, NextResponse } from 'next/server';
import { projectsData, skillsData, humanSkillsData } from '@/data/searchData'; // Utilisation de l'alias @

// Définir un type simple pour les résultats de recherche
interface SearchResultItem {
  title: string;
  description: string;
  link: string | undefined;
  type: 'project' | 'skill' | 'human-skill';
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query')?.toLowerCase();

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const results: SearchResultItem[] = [];

  // Recherche dans les projets
  projectsData.forEach(item => {
    if (
      item.title.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query) || 
      item.chips.some(chip => chip.toLowerCase().includes(query))
    ) {
      results.push({ 
        title: item.title, 
        description: item.description, 
        link: item.link,
        type: 'project' 
      });
    }
  });

  // Recherche dans les compétences techniques
  skillsData.forEach(item => {
    if (
      item.title.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query) || 
      item.chips.some(chip => chip.toLowerCase().includes(query))
    ) {
      results.push({ 
        title: item.title, 
        description: item.description, 
        link: item.link,
        type: 'skill'
      });
    }
  });

  // Recherche dans les compétences humaines
  humanSkillsData.forEach(item => {
    if (
      item.title.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query)
      // Pas de chips ici a priori, mais on pourrait ajouter d'autres champs si besoin
    ) {
      results.push({ 
        title: item.title, 
        description: item.description, 
        link: item.link,
        type: 'human-skill'
      });
    }
  });

  // On pourrait ajouter un tri par pertinence ici si besoin
  
  // Limiter le nombre de résultats (optionnel)
  const limitedResults = results.slice(0, 10); 

  return NextResponse.json({ results: limitedResults });
} 