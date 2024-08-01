"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TechIcons, TechIconKey } from "./TechIcons";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  codeUrl: string;
  technologies: TechIconKey[];
  videoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  demoUrl,
  codeUrl,
  technologies,
  videoUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <CardHeader className="p-0 relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={imageUrl}
              alt={title}
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </CardDescription>
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={TechIcons[tech]}
                  alt={tech}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </CardContent>
        <CardFooter className="p-6 bg-gray-50 dark:bg-gray-700 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">
              Live Demo
            </Button>
          </Link>
          <Link
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">
              Source Code
            </Button>
          </Link>
          {videoUrl && (
            <Link
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">
                Video Demo
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}