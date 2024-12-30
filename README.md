<div align="center">
  <br />
    <a href="#" target="_blank">
      <img src="https://i.ibb.co/Kqdv8j1/Image-from.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Dev-Soft (Ask Anything to Devi-Ai)</h3>

   <div align="center">
     This is the Learning Platform with the help of Ai (Devi-Ai). You can ask anything to her, she will give you the relevent solution. In Future you can customize the Ai assistent as well.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [More](#more)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth, But if you want to checkout the website click here- <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>Dev-Soft</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

## <a name="introduction">🤖 Introduction</a>

Dev-Soft - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.

Dev-Soft - Modern Ai Assistant Devi which help you to solve your problems and in future you can customize it according to you and your perference as well.

If you're getting started and need assistance or face any bugs, Sent the Direct Message to me with the help of Contact Page form. Then you will fill the form and put your query inside it.

<a href="https://codesmachers.netlify.com" target="_blank">@CodeSmachers</a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Vite
- React.js
- Tailwind CSS
- Vapi Ai
- Three Js
- Gsap
- Email Sender
- More...

## <a name="features">🔋 Features</a>

👉 **Beautiful Sections**: Includes hero, services, features, how to use, roadmap, pricing, footer, and header.

👉 **Parallax Animations**: Engaging effects triggered by mouse movement and scrolling

👉 **Complex UI Geometry**: Utilizes tailwindcss for intricate shapes like circular feature displays, grid lines, and side lines.

👉 **Latest UI Trends**: Incorporates modern design elements such as bento grids.

👉 **Cool Gradients**: Enhances visuals with stylish gradients using Tailwind CSS for cards, buttons, etc.

👉 **Responsive**: Ensures seamless functionality and aesthetics across all devices

and many more, including code architecture and reusability

👉 **Voice Assistant**: Devi which capable to assist you and solve any issue you face and you can ask anything
to her.

👉 **3d Model**: We add the 3d Model inside this Project, you can definetly checkout our webside Dev-Soft at Once.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/toshakparmar/Dev-Soft-Ai.git
cd Dev-Soft-Ai
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>package.json</code></summary>

```json
{
  "name": "dev-soft",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-three/drei": "^9.120.4",
    "@react-three/fiber": "^8.17.10",
    "@vapi-ai/web": "^2.1.8",
    "lucide-react": "^0.469.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-just-parallax": "^3.1.16",
    "react-router-dom": "^6.22.1",
    "scroll-lock": "^2.1.5",
    "three": "^0.171.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.55",
    "@types/react-dom": "^18.2.19",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "eslint": "^8.56.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.0"
  }
}
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
```

</details>

<details>
<summary><code>index.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-sora: "Sora", sans-serif;
  --font-code: "Source Code Pro", monospace;
  --font-grotesk: "Space Grotesk", sans-serif;
}

* {
  scroll-behavior: smooth;
}

@layer base {
  body {
    @apply font-sans bg-n-8 text-n-1 text-base;
  }
}

.rotate-45 {
  @apply rotate-[45deg];
}

.rotate-90 {
  @apply rotate-[90deg];
}

.rotate-135 {
  @apply rotate-[135deg];
}

.rotate-180 {
  @apply rotate-[180deg];
}

.rotate-225 {
  @apply rotate-[225deg];
}

.rotate-270 {
  @apply rotate-[270deg];
}

.rotate-315 {
  @apply rotate-[315deg];
}

.rotate-360 {
  @apply rotate-[360deg];
}

.-rotate-45 {
  @apply rotate-[-45deg];
}

.-rotate-90 {
  @apply rotate-[-90deg];
}

.-rotate-135 {
  @apply rotate-[-135deg];
}

.-rotate-180 {
  @apply rotate-[-180deg];
}

.-rotate-225 {
  @apply rotate-[-225deg];
}

.-rotate-270 {
  @apply rotate-[-270deg];
}

.-rotate-315 {
  @apply rotate-[-315deg];
}

.-rotate-360 {
  @apply rotate-[-360deg];
}
```

</details>

<details>
<summary><code>constants/index.js</code></summary>

```javascript
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

export const companyLogos = [
  "https://pricesenz.com/wp-content/uploads/2024/01/chatgpt-logo.png",
  "https://vectorseek.com/wp-content/uploads/2023/12/Google-Gemini-Logo-Vector.svg-.png",
  "https://user-images.githubusercontent.com/4573851/226388344-20f2e01d-1594-4d3c-83e9-502868782445.png",
  "https://vapi.ai/assets/logo-6813a1b5.png",
  "https://cdn.freelogovectors.net/wp-content/uploads/2023/12/google-bard_logo-freelogovectors.net_.png",
];

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
    description:
      "Advanced AI voice chatbot, priority support, analytics dashboard",
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
    description:
      "Custom AI voice chatbot, advanced analytics, dedicated account",
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
```

</details>

<details>
<summary><code>components/Section.jsx</code></summary>

```javascript
import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
```

</details>

<details>
<summary><code>components/Roadmap.jsx</code></summary>

```javascript
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="#pricing">Join us</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
```

</details>

## <a name="links">🔗 Links</a>

- [Live Website](https://jsm-brainwave.com/)

</a>
