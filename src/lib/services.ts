export type ServiceDetail = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  image: string;
  heroImage: string;
  forWho?: string;
  pricing?: string;
  details: string[];
  focus?: string;
};

export const services: ServiceDetail[] = [
  {
    id: "01",
    slug: "accompagnement-individuel",
    title: "Accompagnement individuel",
    shortTitle: "Accompagnement",
    summary:
      "Un accompagnement sur mesure de projets individuels ou collectifs, à toutes les étapes de leur développement.",
    image: "/atelier.png",
    heroImage: "/atelier.png",
    details: [
      "Renforcer les compétences des acteurs associatifs.",
      "Assurer la pérennité et la viabilité de leurs projets.",
      "Favoriser l’autonomie des porteurs de projets.",
      "Contribuer à la vitalité du tissu associatif local, en soutenant l’innovation et la coopération.",
    ],
    forWho:
      "Les associations, collectivités, artistes et lieux culturels engagés dans des démarches de développement, de transition ou de consolidation de leurs activités.",
    pricing: "70€ / heure",
  },
  {
    id: "02",
    slug: "ateliers-collectifs",
    title: "Ateliers collectifs",
    shortTitle: "Ateliers",
    summary:
      "Des ateliers de gestion de projets conçus pour répondre aux besoins spécifiques et aux aspirations de chaque porteur d’initiative.",
    image: "/real-atelier-service.jpg",
    heroImage: "/real-atelier-service.jpg",
    details: [
      "Professionnaliser les pratiques associatives.",
      "Renforcer les dynamiques collectives en favorisant l’échange.",
      "Outiller concrètement les associations.",
      "Soutenir l’autonomie et la pérennité des structures.",
    ],
    forWho:
      "Les bénévoles, salarié-e-s, dirigeant-e-s, responsables associatifs, qu’ils soient débutants ou expérimentés, en transition ou en croissance.",
    pricing: "50€ / 3 heures - 100€ / 6 heures",
  },
  {
    id: "03",
    slug: "coordination-de-reseaux",
    title: "Coordination de réseaux",
    shortTitle: "Réseaux",
    summary: "La gestion et la coordination de réseaux.",
    image: "/reseau-service.jpg",
    heroImage: "/reseau-service.jpg",
    details: [
      "Structurer et animer les réseaux pour renforcer la coopération entre acteurs.",
      "Faciliter la circulation de l’information.",
      "Coordonner les actions collectives pour en accroître l’impact et la visibilité.",
      "Renforcer la cohésion et l’engagement des membres pour soutenir des dynamiques durables.",
    ],
    forWho:
      "Les réseaux associatifs, les collectifs d’acteurs locaux, les partenariats multi-acteurs, les structures porteuses ou gestionnaires de réseaux.",
    pricing: "70€ / heure",
  },
  {
    id: "04",
    slug: "durabilite-des-initiatives",
    title: "Durabilité des initiatives",
    shortTitle: "Durabilité",
    summary:
      "La recherche de systèmes économiques qui permettent la durabilité des initiatives associatives.",
    image: "/durabilite-service.jpg",
    heroImage: "/durabilite-service.jpg",
    details: [
      "Explorer des modèles économiques durables adaptés aux réalités de terrain.",
      "Clarifier les ressources, les partenaires et les équilibres nécessaires dans le temps.",
      "Consolider les initiatives associatives en articulant projet, gouvernance et viabilité.",
    ],
    focus:
      "Une approche qui articule sens du projet, capacité d’action et continuité, pour soutenir des initiatives associatives réellement durables.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
