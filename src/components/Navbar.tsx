"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Github, Star } from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [stars, setStars] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.github.com/repos/krup003/krup.portfolio")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count);
        }
      })
      .catch((err) => console.error("Failed to fetch repo stars", err));
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div className="relative">
      <div className="border-b-2 border-borderGrey px-[2%] py-2 fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-400 z-50 bg-transparent backdrop-blur-2xl">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <p className="font-space-grotesk text-sm font-semibold text-white sm:text-xl">
            @code by KRUP
          </p>

          <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
            <div className="hidden items-center gap-6 md:flex lg:gap-6">
              <button
                className="font-sans font-medium text-white/60 hover:text-white transition-colors"
                onClick={() => router.push("/projectspage")}
              >
                Projects
              </button>
              <motion.a
                href="https://github.com/krup003/krup.portfolio"
                target="_blank"
                rel="noopener noreferrer"
                title="Source Code"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/80 hover:text-white group"
              >
                <Github size={16} className="group-hover:text-white transition-colors" />
                <span className="text-sm font-medium">Source Code</span>
                {stars !== null && (
                  <div className="flex items-center gap-1 pl-2 border-l border-white/20">
                    <Star size={14} className="fill-yellow-500 text-yellow-500 group-hover:fill-yellow-400 group-hover:text-yellow-400 transition-colors" />
                    <span className="text-sm font-medium">{stars}</span>
                  </div>
                )}
              </motion.a>
            </div>

            <button
              onClick={toggleMenu}
              className="flex h-6 w-6 flex-col items-center justify-center space-y-1 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-4 bg-white transition-all duration-300 ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
              />
              <span
                className={`h-0.5 w-4 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`h-0.5 w-4 bg-white transition-all duration-300 ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="border-t-2 border-[#1C1C1F] px-4 pb-4">
            <div className="space-y-1 pt-3">
              <button
                className="block w-full rounded-lg px-3 py-3 text-left font-sans font-medium text-white transition-colors hover:bg-[#1C1C1F] hover:text-gray-300"
                onClick={() => router.push("/projectspage")}
              >
                Projects
              </button>
              <a
                href="https://github.com/krup003/krup.portfolio"
                target="_blank"
                rel="noopener noreferrer"
                title="Source Code"
                className="flex items-center justify-between w-full rounded-lg px-3 py-3 text-left font-sans font-medium text-white transition-colors hover:bg-[#1C1C1F] hover:text-gray-300"
              >
                <div className="flex items-center gap-2">
                  <Github size={18} />
                  <span>Source Code</span>
                </div>
                {stars !== null && (
                  <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
                    <Star size={14} className="fill-yellow-500 text-yellow-500" />
                    <span className="text-sm font-medium">{stars}</span>
                  </div>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;