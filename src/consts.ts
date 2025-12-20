// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Header, Footer, About, Project } from "./types.ts";

import ProfilePic from "./assets/profile-pic.jpg";

import PenweaveImage from "./assets/projects/penweave.png";
import MGUScraperImage from "./assets/projects/mguscraper.png";
import FlashifyImage from "./assets/projects/flashify.png";
import WeatherifyImage from "./assets/projects/weatherify.png";

export const SITE_URL: string = "https://garciadervin.vercel.app/";

export const meta = {
  about: {
    // index page
    title: "Dervin García",
    description:
      "Hi, I'm Dervin García, a software engineer. Welcome to my little corner of the internet!",
  },
  projects: {
    title: "Projects | Dervin García",
    description:
      "Here are some of my projects — things I’ve built, experimented with, and had fun creating.",
  },
  blog: {
    title: "Blog | Dervin García",
    description:
      "This is my blog — a place where I share thoughts, ideas, and things I’m learning along the way.",
  },
  // blog post title and description are taken from the variables in markdown file
};

export const header: Header = { logoTitle: "DG" };

export const footer: Footer = {
  // parses html
  content:
    "Made with ❤️ by Dervin García • <a href='https://github.com/garciadervin/portfolio' class='link'>Source Code</a>",
};

export const about: About = {
  // parses html
  headLine: "Hi, I'm <span class='fancy-highlight'>Dervin García</span>",
  tagLine: "Software Engineer / Full Stack Developer",
  profilePic: ProfilePic,
  // parses html
  description:
    "I'm a <u>Software Engineer</u> from Venezuela 🇻🇪 with 3+ years of experience in full-stack development, AI model training, and blockchain technologies. I specialize in <u>Python, JavaScript, and Java</u>, and thrive on building secure, scalable solutions.",
  links: [
    // Lucide icons
    { icon: "Github", href: "https://github.com/garciadervin/" },
    { icon: "Linkedin", href: "https://www.linkedin.com/in/garciadervin/" },
    { icon: "Youtube", href: "https://www.youtube.com/@garciadervin" },
  ],
  resumeHref:
    "https://drive.google.com/file/d/1yaV8vRhMMONxcMrclieKxCuXH-NvLYIr/view?usp=sharing",
  workExperience: [
    {
      title: "Blockchain Developer Intern",
      timeline: "Nov 2024 - Feb 2025",
      company: "ETH Aragua • Venezuela",
      description:
        "Developed a Real Estate Token dApp for asset tokenization, while participating in Ethereum adoption initiatives through workshops, hackathons, training programs, and community events.",
    },
  ],
  education: [
    {
      title: "Bachelor of Science in Computer Engineering",
      timeline: "Sep 2019 - Apr 2024",
      institution: "UPT Aragua Federico Brito Figueroa • Venezuela",
      description:
        "Studied core computer science fundamentals including programming languages, data structures, algorithms, operating systems, and networking, with practical experience in Java, C/C++, JavaScript, PHP, and Linux.",
    },
  ],
  // parses html
  getInTouch:
    "Drop me an email at <a href='mailto:garciadervin22@gmail.com' class='primary-underline'>garciadervin22@gmail.com</a> or connect with me on one of my socials.",
};

export const projects: Project[] = [
  {
    logoImage: PenweaveImage,
    title: "Dentify (In progress)",
    techs: ["React Native", "TypeScript", "Three.js", "PyTorch", "Tailwind CSS", "CI/CD"],
    description:
      "An educational platform for dentistry students that combines 3D simulations with an AI assistant trained on clinical data, enhancing both practical and theoretical learning.",
    sourceHref: "",
    liveHref: "https://colab.research.google.com/drive/1XdrIBH1U5mwlv4-5uU7miUXiqOi283_c?usp=drive_link",
  },
  {
    logoImage: MGUScraperImage,
    title: "SecureChain",
    techs: ["Next.js", "TypeScript", "Solidity", "Tailwind CSS", "Vercel", "Serverless"],
    description:
      "A blockchain-based solution that automates NFT creation with embedded QR audit codes and integrates intelligent smart contract analysis to strengthen security and asset traceability.",
    sourceHref: "https://github.com/garciadervin/securechain",
    liveHref: "https://securechain-sigma.vercel.app/",
  },
  {
    logoImage: FlashifyImage,
    title: "Video Feed",
    techs: ["Expo", "React Native", "TypeScript", "FlatList"],
    description:
      "A high‑performance vertical video feed built with Expo React Native, featuring horizontal carousels within posts and optimized to handle 200+ entries while maintaining smooth 60 FPS performance.",
    sourceHref: "https://github.com/garciadervin/video-feed",
    liveHref: "",
  },
  {
    logoImage: WeatherifyImage,
    title: "AI Blog",
    techs: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Hugging Face"],
    description:
      "A full‑stack blog application that automatically generates daily articles using AI, featuring a minimalist responsive design, a RESTful backend API, and containerized deployment ready for AWS.",
    sourceHref: "https://github.com/garciadervin/auto-blog",
    liveHref: "http://98.82.132.203/",
  },
];

// add blog articles in /src/content/blog
