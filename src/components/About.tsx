"use client";

import { motion } from "framer-motion";
import { 
  RiLightbulbFlashLine, 
  RiTeamLine, 
  RiScales3Line, 
  RiShieldCheckLine 
} from "react-icons/ri";

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-gabarito">About</h2>
            <div className="w-20 h-1 bg-[#8DC63F] mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-gabarito">What is TOAD?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                TOAD (Trustless Onchain Autonomous Delegate) is an AI-powered voting delegate system that revolutionizes DAO governance. Operating as an autonomous agent, TOAD analyzes proposals, gathers community sentiment, and casts votes with delegated power, serving as a crucial step toward AI-governed DAOs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-gabarito">Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                TOAD exists to democratize governance by creating an unbiased, accessible bridge between communities and their decision-making processes. We&apos;re building the future of decentralized governance where technology amplifies collective wisdom rather than replacing it.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-gabarito">Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Transparency",
                  description: "We believe in fully transparent decision-making where reasoning is as important as the outcome.",
                  icon: <RiLightbulbFlashLine className="text-[#8DC63F] w-8 h-8 mb-3" />
                },
                {
                  title: "Inclusivity",
                  description: "We're breaking down technical barriers to ensure everyone can participate meaningfully in governance.",
                  icon: <RiTeamLine className="text-[#8DC63F] w-8 h-8 mb-3" />
                },
                {
                  title: "Impartiality",
                  description: "We're committed to decisions based solely on community guidelines and collective benefit—never personal gain.",
                  icon: <RiScales3Line className="text-[#8DC63F] w-8 h-8 mb-3" />
                },
                {
                  title: "Accountability",
                  description: "Every vote cast through TOAD comes with clear reasoning that can be verified and challenged.",
                  icon: <RiShieldCheckLine className="text-[#8DC63F] w-8 h-8 mb-3" />
                }
              ].map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-t-4 border-[#8DC63F] hover:shadow-md transition-shadow">
                  {value.icon}
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 font-gabarito">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 