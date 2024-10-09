import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateName = (value: string) => {
    const nameRegex = /^[a-zA-Z\s-]+$/;
    if (!nameRegex.test(value)) {
      setNameError('Name can only contain letters, spaces, and hyphens');
    } else {
      setNameError('');
    }
    setName(value);
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
    setEmail(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameError && !emailError && name && email && message) {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', { name, email, message });
      // Reset form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center neon-text">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-neon-blue" />
                <a href="mailto:marco@example.com" className="hover:text-neon-blue transition-colors">marco@example.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-neon-blue" />
                <a href="tel:+1234567890" className="hover:text-neon-blue transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-neon-blue" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => validateName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue"
                required
              />
              {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue"
                required
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-neon-blue text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!name || !email || !message || !!nameError || !!emailError}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;