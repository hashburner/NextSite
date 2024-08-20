import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BsMusicNote, BsMusicNoteList, BsCalendarCheck, BsUpload } from 'react-icons/bs';

const ServicesAndBookings: React.FC = () => {
  const [activeCard, setActiveCard] = useState<'services' | 'bookings'>('services');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const services = [
    { 
      title: "Mixing", 
      description: "Blend and balance your tracks to perfection, enhancing clarity and depth.",
      icon: BsMusicNote
    },
    { 
      title: "Mastering", 
      description: "Polish your final mix to industry standards, ensuring it sounds great on any system.",
      icon: BsMusicNoteList
    },
    { 
      title: "Recording", 
      description: "Capture your sound with precision using state-of-the-art equipment and techniques.",
      icon: BsCalendarCheck
    },
    { 
      title: "Production", 
      description: "Develop your musical ideas from concept to finished product with expert guidance.",
      icon: BsMusicNote
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    details: '',
    file: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prevState => ({
        ...prevState,
        file: e.target.files![0]
      }));
    }
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
      details: '',
      file: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:py-20 flex items-center justify-center">
      <motion.div layout className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
        {/* Services Card */}
        <motion.div 
          layout
          className={`w-full lg:w-1/2 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl overflow-hidden relative cursor-pointer ${activeCard === 'services' ? 'lg:w-3/5' : 'lg:w-2/5'}`}
          onClick={() => setActiveCard('services')}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
        >
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                'radial-gradient(circle, var(--gradient1) 0%, var(--gradient2) 100%)',
                'radial-gradient(circle, var(--gradient2) 0%, var(--gradient3) 100%)',
                'radial-gradient(circle, var(--gradient3) 0%, var(--gradient1) 100%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div layout className="relative z-10">
            <h2 className="text-4xl font-bold text-accent mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-gray-800 bg-opacity-50 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <service.icon className="text-2xl text-accent mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bookings Card */}
        <motion.div 
          layout
          className={`w-full lg:w-1/2 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl overflow-hidden relative cursor-pointer ${activeCard === 'bookings' ? 'lg:w-3/5' : 'lg:w-2/5'}`}
          onClick={() => setActiveCard('bookings')}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
        >
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                'radial-gradient(circle, var(--gradient3) 0%, var(--gradient1) 100%)',
                'radial-gradient(circle, var(--gradient1) 0%, var(--gradient2) 100%)',
                'radial-gradient(circle, var(--gradient2) 0%, var(--gradient3) 100%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div layout className="relative z-10">
            <h2 className="text-4xl font-bold text-accent mb-8">Book a Session</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded border border-gray-600 focus:border-accent focus:ring-2 focus:ring-accent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded border border-gray-600 focus:border-accent focus:ring-2 focus:ring-accent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-gray-300 text-sm font-bold mb-2">Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded border border-gray-600 focus:border-accent focus:ring-2 focus:ring-accent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="mixing">Mixing</option>
                  <option value="mastering">Mastering</option>
                  <option value="recording">Recording</option>
                  <option value="production">Production</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-gray-300 text-sm font-bold mb-2">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-gray-700 rounded border border-gray-600 focus:border-accent focus:ring-2 focus:ring-accent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="details" className="block text-gray-300 text-sm font-bold mb-2">Additional Details</label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-gray-700 rounded border border-gray-600 focus:border-accent focus:ring-2 focus:ring-accent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <div>
                <label htmlFor="file" className="block text-gray-300 text-sm font-bold mb-2">Upload MP3 (optional)</label>
                <div className="flex items-center">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".mp3"
                    className="hidden"
                  />
                  <label
                    htmlFor="file"
                    className="flex items-center justify-center w-full bg-gray-700 rounded border border-gray-600 focus:border-accent focus:ring-2 focus:ring-accent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-pointer"
                  >
                    <BsUpload className="mr-2" />
                    {formData.file ? formData.file.name : 'Choose MP3 file'}
                  </label>
                </div>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-accent text-white font-bold py-2 px-4 rounded hover:bg-accent-dark transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesAndBookings;