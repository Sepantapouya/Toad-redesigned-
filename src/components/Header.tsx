"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [getStartedDropdown, setGetStartedDropdown] = useState(false);
  
  const getStartedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > window.innerHeight * 0.85) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (getStartedRef.current && !getStartedRef.current.contains(event.target as Node)) {
        setGetStartedDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - changes based on scroll position */}
          <Link href="/" className="flex items-center pl-0 ml-0">
            <div className="w-10 h-10">
              <Image
                src={scrolled ? "/Group 14.png" : "/Group 13.png"}
                alt="TOAD Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {/* About Link */}
            <Link 
              href="#about" 
              className={`transition-colors px-4 py-2 rounded-md ${
                scrolled ? "text-gray-700 hover:text-[#8DC63F]" : "text-white hover:text-[#f0ff9f]"
              }`}
            >
              About
            </Link>

            {/* Contact Link */}
            <Link 
              href="#contact" 
              className={`transition-colors px-4 py-2 rounded-md ${
                scrolled ? "text-gray-700 hover:text-[#8DC63F]" : "text-white hover:text-[#f0ff9f]"
              }`}
            >
              Contact
            </Link>

            {/* Get Started Button with Dropdown */}
            <div className="relative" ref={getStartedRef}>
              <button 
                onClick={() => setGetStartedDropdown(!getStartedDropdown)}
                className="bg-[#8DC63F] hover:bg-[#7ab230] text-white font-medium rounded-md px-6 py-2.5 transition-colors flex items-center"
              >
                Get Started
                <FiChevronDown className="ml-1" />
              </button>
              {getStartedDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
                  <a 
                    href="https://app.toadn.com/arbitrum" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    <Image 
                      src="/arbitrum-logo.svg" 
                      alt="Arbitrum" 
                      width={20} 
                      height={20} 
                      className="mr-2" 
                    />
                    Arbitrum
                  </a>
                  <a 
                    href="https://app.toadn.com/optimism" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    <Image 
                      src="/optimism-logo.svg" 
                      alt="Optimism" 
                      width={20} 
                      height={20} 
                      className="mr-2" 
                    />
                    Optimism
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 