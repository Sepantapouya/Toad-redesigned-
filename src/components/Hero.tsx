"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      className="relative w-full h-screen" 
      id="hero"
      style={{
        backgroundImage: "url('/banner.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Darker overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Fade mask to white for smooth transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32" 
        style={{ 
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)' 
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center pt-10">
        {/* TOAD Large Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[18rem] font-bold text-[#f0ff9f] leading-none font-okay-jelly mb-6"
          style={{ 
            textShadow: "0px 6px 12px rgba(0,0,0,0.6), 0px 2px 4px rgba(0,0,0,0.8)",
            letterSpacing: "-0.02em"
          }}
        >
          TOAD
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg lg:text-xl text-white font-gabarito tracking-wider uppercase whitespace-nowrap mx-auto px-4"
          style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)", letterSpacing: "0.1em" }}
        >
          Trustless On-Chain Autonomous Delegate
        </motion.p>
      </div>
    </section>
  );
};

export default Hero; 