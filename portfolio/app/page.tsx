import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TechIcons, TechIconKey, socialLinks } from "@/components/TechIcons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 p-8 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-600 to-purple-700">
            <div>
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-3xl font-bold mt-4 text-white text-center">
              Shivkumar Raghuwanshi
            </h1>
            <div className="flex gap-4 mt-4">
              {socialLinks.map(({ icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-indigo-200 transition-colors duration-300"
                >
                  <Image
                    src={icon}
                    alt={href}
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="md:w-2/3 p-8">
            <p className="text-gray-200 mb-6 leading-relaxed">
              Founder and author turned full-stack engineer. I am a passionate
              Full Stack Developer with a strong foundation in both front-end
              and back-end technologies along with mechanical engineering.
            </p>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-white">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {Object.keys(TechIcons).map((key) => (
                  <div
                    key={key}
                    className="bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-30 transition-all duration-300"
                  >
                    <Image
                      src={TechIcons[key as TechIconKey]}
                      alt={key}
                      width={24}
                      height={24}
                      className="inline-block"
                    />
                  </div>
                ))}
              </div>
            </div>
            <Link href="/projects" className="inline-flex items-center">
              <Button
                variant="outline"
                className="bg-white text-indigo-600 hover:bg-indigo-100 transition-colors duration-300"
              >
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
