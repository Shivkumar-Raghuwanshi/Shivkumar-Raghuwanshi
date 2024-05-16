import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const contactDetails = [
    {
      id: 1,
      label: "GitHub",
      icon: <FaGithub className="h-6 w-6 text-white" />,
      value: "Shivkumar-Raghuwanshi",
      href: "https://github.com/Shivkumar-Raghuwanshi",
      external: true,
    },
    {
      id: 2,
      label: "LinkedIn",
      icon: <FaLinkedinIn className="h-6 w-6 text-white" />,
      value: "shivkumar-raghuwanshi",
      href: "https://linkedin.com/in/shivkumar-raghuwanshi",
      external: true,
    },
    {
      id: 3,
      label: "Email",
      icon: <FaEnvelope className="h-6 w-6 text-white" />,
      value: "raghuwanshishivkumar56@gmail.com",
      href: `mailto:raghuwanshishivkumar56@gmail.com`,
      external: false,
    },
    {
      id: 4,
      label: "Phone",
      icon: <FaPhoneAlt className="h-6 w-6 text-white" />,
      value: "+91 9893356033",
      href: "tel:+919893356033",
      external: false,
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Let is connect and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {contactDetails.map((detail) => (
              <div key={detail.id} className="flex">
                <div className="flex-shrink-0">
                  <span className="p-2 bg-indigo-500 rounded-lg inline-flex">
                    {detail.icon}
                  </span>
                </div>
                <div className="ml-4">
                  <dt className="text-base font-semibold text-gray-900">
                    {detail.label}
                  </dt>
                  <dd>
                    {detail.external ? (
                      <a
                        href={detail.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-indigo-600 hover:text-indigo-500"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <Link href={detail.href}>
                        <span className="text-base text-indigo-600 hover:text-indigo-500 cursor-pointer">
                          {detail.value}
                        </span>
                      </Link>
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
