export type ServiceDetail = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  image: string;
  heroImage: string;
  forWho?: string;
  audienceTitle?: string;
  pricing?: string;
  pricingLabel?: string;
  detailsTitle?: string;
  detailsHeadline?: string;
  detailsIntro?: string;
  details: string[];
  focus?: string;
  focusTitle?: string;
  detailCardsTitle?: string;
  detailCardsHeadline?: string;
  detailCards?: {
    title: string;
    description?: string;
    bullets: string[];
  }[];
  gallery?: { src: string; alt: string }[];
};

export const services: ServiceDetail[] = [
  {
    id: "01",
    slug: "accompagnement-individuel",
    title: "Accompagnement individuel",
    shortTitle: "Accompagnement",
    summary:
      "Un accompagnement sur mesure pour faire grandir vos projets, de l’idée à la concrétisation.",
    image: "/accompagnement-service.jpg",
    heroImage: "/accompagnement-service.jpg",
    forWho:
      "Vous êtes une association, une collectivité, un artiste ou un lieu culturel et vous souhaitez développer ou faire évoluer vos projets de manière claire, concrète et alignée.",
    audienceTitle: "Vous êtes au bon endroit si…",
    pricing: "70€ / heure",
    pricingLabel: "Tarif",
    detailsTitle: "Nos objectifs pour votre accompagnement",
    detailsHeadline: "Renforcer, sécuriser, autonomiser, coopérer.",
    detailsIntro:
      "Chaque accompagnement part de votre réalité : vos contraintes, vos ressources, votre rythme. Vous repartez avec des prochaines étapes simples, concrètes et réellement applicables.",
    details: [
      "Renforcer vos compétences pour gagner en autonomie et en clarté dans vos décisions.",
      "Rendre votre projet plus solide pour sécuriser et faire durer vos actions dans le temps.",
      "Vous rendre plus autonome pour avancer sans dépendance extérieure.",
      "Développer la coopération locale pour créer plus de liens et d’impact collectif.",
    ],
    detailCardsTitle: "Étapes possibles d’accompagnement",
    detailCardsHeadline: "Une direction claire. Des actions concrètes.",
    detailCards: [
      {
        title: "01. Clarifier votre projet",
        description: "Définir une vision claire et partagée.",
        bullets: [
          "Formaliser les objectifs.",
          "Identifier les priorités.",
          "Clarifier le positionnement.",
        ],
      },
      {
        title: "02. Structurer l’organisation",
        description: "Mettre en place un fonctionnement adapté.",
        bullets: [
          "Définir les rôles et responsabilités.",
          "Travailler l’organisation interne.",
          "Améliorer les modes de décision.",
        ],
      },
      {
        title: "03. Modèle économique",
        description: "Consolider la viabilité du projet.",
        bullets: [
          "Construire ou ajuster le budget.",
          "Identifier les sources de financement.",
          "Rechercher de nouvelles ressources.",
        ],
      },
      {
        title: "04. Développer le projet",
        description: "Accompagner l’évolution et le rayonnement.",
        bullets: [
          "Définir une stratégie de développement.",
          "Mettre en place des actions.",
          "Identifier les partenariats.",
        ],
      },
    ],
    focusTitle: "Partons de votre réalité.",
    focus:
      "Que votre projet soit en démarrage, en transition ou déjà lancé, le premier échange permet de clarifier vos besoins et d’identifier l’accompagnement le plus pertinent pour vous.",
    gallery: [
      { src: "/photo accompagnement 1.jpg", alt: "Temps d’accompagnement individuel" },
      { src: "/photo accompagnement 2.jpg", alt: "Échange autour d’un projet" },
      { src: "/photo accompagnement 3.jpg", alt: "Travail en duo sur le projet" },
      { src: "/accompagnement.jpg", alt: "Accompagnement d’une initiative" },
      { src: "/accompagnement-service.jpg", alt: "Session de travail accompagnée" },
      { src: "/evenement.avif", alt: "Atelier de structuration de projet" },
    ],
  },
  {
    id: "02",
    slug: "ateliers-collectifs",
    title: "Ateliers collectifs",
    shortTitle: "Ateliers",
    summary: "Des ateliers pour apprendre en faisant.",
    image: "/real-atelier-service.jpg",
    heroImage: "/real-atelier-service.jpg",
    forWho:
      "Comprendre, tester, échanger et repartir avec des solutions utilisables. On apprend ensemble, en travaillant sur des situations réelles.",
    audienceTitle: "On y vient pour",
    pricing: "3 heures ou une journée (6h)",
    pricingLabel: "Durée",
    detailsTitle: "Approches pédagogiques",
    detailsHeadline: "Une pédagogie active, ancrée dans la pratique.",
    detailsIntro:
      "Les ateliers se déroulent en groupe et de façon participative. Ils peuvent durer 3 heures ou une journée (6h). On alterne apports simples, exercices pratiques et échanges entre participants. L’objectif : repartir avec des idées claires et directement utiles.",
    details: [
      "Participation des participants.",
      "Valorisation des expériences.",
      "Co-construction des solutions.",
      "Apport d’outils concrets.",
    ],
    detailCardsTitle: "Exemples d’ateliers",
    detailCardsHeadline: "Des formats concrets pour avancer ensemble.",
    detailCards: [
      {
        title: "Structuration de projet",
        description: "Clarifier et organiser les actions.",
        bullets: [
          "Clarifier son projet.",
          "Définir des objectifs.",
          "Organiser ses actions.",
        ],
      },
      {
        title: "Modèle économique",
        description: "Sécuriser l’activité dans le temps.",
        bullets: [
          "Construire un budget.",
          "Identifier des financements.",
          "Sécuriser son activité.",
        ],
      },
      {
        title: "Animation de collectif",
        description: "Mieux coopérer au quotidien.",
        bullets: [
          "Mobiliser des bénévoles.",
          "Organiser le travail en équipe.",
          "Améliorer la prise de décision.",
        ],
      },
      {
        title: "Communication",
        description: "Mieux faire connaître ses actions.",
        bullets: [
          "Valoriser ses actions.",
          "Structurer sa communication.",
          "Toucher ses publics.",
        ],
      },
    ],
    focusTitle: "Ateliers à la carte",
    focus:
      "La force du collectif, au service de vos projets. Nous construisons des formats sur mesure selon vos besoins et mobilisons les bonnes compétences pour proposer un accompagnement utile, concret et adapté à votre réalité.",
    gallery: [
      { src: "/photo formation 1.jpg", alt: "Atelier collectif autour d’une table" },
      { src: "/photo formation 2.jpg", alt: "Temps d’échange en groupe" },
      { src: "/real-atelier-service.jpg", alt: "Atelier participatif" },
      { src: "/scenebeauvais.avif", alt: "Atelier en collectif" },
      { src: "/placealart.avif", alt: "Animation d’un groupe de travail" },
      { src: "/groupe.avif", alt: "Participants réunis en atelier" },
    ],
  },
  {
    id: "03",
    slug: "coordination-de-reseaux",
    title: "Coordination des réseaux",
    shortTitle: "Réseaux",
    summary: "Créer des liens pour renforcer l’impact collectif.",
    image: "/reseau-service.jpg",
    heroImage: "/reseau-service.jpg",
    forWho:
      "Missions ponctuelles pour répondre à un besoin précis, accompagnement dans la durée pour structurer votre projet, appui à un réseau existant ou création de nouvelles dynamiques collectives.",
    audienceTitle: "Les formes d’intervention",
    detailsTitle: "Ce que cela permet concrètement",
    detailsHeadline: "Mieux se connaître, mieux coopérer, faire ensemble.",
    detailsIntro:
      "Dans un même territoire, les acteurs ont souvent des enjeux communs, mais peu d’espaces pour travailler ensemble. Nous aidons à créer, structurer et animer des dynamiques collectives.",
    details: [
      "Créer des espaces de rencontre utiles.",
      "Faciliter la coopération entre acteurs.",
      "Structurer des réseaux dans la durée.",
      "Donner plus de cohérence aux actions.",
      "Renforcer l’impact collectif.",
    ],
    focusTitle: "Complémentarité",
    focus:
      "La coordination de réseaux vient en complément de l’accompagnement individuel (structuration des acteurs), des ateliers collectifs (montée en compétences) et du collectif d’intervenants (mobilisation de ressources).",
    gallery: [
      { src: "/regroupementbeauvais.avif", alt: "Rencontre d’acteurs locaux" },
      { src: "/regroupement.avif", alt: "Temps de coordination collective" },
      { src: "/groupe.avif", alt: "Réseau d’acteurs en réunion" },
      { src: "/concert.avif", alt: "Coordination de partenaires" },
      { src: "/reseau-service.jpg", alt: "Travail en réseau sur le terrain" },
      { src: "/hero-equipe.avif", alt: "Équipe et partenaires mobilisés" },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
