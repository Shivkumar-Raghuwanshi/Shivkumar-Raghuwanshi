import ProjectCard from "@/components/ProjectCard";
import { TechIconKey } from "@/components/TechIcons";

const projects = [
  {
    title: "Samarth: All-in-one prompt generation platform.",
    description:
      "Samarth AI is an all-in-one prompt generation platform. It supports conversation, image generation, music generation, video generation, and code generation. This platform is designed to provide a seamless experience for generating various types of content using advanced AI technologies.",
    imageUrl: "/SamarthAI.png",
    demoUrl: "https://samarth-ai-all-in-one-ai-generative-platform.vercel.app/",
    codeUrl:
      "https://github.com/Shivkumar-Raghuwanshi/Samarth-AI-All-in-One-AI-Generative-Platform",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "ChatGPT",
      "Prisma",
      "Clerk",
      "Crisp",
      "ReplicateAI",
      "Shadcn",
      "Stripe",
      "Zustand",
    ] as TechIconKey[],
    videoUrl: "https://www.youtube.com/embed/1aq-SgDJMmA?si=VpHktHa0YlrbBzyu",
  },
  {
    title: "AgileAce: Saas for project management collaboration work ",
    description:
      "AgileAce Project is built with a modern tech stack. It is designed to provide an efficient and user-friendly project management tool that helps teams collaborate and organize their work more effectively.",
    imageUrl: "/AgileAce.jpeg",
    demoUrl: "https://agile-ace.vercel.app/",
    codeUrl: "https://github.com/Shivkumar-Raghuwanshi/AgileAce",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn",
      "Prisma",
      "Clerk",
      "Zustand",
      "Stripe",
    ] as TechIconKey[],
    videoUrl: "https://www.youtube.com/embed/gmNUFQTJSQo?si=P59hwJI79mm9FZVf",
  },
  {
    title: "PrimeFlicks: Movie and TV enthusiasts ",
    description:
      "PrimeFlicks is a modern web application designed to provide a seamless user experience for movie enthusiasts.",
    imageUrl: "/Prime Flicks.png",
    demoUrl: "https://primeflicks.vercel.app/",
    codeUrl: "https://github.com/Shivkumar-Raghuwanshi/primeflicks",
    technologies: [
      "Next.js",
      "TypeScript",
      "Shadcn",
      "Tailwind CSS",
      "MongoDB",
      "Prisma",
    ] as TechIconKey[],
    videoUrl: "https://www.youtube.com/embed/QFozO73uOps?si=1kvnzt7J2mGDKvyR",
  },
  {
    title: "Dreamrender",
    description:
      "AI Saas for Image Restore, Generative Fill, Object Remove & Recolor    ",
    imageUrl: "/Dreamrender.PNG",
    demoUrl: "https://dreamrender.vercel.app/",
    codeUrl: "https://github.com/Shivkumar-Raghuwanshi/dreamrender",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn",
    ] as TechIconKey[],
    videoUrl: "#",
  },
  {
    title: "Mindmappr",
    description:
      "Jotion is the connected workspace where better, faster work happens.",
    imageUrl: "/Jotion.PNG",
    demoUrl: "https://mindmappr-ten.vercel.app/",
    codeUrl: "https://github.com/Shivkumar-Raghuwanshi/Mindmappr",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn",
      "Prisma",
    ] as TechIconKey[],
    videoUrl: "#",
  },
  {
    title: "Moviecritic: Movie review platform ",
    description:
      "MovieCritic is a comprehensive movie review platform where users can add movies, write reviews, and interact with other movie enthusiasts. This project is built using a modern tech stack and offers a variety of features.",
    imageUrl: "/Moviecritic.PNG",
    demoUrl: "https://moviecritic-virid.vercel.app/",
    codeUrl: "https://github.com/Shivkumar-Raghuwanshi/moviecritic",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "PostgreSQL",
      "Prisma",
    ] as TechIconKey[],
    videoUrl: "https://www.youtube.com/embed/iiJWVvqZYe0?si=7ocOvVulcj6l0wqc",
  },
  {
    title: "Modern Search",
    description:
      "Modern Search is a dynamic, user-friendly web application that provides a seamless product search experience. It allows users to search for products, filter the search results by brand, price range, and ratings, and manage their wishlist",
    imageUrl: "/ModernSearch.PNG",
    demoUrl: "https://modern-search-kappa.vercel.app/",
    codeUrl: "https://github.com/Shivkumar-Raghuwanshi/Modern-Search",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
    ] as TechIconKey[],
    videoUrl: "https://www.youtube.com/embed/ZQvqF2-KYnw?si=l_P0hEmhdlcI00Rw",
  },
  {
    title: "Refine-Nextjs-Recharts-Dashboard",
    description:
      "This project is a comprehensive dashboard built with a modern tech stack. It provides a user-friendly interface and dynamic data visualization. The dashboard is designed to help users track various metrics and KPIs in real-time.",
    imageUrl: "/Refine.PNG",
    demoUrl: "#",
    codeUrl:
      "https://github.com/Shivkumar-Raghuwanshi/Refine-Nextjs-Recharts-Dashboard",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
    ] as TechIconKey[],
    videoUrl: "https://www.youtube.com/embed/L3Lzc66BHzs?si=dkO23ZTz9wdiKQwc",
  },
  {
    title: "AI-powered Linkedin Chrome Extension",
    description:
      "This is an AI-powered Chrome Extension built using the Plasmo Framework, ReactJS, TypeScript, and TailwindCSS.",
    imageUrl: "/Linkedin.PNG",
    demoUrl: "#",
    codeUrl:
      "https://github.com/Shivkumar-Raghuwanshi/Linkedin-Chrome-Extension",
    technologies: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn",
    ] as TechIconKey[],
    videoUrl: "https://www.youtube.com/embed/_NCxQ5x8roM?si=zEoVCl5yPUzV19qp",
  },
  {
    title: "Leaderboard ",
    description:
      "The Leaderboard Project is a comprehensive application developed as part of professional training. The application provides a platform for users to register, login, and manage their profiles. The leaderboard ranks users based on their scores, providing a competitive and engaging environment.",
    imageUrl: "/Leaderboard.PNG",
    demoUrl: "#",
    codeUrl:
      "https://github.com/Shivkumar-Raghuwanshi/NextJs-Djangohttps://github.com/Shivkumar-Raghuwanshi/AgileAce",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Python",
      "Django",
      "DRF",
    ] as TechIconKey[],
    videoUrl: "https://www.youtube.com/embed/wq-2tVBn8Tg?si=x8zVf99MI3mgS-w1",
  },
  {
    title: "Language Translator ",
    description:
      "The Language Translator is a powerful web application that leverages the capabilities of Google Translate API-X to translate text from one language to another. This project is built using a robust tech stack including Next.js, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion, and is deployed on Vercel.",
    imageUrl: "/Laguagetrans.PNG",
    demoUrl: "https://language-translator-beta.vercel.app/",
    codeUrl: "https://github.com/Shivkumar-Raghuwanshi/Language-Translator",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
    ] as TechIconKey[],
    videoUrl: "https://www.youtube.com/embed/A9YZ08L-uXQ?si=KQxWCoXnzPyri4YL",
  },
  {
    title: "AgileAce: Saas for project management collaboration work ",
    description:
      "AgileAce Project is built with a modern tech stack. It is designed to provide an efficient and user-friendly project management tool that helps teams collaborate and organize their work more effectively.",
    imageUrl: "/AgileAce.jpeg",
    demoUrl: "https://project2.com",
    codeUrl: "https://github.com/Shivkumar-Raghuwanshi/AgileAce",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
    ] as TechIconKey[],
    videoUrl: "https://www.youtube.com/embed/gmNUFQTJSQo?si=P59hwJI79mm9FZVf",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              technologies={project.technologies}
              videoUrl={project.videoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
