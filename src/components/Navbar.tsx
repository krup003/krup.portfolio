"use client";

import React, { useState, useEffect } from "react";
import CommandMenu from "./CommandMenu";
import { GitHubIcon } from "@/app/icons/Githubicon";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] =
    useState<boolean>(false);

  const router = useRouter();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCommandMenu = (): void => {
    setIsCommandMenuOpen(!isCommandMenuOpen);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        toggleCommandMenu();
      }
    };

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (!isMobile) {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

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

              {/* <button
                className="block w-full rounded-lg px-3 py-3 text-left font-sans font-medium text-white transition-colors hover:bg-[#1C1C1F] hover:text-gray-300"
                onClick={() => {
                  setIsMenuOpen(false);
                  toggleCommandMenu();
                }}
              >
                Search
              </button> */}

              <button
                className="block w-full rounded-lg px-3 py-3 text-left font-sans font-medium text-white transition-colors hover:bg-[#1C1C1F] hover:text-gray-300"
                onClick={() => router.push("/artgallery")}
              >
                Art Gallery
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={() => setIsCommandMenuOpen(false)}
      /> */}
    </div>
  );
};

export default Navbar;