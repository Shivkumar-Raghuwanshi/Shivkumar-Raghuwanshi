import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  TechIcons,
  TechIconKey,
  SocialIcons,
  SocialIconKey,
  socialLinks,
} from "@/components/TechIcons";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6">
//       <div className="flex flex-col md:flex-row items-center mb-8">
//         <div className="mr-8">
//           <Image
//             src="/profile.jpg"
//             alt="Profile"
//             width={200}
//             height={200}
//             className="rounded-full"
//           />
//         </div>
//         <div>
//           <h1 className="text-4xl font-bold mb-2">Shivkumar Raghuwanshi</h1>
//           <p>
//             Full-Stack Developer with expertise in React, Node.js, and MongoDB.
//             Passionate about building scalable and user-friendly web
//             applications.
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {/* Render skills icons */}
//             {Object.keys(TechIcons).map((key) => (
//               <Image
//                 key={key}
//                 src={TechIcons[key as TechIconKey]}
//                 alt={key}
//                 width={32}
//                 height={32}
//                 className="inline-block"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-4 mb-8">
//         {/* Render social links */}
//         {Object.keys(SocialIcons).map((key) => (
//           <Link
//             key={key}
//             href={`https://${key.toLowerCase()}.com/username`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-2xl"
//           >
//             <Image
//               src={SocialIcons[key as SocialIconKey]}
//               alt={key}
//               width={32}
//               height={32}
//               className="inline-block"
//             />
//           </Link>
//         ))}
//       </div>
//       <Link href="/projects" className="inline-flex items-center">
//         <Button variant="outline">View Projects</Button>
//       </Link>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-indigo-500 to-purple-500">
      {/* Render skills icons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(TechIcons).map((key) => (
          <div className="bg-white rounded-full p-2 shadow-lg " key={key}>
            <Image
              key={key}
              src={TechIcons[key as TechIconKey]}
              alt={key}
              width={36}
              height={36}
              className="inline-block"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-4xl font-bold mb-2 text-center">
            Shivkumar Raghuwanshi
          </h1>
          <p className="text-gray-600 text-center">
            Founder and author turned full-stack engineer. I am a passionate
            Full Stack Developer with a strong foundation in both front-end and
            back-end technologies along with mechanical engineering.
          </p>
        </div>
        <div className="flex gap-4 mb-6">
          {/* Render social links */}
          {socialLinks.map(({ icon, href }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-indigo-500 transition-colors duration-300"
            >
              <Image
                src={icon}
                alt={href}
                width={32}
                height={32}
                className="inline-block"
              />
            </Link>
          ))}
        </div>
        <Link href="/projects" className="inline-flex items-center">
          <Button
            variant="outline"
            className="bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-300"
          >
            View Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}
