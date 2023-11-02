import React, { useState } from "react";


export default function Navbar() {
  // State to control the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-4 mb-6 flex justify-between sticky top-0 z-50">
          <h1 className="text-3xl md:text-4xl font-semibold">Ibrahim</h1>
          {/* Hamburger icon for mobile */}
          <div
            className="md:hidden cursor-pointer text-3xl"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </div>
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-black text-white py-4 text-center">
              <ul className="space-y-4">
                <li>
                  <a
                    className="cursor-pointer text-xl hover:text-purple-300 hover-glow"
                    href="#about"
                    onClick={toggleMobileMenu}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer text-xl hover:text-purple-300 hover-glow"
                    href="#projects"
                    onClick={toggleMobileMenu}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer text-xl hover:text-purple-300 hover-glow"
                    href="#contact"
                    onClick={toggleMobileMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <a className="cursor-pointer text-xl md:text-lg hover:text-purple-300 hover-glow" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="cursor-pointer text-xl md:text-lg hover:text-purple-300 hover-glow" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="cursor-pointer text-xl md:text-lg hover:text-purple-300 hover-glow" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
  );
}
