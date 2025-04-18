import Chip from '@mui/material/Chip'; // Import Chip
import styles from './page.module.css'; // Reuse the same CSS module structure

const pageChips = ["Leaflet", "GeoServer"]; // Define chips for this page

export default function GeographicsSkillPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundEmoji}>🗺️</div> {/* Background Emoji */}

      <h1 className={styles.mainTitle}>Compétence : Systèmes Géographiques</h1>

      {/* Chip Container */}
      <div className={styles.chipContainer}>
        {pageChips.map((chip, index) => (
          <Chip 
            key={index} 
            label={chip} 
            variant="outlined" 
            size="small"
            sx={{ /* Reusing Chip styles */
              color: '#e2e8f0', 
              borderColor: 'rgba(148, 163, 184, 0.3)',
              backgroundColor: 'rgba(100, 116, 139, 0.1)',
              borderRadius: '4px',
              fontSize: '0.85rem',
              margin: '0.3rem',
              '&:hover': {
                backgroundColor: 'rgba(100, 116, 139, 0.2)',
              }
            }}
          />
        ))}
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ma definition</h2>
        <p>
          Les systèmes géographiques sont des outils essentiels dès qu'un projet implique de manipuler, afficher ou distribuer des données spatiales : coordonnées, adresses, surfaces​, couches superposées, etc. Dans mon cas​, je les ai utilisés dans plusieurs contextes réels — que ce soit pour des domaines viticoles, de l'immobilier ou de la production énergétique — ce qui m'a permis de bien cerner l'utilité concrète de la cartographie dans un projet web​.
        </p>
        <p>
          J'ai principalement utilise deux technologies complémentaires :
        </p>
        <ul className={styles.list}>
            <li>Leaflet, une librairie JavaScript permettant d'afficher des cartes interactives dynamiques dans une interface web​.</li>
            <li>GeoServer, un serveur open-source qui permet d'héberger, traiter et distribuer des données géospatiales via des protocoles comme WMS.</li>
        </ul>
        <p>
          Leaflet est simple, puissant, intuitif. GeoServer, en revanche, demande des compétences plus poussées, notamment sur les formats de données cartographiques (shapefiles, couches WMS, projections, etc.).
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mes éléments de preuve</h2>
        <p>
          J'ai été amené à travailler avec ces outils sur trois projets distincts :
        </p>
        <ul className={styles.list}>
            <li>Le premier, pour le domaine George Roumier, où il faillait afficher dynamiquement les parcelles de vignes sur une carte​.</li>
            <li>Le second, pour l'agence immobilière Walker, où il s'agissait d'afficher les biens immobiliers selon leur adresse.</li>
            <li>Et enfin, le plus complet, le projet Atlas en alternance, qui représentait des données environnementales complexes : vitesse du vent, températures, position d'éoliennes, etc.</li>
        </ul>
        <p>
          Sur tous ces projets, Leaflet était utilise côté front pour l'affichage dynamique et interactif. Pour Atlas, j'ai dû intégrer GeoServer, qui servait à héberger et diffuser des données spatiales lourdes en WMS, notamment des couches sur le vent ou la topographie​.
        </p>
        <p>
          Dans certains cas, les données étaient directement en base PostgreSQL, mais dès qu'il s'agissait de traitements géographiques lourds ou de couches multiples, GeoServer devenait indispensable.
        </p>
        <p>
          La plus grande difficulté technique a clairement été la prise en main de GeoServer. Il ne suffit pas de l'installer : il faut comprendre les types de fichiers, les formats, les services de projection, et les interactions avec les clients. J'ai dû apprendre vite et tester beaucoup pour pouvoir le configurer correctement. C'est un outil puissant, mais vraiment pas user-friendly.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon autocritique</h2>
        <p>
          Je me sens aujourd'hui à l'aise avec Leaflet, que je trouve bien pensé et agreable à utiliser. L'API est claire, la communauté est active, et il est facile de créer une expérience utilisateur fluide et propre avec.
        </p>
        <p>
          À l'inverse, GeoServer reste une zone plus floue pour moi. Je l'ai utilise parce que le projet le nécessitait, mais je ne le trouve ni simple, ni agreable à manipuler. Il demande des connaissances spécifiques en SIG (systèmes d'information géographiques) que je n'avais pas, et qui ne sont pas forcément utilises dans tous les contextes de dev.
        </p>
        <p>
          Côté données, j'ai surtout travailler avec des fichiers shapefile ou via des services WMS​. J'ai appris à les manipuler​, à les intégrer dans une carte interactive, et à les adapter selon les besoins du client.
        </p>
        <p>
          Globalement, la cartographie est une compétence que j'aime bien mobiliser quand le projet s'y prête, mais je reste selectif dans les outils que j'utilise : Leaflet​, oui ; GeoServer​, seulement si je n'ai pas le choix.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mon évolution dans cette compétence</h2>
        <p>
          Je compte continuer à progresser sur Leaflet​, car c'est une techno que j'apprécie​, qui a beaucoup de potentiel, et qui me permet de créer des interfaces web plus riches​.
        </p>
        <p>
          En revanche, je ne prévois pas de m​'​investir davantage dans GeoServer​, sauf si un futur projet m'y oblige. Si besoin​, je prendrai le temps de creuser les alternatives plus modernes et flexibles (​comme Mapbox​, OpenLayers ou Turf.js​).
        </p>
        <p>
          Aujourd'​hui​, je ne travaille plus sur de projets de cartographie​, mais je garde cette compétence en tête​​, prête à être réactivée. Je considère que c​'est un complément utile à mon profil fullstack​​, surtout dans des contextes où la visualisation géospatiale apporte une vraie valeur ajoutée au pro​jet.
        </p>
      </section>
    </div>
  );
} 