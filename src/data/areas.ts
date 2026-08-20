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
    tagline: "Empowering Minds. Building Futures.",
    description:
      "Fostering knowledge, vocational learning and employability through education and skill development initiatives across Odisha.",
    longDescription:
      "Education and skill development are foundational pillars of sustainable progress. Gargi Group recognises that access to quality learning and practical skills can transform individual lives and communities alike. Our focus spans foundational education support, vocational training, capacity building and employability-oriented programmes designed to create meaningful opportunities for learners at all stages.",
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
      "Our approach to education and skill development is practical, inclusive and community-centred. We aim to identify gaps in educational access and skill availability and work towards bridging them through structured initiatives, partnerships and focused programmes.",
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
      "Agriculture remains a vital sector for livelihoods, food security and rural development across Odisha. Gargi Group is committed to exploring opportunities within agriculture and allied activities that support farmers, rural communities and sustainable value chains. Our focus extends to allied sectors such as agri-processing, rural infrastructure support and farmer-oriented development initiatives.",
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
      "We approach agricultural development with a community-first mindset, recognising the importance of sustainable practices, rural livelihoods and the potential of Odisha's agricultural landscape. Our initiatives are designed to add value at multiple stages of the agricultural cycle.",
    objectives: [
      "Support sustainable agricultural practices",
      "Create rural livelihood opportunities",
      "Develop agricultural value chains",
      "Promote farmer welfare and rural development",
      "Explore allied agri-sector opportunities",
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
      "The service and hospitality sector represents a significant area of economic opportunity and employment generation. Gargi Group looks to contribute to the growth of this sector through initiatives focused on service quality, hospitality operations, guest experience and tourism-related development. Odisha's rich cultural heritage, natural landscapes and tourism potential provide an inspiring backdrop for meaningful growth in this space.",
    iconName: "Hotel",
    color: "#688882",
    heroImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
    keyFocusAreas: [
      "Service excellence and hospitality standards",
      "Guest experience and operations",
      "Tourism-related development opportunities",
      "Hospitality sector skill development",
      "Service-sector capacity building",
      "Cultural and heritage tourism support",
    ],
    approach:
      "Our hospitality approach centres on service excellence, with an understanding that great experiences are built on well-trained teams, thoughtful operations and genuine commitment to guests and communities. We explore opportunities aligned with Odisha's unique cultural and tourism potential.",
    objectives: [
      "Develop service and hospitality standards",
      "Support tourism-sector growth in Odisha",
      "Build capacity within the hospitality workforce",
      "Explore guest experience and operations opportunities",
      "Contribute to Odisha's tourism and cultural economy",
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
      "Real estate and property development offer significant opportunities to contribute to Odisha's growing urban and rural landscapes. Gargi Group is interested in exploring responsible, community-oriented property development that prioritises quality, planning and sustainable outcomes. Our focus is on understanding the potential of land development, residential planning and infrastructure within the framework of applicable laws and regulations.",
    iconName: "Building2",
    color: "#1D524D",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
    keyFocusAreas: [
      "Property and land development exploration",
      "Residential planning and development",
      "Community-oriented infrastructure",
      "Sustainable development practices",
      "Urban and peri-urban opportunities",
      "Responsible land use and planning",
    ],
    approach:
      "We approach real estate and property development with a long-term perspective, emphasising responsible planning, community alignment and compliance with applicable regulations. Our interest is in creating spaces that add lasting value to communities and environments. All development activities are undertaken in accordance with applicable laws and statutory requirements.",
    objectives: [
      "Explore responsible property development opportunities",
      "Support residential and community infrastructure",
      "Apply sustainable planning principles",
      "Operate within all applicable legal frameworks",
      "Create long-term value through quality development",
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
      "Access to financial knowledge and ecosystem development is essential for sustainable economic progress. Gargi Group is interested in supporting financial awareness, financial planning literacy and initiatives that strengthen the broader financial ecosystem within communities and businesses. All activities are conducted within applicable legal frameworks and do not constitute regulated financial advisory, investment management or banking services.",
    iconName: "TrendingUp",
    color: "#1D524D",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80",
    keyFocusAreas: [
      "Financial awareness and literacy initiatives",
      "Business and financial planning support",
      "Financial ecosystem development",
      "Investment education and awareness",
      "Economic capacity building",
      "Business development support",
    ],
    approach:
      "Our approach to finance and financial services is grounded in transparency, responsibility and community benefit. We focus on building financial awareness and supporting business development within the boundaries of applicable law. We do not claim to offer regulated financial services, investment advice or banking functions.",
    objectives: [
      "Promote financial literacy and awareness",
      "Support business and economic development",
      "Build financial ecosystem capacity",
      "Foster responsible financial practices",
      "Contribute to economic opportunity creation",
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
      "The petrochemical and industrial sector represents a significant area of economic activity in Odisha and India. Gargi Group is interested in supporting lawful training, skill development, safety awareness and industrial capacity building related to this sector. Our focus is strictly on educational, training and support activities within the full scope of applicable laws and regulations. We do not claim to operate, own or manage petrochemical facilities or hold regulatory licenses for industrial production.",
    iconName: "Flame",
    color: "#8B5E3C",
    heroImage:
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1600&q=80",
    keyFocusAreas: [
      "Industrial skills training and development",
      "Safety awareness and industrial capacity building",
      "Petrochemical sector educational initiatives",
      "Lawful support services for industrial sectors",
      "Technical knowledge development",
      "Industrial workforce capacity building",
    ],
    approach:
      "Our approach is focused on lawful, responsible and educationally-oriented activities. We aim to contribute to industrial workforce development through training, awareness and capacity building. All activities are undertaken in strict compliance with applicable laws, regulations and safety standards.",
    objectives: [
      "Support industrial skills and training development",
      "Build capacity in petrochemical-related workforce",
      "Promote safety awareness and best practices",
      "Facilitate lawful educational and support activities",
      "Contribute to industrial sector human resource development",
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
      "Community welfare and livelihood development sit at the heart of Gargi Group's vision. We believe that genuine, lasting progress is built by and for communities. Our focus encompasses livelihood creation, rural development, social advancement and community capacity building across Odisha. We work towards creating environments where communities can thrive and individuals can access meaningful opportunities.",
    iconName: "Heart",
    color: "#C0392B",
    heroImage:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80",
    keyFocusAreas: [
      "Livelihood creation and rural development",
      "Community capacity building",
      "Social advancement programmes",
      "Rural infrastructure and opportunity development",
      "Community welfare initiatives",
      "Inclusive development and participation",
    ],
    approach:
      "Our community development approach is participatory and respectful, built on listening to community needs and working collaboratively toward shared goals. We prioritise long-term impact over short-term interventions, ensuring that initiatives are sustainable and community-owned.",
    objectives: [
      "Create meaningful livelihood opportunities",
      "Foster rural and community development",
      "Build community capacity and resilience",
      "Support social advancement and welfare",
      "Enable inclusive and participatory development",
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
      "Empowerment of women, youth and vulnerable communities is a cornerstone of inclusive development. Gargi Group is committed to creating pathways of opportunity, building skills and fostering entrepreneurship and self-reliance among those who need it most. Our initiatives in this area are guided by respect, dignity and a genuine belief in the potential of every individual to contribute to and benefit from collective progress.",
    iconName: "Users",
    color: "#8E44AD",
    heroImage:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80",
    keyFocusAreas: [
      "Women's skill development and entrepreneurship support",
      "Youth capacity building and opportunity creation",
      "Livelihood pathways for vulnerable communities",
      "Educational access and support",
      "Entrepreneurship and self-reliance initiatives",
      "Inclusive opportunity development",
    ],
    approach:
      "Our empowerment approach is built on dignity, inclusion and genuine partnership with individuals and communities. We focus on creating practical pathways — through skills, education and opportunity — that enable lasting self-reliance and participation in economic and social life.",
    objectives: [
      "Create skills and livelihood pathways for women",
      "Build youth capacity and opportunity access",
      "Support vulnerable communities with inclusive programmes",
      "Foster entrepreneurship and economic participation",
      "Enable educational and knowledge access",
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
      "Gargi Group recognises the importance of giving back and contributing to the broader welfare of the communities and society within which it operates. Our charitable and development initiatives are guided by genuine responsibility, compassion and a commitment to creating meaningful positive change. These initiatives are pursued within applicable legal frameworks and organisational capabilities.",
    iconName: "HandHeart",
    color: "#E67E22",
    heroImage:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1600&q=80",
    keyFocusAreas: [
      "Community welfare and support initiatives",
      "Development-oriented charitable activities",
      "Social responsibility programmes",
      "Community need response",
      "Partnership with development-focused initiatives",
      "Responsible and compassionate community engagement",
    ],
    approach:
      "Our charitable and development approach is guided by a genuine sense of responsibility and community care. We aim to respond to community needs with practical, sustainable support while remaining transparent about our capabilities and intentions. All initiatives are pursued within applicable legal and organisational frameworks.",
    objectives: [
      "Support community welfare through responsible initiatives",
      "Contribute to development and social good",
      "Engage with community needs thoughtfully and honestly",
      "Partner with aligned development activities",
      "Build a culture of social responsibility within the organisation",
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
      "Media and entertainment represent a dynamic and rapidly growing sector with significant potential in Odisha and across India. Gargi Group is interested in exploring opportunities within media, digital content creation, storytelling, cultural communication and entertainment — with a particular appreciation for Odisha's rich artistic and cultural heritage. Our focus is on responsible, creative and community-relevant media and entertainment development.",
    iconName: "Tv2",
    color: "#2C3E50",
    heroImage:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=80",
    keyFocusAreas: [
      "Media content development and production",
      "Digital communication and storytelling",
      "Cultural and creative content",
      "Entertainment sector opportunities",
      "Community and cultural media",
      "Creative communication and outreach",
    ],
    approach:
      "Our media and entertainment approach celebrates creativity, culture and responsible communication. We believe in the power of storytelling to connect communities and inspire progress. Our interest is in developing meaningful, relevant and responsible media and entertainment content aligned with Odisha's rich cultural identity.",
    objectives: [
      "Develop meaningful media and digital content",
      "Celebrate and communicate Odisha's cultural heritage",
      "Create entertainment and creative opportunities",
      "Foster responsible and community-relevant media",
      "Explore digital communication and storytelling pathways",
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
