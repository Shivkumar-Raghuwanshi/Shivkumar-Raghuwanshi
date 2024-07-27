import { Button } from "@/components/ui/button";
import Image from "next/image";
import profilePic from "@/public/profile.jpg";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="rounded-full w-48 h-48 border-4 border-white shadow-lg"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl font-extrabold mb-2 text-gray-800 dark:text-white">
              Shivkumar Raghuwanshi
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Founder, Author, and Software Engineer
            </p>
            <Button
              variant="outline"
              className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <Link
                href="/Shivkumar Raghuwanshi.pdf"
                download
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-lg leading-relaxed">
            Greetings! I am Shivkumar Raghuwanshi, a passionate software
            engineer and author. With a strong foundation in mechanical
            engineering, I have seamlessly transitioned into the world of
            programming, bringing a unique blend of technical expertise and
            creative problem-solving skills.
          </p>
          <p className="text-lg leading-relaxed">
            My proficiency includes a variety of tech stacks including Next.js,
            TypeScript, Tailwind CSS, Shadcn UI, Prisma, MongoDB, PostgreSQL,
            MySQL, Django, Python, and Docker.
          </p>
          <p className="text-lg leading-relaxed">
            On the front-end, I specialize in ReactJS, HTML5, and Tailwind CSS,
            crafting engaging and user-friendly interfaces. For full-stack
            development, I leverage the power of Next.js and Django. Meanwhile,
            on the back-end, my toolkit includes Django and Next.js, empowering
            me to build robust and scalable applications.
          </p>
          <p className="text-lg leading-relaxed">
            In the data world, I navigate both relational and non-relational
            databases with ease. Whether it is MySQL and PostgreSQL for
            structured data or MongoDB for flexible and scalable solutions, I
            ensure seamless integration to meet diverse project requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
