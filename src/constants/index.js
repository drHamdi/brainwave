import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import WebP from '../assets/Webpack.png'
import WebPa from '../assets/Webpa.png'
import SM from '../assets/Sm.png'
import Serv from '../assets/Serv.png'

export const navigation = [
  {
    id: "0",
    title: "Acceuil",
    url: "#features",
    Link : "/" ,
  },
  {
    id: "1",
    title: "A Propos",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Services",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Contact",
    url: "#clients",
  },

  {
    id: "5",
    title: "Se connecter",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Forte présence visuelle",
  "Gérer et Administrer les plateformes",
  "Integration de",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Découvrez une expérience web",
    text: "Faites confiance à notre savoir-faire pour propulser votre présence en ligne vers de nouveaux sommets.",
    date: "May 2023",
    status: "Fait",
    imageUrl: WebP,
    colorful: true,
  },
  {
    id: "1",
    title: "Débuter votre affaire Marketing digital",
    text: "Débutez votre aventure dans le marketing digital avec assurance. Notre expertise vous guide à travers les méandres du paysage numérique.",
    date: "May 2023",
    status: "progress",
    imageUrl: WebPa,
  },
  {
    id: "2",
    title: "Planification / Stratégie de contenu ",
    text: "En suivant ces points, les gestionnaires des réseaux sociaux peuvent créer une présence en ligne efficace et engageante",
    date: "May 2023",
    status: "done",
    imageUrl: SM,
  },
  {
    id: "3",
    title: "Notre expertise garantit des résultats tangibles et durables.",
    text: "Notre agence de marketing digital se spécialise dans la création de stratégies sur mesure pour maximiser votre présence en ligne. Nous utilisons les dernières tendances et technologies pour améliorer votre visibilité, engager votre audience et atteindre vos objectifs commerciaux.",
    date: "May 2023",
    status: "progress",
    imageUrl: Serv,
  },
];

export const collabText =
  "Avec une automatisation intelligente et une sécurité de premier ordre, c'est la solution idéale pour les équipes qui cherchent à travailler plus intelligemment.";

export const collabContent = [
  {
    id: "0",
    title: "Integration des outlis performants",
    text: collabText,
  },
  {
    id: "1",
    title: "Automatisation intelligente",
  },
  {
    id: "2",
    title: "Sécurité de premier ordre",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "NEXTEP",
    price: "700",
    features: [
      "Création de site web vitrine : 5 à 10 pages ",
      "Design responsive : Adapté aux mobiles et tablettes",
      "Hébergement web : 1 an inclus",
      "Nom de domaine : 1 an inclus",
      "Référencement de base (SEO) : Optimisation on-page",
      "Intégration réseaux sociaux : Liens vers vos comptes sociaux",
      "Support technique : 3 mois inclus",
      "Formation basique à l'utilisation du site : 2 heures",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "NEXTEP service avancé",
    price: "1300",
    features: [
      "Création de site web complet : Jusqu'à 20 pages",
      "Design personnalisé : Création graphique sur mesure",
      "Hébergement web : 2 ans inclus",
      "Nom de domaine : 2 ans inclus",
      "Référencement avancé (SEO) : Optimisation on-page et off-page, analyse des mots-clés",
      "Gestion des réseaux sociaux : 3 plateformes, 10 publications par mois",
      "Blog et contenu : Intégration d'un blog, 5 articles inclus",
      "Support technique : 1 an inclus",
      "Formation avancée à l'utilisation du site : 5 heures",
      "Analytique web : Rapport mensuel de performance",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "NEXTEP, analyses avancées, compte dédié",
    price: "1800",
    features: [
      "Création de site web complet : Pages illimitées, fonctionnalités avancées (e-commerce, forums, etc.)",
      "Design haut de gamme : Design UX/UI sur mesure",
      "Hébergement web : 3 ans inclus avec SSL",
      "Nom de domaine : 3 ans inclus",
      "Référencement professionnel (SEO) : Stratégie complète, backlinking, marketing de contenu",
      "Gestion des réseaux sociaux : Gestion complète, création de contenu, publicité payante (PPC)",
      "Marketing digital : Campagnes email marketing, Google Ads, Facebook Ads",
      "Support technique : 2 ans inclus avec intervention prioritaire",
      "Formation complète à l'utilisation du site et des outils : 10 heures",
      "Analytique web et rapport de performance : Rapport détaillé avec analyse et recommandations mensuelles",
      "Maintenance continue : Mises à jour régulières et optimisation",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Engagement Visuelle",
    text: "l'objectif est de maintenir l'intérêt et d'encourager l'interaction des utilisateurs. Cela inclut la gestion des réseaux sociaux, l'email marketing.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "L'acquisition de trafic / Marketing de contenu",
    text: "L'objectif ici est d'attirer des visiteurs sur les plateformes en ligne d'une entreprise, telles que le site web.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "fidélisation et collaborations",
    text: "Le but final est de convertir les visiteurs en clients payants et de les fidéliser. Les stratégies incluent les offres promotionnelles, les campagnes de remarketing.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Création d'une identité digital",
    text: "forge la présence en ligne d'une entreprise à travers un design visuel distinctif, une voix authentique et une cohérence de marque, renforçant ainsi sa reconnaissance et son impact auprès de son audience cible.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Gestion des Réseaux Sociaux",
    text: "Permet aux utilisateurs de trouver rapidement des réponses à leurs questions sans avoir à rechercher dans plusieurs sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Création Site et application web",
    text: "L'application utilise le traitement du langage naturel pour comprendre les requêtes des utilisateurs et fournir des réponses précises et pertinentes.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },

];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/i/flow/login",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://web.telegram.org/k/",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/profile.php?id=61559917217925",
  },
];
