# Evolia — Consultant IA & Automatisation

Refonte Sites : React, TypeScript et Vite. La page est dans `src/App.tsx`, sa direction graphique dans `src/App.css`. Public Sans, Instrument Serif italique et Fira Mono sont auto-hébergées. La nouvelle demande typographique du 14 septembre remplace la restriction aux deux fontes de la V2.

## Développement

```sh
npm install
npm run dev
npm run build
```

## Formulaire externe

Tous les boutons de contact utilisent le même composant `ExternalCTA` et ouvrent directement l’URL HTTPS `VITE_FORM_URL` dans un nouvel onglet. Renseigner cette valeur dans `.env.local`, puis relancer Vite. Il n’y a aucun formulaire, collecte ou qualification sur la landing.

Sans URL valide, les boutons de contact sont désactivés et la limite est signalée dans l’aperçu. Aucune destination fictive, aucune redirection interne et aucun faux envoi. Les liens de navigation restent internes à la page.

## Sources et identité

Les caractéristiques du parcours viennent de `brief/informations-produit-marketing.md` et la charte de `brief/Charte-graphique-Consultant-IA.pdf`. Palette : #005D39, #148659, #9D381F, #316CA5, #5A675F, #111814 et #FFFFFF. Les informations restant à confirmer ne sont pas inventées. Aucun témoignage ou résultat chiffré fictif.

Le logo Evolia est une création originale réalisée avec l’outil imagegen intégré : `public/brand/evolia-logo.png`, PNG transparent de 2168 × 725 pixels. Sa provenance et le brief de création sont dans `public/brand/README.md`.

## Fond, mouvement et verre (V4)

Le hero parle aux salariés, indépendants et professionnels en reconversion : « En 6 semaines, construisez votre premier projet IA ». La page prépare un échange, sans garantie d’emploi ou de revenu.

Le hero utilise le fond [Silk de React Bits](https://reactbits.dev/backgrounds/silk), dans un vert monochrome issu de la charte (#148659 pour la lumière du tissu). Le shader officiel est conservé dans `src/vendor/react-bits/silk-shaders.ts`, avec sa licence MIT + Commons Clause. Son intégration utilise le moteur Three.js déjà installé, chargé dans un chunk séparé à l’approche du viewport. Les notices de licence sont aussi incluses dans le build sous `/brand/react-bits-license.txt`.

La boucle du fond s’arrête hors écran et lorsque l’onglet est masqué. Le bouton Pause et `prefers-reduced-motion` arrêtent les mouvements ; le ratio de pixels est plafonné à 1,25. Un fond CSS statique reste visible avant le premier rendu et en cas d’échec WebGL. Les ressources sont libérées au démontage.

Le parcours est composé de quatre cartes compactes illustrant le brief, la consigne, le projet et le bilan. GSAP ScrollTrigger déplace leurs éléments à leur entrée dans l’écran, sans masquer leur contenu. Les textes, cartes et documents restent opaques avant le déclenchement : un accès direct par ancre, un scroll rapide ou une reprise des animations ne doit jamais produire une section vide. Le défilement reste natif, sans section épinglée ni anneaux. Les illustrations représentent les exercices du parcours, sans résultats d’apprenants fictifs.

Les couleurs sont séparées visuellement : vert pour le hero, le parcours et la conclusion ; bleu pour l’accompagnement ; neutre pour les questions. Les trois profils conservent chacun leur teinte terre cuite, bleue ou verte. L’italique est réservé à la promesse du hero, à la conclusion et au logo. Les surfaces vitrées se retrouvent dans les boutons, les faits du hero, les illustrations et les cartes d’accompagnement.

## Correctif de chargement et parallaxe

Les effets d’entrée utilisent uniquement des translations ; les anciennes initialisations `opacity: 0` ont été retirées. Les positions sont recalculées après le chargement des fontes, le retour à la page, les changements d’ancre et l’ouverture des réponses FAQ. Les liens directs sont positionnés après le montage React, sans correction tardive si le visiteur a déjà interagi. Les animations terminées conservent leur ScrollTrigger jusqu’au nettoyage du contexte : cela évite une suppression pendant un refresh lors d’un rechargement au milieu de la page. Les sections ne dépendent pas d’un chargement différé de contenu.

Une parallaxe modérée accompagne le hero, les documents du parcours, les cartes bleues et la carte finale. Elle utilise une translation CSS distincte des transformations d’entrée, avec une amplitude réduite sur téléphone. Le reflet de la section bleue se déplace au scroll et un filet de progression accompagne la navigation. Le défilement demeure natif.

Le fond Silk utilise une progression temporelle plus rapide (facteur 4,2 par rapport à la V4 initiale), tout en limitant ses rendus à environ 30 images/s sur les écrans de 800 px ou moins. Pause et préférence de mouvement réduit restent respectées. Le titre accentue « premier projet IA » en vert clair #9FE8BE ; le CTA du hero reste blanc.
