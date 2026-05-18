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
    image: "/accompagnement-photos/accompagnement.jpg",
    heroImage: "/accompagnement-photos/accompagnement.jpg",
    forWho:
      "Vous êtes une association, une collectivité, un artiste ou un lieu culturel et vous souhaitez développer ou faire évoluer vos projets de manière claire, concrète et alignée.",
    audienceTitle: "Vous êtes au bon endroit si…",
    pricing: "70€ / heure",
    pricingLabel: "Tarif",
    detailsTitle: "Nos objectifs",
    detailsHeadline: "Renforcer, sécuriser, autonomiser, coopérer.",
    details: [
      "Renforcer vos compétences pour gagner en clarté et en assurance dans vos décisions.",
      "Sécuriser et structurer votre projet pour le rendre plus solide dans le temps.",
      "Vous rendre autonome dans la conduite de vos actions, sans dépendance extérieure.",
      "Développer la coopération locale pour renforcer les liens et l’impact collectif.",
    ],
    detailCardsTitle: "Étapes possibles d’accompagnement",
    detailCardsHeadline: "Les leviers de votre accompagnement",
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
      "Que votre projet soit en démarrage, en transition ou déjà lancé, le premier échange permet de clarifier vos besoins et d’identifier ensemble la façon de travailler la plus pertinente pour vous.",
    gallery: [
      { src: "/accompagnement-photos/photo accompagnement 1.jpg", alt: "Temps d’accompagnement individuel" },
      { src: "/photo accompagnement 2.jpg", alt: "Échange autour d’un projet" },
      { src: "/accompagnement-photos/photo accompagnement 3.jpg", alt: "Travail en duo sur le projet" },
      { src: "/accompagnement-photos/accompagnement.jpg", alt: "Accompagnement d’une initiative" },
      { src: "/accompagnement-photos/accompagnement-service.jpg", alt: "Session de travail accompagnée" },
      { src: "/accompagnement-photos/472582406_1148610116842351_8098215373238035797_n.jpg", alt: "Temps de travail accompagné" },
      { src: "/accompagnement-photos/4b6c03d5-fc6d-4645-aa03-b507b3369f2d.jpeg", alt: "Échange autour d’une initiative" },
      { src: "/accompagnement-photos/59defba1-00a8-4623-af00-0b8d8b729fea.jpg", alt: "Accompagnement sur le terrain" },
      { src: "/accompagnement-photos/c0fedab3-419e-471d-9949-60d194fa5d82.jpeg", alt: "Projet accompagné dans la durée" },
      { src: "/evenement_photos/evenement.avif", alt: "Atelier de structuration de projet" },
      { src: "/durabilite-service.jpg", alt: "Projet ancré dans le temps" },
      { src: "/34607743_2080354165312134_2777160724433076224_n.jpg", alt: "Initiative culturelle accompagnée" },
      { src: "/55840471_2549734928374053_3005791724908838912_n.jpg", alt: "Action locale accompagnée" },
    ],
  },
  {
    id: "02",
    slug: "ateliers-collectifs",
    title: "Ateliers collectifs",
    shortTitle: "Ateliers",
    summary: "Des ateliers pour apprendre en faisant.",
    image: "/ateliers-photos/atelier-service.jpg",
    heroImage: "/ateliers-photos/atelier-service.jpg",
    forWho:
      "Comprendre, tester, échanger et repartir avec des solutions utilisables.\nOn apprend ensemble, en travaillant sur des situations réelles.",
    audienceTitle: "On y vient pour",
    pricing: "3 heures ou une journée (6h)",
    pricingLabel: "Durée",
    detailsTitle: "Approches pédagogiques",
    detailsHeadline: "Une pédagogie active, ancrée dans la pratique.",
    detailsIntro:
      "Les ateliers se déroulent en groupe et de façon participative.\nIls peuvent durer 3 heures ou une journée (6h).\nOn alterne apports simples, exercices pratiques et échanges entre participants.\nL’objectif : repartir avec des idées claires et directement utiles.",
    details: [
      "Participation des participants.",
      "Valorisation des expériences.",
      "Co-construction des solutions.",
      "Apport d’outils concrets.",
    ],
    detailCardsTitle: "Exemples de thématiques d’ateliers",
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
      { src: "/ateliers-photos/atelier-service.jpg", alt: "Atelier participatif" },
      { src: "/ateliers-photos/474454915_1140663870314474_401543759975472705_n.jpg", alt: "Atelier en collectif" },
      { src: "/ateliers-photos/WhatsApp Image 2025-11-13 à 10.55.29_c356bdef.jpg", alt: "Temps d’atelier partagé" },
      { src: "/evenement_photos/scenebeauvais.avif", alt: "Atelier en collectif" },
      { src: "/placealart.avif", alt: "Animation d’un groupe de travail" },
      { src: "/evenement_photos/WhatsApp Image 2025-11-13 à 10.38.02_9704400f.jpg", alt: "Atelier et échanges collectifs" },
      { src: "/evenement_photos/WhatsApp Image 2025-11-13 à 10.40.37_4bbbf630.jpg", alt: "Temps partagé en groupe" },
      { src: "/evenement_photos/WhatsApp Image 2025-11-13 à 10.43.11_31c7ffc8.jpg", alt: "Animation participative" },
      { src: "/evenement_photos/WhatsApp Image 2025-11-13 à 10.44.08_ae32b207.jpg", alt: "Groupe réuni autour d’une action" },
      { src: "/evenement_photos/WhatsApp Image 2025-11-13 à 10.48.04_474070b3.jpg", alt: "Temps de travail collectif" },
      { src: "/evenement_photos/artiste en supermarché.jpg", alt: "Action artistique en espace public" },
    ],
  },
  {
    id: "03",
    slug: "coordination-de-reseaux",
    title: "Coordination des réseaux",
    shortTitle: "Réseaux",
    summary: "Créer des liens pour renforcer l’impact collectif.",
    image: "/reseaux-photos/reseaux-thumbnail.jpg",
    heroImage: "/reseaux-photos/reseaux-thumbnail.jpg",
    forWho:
      "Missions ponctuelles pour répondre à un besoin précis, accompagnement dans la durée pour structurer votre projet, appui à un réseau existant ou création de nouvelles dynamiques collectives.",
    audienceTitle: "Les formes d’intervention",
    detailsTitle: "Ce que cela permet concrètement",
    detailsHeadline: "Mieux se connaître, mieux coopérer, faire ensemble.",
    detailsIntro:
      "Dans un même territoire, les acteurs partagent souvent des enjeux communs mais disposent de peu d’espaces pour coopérer.\nNous aidons à créer, structurer et animer ces dynamiques collectives.",
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
      { src: "/reseaux-photos/reseaux-thumbnail.jpg", alt: "Travail en réseau sur le terrain" },
      { src: "/reseaux-photos/WhatsApp Image 2025-11-13 à 10.41.07_22723836.jpg", alt: "Rencontre de réseau" },
      { src: "/reseaux-photos/WhatsApp Image 2025-11-13 à 10.52.46_928ba089.jpg", alt: "Échange entre partenaires" },
      { src: "/reseaux-photos/WhatsApp Image 2025-11-13 à 10.53.11_e325ecf1.jpg", alt: "Temps collectif de réseau" },
      { src: "/hero-equipe.avif", alt: "Équipe et partenaires mobilisés" },
      { src: "/concerts-photos/concert-deux.jpg", alt: "Partenaires réunis lors d’un événement" },
      { src: "/concerts-photos/concert-quatre.jpg", alt: "Événement culturel coordonné" },
      { src: "/concerts-photos/concert-trois.jpg", alt: "Temps fort avec le réseau" },
      { src: "/concerts-photos/concert.jpg", alt: "Rencontre culturelle de territoire" },
      { src: "/evenement_photos/WhatsApp Image 2025-11-13 à 10.38.02_9704400f.jpg", alt: "Coordination d’acteurs sur le terrain" },
      { src: "/evenement_photos/34215720_2075759125771638_1014915267559424000_n.jpg", alt: "Réseau en action" },
      { src: "/evenement_photos/34322477_2075759319104952_9188054658218721280_n.jpg", alt: "Action collective locale" },
      { src: "/evenement_photos/17498622_1587572007923688_6795949634466666693_n.jpg", alt: "Rencontre collective" },
      { src: "/evenement_photos/17499000_1587572624590293_840996004460716373_n.jpg", alt: "Temps de réseau partagé" },
      { src: "/evenement_photos/19fbf899-90dc-4fc1-826e-a310ae671321.jpeg", alt: "Échange entre acteurs" },
      { src: "/evenement_photos/WhatsApp Image 2025-11-13 à 10.51.17_27d5612a.jpg", alt: "Animation de réseau" },
      { src: "/evenement_photos/collectif-thumbnail.jpg", alt: "Le collectif en action" },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
