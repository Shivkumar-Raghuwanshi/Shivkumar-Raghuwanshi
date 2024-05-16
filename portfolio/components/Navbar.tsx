"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white border-b border-gray-200 p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <Link href="/">
          <span className="font-semibold text-xl tracking-tight">
            Shivkumar Raghuwanshi
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-black border-gray-400 hover:text-gray-800 hover:border-gray-800"
        >
          <FaBars className="h-5 w-5" />
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow lg:space-x-4">
          <Link
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-800 mr-4"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-800 mr-4"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-800 mr-4"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-2 lg:space-x-4">
          <Link
            href="https://github.com/Shivkumar-Raghuwanshi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 mr-4"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shivkumar-raghuwanshi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 mr-4"
          >
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
