"use client";

import { motion } from "framer-motion";
import { 
  FiCpu, 
  FiLock, 
  FiActivity, 
  FiEye, 
  FiShield,
  FiUsers
} from "react-icons/fi";

const features = [
  {
    icon: <FiCpu className="text-[#8DC63F] w-6 h-6" />,
    title: "AI Analysis Engine",
    description: "Processes proposals, discussions, and sentiment using advanced LLM technology"
  },
  {
    icon: <FiLock className="text-[#8DC63F] w-6 h-6" />,
    title: "Smart Contract Integration",
    description: "Direct on-chain voting through secure wallet infrastructure"
  },
  {
    icon: <FiActivity className="text-[#8DC63F] w-6 h-6" />,
    title: "Cross-Platform Monitoring",
    description: "Tracks governance activity across Tally, social media, and forums"
  },
  {
    icon: <FiEye className="text-[#8DC63F] w-6 h-6" />,
    title: "Transparent Decision Logic",
    description: "Provides reasoning before voting occurs"
  },
  {
    icon: <FiShield className="text-[#8DC63F] w-6 h-6" />,
    title: "Security-First Design",
    description: "Member-gated interface with verifiable execution"
  },
  {
    icon: <FiUsers className="text-[#8DC63F] w-6 h-6" />,
    title: "Community Feedback Integration",
    description: "Incorporates real-time sentiment from DAO members for more representative voting"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gabarito">Features</h2>
            <div className="w-20 h-1 bg-[#8DC63F] mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 p-3 bg-[#f5f9ee] rounded-lg w-12 h-12 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-gabarito">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 