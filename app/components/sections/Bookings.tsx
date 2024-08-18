import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Bookings: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      service: '',
      date: '',
      details: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-backgroundalt py-20 px-4">
      <motion.h2 
        className="text-5xl font-bold text-center text-accent mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Book a Session
      </motion.h2>
      <motion.form 
        onSubmit={handleSubmit} 
        className="max-w-2xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white bg-opacity-20 rounded border border-white border-opacity-20 focus:border-accent focus:bg-white focus:bg-opacity-30 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white bg-opacity-20 rounded border border-white border-opacity-20 focus:border-accent focus:bg-white focus:bg-opacity-30 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="service" className="block text-white text-sm font-bold mb-2">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-white bg-opacity-20 rounded border border-white border-opacity-20 focus:border-accent focus:bg-white focus:bg-opacity-30 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          >
            <option value="">Select a service</option>
            <option value="mixing">Mixing</option>
            <option value="mastering">Mastering</option>
            <option value="recording">Recording</option>
            <option value="production">Production</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="date" className="block text-white text-sm font-bold mb-2">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-white bg-opacity-20 rounded border border-white border-opacity-20 focus:border-accent focus:bg-white focus:bg-opacity-30 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="details" className="block text-white text-sm font-bold mb-2">Additional Details</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4}
            className="w-full bg-white bg-opacity-20 rounded border border-white border-opacity-20 focus:border-accent focus:bg-white focus:bg-opacity-30 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-accent text-white font-bold py-2 px-4 rounded hover:bg-accent-dark transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Bookings;