import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Bookings: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    details: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('File uploaded:', file);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      service: '',
      date: '',
      details: ''
    });
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:py-20">
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold text-center text-accent mb-8 sm:mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Book a Session
      </motion.h2>
      <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8">
        <motion.div 
          className="w-full lg:w-5/12 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 sm:p-8 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-text mb-4 sm:mb-6">How to Book</h3>
          <p className="text-text mb-4">
            1. Fill out the booking form with your details and project requirements.
          </p>
          <p className="text-text mb-4">
            2. Upload an MP3 sample of your work (optional but recommended).
          </p>
          <p className="text-text mb-4">
            3. Submit your booking request.
          </p>
          <p className="text-text mb-4">
            4. We'll review your request and get back to you within 48 hours to confirm your booking and discuss any additional details.
          </p>
          <p className="text-text">
            Got questions? Don't hesitate to reach out to us at bookings@killiantaylor.com
          </p>
        </motion.div>
        <motion.form 
          onSubmit={handleSubmit} 
          className="w-full lg:w-6/12 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl p-6 sm:p-8 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-text text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent text-base outline-none text-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-text text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent text-base outline-none text-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="service" className="block text-text text-sm font-bold mb-2">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent text-base outline-none text-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
            <label htmlFor="date" className="block text-text text-sm font-bold mb-2">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent text-base outline-none text-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="details" className="block text-text text-sm font-bold mb-2">Additional Details</label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent text-base outline-none text-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="mb-6">
            <label htmlFor="file" className="block text-text text-sm font-bold mb-2">Upload MP3 (optional)</label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".mp3"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent text-base outline-none text-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
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
    </div>
  );
};

export default Bookings;