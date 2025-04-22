"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Analytics = () => {
  return (
    <section className="py-24 bg-white" id="analytics">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Monitor all on-chain governance and delegate activity in real-time. Empower your DAO with data-driven insights.
          </p>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 max-w-5xl mx-auto"
        >
          {/* Dashboard Header */}
          <div className="bg-white p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-gray-600">My Dashboard</div>
            <div className="w-24"></div> {/* Spacer for balance */}
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50">
            {/* Left Sidebar */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-blue-600 font-medium p-2 bg-blue-50 rounded">
                  <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                  Dashboard
                </li>
                {["Analytics", "Proposals", "Voting", "Delegates", "Reports", "Settings"].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 p-2 hover:bg-gray-50 rounded transition-colors">
                    <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-2 space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Total Value", value: "$8,744.25", change: "+6.2%" },
                  { label: "Transactions", value: "12,450", change: "+8.1%" },
                  { label: "Votes Cast", value: "96", change: "+12.4%" },
                  { label: "Success Rate", value: "98%", change: "+2.3%" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="text-lg font-bold text-gray-900">{item.value}</p>
                    <p className="text-xs text-green-600">{item.change}</p>
                  </div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Governance Activities</h3>
                <div className="h-40 w-full bg-gray-50 rounded flex items-end justify-between p-2">
                  {[40, 65, 55, 70, 60, 90, 75, 85, 50, 60, 70, 80].map((height, index) => (
                    <div 
                      key={index} 
                      className="w-1/12 bg-blue-500"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">Jan</span>
                  <span className="text-xs text-gray-500">Dec</span>
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Activity</h3>
                <div className="space-y-2">
                  {[
                    { action: "Vote Cast", protocol: "Uniswap", time: "2h ago" },
                    { action: "Proposal Created", protocol: "Aave", time: "5h ago" },
                    { action: "Delegation", protocol: "Compound", time: "1d ago" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm text-gray-700">{activity.action}</span>
                        <span className="text-xs text-gray-500">on {activity.protocol}</span>
                      </div>
                      <span className="text-xs text-gray-400">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature List */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Real-time Monitoring",
              description: "Track all delegate activities and voting patterns in real-time with detailed analytics."
            },
            {
              title: "Performance Metrics",
              description: "Measure the efficiency and effectiveness of your governance proposals and delegate decisions."
            },
            {
              title: "Custom Reports",
              description: "Generate tailored reports to understand how your protocol governance is performing."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics; 