# Spec visuelle — Parcours Consultant IA

Peau dérivée du métier (dossier de preuves, cabinet, candidature). Canon structurel : LandingScrolly. Canon chromatique : **charte officielle lockée**, pas OKKO.

---

## 1. Monde + pourquoi ≠ OKKO

| | Ce projet | OKKO (interdit ici) |
|---|---|---|
| Matières | Papier dossier de preuves, encre `#111814`, vert forêt `#005D39` | Crème `#f4f1e9` |
| Lumière | Jour de bureau, blanc 70 % | Crème chaude |
| Émotion | Rigueur pédagogique, candidature — pas hype SaaS | Performance produit |
| Accent | Vert forêt `#005D39` | Émeraude `#10b981` / `#087658` |
| Fond | Grain papier CSS | Ripple émeraude OGL |
| Typo | Public Sans (charte) | Instrument Serif + Manrope |

**Interdits explicites** : `#f4f1e9`, `#10b981`, `#087658`, ripple OGL émeraude, GridScan (mode performance, pas saas-tokyo), coins arrondis, ombres SaaS, bounce.

**Exception typo documentée** : l'âme OKKO impose 2 polices max (serif + sans). Ici le MONDE + la charte officielle exigent **Public Sans partout, pas de serif**. Fira Mono = 3e famille **strictement limitée** aux codes/refs (P02, RS6776), jamais de texte à lire. Dérogation assumée et bornée.

---

## 2. Tokens

Seules les 7 teintes charte sont sémantiques. Les autres valeurs sont des **dilutions dérivées** documentées, pas de nouvelles teintes.

```css
:root {
  /* Surfaces — matière : papier blanc de bureau */
  --paper:        #FFFFFF;  /* charte — fond de toutes les pages */
  --paper-light:  #FFFFFF;  /* = paper : texte inversé sur --ink, base glass */
  --paper-accent: #EFF7F3;  /* vert clair à 7 % sur blanc — voile, PAS fond vert */

  /* Encre — matière : encre d'imprimerie légèrement verte */
  --ink:       #111814;     /* charte — tout le texte */
  --ink-soft:  #5A675F;     /* charte gris vert — secondaire */
  --ink-faint: #707472;     /* encre à 60 % sur blanc — méta ≥ 14 px seulement */

  /* Accent — matière : vert forêt du tampon « validé » */
  --accent:       #005D39;  /* charte — titres, liens, boutons, validation */
  --accent-ink:   #00462B;  /* accent assombri 25 % — hover/actif */
  --accent-light: #148659;  /* charte — aplats, puces, signes. PAS petit texte */

  /* Structure */
  --line:      #E2E3E3;     /* encre à 12 % — hairline 1px */
  --highlight: #D0E7DE;     /* accent-light à 20 % — surlignage phrase clé H1 */

  /* Statuts — toujours signe + mot + couleur, jamais la couleur seule */
  --status-valide:    #005D39;  /* ✓ validé */
  --status-renforcer: #9D381F;  /* ↻ à renforcer */
  --status-revoir:    #316CA5;  /* ◆ prêt à revoir */
  --status-preparer:  #5A675F;  /* ○ à préparer */
}
```

**Proportions page** : blanc 70 % · encre 20 % · vert 10 %. Le vert est un accent, pas un fond. Le bandeau `--ink` est la **seule** zone inversée et doit tenir dans les 20 % encre.

**Espacement** (échelle charte, rien d'autre) : `4 8 12 16 24 32 48 64`. Sections : 64/48 desktop, 32/24 mobile.

---

## 3. Polices

| Rôle | Famille / graisse | Taille | Usage |
|---|---|---|---|
| H1 | Public Sans 800 | 44 px (fluid `clamp(32px, 8vw, 44px)`) | Titres de page, 4 lignes max en hero |
| H2 | Public Sans 700 | 28 px | Titres de section |
| H3 / lede | Public Sans 300 | 20 px | Intertitres, phrases d'intro |
| Corps | Public Sans 400 | 16 px | Tout le texte courant |
| Refs | Fira Mono 400 | 14 px | Codes uniquement : P02, P04, RS6776 |

- Longueur de ligne : **60–70 caractères max**.
- Chargement : Google Fonts, `font-display: swap`, graisses exactes 300/400/700/800 — pas de 500/600.
- Highlight H1 : fond `--highlight` sur la **phrase clé seulement**, padding 0/4, radius 0.

---

## 4. Effet de fond — UN seul

**Grain papier CSS** (matière dossier). Pas de WebGL, pas de ripple, pas de GridScan.

- Noise SVG `feTurbulence` en data-URI, tuile ~180 px, `position: fixed`, `pointer-events: none`.
- Opacité **0,04–0,06**, `mix-blend-mode: multiply` — le papier reste blanc, l'encre reste nette.
- Statique (pas d'animation du grain). Couvre toute la page, y compris sous le bandeau `--ink`.
- `prefers-reduced-motion` : sans effet (déjà statique).

---

## 5. Plan images

Métier = formation/conseil : dossier, écran, atelier. Cadrage serré, lumière jour de bureau, `saturate 0.8`, ratio 3:2 ou 4:3, `object-fit: cover`, radius 0, bordure hairline `--line`. **Interdit** : handshake stock, portraits inventés, logos fake.

```
Hero : dossier de preuves relié sur bureau, vue plongeante serrée · sous scrim
       --paper 55 % si le H1 perd en contraste · [IMAGE À FOURNIR]
Scrolly 04 (option) : écran d'atelier en direct, mains + clavier · [IMAGE À FOURNIR]
Solution / modules : 3 figures — écran de mission annoté, notes manuscrites au
       stylo vert, dossier avec onglets P02/P04/P07 · [IMAGE À FOURNIR]
Preuve : ambiance table d'atelier (carnets, imprimés) ou [PREUVE À FOURNIR]
Footer : option — détail matière papier, alt=""
```

Sans shoot : tous les slots restent `[IMAGE À FOURNIR]` — on ne remplace pas par du stock générique.

---

## 6. Ordre scroll + scrolly

1. **Hero** — H1 4 lignes, phrase clé surlignée `--highlight`, 2 CTA (primary `--accent` / secondary texte `--accent-ink`).
2. **Bandeau problème** — fond `--ink`, texte `--paper`. Seule zone inversée.
3. **Scrolly 01–04** — pin ~400vh, crossfade ease-out, **barre de progression = `--accent`** (1px → pleine hauteur, jamais `--accent-light`). Panneaux stylés en onglets de dossier : ref Fira Mono en haut à gauche (P02, P04, P07…), hairline `--line`. Mobile : stack vertical si le pin casse 60 fps.
4. **Solution + timeline** — timeline hairline verticale, jalons `--accent-light` (puces, pas de texte).
5. **7 modules** — grille hairlines, statuts signe + mot + couleur.
6. **Deal** — fond `--paper-accent`, filet gauche 3px `--accent`.
7. **Preuve** — chiffres en Public Sans 800, refs en Fira Mono.
8. **FAQ** — accordéon hairline.
9. **Footer CTA** — primary `--accent`, retour matière papier.

---

## 7. Motion

- Courbe unique : `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out long), 600–800 ms reveals, **pas de bounce**.
- CTA hover : `translateY(-2px)` + fond `--accent-ink`, 150 ms.
- FAQ : ouverture 200 ms, height auto → mesurée.
- Scrolly : crossfade 400 ms, barre `--accent` continue.
- `prefers-reduced-motion` : tout instantané, pin scrolly désactivé → stack.

---

## 8. Breakpoints

| | 375 | 768 | 1024 |
|---|---|---|---|
| Grille | 1 col, marges 16 | 2 cols modules, marges 24 | Pleine, marges 32, contenu max 1120 px |
| H1 | 32 px | 36 px | 44 px |
| Sections | 32/24 | 48/32 | 64/48 |
| Scrolly | Stack, pas de pin | Pin si 60 fps | Pin ~400vh |
| Header | Glass compact, CTA sticky bas blur 14 px | Glass complet | Glass complet |

---

## 9. A11y — contrastes (mesurés charte, sur blanc)

| Couple | Ratio | Usage autorisé |
|---|---|---|
| `#111814` / blanc | **18,03:1** AAA | Tout texte |
| Blanc / `#111814` | **18,03:1** AAA | Bandeau inversé |
| `#005D39` / blanc | **8,00:1** AAA | Titres, liens, boutons |
| Blanc / `#005D39` | **8,00:1** AAA | Texte CTA primary |
| `#9D381F` / blanc | **6,96:1** AA | Statut ↻ |
| `#5A675F` / blanc | **5,93:1** AA | Secondaire, statut ○ |
| `#316CA5` / blanc | **5,50:1** AA | Statut ◆ |
| `#707472` (--ink-faint) / blanc | **≈ 4,7:1** AA | Méta ≥ 14 px, jamais corps |
| `#148659` / blanc | **4,58:1** | Aplats, puces, signes — **PAS petit texte** |

- **Statuts** : signe + mot + couleur, jamais la couleur seule. Test avant publication : page en niveaux de gris, tout doit rester lisible.
- Focus visible : outline 2px `--accent`, offset 2px, sur tout interactif.
- Cibles tactiles ≥ 44 px sur 375.
- Images : `alt` concret (type + lieu + matière) ; textures décoratives `alt=""`.

---

## Surfaces (rappel composants)

- **Header** : `color-mix(in srgb, #FFFFFF 82%, transparent)` + `backdrop-filter: blur(18px)` + bordure basse `--line`.
- **Sticky CTA** : même traitement, blur 14 px.
- **Primary** : fond `--accent`, texte `--paper-light`, hover `--accent-ink` + `translateY(-2px)`.
- **Secondary** : texte `--accent-ink`, souligné hairline.
- **Deal** : fond `--paper-accent`, filet gauche 3px `--accent`.
- **Pills** : échelle `--accent` → `--ink-soft` → `--ink-faint`.
- Partout : radius 0, hairlines 1px, **aucune ombre portée**.
