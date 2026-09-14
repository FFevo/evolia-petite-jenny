// Copy canonique : brief/copy-lp.md — faits : brief/informations-produit-marketing.md.
// Transcription EXACTE, aucune reformulation. Les crochets [À PRÉCISER] / [PREUVE À FOURNIR]
// sont des marqueurs de conformité : ne jamais les remplacer par des chiffres inventés.
// Convention : les segments **…** marquent l'emphase — les composants les rendent en <strong>
// (H1 excepté : l'emphase y est structurée via l2Strong / l4, surlignage --highlight).

export const lp = {
  // Nom commercial non figé : la LP utilise l'intitulé interne du parcours.
  brand: "Consultant IA & Automatisation",

  kicker: "CONSULTANT IA & AUTOMATISATION / MISSION · AGENTS · DOSSIER DE PREUVES",

  // H1 — 4 lignes chrono ; l2Strong et l4 portent l'emphase (phrase clé surlignée).
  h1: {
    l1: "Notre parcours Consultant IA",
    l2Before: "opérationnel dès ",
    l2Strong: "la première session.",
    l3: "Dossier de preuves en ",
    l4: "six semaines.",
  },

  persona:
    "Pour les profils métier, support, projet ou no-code qui visent le conseil en IA, **sans coder.**",

  mecanisme:
    "36 heures à distance, en direct, sur un cas conduit de bout en bout. **Claude Code et Codex dès les premières heures.** Dossier de preuves visé en **six semaines.**",

  cta: {
    primary: "Candidater",
    secondary: "Voir ce qui bloque",
    sticky: "Candidater",
    faq: "Une question avant de candidater ?",
  },

  disclaimer:
    "L'admission précède l'inscription : nous vérifions que le parcours vous convient avant tout engagement. Aucun tarif affiché hors dossier — tarif [À PRÉCISER]. « Consultant IA & Automatisation » est l'intitulé du parcours ; la certification visée est la RS6776 « Création de contenus rédactionnels et visuels par l'usage responsable de l'intelligence artificielle générative », délivrée par INKREA FORMATIONS, évaluation organisée par AUTONOMIA.",

  // 4 preuves — le slot RS6776 reste [PREUVE À FOURNIR] : aucun taux inventé avant la 1re cohorte.
  preuves: [
    { value: "36 heures", label: "sur six semaines — 24 h encadrées + 12 h de projet" },
    { value: "6 à 10 participants", label: "par cohorte, jamais plus" },
    { value: "100 % à distance", label: "0 % asynchrone — chaque session est en direct" },
    {
      value: "Taux de réussite RS6776",
      label: "[PREUVE À FOURNIR — indisponible avant la première cohorte]",
    },
  ],

  nav: {
    programme: "Programme",
    faq: "FAQ",
  },

  // Problème — bandeau inversé (seule zone --ink) puis scrolly 01→04, refs Fira Mono P01→P04.
  probleme: {
    bandeau: "CE QUI CASSE LA RECONVERSION IA",
    sous: "PLUS DE TUTOS, LE PROBLÈME RESTE LE MÊME.",
    panels: [
      {
        id: "01",
        ref: "P01",
        titre: "Un certificat n'est pas encore une mission.",
        corps: "Vous empilez tutos et badges. Aucun client ne les lit.",
        accent: "Le marché paie des preuves. Pas des captures d'écran.",
        statuts: ["TUTOS EMPILÉS", "BADGE SANS PROJET", "CRÉDIBILITÉ ZÉRO"],
      },
      {
        id: "02",
        ref: "P02",
        titre: "Vos outils IA ne parlent à personne.",
        corps: "Un prompt ici. Une automatisation là. Rien ne tient dans un dossier.",
        accent: "Sans dossier, chaque essai repart de zéro.",
        statuts: ["OUTILS ÉPARPILLÉS", "PROMPTS PERDUS", "AUCUNE TRACE"],
      },
      {
        id: "03",
        ref: "P03",
        titre: "Après le tuto, la preuve s'arrête.",
        corps: "Vous savez refaire l'exemple. Vous ne pouvez pas montrer ce que vous avez conduit.",
        accent: "Personne ne sait ce que vous valez sur un cas réel.",
        statuts: ["PREUVE ABSENTE", "CAS CLIENT VIDE", "DISCOURS INVÉRIFIABLE"],
      },
      {
        id: "04",
        ref: "P04",
        titre: "Chaque étape nourrit la suivante.",
        corps: "Chaque cap alimente la mission. La mission remplit le dossier.",
        accent: "La formation produit la preuve.",
        statuts: ["CAP → MISSION", "MISSION → DOSSIER", "DOSSIER → PREUVE"],
      },
    ],
  },

  solution: {
    h2a: "Une seule mission.",
    h2b: "Toutes les **preuves utiles.**",
    timeline: [
      "S1 — CADRER la mission",
      "S2 — CONSTRUIRE avec les agents",
      "S3 — AUTOMATISER le cas",
      "S4 — VALIDER les caps",
      "S5 — DOCUMENTER les preuves",
      "S6 — BOUCLER le dossier",
    ],
    note: "24 heures encadrées en direct. 12 heures de projet entre les sessions. Les quatre caps sont des évaluations pédagogiques internes : elles rythment le parcours, elles ne remplacent pas l'examen certificatif RS6776.",
    modules: [
      "MISSION — un cas conduit de bout en bout, sur données du parcours",
      "QUATRE CAPS — validations internes, rythme tenu",
      "DOSSIER DE PREUVES — ce que vous montrez ensuite",
      "SYNCHRONE — 24 h en direct, présence requise",
      "RS6776 — examen distinct : rapport sur six cas + soutenance de 20 minutes",
      "COHORTE — 6 à 10 participants, jamais un amphithéâtre",
      "CLAUDE CODE + CODEX — le périmètre agentique, par abonnement",
    ],
    deal: "Le tarif n'est pas caché, il n'est pas encore public : [À PRÉCISER]. Il vous est communiqué avant toute inscription, avec les conditions de paiement et d'annulation. Le financement CPF passe par Autonomia, habilitée pour la RS6776 — prise en charge selon votre dossier, sans promesse de couverture à 100 %. Éventuel reste à charge : [À PRÉCISER].",
  },

  // Preuve — 4 slots, tous [PREUVE À FOURNIR] : rien ne s'affiche avant les résultats réels du pilote.
  proof: [
    {
      quote: "[PREUVE À FOURNIR — témoignage participant, première cohorte]",
      kpi: "[PREUVE À FOURNIR]",
    },
    {
      quote: "[PREUVE À FOURNIR — témoignage participant, première cohorte]",
      kpi: "[PREUVE À FOURNIR]",
    },
    {
      quote: "[PREUVE À FOURNIR — retour Autonomia sur les passages RS6776]",
      kpi: "taux de présentation / réussite [PREUVE À FOURNIR — indisponible avant la première cohorte]",
    },
    {
      quote: "[PREUVE À FOURNIR — suivi à 30 et 90 jours]",
      kpi: "[PREUVE À FOURNIR]",
    },
  ],

  proofNote:
    "Aucun taux de satisfaction, de réussite ou de débouché n'est affiché avant les résultats réels du pilote.",

  faq: [
    {
      q: "Qu'est-ce qui est inclus — et exclu ?",
      a: "36 heures sur six semaines : 24 h encadrées en direct, 12 h de projet, quatre caps internes et un dossier de preuves. Exclus : les données client réelles, le développement avancé, les API et les modèles locaux — et toute promesse de revenu, de mission ou d'emploi.",
    },
    {
      q: "Faut-il déjà connaître l'IA ou savoir coder ?",
      a: "Non. Aucune connaissance préalable en IA, programmation ou automatisation n'est exigée. Le parcours travaille sur Claude Code et Codex, utilisés par abonnement — fournis ou à votre charge : [À PRÉCISER].",
    },
    {
      q: "Que repartez-vous avec concrètement ?",
      a: "Un dossier de preuves issu de votre mission, et les résultats de vos quatre caps. L'examen RS6776 est distinct : rapport écrit sur six cas pratiques, puis soutenance orale de 20 minutes, organisé par Autonomia. Documents exacts remis en fin de parcours : [À PRÉCISER].",
    },
    {
      q: "Combien ça coûte et comment financer ?",
      a: "Tarif : [À PRÉCISER] — communiqué avant toute inscription définitive. Le parcours est rattaché à la RS6776, finançable au titre du CPF via Autonomia ; le montant pris en charge dépend de votre dossier, sans garantie de couverture totale. Reste à charge éventuel et frais de certification : [À PRÉCISER].",
    },
    {
      q: "Que veut dire « dossier de preuves en six semaines » ?",
      a: "Six semaines de parcours, pas six semaines d'attente : vous travaillez dès la première session, en direct, avec 6 à 10 participants. La modalité est entièrement à distance mais non asynchrone — votre présence aux temps synchrones et aux quatre caps est requise.",
    },
  ],

  // Formulaire — la LP n'affiche que la 1re étape du tunnel, jamais le résultat.
  form: {
    title: "Demander l'admission",
    hint: "Information → candidature → admission (positionnement + échange ~20 min) → dossier CPF sur Mon Compte Formation → inscription définitive. Chaque étape a ses propres informations ; la page ne promet que l'entrée dans le tunnel, jamais le résultat.",
    fields: [
      "Fonction actuelle et durée d'expérience professionnelle",
      "Type de projet : évolution professionnelle, reconversion ou développement d'une activité indépendante",
      "Expérience avec les fichiers, documents en ligne et tableurs",
      "Disponibilité pour les dates et la charge annoncées",
      "Système d'exploitation, type d'ordinateur et possibilité d'installer des applications",
      "Disponibilité des abonnements et comptes exigés selon les conditions de la cohorte",
      "Mode de financement envisagé, dont CPF via Autonomia",
      "Besoin d'être recontacté pour étudier une adaptation ou une situation de handicap",
    ],
  },

  legal: {
    line: "« Consultant IA & Automatisation » est l'intitulé du parcours ; la certification visée est la RS6776 « Création de contenus rédactionnels et visuels par l'usage responsable de l'intelligence artificielle générative », délivrée par INKREA FORMATIONS, évaluation organisée par AUTONOMIA.",
    rs6776: "RS6776 « Création de contenus rédactionnels et visuels par l'usage responsable de l'intelligence artificielle générative »",
  },

  // Incompatibilités — rendues visibles avant la candidature (source : informations-produit-marketing.md).
  incompatibilites: [
    "Recherche d'une formation entièrement autonome ou uniquement composée de vidéos",
    "Impossibilité de participer aux temps synchrones et aux quatre validations internes",
    "Impossibilité d'installer ou d'utiliser les environnements requis sur l'ordinateur prévu",
    "Souhait d'utiliser des données client réelles, confidentielles ou non anonymisées pendant la formation",
    "Recherche d'une formation centrée sur les API, le développement logiciel avancé, les modèles locaux ou la mise en production de systèmes sensibles",
    "Attente d'une garantie de revenu, de mission, d'emploi ou de maîtrise exhaustive des outils",
    "Confusion entre l'intitulé du parcours Consultant IA & Automatisation et l'intitulé de la certification RS6776",
  ],
} as const
