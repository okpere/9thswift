'use client';

import { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How long until I receive payments?',
      answer:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
    {
      question: 'How long until I receive payments?',
      answer:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
    {
      question: 'How long until I receive payments?',
      answer:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
    {
      question: 'How long until I receive payments?',
      answer:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
    {
      question: 'How long until I receive payments?',
      answer:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className='relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-orange-50/30'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          {/* Here to Help Tag */}
          <div className='inline-flex items-center gap-2 mb-6'>
            <div className='w-2 h-2 bg-orange-400 rounded-full'></div>
            <span className='text-orange-400 text-sm font-medium'>
              Here to Help
            </span>
          </div>

          {/* Heading */}
          <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
            Frequently Asked Questions
          </h1>

          {/* Subtitle */}
          <p className='text-gray-600 text-base lg:text-lg mb-8'>
            Find answers to the most common questions about our product.
          </p>

          {/* Search Box */}
          <div className='relative max-w-2xl mx-auto'>
            <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
            <input
              type='text'
              placeholder='Search FAQs Here...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-900 placeholder-gray-400'
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className='space-y-4'>
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border-2 transition-all duration-200 ${
                openIndex === index
                  ? 'border-orange-400 shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full flex items-center justify-between p-6 text-left'
              >
                <h3 className='text-lg font-semibold text-gray-900 pr-4'>
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index
                      ? 'bg-orange-400 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {openIndex === index ? (
                    <ChevronUp className='w-5 h-5' />
                  ) : (
                    <ChevronDown className='w-5 h-5' />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className='px-6 pb-6'>
                  <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg'>
              No FAQs found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
