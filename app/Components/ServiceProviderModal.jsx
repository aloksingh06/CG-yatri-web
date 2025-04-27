'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ServiceProviderModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    serviceName: '',
    vehicleType: '',
    contact: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
    setFormData({
      name: '',
      serviceName: '',
      vehicleType: '',
      contact: '',
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div 
        className="bg-white p-8 rounded-xl w-80"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register Service Provider</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
        />
        <input
          type="text"
          name="serviceName"
          placeholder="Service Name"
          value={formData.serviceName}
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
        />
        <input
          type="text"
          name="vehicleType"
          placeholder="Vehicle Type"
          value={formData.vehicleType}
          onChange={handleChange}
          className="border p-2 mb-3 w-full rounded"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          className="border p-2 mb-4 w-full rounded"
        />
        <div className="flex gap-4 justify-center">
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
            Save
          </button>
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}
