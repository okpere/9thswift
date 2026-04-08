'use client';

import { ArrowRight } from 'lucide-react';

const QuickStartGuide = () => {
  const useCases = [
    {
      id: 1,
      title: 'Title here',
      description:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
    {
      id: 2,
      title: 'Title here',
      description:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
    {
      id: 3,
      title: 'Title here',
      description:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
    {
      id: 4,
      title: 'Title here',
      description:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
    {
      id: 5,
      title: 'Title here',
      description:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
    {
      id: 6,
      title: 'Title here',
      description:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
    {
      id: 7,
      title: 'Title here',
      description:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
    {
      id: 8,
      title: 'Title here',
      description:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
    {
      id: 9,
      title: 'Title here',
      description:
        'Settlement happens within 24 hours, depending on payment method and verification status.',
    },
  ];

  return (
    <div className='bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900'>
            Use cases
          </h2>
        </div>

        {/* Use Cases Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className='border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300'
            >
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                {useCase.title}
              </h3>
              <p className='text-sm text-gray-600 mb-6 leading-relaxed'>
                {useCase.description}
              </p>
              <button className='flex items-center gap-2 text-orange-500 text-sm font-medium hover:gap-3 transition-all duration-200'>
                Learn More
                <ArrowRight className='w-4 h-4' />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickStartGuide;
