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
  react,
  vapi,
  chatgpt,
  gsap,
  threejs,
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
  linkedin,
  yourlogo,
} from "../assets";

export const navigation = [

  {
    id: "0",
    title: "Devi Ai",
    url: "#devi-ai",
  },
  {
    id: "0",
    title: "Devi Books",
    url: "#devi-books",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = ["https://pricesenz.com/wp-content/uploads/2024/01/chatgpt-logo.png", "https://vectorseek.com/wp-content/uploads/2023/12/Google-Gemini-Logo-Vector.svg-.png", "https://user-images.githubusercontent.com/4573851/226388344-20f2e01d-1594-4d3c-83e9-502868782445.png", "https://vapi.ai/assets/logo-6813a1b5.png", "https://cdn.freelogovectors.net/wp-content/uploads/2023/12/google-bard_logo-freelogovectors.net_.png"];

export const brainwaveServices = [
  "Explain Any Topic/Concept",
  "Answer your Questions",
  "Communicate with you",
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
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "Oct 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "Oct 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "Oct 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "Oct 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart solutions and top-notch response, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Talking",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Solutions",    
  },
  {
    id: "2",
    title: "Top-notch Response",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Vapi Ai",
    icon: vapi,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Chatgpt 4.0",
    icon: chatgpt,
    width: 36,
    height: 28,
  },
  {
    id: "2",
    title: "React",
    icon: react,
    width: 34,
    height: 35,
  },
  {
    id: "3",
    title: "Gsap",
    icon: gsap,
    width: 34,
    height: 34,
  },
  {
    id: "4",
    title: "Three Js",
    icon: threejs,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 34,
  },
  {
    id: "6",
    title: "Discord",
    icon: discord,
    width: 38,
    height: 32,
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
    description: "AI voice chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI voice chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI voice chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI voice chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI voice chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI voice chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "The Art of Communication",
    text: "This book explores the principles of effective communication, including verbal and non-verbal techniques, helping you succeed in both personal and professional settings.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Leadership Essentials",
    text: "Learn how to lead effectively with strategies for team management, decision-making, and conflict resolution.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Emotional Intelligence",
    text: "This book provides insights into understanding and managing emotions, fostering better interpersonal relationships and workplace productivity.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Public Speaking Mastery",
    text: "A comprehensive guide to improving public speaking skills, from overcoming stage fright to delivering compelling presentations.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Conflict Resolution Techniques",
    text: "This book offers practical techniques for resolving workplace conflicts and fostering a harmonious work environment.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Effective Negotiation Strategies",
    text: "Discover proven strategies for successful negotiations in business settings, ensuring mutually beneficial outcomes.",
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
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Linkdin",
    iconUrl: linkedin,
    url: "#",
  },
  {
    id: "5",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
