import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BsMusicNote, BsMusicNoteList, BsCalendarCheck, BsUpload, BsChevronDown, BsChevronUp } from 'react-icons/bs';

const ServicesAndBookings: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    details: '',
    file: null as File | null,
  });

  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bookingOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bookingY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-50%']);

  const servicesOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const servicesY = useTransform(scrollYProgress, [0.5, 1], ['50%', '0%']);

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
  };

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

  return (
    <div className="container mx-auto px-4 py-4 mt-16 md:mt-20 h-[calc(100vh-7rem)] md:h-[calc(100vh-8rem)]">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-4 shadow-2xl h-full overflow-y-auto custom-scrollbar">
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Book a Session</h2>
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 mb-8">
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

        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">Our Services</h2>
        <div className="space-y-3 md:space-y-4">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden"
            >
              <motion.button
                className="w-full p-3 flex justify-between items-center text-left"
                onClick={() => setOpenFaq(openFaq === service.title ? null : service.title)}
              >
                <span className="text-lg font-semibold flex items-center">
                  <service.icon className="mr-2" />
                  {service.title}
                </span>
                {openFaq === service.title ? <BsChevronUp /> : <BsChevronDown />}
              </motion.button>
              {openFaq === service.title && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="p-3 text-gray-300 text-sm">{service.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesAndBookings;

