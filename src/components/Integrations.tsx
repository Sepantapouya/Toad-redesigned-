"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const integrationData = [
  {
    title: "Nexus Integration",
    description: "Connect your voting power to trusted blockchain protocols for seamless delegation.",
    icon: "/globe.svg"
  },
  {
    title: "Dapp Integration",
    description: "Easily integrate TOAD into any decentralized application with our simple API.",
    icon: "/window.svg"
  },
  {
    title: "Onchain Drive Integration",
    description: "Store voting records and delegation history securely on-chain for maximum transparency.",
    icon: "/file.svg"
  }
];

const Integrations = () => {
  return (
    <section className="py-24 bg-white" id="integrations">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get more value from your tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect your TOAD account with other services. This helps your delegates make the best decisions for your protocol governance.
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrationData.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
                <Image
                  src={integration.icon}
                  alt={integration.title}
                  width={24}
                  height={24}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {integration.title}
              </h3>
              <p className="text-gray-600">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Second Row of Integrations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4 p-3 bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
              <Image
                src="/globe.svg"
                alt="Injection Integration"
                width={24}
                height={24}
                className="text-blue-600"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Injection Integration
            </h3>
            <p className="text-gray-600">
              Allow direct interaction with smart contracts via our injection system for better governance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4 p-3 bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
              <Image
                src="/file.svg"
                alt="API Integration"
                width={24}
                height={24}
                className="text-blue-600"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              API Integration
            </h3>
            <p className="text-gray-600">
              Leverage our comprehensive API to build custom solutions on top of the TOAD framework.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4 p-3 bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
              <Image
                src="/window.svg"
                alt="Snapshot Integration"
                width={24}
                height={24}
                className="text-blue-600"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Snapshot Integration
            </h3>
            <p className="text-gray-600">
              Sync with Snapshot for off-chain voting support while maintaining decentralized principles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integrations; 