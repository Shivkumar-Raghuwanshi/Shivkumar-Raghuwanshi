import Image from "next/image";
import Link from "next/link";
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
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader>
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="w-full h-auto"
        />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-2xl font-bold mb-2">{title}</CardTitle>
        <CardDescription className="text-gray-600 mb-4">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800"
            >
              <Image
                src={TechIcons[tech]}
                alt={tech}
                className="h-5 w-5 mr-2"
              />
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 bg-gray-100 flex flex-col md:flex-row items-center justify-center gap-4 ">
        <Link
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto"
        >
          <Button className="inline-flex items-center px-4 py-2 w-full bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200">
            Live Demo
          </Button>
        </Link>
        <Link
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto"
        >
          <Button className="inline-flex items-center px-4 py-2 w-full bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200">
            Source Code
          </Button>
        </Link>
        {videoUrl && (
          <Link
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <Button className="inline-flex items-center px-4 py-2 w-full bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200">
              Video Demo
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
