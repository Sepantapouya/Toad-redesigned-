"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Community Members",
    problems: [
      "Fragmented governance across chains",
      "Complex proposals",
      "Poor communication"
    ],
    solutions: [
      "Simplified delegation process",
      "Accessible information",
      "Continuous reporting"
    ]
  },
  {
    title: "DAOs",
    problems: [
      "Delegates lack expertise",
      "Conflicts of interest",
      "Overburdened delegates"
    ],
    solutions: [
      "Unbiased AI-powered decision making",
      "Community guideline adherence",
      "Automated proposal analysis"
    ]
  }
];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white" id="solutions">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gabarito">Solutions</h2>
            <div className="w-20 h-1 bg-[#8DC63F] mx-auto mb-8"></div>
          </motion.div>
          
          {/* Tabs */}
          <div className="flex mb-10 justify-center">
            {solutions.map((solution, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-3 px-6 text-lg font-medium rounded-lg transition-colors cursor-pointer ${
                  activeTab === index
                    ? "bg-[#8DC63F] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } ${index === 0 ? "mr-4" : ""}`}
              >
                {solution.title}
              </button>
            ))}
          </div>
          
          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
          >
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Problem</h3>
              <ul className="space-y-3">
                {solutions[activeTab].problems.map((problem, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-600">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Solution</h3>
              <ul className="space-y-3">
                {solutions[activeTab].solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#8DC63F] mr-2">•</span>
                    <span className="text-gray-600">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions; 