// src/data/areas.ts
// Central data source for all 10 Gargi Group business areas
// NOTE: Icons stored as string keys to allow passing through Server Component boundaries

export type AreaIconName =
  | "GraduationCap"
  | "Sprout"
  | "Hotel"
  | "Building2"
  | "TrendingUp"
  | "Flame"
  | "Heart"
  | "Users"
  | "HandHeart"
  | "Tv2";

export interface AreaData {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  iconName: AreaIconName;
  color: string;
  heroImage: string;
  keyFocusAreas: string[];
  approach: string;
  objectives: string[];
  relatedAreas: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const areas: AreaData[] = [
  {
    id: "education",
    slug: "education",
    number: "01",
    title: "Education & Skill Development",
    shortTitle: "Education",
    tagline: "Building skills. Creating opportunities.",
    description:
      "Fostering knowledge, vocational learning and employability through education and skill development initiatives across Odisha.",
    longDescription:
      "Gargi Group explores opportunities in education and skill development with a focus on learning, vocational training, employability and capacity building. Our objective is to support initiatives that strengthen practical skills, improve access to learning and create meaningful opportunities for individuals and communities. All activities are undertaken in accordance with applicable laws and regulatory requirements.",
    iconName: "GraduationCap",
    color: "#1D524D",
    heroImage:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80",
    keyFocusAreas: [
      "Skill development and vocational training initiatives",
      "Employability and career readiness programmes",
      "Capacity building for youth and communities",
      "Educational awareness and outreach",
      "Knowledge development and learning support",
      "Training and certification facilitation",
    ],
    approach:
      "We seek to develop and support education and skill initiatives that respond to changing industry requirements and community needs. Our approach focuses on practical learning, employable skills, partnerships and long-term capacity building.",
    objectives: [
      "Support access to quality education and learning resources",
      "Develop vocational and technical skill pathways",
      "Enhance employability of youth and communities",
      "Foster a culture of lifelong learning",
      "Build capacity at individual and community levels",
    ],
    relatedAreas: ["empowerment", "community-development", "charitable-development"],
    seo: {
      title: "Education & Skill Development | Gargi Group Odisha",
      description:
        "Gargi Group's education and skill development initiatives focus on vocational learning, employability, capacity building and educational support in Bhubaneswar, Odisha.",
      keywords: [
        "skill development Odisha",
        "education initiatives Bhubaneswar",
        "vocational training Odisha",
        "Gargi Group education",
        "employability programmes Odisha",
      ],
    },
  },
  {
    id: "agriculture",
    slug: "agriculture",
    number: "02",
    title: "Agriculture & Allied Activities",
    shortTitle: "Agriculture",
    tagline: "Nurturing Land. Sustaining Communities.",
    description:
      "Supporting agricultural development, rural opportunities and sustainable farming practices across Odisha and allied regions.",
    longDescription:
      "Gargi Group explores opportunities in agriculture and allied activities with a focus on sustainable practices, rural livelihoods and agricultural value chain development. Our objective is to support initiatives that contribute to productive agriculture, rural opportunity and responsible development. All activities are undertaken in accordance with applicable laws and regulatory requirements.",
    iconName: "Sprout",
    color: "#2a7055",
    heroImage:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80",
    keyFocusAreas: [
      "Agricultural development and support activities",
      "Rural livelihood opportunities",
      "Sustainable farming practices and awareness",
      "Value-chain development in agri-sectors",
      "Allied agricultural activities",
      "Farmer-oriented initiatives and support",
    ],
    approach:
      "We seek to identify opportunities across the agricultural value chain while considering local needs, sustainability and long-term economic value.",
    objectives: [
      "Support sustainable agricultural practices",
      "Create rural livelihood opportunities",
      "Explore agricultural value chain development",
      "Encourage responsible use of resources",
      "Support opportunities in allied agricultural activities",
    ],
    relatedAreas: ["community-development", "empowerment", "charitable-development"],
    seo: {
      title: "Agriculture & Allied Activities | Gargi Group Odisha",
      description:
        "Gargi Group supports agricultural development, rural livelihoods and sustainable farming initiatives in Odisha, with a focus on farmer welfare and value-chain development.",
      keywords: [
        "agriculture development Odisha",
        "rural livelihood Odisha",
        "sustainable farming Bhubaneswar",
        "Gargi Group agriculture",
        "agri-sector Odisha",
      ],
    },
  },
  {
    id: "hospitality",
    slug: "hospitality",
    number: "03",
    title: "Service & Hospitality",
    shortTitle: "Hospitality",
    tagline: "Elevating Experiences. Setting Standards.",
    description:
      "Developing service excellence, hospitality operations and tourism-related opportunities in Odisha and beyond.",
    longDescription:
      "Gargi Group explores opportunities in service and hospitality with a focus on service quality, operational standards, guest experience and tourism related development. Our interest includes initiatives that respond to evolving customer expectations and the wider hospitality and tourism ecosystem.",
    iconName: "Hotel",
    color: "#688882",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
    keyFocusAreas: [
      "Hospitality Operations",
      "Guest Experience",
      "Service Excellence",
      "Tourism Development",
      "Hospitality Skill Development",
      "Cultural & Heritage Tourism",
    ],
    approach:
      "We believe quality hospitality depends on capable teams, efficient operations and a strong understanding of guest and community needs.",
    objectives: [
      "Develop quality service standards",
      "Support hospitality sector opportunities",
      "Strengthen workforce capabilities",
      "Explore tourism related initiatives",
      "Create meaningful customer experiences",
    ],
    relatedAreas: ["education", "real-estate", "media-entertainment"],
    seo: {
      title: "Service & Hospitality | Gargi Group Odisha",
      description:
        "Gargi Group explores service excellence, hospitality operations and tourism-related development opportunities in Bhubaneswar, Odisha.",
      keywords: [
        "hospitality development Odisha",
        "tourism Bhubaneswar",
        "service sector Odisha",
        "Gargi Group hospitality",
        "hotel development Odisha",
      ],
    },
  },
  {
    id: "real-estate",
    slug: "real-estate",
    number: "04",
    title: "Real Estate & Property Development",
    shortTitle: "Real Estate",
    tagline: "Building Spaces. Creating Futures.",
    description:
      "Exploring responsible property development, residential planning and infrastructure opportunities in Bhubaneswar and Odisha.",
    longDescription:
      "Real estate is an important area of Gargi Group's business interests. We explore opportunities in property development, residential planning, commercial development and related infrastructure. Our approach combines practical planning, regulatory compliance and long-term value creation.",
    iconName: "Building2",
    color: "#1D524D",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
    keyFocusAreas: [
      "Property Development",
      "Residential Development",
      "Commercial Development",
      "Land & Infrastructure",
      "Urban & Peri-Urban Opportunities",
      "Responsible Land Use",
    ],
    approach:
      "We approach real estate with a focus on sound planning, quality development, regulatory compliance and sustainable value creation.",
    objectives: [
      "Develop commercially viable projects",
      "Promote responsible land use",
      "Support residential and commercial development",
      "Maintain applicable statutory standards",
      "Create long-term value through quality projects",
    ],
    relatedAreas: ["finance", "hospitality", "community-development"],
    seo: {
      title: "Real Estate & Property Development | Gargi Group Odisha",
      description:
        "Gargi Group explores responsible real estate and property development opportunities in Bhubaneswar, Odisha, with a focus on community-oriented, sustainable planning.",
      keywords: [
        "real estate Bhubaneswar",
        "property development Odisha",
        "residential development Bhubaneswar",
        "Gargi Group real estate",
        "land development Odisha",
      ],
    },
  },
  {
    id: "finance",
    slug: "finance",
    number: "05",
    title: "Finance & Financial Services",
    shortTitle: "Finance",
    tagline: "Enabling Growth. Building Resilience.",
    description:
      "Exploring financial awareness, planning support and business development opportunities across Odisha's growing economic ecosystem.",
    longDescription:
      "Gargi Group explores opportunities in financial solutions, financial awareness and business support services designed around evolving individual and business requirements. Any financial activity is undertaken strictly within the scope of applicable laws and regulatory requirements.",
    iconName: "TrendingUp",
    color: "#1D524D",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
    keyFocusAreas: [
      "Financial Awareness",
      "Business Support",
      "Financial Planning Support",
      "Investment Education",
      "Economic Capacity Building",
      "Business Development",
    ],
    approach:
      "Our approach is based on transparency, responsible practices and clear communication. Activities that require specific regulatory authorisation are undertaken only in accordance with applicable requirements.",
    objectives: [
      "Promote financial awareness",
      "Support responsible financial practices",
      "Facilitate business development",
      "Encourage informed financial decision-making",
      "Explore opportunities within applicable regulatory frameworks",
    ],
    relatedAreas: ["real-estate", "education", "community-development"],
    seo: {
      title: "Finance & Financial Services | Gargi Group Odisha",
      description:
        "Gargi Group explores financial awareness, business development and financial ecosystem initiatives in Bhubaneswar, Odisha, within applicable regulatory frameworks.",
      keywords: [
        "financial services Odisha",
        "business development Bhubaneswar",
        "financial literacy Odisha",
        "Gargi Group finance",
        "economic development Odisha",
      ],
    },
  },
  {
    id: "petrochemical",
    slug: "petrochemical",
    number: "06",
    title: "Petrochemical Development Initiatives",
    shortTitle: "Petrochemical",
    tagline: "Training. Skills. Responsible Development.",
    description:
      "Supporting lawful training, skill development and capacity building related to petrochemical and industrial sectors in Odisha.",
    longDescription:
      "Gargi Group explores opportunities connected with training, skill development, safety awareness and capacity building relating to the petrochemical and industrial sectors. Our focus is on lawful, educational and workforce development initiatives rather than industrial production or operation of petrochemical facilities.",
    iconName: "Flame",
    color: "#8B5E3C",
    heroImage:
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1600&q=80",
    keyFocusAreas: [
      "Industrial Skills Development",
      "Technical Training",
      "Safety Awareness",
      "Workforce Capacity Building",
      "Sector Specific Learning",
      "Industrial Support Initiatives",
    ],
    approach:
      "We seek to support human capital development through education, training and awareness while maintaining compliance with applicable laws, regulations and safety standards.",
    objectives: [
      "Strengthen industrial workforce skills",
      "Support technical learning",
      "Promote safety awareness",
      "Build sector related capabilities",
      "Develop lawful training and support initiatives",
    ],
    relatedAreas: ["education", "community-development", "finance"],
    seo: {
      title: "Petrochemical Development Initiatives | Gargi Group Odisha",
      description:
        "Gargi Group supports lawful training, skill development and capacity building initiatives related to petrochemical and industrial sectors in Odisha.",
      keywords: [
        "industrial training Odisha",
        "petrochemical sector Odisha",
        "industrial skill development Bhubaneswar",
        "Gargi Group petrochemical",
        "industrial capacity building Odisha",
      ],
    },
  },
  {
    id: "community-development",
    slug: "community-development",
    number: "07",
    title: "Community Welfare & Livelihood Development",
    shortTitle: "Community",
    tagline: "People First. Communities Always.",
    description:
      "Building rural and community livelihoods, fostering social advancement and creating sustainable opportunities across Odisha.",
    longDescription:
      "Gargi Group explores initiatives focused on livelihoods, community development, rural opportunity and social participation. Our objective is to support practical opportunities that contribute to economic participation and stronger communities.",
    iconName: "Heart",
    color: "#C0392B",
    heroImage:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80",
    keyFocusAreas: [
      "Livelihood Development",
      "Rural Development",
      "Community Capacity Building",
      "Employment Opportunities",
      "Social Development",
      "Inclusive Participation",
    ],
    approach:
      "We seek to understand community needs and develop initiatives that encourage participation, self reliance and sustainable opportunities.",
    objectives: [
      "Support livelihood opportunities",
      "Encourage rural development",
      "Strengthen community capacity",
      "Promote inclusive participation",
      "Support sustainable economic opportunities",
    ],
    relatedAreas: ["empowerment", "charitable-development", "agriculture"],
    seo: {
      title: "Community & Livelihood Development | Gargi Group Odisha",
      description:
        "Gargi Group's community welfare and livelihood development initiatives focus on rural development, social advancement and sustainable opportunities across Odisha.",
      keywords: [
        "community development Odisha",
        "livelihood development Bhubaneswar",
        "rural development Odisha",
        "Gargi Group community",
        "social development Odisha",
      ],
    },
  },
  {
    id: "empowerment",
    slug: "empowerment",
    number: "08",
    title: "Women, Youth & Vulnerable-Community Empowerment",
    shortTitle: "Empowerment",
    tagline: "Opportunity. Inclusion. Strength.",
    description:
      "Creating pathways for women, youth and vulnerable communities through skill development, education and livelihood opportunities in Odisha.",
    longDescription:
      "Gargi Group explores initiatives that support women, youth and vulnerable communities through education, skills, entrepreneurship and livelihood opportunities. Our focus is on creating practical pathways towards greater participation, self reliance and economic opportunity.",
    iconName: "Users",
    color: "#8E44AD",
    heroImage:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80",
    keyFocusAreas: [
      "Women's Skill Development",
      "Youth Development",
      "Entrepreneurship",
      "Educational Access",
      "Livelihood Opportunities",
      "Inclusive Development",
    ],
    approach:
      "We aim to support initiatives that build skills, strengthen confidence and expand access to education, employment and entrepreneurship.",
    objectives: [
      "Expand skill and livelihood opportunities",
      "Support youth capacity building",
      "Encourage entrepreneurship",
      "Improve access to learning",
      "Promote inclusive economic participation",
    ],
    relatedAreas: ["education", "community-development", "charitable-development"],
    seo: {
      title: "Women & Youth Empowerment | Gargi Group Odisha",
      description:
        "Gargi Group's empowerment initiatives create skill development, education and livelihood opportunities for women, youth and vulnerable communities in Odisha.",
      keywords: [
        "women empowerment Odisha",
        "youth development Bhubaneswar",
        "vulnerable community support Odisha",
        "Gargi Group empowerment",
        "skill development women Odisha",
      ],
    },
  },
  {
    id: "charitable-development",
    slug: "charitable-development",
    number: "09",
    title: "Charitable & Development Initiatives",
    shortTitle: "Charitable",
    tagline: "Responsibility. Compassion. Impact.",
    description:
      "Pursuing responsible, community-focused charitable and development initiatives that create meaningful positive change across Odisha.",
    longDescription:
      "Gargi Group explores charitable and development oriented initiatives that respond to identified community needs and support social welfare. Our approach is grounded in responsibility, transparency and practical community engagement.onal capabilities.",
    iconName: "HandHeart",
    color: "#E67E22",
    heroImage:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80",
    keyFocusAreas: [
      "Community Welfare",
      "Educational Support",
      "Social Development",
      "Development Oriented Initiatives",
      "Community Partnerships",
      "Welfare & Support Activities",
    ],
    approach:
      "We seek to support initiatives that are practical, appropriate and aligned with organisational capabilities and applicable legal requirements.",
    objectives: [
      "Support community welfare",
      "Contribute to social development",
      "Respond responsibly to community needs",
      "Encourage constructive partnerships",
      "Promote a culture of social responsibility",
    ],
    relatedAreas: ["community-development", "empowerment", "education"],
    seo: {
      title: "Charitable & Development Initiatives | Gargi Group Odisha",
      description:
        "Gargi Group's charitable and development initiatives focus on responsible community welfare, social responsibility and meaningful positive change in Odisha.",
      keywords: [
        "charitable initiatives Odisha",
        "development organisation Bhubaneswar",
        "social responsibility Odisha",
        "Gargi Group charitable",
        "community welfare Odisha",
      ],
    },
  },
  {
    id: "media-entertainment",
    slug: "media-entertainment",
    number: "10",
    title: "Media & Entertainment",
    shortTitle: "Media",
    tagline: "Stories. Connection. Culture.",
    description:
      "Exploring media, digital content, creative communication and entertainment opportunities that reflect and celebrate Odisha's rich cultural identity.",
    longDescription:
      "Gargi Group explores opportunities in media, digital content, creative communication and entertainment, with an interest in meaningful and culturally relevant content. Our focus includes contemporary digital formats alongside opportunities that reflect India's and Odisha's cultural identity.",
    iconName: "Tv2",
    color: "#2C3E50",
    heroImage:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=80",
    keyFocusAreas: [
      "Digital Content",
      "Media Development",
      "Creative Communication",
      "Storytelling",
      "Entertainment",
      "Cultural Content",
    ],
    approach:
      "We aim to explore media and entertainment opportunities that combine creativity, responsible communication and audience relevance.",
    objectives: [
      "Develop meaningful digital content",
      "Encourage creative communication",
      "Explore entertainment opportunities",
      "Support culturally relevant storytelling",
      "Respond to changing media platforms and audiences",
    ],
    relatedAreas: ["education", "empowerment", "hospitality"],
    seo: {
      title: "Media & Entertainment | Gargi Group Odisha",
      description:
        "Gargi Group explores media, digital content, cultural storytelling and entertainment opportunities in Odisha, celebrating the state's rich creative heritage.",
      keywords: [
        "media entertainment Odisha",
        "digital content Bhubaneswar",
        "cultural media Odisha",
        "Gargi Group media",
        "entertainment sector Odisha",
      ],
    },
  },
];

export const getAreaBySlug = (slug: string): AreaData | undefined => {
  return areas.find((a) => a.slug === slug);
};

export const getRelatedAreas = (slugs: string[]): AreaData[] => {
  return areas.filter((a) => slugs.includes(a.slug));
};
