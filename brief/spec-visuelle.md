# Direction visuelle V4 — 14 septembre 2026

Demande utilisateur : fond React Bits, suppression des anneaux, parcours plus compact sur mobile et desktop, couleurs séparées par section, typographie plus sobre, logo Evolia, centrage du parcours et davantage de verre.

Identité : logo original transparent Evolia, signe ascendant et mot-symbole noir/vert. Public Sans 300/400 pour les titres et la lecture, Instrument Serif italique pour la dernière ligne du hero et la conclusion, Fira Mono pour les références. La demande utilisateur remplace la restriction typographique initiale de la charte. Les fichiers de polices sont auto-hébergés.

Palette : #005D39 / #148659 / #9D381F / #316CA5 / #5A675F / #111814 / #FFFFFF. Hero vert sombre, parcours vert sur fond clair, accompagnement bleu, FAQ neutre et conclusion verte. Les trois cartes de profils conservent des surfaces distinctes terre cuite, bleue et verte, conformément à la préférence explicite de l’utilisateur.

Hero centré avec le fond Silk officiel de React Bits, adapté au moteur Three.js existant. Le shader produit des plis de lumière monochromes, sans mélange des trois accents. Le persona figure une seule fois dans le sous-titre. Des cellules translucides structurent les trois informations clés.

Parcours centré, quatre cartes illustrées : cadrer un brief, rédiger puis relire une consigne, construire un projet, évaluer les acquis. Deux colonnes sur desktop, une sur téléphone. GSAP anime les feuilles, les champs et les lignes à l’entrée dans l’écran. Aucun anneau, aucune scène sticky, aucun scroll imposé. Les vignettes sont des illustrations pédagogiques en HTML.

Verre : bordures lumineuses, transparence, reflets et flou sur les CTA, les informations du hero, les documents et les cartes bleues. Boutons rectangulaires à coins modérément arrondis. Le mouvement reste secondaire à la lecture.

Pause globale, préférence de mouvement réduit, arrêt hors écran et onglet masqué, DPR plafonné à 1,25, import différé de Three.js, libération des ressources, fond statique de secours. Les CTA utilisent exclusivement VITE_FORM_URL. Aucun formulaire intégré, URL fictive ou envoi simulé.

Source : https://reactbits.dev/backgrounds/silk ; code et licence : https://github.com/DavidHDev/react-bits. Licence conservée dans le dépôt et dans les fichiers publics.

## Ajustement après retour utilisateur — chargement et mouvement

Retirer toutes les apparitions par transparence sur le contenu. Le bloc bleu et les profils restent visibles à tout moment, y compris lors des sauts par ancres. Garder des translations d’entrée courtes et une parallaxe de faible amplitude, réduite sur mobile. Utiliser un vert clair #9FE8BE pour « premier projet IA », garder le CTA blanc et rendre les mouvements du tissu plus visibles. Les nouvelles nuances sont cantonnées au hero ; les palettes des autres sections restent séparées.
