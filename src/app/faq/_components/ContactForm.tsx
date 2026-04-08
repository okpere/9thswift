'use client';

import { Clock } from 'lucide-react';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div 
    id='contactForm'
    className='relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Section */}
          <div>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-4'>
              Didn't Find What you Need?
            </h2>
            <p className='text-gray-600 text-lg mb-12'>
              Send us a message below and we would respond you in minutes.
            </p>

            {/* Business Hours Card */}
            <div className='bg-orange-50/50 rounded-2xl p-8'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center'>
                  <Clock className='w-6 h-6 text-orange-500' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900'>
                  Business Hours
                </h3>
              </div>

              <div className='space-y-4'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Monday - Friday</span>
                  <span className='font-semibold text-gray-900'>
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Saturday</span>
                  <span className='font-semibold text-gray-900'>
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-600'>Sunday</span>
                  <span className='font-semibold text-gray-900'>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className='bg-orange-50/30 rounded-2xl p-8 lg:p-10'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Field */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-900 mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Full Name'
                  className='w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent'
                />
              </div>

              {/* Email and Phone */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-900 mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='@email.com'
                    className='w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent'
                  />
                </div>
                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-900 mb-2'
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='Enter Phone nUmber'
                    className='w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent'
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-900 mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='e.g Payment Reversal'
                  className='w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent'
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-900 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='e.g Payment Reversal'
                  rows={5}
                  className='w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none'
                />
              </div>

              {/* Submit Button */}
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
