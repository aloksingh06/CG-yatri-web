'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react'; // Icons imported
import FooterSection from '../Components/FooterSection'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Message Data:', formData);
  };
  

  return (
    <>
    <section className="bg-gray-100 py-16 mt-12  px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-gray-600">
            Have questions, feedback, or partnership inquiries? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left - Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-blue-50 p-8 rounded-2xl shadow-lg flex flex-col gap-6"
          >
            <div>
              <label className="text-blue-800 font-semibold">Name</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="text-blue-800 font-semibold">Email</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl border focus:outline-none focus:ring-blue-400"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="text-blue-800 font-semibold">Subject</label>
              <input 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl border focus:outline-none focus:ring-blue-400"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="text-blue-800 font-semibold">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl border focus:outline-none focus:ring-blue-400"
                placeholder="Your message here..."
                rows={5}
                required
              />
            </div>

            <button 
              type="submit" 
              className="bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition mt-4"
            >
              Send Message
            </button>
          </motion.form>

          {/* Right - Contact Info + Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 h-full"
          >
            {/* Contact Info */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow-lg flex flex-col gap-4">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Contact Information</h3>
              <div className="flex items-center gap-3 text-blue-700">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@cgyatri.com" className="text-blue-600">info@cgyatri.com</a>
              </div>
              <div className="flex items-center gap-3 text-blue-700">
                <Phone className="w-5 h-5" />
                <a href="tel:+917772229999" className="text-blue-600">+91 777 222 9999</a>
              </div>
              <div className="flex items-center gap-3 text-blue-700">
                <MapPin className="w-5 h-5" />
                <span>123 Tourism Plaza, GE Road, Raipur, Chhattisgarh 492001</span>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-blue-50 p-2 rounded-2xl shadow-lg h-[56vh]">
              <iframe
                src="https://maps.google.com/maps?q=Raipur%20Chhattisgarh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>

      
    </section>
    <section>
        <FooterSection/>
      </section>
    </>
    
  );
};

export default ContactSection;
