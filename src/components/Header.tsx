"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [getStartedDropdown, setGetStartedDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const getStartedRef = useRef<HTMLDivElement>(null);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

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

  const handleMobileMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - changes based on scroll position */}
          <Link href="/" className="flex items-center pl-0 ml-0 z-50 relative">
            <div className="w-10 h-10">
              <Image
                src={scrolled || mobileMenuOpen ? "/Group 14.png" : "/Group 13.png"}
                alt="TOAD Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-2xl focus:outline-none z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <FiX className="text-gray-700" />
            ) : (
              <FiMenu className={scrolled ? "text-gray-700" : "text-white"} />
            )}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
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
                      src="/Arb.png" 
                      alt="Arbitrum" 
                      width={16} 
                      height={16} 
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
                      src="/Optimism.png" 
                      alt="Optimism" 
                      width={16} 
                      height={16} 
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
      
      {/* Mobile menu with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 overflow-y-auto overflow-x-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col space-y-6 mt-8 w-full overflow-x-hidden">
              <Link 
                href="#about" 
                className="text-2xl text-gray-800 font-medium hover:text-[#8DC63F] py-3 border-b border-gray-100 transition-colors"
                onClick={handleMobileMenuItemClick}
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="text-2xl text-gray-800 font-medium hover:text-[#8DC63F] py-3 border-b border-gray-100 transition-colors"
                onClick={handleMobileMenuItemClick}
              >
                Contact
              </Link>
              <div className="py-4 space-y-4 w-full">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get Started</h3>
                <a 
                  href="https://app.toadn.com/arbitrum" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center py-3 text-gray-700 hover:text-[#8DC63F] transition-colors"
                  onClick={handleMobileMenuItemClick}
                >
                  <Image 
                    src="/Arb.png" 
                    alt="Arbitrum" 
                    width={20} 
                    height={20} 
                    className="mr-3" 
                  />
                  <span className="text-lg">Arbitrum</span>
                </a>
                <a 
                  href="https://app.toadn.com/optimism" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center py-3 text-gray-700 hover:text-[#8DC63F] transition-colors"
                  onClick={handleMobileMenuItemClick}
                >
                  <Image 
                    src="/Optimism.png" 
                    alt="Optimism" 
                    width={20} 
                    height={20} 
                    className="mr-3" 
                  />
                  <span className="text-lg">Optimism</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 