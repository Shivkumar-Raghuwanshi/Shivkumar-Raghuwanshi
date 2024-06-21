// @ts-nocheck
// Import tech icons
import pythonIcon from "/public/icons/python.svg";
import javascriptIcon from "/public/icons/javascript.svg";
import typescriptIcon from "/public/icons/typescript.svg";
import reactIcon from "/public/icons/reactjs.svg";
import nextjsIcon from "/public/icons/nextjs.svg";
import djangoIcon from "/public/icons/django.svg";
import html5Icon from "/public/icons/html5.svg";
import tailwindCssIcon from "/public/icons/tailwind-css.svg";
import mysqlIcon from "/public/icons/mysql.svg";
import postgresqlIcon from "/public/icons/postgresql.svg";
import mongodbIcon from "/public/icons/mongodb.png";
import prismaIcon from "/public/icons/prisma.svg";
import awsIcon from "/public/icons/aws.svg";
import googleCloudIcon from "/public/icons/google-cloud.svg";
import googlePlayStoreIcon from "/public/icons/google-play-store.svg";
import msWordIcon from "/public/icons/microsoft-word.svg";
import adobeIcon from "/public/icons/adobe.svg";
import wordpressIcon from "/public/icons/wordpress.svg";
import canvaIcon from "/public/icons/canva.svg";
import figmaIcon from "/public/icons/figma.svg";
import googleAdsIcon from "/public/icons/google-ads.svg";
import facebookIcon from "/public/icons/facebook.svg";
import chatgptIcon from "/public/icons/chatgpt.svg";
import claudeIcon from "/public/icons/Anthropic.png";
import dockerIcon from "/public/icons/docker.svg";
import githubIcon from "/public/icons/github.svg";
import langchainIcon from "/public/icons/langchain.svg";
import DRFIcon from "/public/icons/DRF.png";
import shadcnIcon from "/public/icons/shadcn-ui.png";
import clerkIcon from "/public/icons/clerk.png";
import crispIcon from "/public/icons/crisp.png";
import stripeIcon from "/public/icons/stripe.svg";
import replicateIcon from "/public/icons/ReplicateAI.png";
import zustandIcon from "/public/icons/zustand.jpg";
import nodeIcon from "/public/icons/nodejs.svg";
import expressIcon from "/public/icons/express-js.svg";
// Import social icons
import linkedinIcon from "/public/icons/linkedin.svg";
import emailIcon from "/public/icons/gmail.svg";
import phoneIcon from "/public/icons/phone.png";

export type TechIconKey =
  | "Python"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Next.js"
  | "Django"
  | "HTML5"
  | "Tailwind CSS"
  | "MySQL"
  | "PostgreSQL"
  | "MongoDB"
  | "Prisma"
  | "AWS"
  | "Google Cloud"
  | "Google Play Store"
  | "MS Word"
  | "Adobe Acrobat DC"
  | "WordPress"
  | "Canva"
  | "Figma"
  | "Google Ads"
  | "Facebook Ads"
  | "ChatGPT"
  | "Claude"
  | "Docker"
  | "Github"
  | "LangChain"
  | "DRF"
  | "Shadcn"
  | "Clerk"
  | "Crisp"
  | "Stripe"
  | "ReplicateAI"
  | "Zustand"
  | "Node"
  | "Express";

export const TechIcons: Record<TechIconKey, string> = {
  Python: pythonIcon,
  JavaScript: javascriptIcon,
  TypeScript: typescriptIcon,
  React: reactIcon,
  "Next.js": nextjsIcon,
  Django: djangoIcon,
  HTML5: html5Icon,
  "Tailwind CSS": tailwindCssIcon,
  MySQL: mysqlIcon,
  PostgreSQL: postgresqlIcon,
  MongoDB: mongodbIcon,
  Prisma: prismaIcon,
  AWS: awsIcon,
  "Google Cloud": googleCloudIcon,
  "Google Play Store": googlePlayStoreIcon,
  "MS Word": msWordIcon,
  "Adobe Acrobat DC": adobeIcon,
  WordPress: wordpressIcon,
  Canva: canvaIcon,
  Figma: figmaIcon,
  "Google Ads": googleAdsIcon,
  "Facebook Ads": facebookIcon,
  ChatGPT: chatgptIcon,
  Claude: claudeIcon,
  Docker: dockerIcon,
  Github: githubIcon,
  LangChain: langchainIcon,
  DRF: DRFIcon,
  Shadcn: shadcnIcon,
  Crisp: crispIcon,
  Clerk: clerkIcon,
  Stripe: stripeIcon,
  ReplicateAI: replicateIcon,
  Zustand: zustandIcon,
  Node: nodeIcon,
  Express: expressIcon,
};

export type SocialIconKey = "Github" | "Linkedin" | "Email" | "Phone";

export const SocialIcons: Record<SocialIconKey, string> = {
  Github: githubIcon,
  Linkedin: linkedinIcon,
  Email: emailIcon,
  Phone: phoneIcon,
};

export const socialLinks = [
  { icon: SocialIcons.Github, href: "http://github.com/Shivkumar-Raghuwanshi" },
  {
    icon: SocialIcons.Linkedin,
    href: "https://www.linkedin.com/in/shivkumar-raghuwanshi",
  },
  { icon: SocialIcons.Email, href: "mailto:raghuwanshishivkumar@gmail.com" },
  { icon: SocialIcons.Phone, href: "tel:+919893356033" },
];
