import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      label: "GitHub",
      icon: <FaGithub className="h-6 w-6" />,
      value: "Shivkumar-Raghuwanshi",
      href: "https://github.com/Shivkumar-Raghuwanshi",
      external: true,
    },
    {
      id: 2,
      label: "LinkedIn",
      icon: <FaLinkedinIn className="h-6 w-6" />,
      value: "shivkumar-raghuwanshi",
      href: "https://linkedin.com/in/shivkumar-raghuwanshi",
      external: true,
    },
    {
      id: 3,
      label: "Email",
      icon: <FaEnvelope className="h-6 w-6" />,
      value: "raghuwanshishivkumar56@gmail.com",
      href: "mailto:raghuwanshishivkumar56@gmail.com",
      external: false,
    },
    {
      id: 4,
      label: "Phone",
      icon: <FaPhoneAlt className="h-6 w-6" />,
      value: "+91 9893356033",
      href: "tel:+919893356033",
      external: false,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Lets connect and discuss how we can bring your ideas to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactDetails.map((detail) => (
            <div
              key={detail.id}
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="bg-indigo-500 rounded-full p-3 mr-4 text-white">
                {detail.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{detail.label}</h3>
                {detail.external ? (
                  <a
                    href={detail.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <Link href={detail.href}>
                    <span className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-200 cursor-pointer">
                      {detail.value}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
