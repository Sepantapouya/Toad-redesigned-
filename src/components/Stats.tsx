"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const counters = [
  {
    value: 400,
    symbol: "+",
    label: "Projects onboarded",
    suffix: "",
    startValue: 0,
    color: "text-blue-600"
  },
  {
    value: 600,
    symbol: "%",
    label: "Return on investment",
    suffix: "",
    startValue: 0,
    color: "text-indigo-600"
  },
  {
    value: 10,
    symbol: "k",
    label: "On-chain transactions",
    suffix: "+",
    startValue: 0,
    color: "text-purple-600"
  }
];

// Animated counter component
const Counter = ({ value, duration = 2, symbol = "", suffix = "", color = "text-blue-600" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value);
    const incrementTime = (duration * 1000) / end;
    
    // Handle edge case for small values
    const increment = end < 20 ? 1 : Math.floor(end / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return (
    <span ref={nodeRef} className={`text-5xl md:text-6xl font-bold ${color}`}>
      {count}{symbol}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-24 bg-white" id="stats">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unleash the full power of data
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built for all your Web3 protocol management and delegate needs. Our platform offers robust solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Counter 
                value={counter.value} 
                symbol={counter.symbol} 
                suffix={counter.suffix} 
                color={counter.color}
              />
              <p className="text-gray-600 mt-2">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 