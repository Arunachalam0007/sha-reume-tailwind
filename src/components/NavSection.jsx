import { FaTimes } from "react-icons/fa";
import React, { useState } from "react";

import logoImage from "../assets/arun-logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars } from "react-icons/fa6";

export default function NavSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    console.log("href: ", href);

    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div>
      <nav className="fixed top-4 z-50 left-0 right-0 ">
        {/* Desktop Menu */}
        <div className="hidden lg:flex mx-auto max-w-2xl justify-center items-center py-3 px-3 bg-black/20 backdrop-blur-lg rounded lg border border-stone-50/30">
          <div className="flex items-center justify-between gap-4">
            {/* logo Image */}
            <div>
              <a href="">
                <img
                  src={logoImage}
                  width={150}
                  alt="logo"
                  className="text-white"
                />
              </a>
            </div>

            {/* Nav items */}
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((navItem, index) => (
                  <li key={index}>
                    <a
                      href={navItem.href}
                      className=" hover:text-yellow-500"
                      onClick={(e) => handleLinkClick(e, navItem.href)}
                    >
                      {navItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile View Nav Menus*/}
        <div className="lg:hidden px-4 backdrop-blur-md">
          {/* logo and Menu button*/}
          <div className="flex items-center justify-between ">
            {/* logo Image */}
            <div>
              <a href="">
                <img src={logoImage} alt="" width={90} />
              </a>
            </div>

            {/* Mobile Menus */}
            <div className=" flex items-center">
              <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-6" />
                ) : (
                  <FaBars className="m-2 h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Nav items */}
          {isMobileMenuOpen && (
            <ul className="flex flex-col items-center justify-center py-2 gap-4">
              {NAVIGATION_LINKS.map((navItem, index) => (
                <li key={index}>
                  <a
                    href={navItem.href}
                    className="hover:text-yellow-600  font-bold"
                    onClick={(e) => handleLinkClick(e, navItem.href)}
                  >
                    {navItem.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}
