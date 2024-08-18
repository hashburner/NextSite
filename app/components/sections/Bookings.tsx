import React, { useState } from 'react';

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
    // Here you would typically send the form data to your backend
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
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-accent">Book a Session</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full bg-backgroundalt text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full bg-backgroundalt text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-backgroundalt text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          required
        >
          <option value="">Select a service</option>
          <option value="mixing">Mixing</option>
          <option value="mastering">Mastering</option>
          <option value="recording">Recording</option>
          <option value="production">Production</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full bg-backgroundalt text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Additional Details"
          rows={4}
          className="w-full bg-backgroundalt text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          type="submit"
          className="bg-accent text-white px-6 py-2 rounded-md hover:bg-accent-dark transition-colors duration-300"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default Bookings;