import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = ["Mixing", "Mastering", "Recording", "Production"];

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-accent">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            className="bg-backgroundalt p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold mb-4">{service}</h3>
            <p>Professional {service.toLowerCase()} services to achieve the perfect sound for your tracks.</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;