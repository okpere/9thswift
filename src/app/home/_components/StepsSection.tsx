'use client';

import { useState, useEffect } from 'react';

export default function StepsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      id: 0,
      number: '01',
      title: 'Select you business type.',
      description:
        'Whether you are an individual, corporate or government institution, we got you covered.',
    },
    {
      id: 1,
      number: '02',
      title: 'Create your free account.',
      description: 'Enter your business details and get verified quickly.',
    },
    {
      id: 2,
      number: '03',
      title: 'Start accepting payments.',
      description: 'Share payment links or integrate with your website.',
    },
  ];

  // Auto-advance carousel with progress bar
  useEffect(() => {
    setProgress(0);
    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setActiveStep((current) => (current + 1) % steps.length);
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [activeStep, steps.length]);

  return (
    <section className='bg-white py-16 sm:py-24 overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='mt-4 text-4xl sm:text-5xl font-bold text-gray-900'>
            Get started in 3 simple steps
          </h2>
          <p className='mt-2 text-sm text-gray-500'>
            Running a business is hard enough, getting paid should not be.
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative mt-16'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
            {/* Step 1 Card */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                activeStep === 0
                  ? 'scale-100 opacity-100'
                  : 'scale-95 opacity-60'
              }`}
            >
              <div className='rounded-3xl bg-[#3b2008] p-6 text-white shadow-xl h-full'>
                <div className='mb-6 text-lg font-semibold text-white/70'>
                  01
                </div>
                <div className='rounded-2xl bg-[#f8f6f3] p-5 text-gray-900 shadow-lg'>
                  <div className='space-y-3'>
                    {/* Heading */}
                    <div className='text-center'>
                      <div className='text-xs font-semibold text-gray-800'>
                        Let's get started with your 9th Swift account Choose
                        your business type
                      </div>
                      <div className='mt-1 text-[9px] text-gray-500'>
                        Each is signed with different needs in mind
                      </div>
                    </div>

                    {/* Business Type Cards */}
                    <div>
                      <div className='mb-2 text-[10px] font-semibold text-gray-700'>
                        Business type *
                      </div>
                      <div className='grid grid-cols-3 gap-1.5'>
                        {/* Individual */}
                        <div className='rounded-lg border border-gray-200 bg-white p-2 text-center'>
                          <div className='mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-orange-100'>
                            <svg
                              className='h-3 w-3 text-orange-500'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                              />
                            </svg>
                          </div>
                          <div className='mt-1 text-[8px] font-semibold text-gray-800'>
                            Individual
                          </div>
                          <div className='mt-0.5 text-[7px] leading-tight text-gray-500'>
                            Lorem ipsum
                          </div>
                        </div>

                        {/* Corporate - Selected */}
                        <div className='rounded-lg border-2 border-orange-400 bg-orange-50 p-2 text-center'>
                          <div className='mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-orange-300'>
                            <svg
                              className='h-3 w-3 text-white'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                              />
                            </svg>
                          </div>
                          <div className='mt-1 text-[8px] font-semibold text-gray-800'>
                            Corporate
                          </div>
                          <div className='mt-0.5 text-[7px] leading-tight text-gray-600'>
                            Lorem ipsum
                          </div>
                        </div>

                        {/* Government */}
                        <div className='rounded-lg border border-gray-200 bg-white p-2 text-center'>
                          <div className='mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-orange-100'>
                            <svg
                              className='h-3 w-3 text-orange-500'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
                              />
                            </svg>
                          </div>
                          <div className='mt-1 text-[8px] font-semibold text-gray-800'>
                            Government
                          </div>
                          <div className='mt-0.5 text-[7px] leading-tight text-gray-500'>
                            Lorem ipsum
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dropdown */}
                    <div>
                      <div className='mb-1 text-[10px] font-semibold text-gray-700'>
                        Business Category *
                      </div>
                      <div className='flex items-center justify-between rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-[10px] text-gray-500'>
                        <span>Sales, Logistics...</span>
                        <svg
                          className='h-3 w-3 text-gray-400'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 9l-7 7-7-7'
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className='rounded-md bg-blue-50 p-2'>
                      <div className='text-[8px] leading-tight text-gray-700'>
                        By clicking on Create Account, you agree to{' '}
                        <span className='font-medium text-blue-600'>
                          User Agreement
                        </span>{' '}
                        and{' '}
                        <span className='font-medium text-blue-600'>
                          Privacy Policy
                        </span>
                      </div>
                    </div>

                    {/* Button */}
                    <button className='w-full rounded-lg bg-orange-400 py-2 text-[10px] font-semibold text-white'>
                      Create Account
                    </button>

                    {/* Footer */}
                    <div className='text-center text-[9px] text-gray-600'>
                      Already Registered?{' '}
                      <span className='font-semibold text-gray-900'>Login</span>
                    </div>
                  </div>
                </div>
                <h3 className='mt-5 text-lg font-bold leading-tight'>
                  Select you business type.
                </h3>
                <p className='mt-2 text-sm text-white/80 leading-relaxed'>
                  Whether you are an individual, corporate or government
                  institution, we got you covered.
                </p>
              </div>
            </div>

            {/* Step 2 Card */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                activeStep === 1
                  ? 'scale-100 opacity-100'
                  : 'scale-95 opacity-60'
              }`}
            >
              <div className='rounded-3xl bg-[#3b2008] p-6 text-white shadow-xl h-full'>
                <div className='mb-6 text-lg font-semibold text-white/70'>
                  02
                </div>
                <div className='rounded-2xl bg-[#b8afa5] p-5 shadow-lg'>
                  <div className='rounded-xl bg-white/95 p-4'>
                    <div className='space-y-2.5'>
                      {/* Header */}
                      <div className='text-center'>
                        <div className='text-xs font-bold text-gray-800'>
                          Add your business details.
                        </div>
                      </div>

                      {/* Form Fields */}
                      <div className='space-y-2'>
                        <div>
                          <div className='mb-1 text-[9px] font-medium text-gray-700'>
                            Country *
                          </div>
                          <div className='flex items-center justify-between rounded-md border border-gray-300 bg-white px-2 py-1.5 text-[9px] text-gray-500'>
                            <span>Please select</span>
                            <svg
                              className='h-3 w-3 text-gray-400'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M19 9l-7 7-7-7'
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <div className='mb-1 text-[9px] font-medium text-gray-700'>
                            Business Name
                          </div>
                          <input
                            type='text'
                            placeholder='E.g Jerr Tech Nigeria Ltd'
                            className='w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-[9px] placeholder-gray-400'
                            readOnly
                          />
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                          <div>
                            <div className='mb-1 text-[9px] font-medium text-gray-700'>
                              First Name
                            </div>
                            <input
                              type='text'
                              placeholder='E.g Theophilus'
                              className='w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-[9px] placeholder-gray-400'
                              readOnly
                            />
                          </div>
                          <div>
                            <div className='mb-1 text-[9px] font-medium text-gray-700'>
                              Last Name
                            </div>
                            <input
                              type='text'
                              placeholder='E.g Nisheal'
                              className='w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-[9px] placeholder-gray-400'
                              readOnly
                            />
                          </div>
                        </div>
                        <div>
                          <div className='mb-1 text-[9px] font-medium text-gray-700'>
                            VAT/SNAL/CAC
                          </div>
                          <input
                            type='text'
                            className='w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-[9px]'
                            readOnly
                          />
                        </div>
                        <div>
                          <div className='mb-1 text-[9px] font-medium text-gray-700'>
                            Phone Number
                          </div>
                          <div className='flex gap-1.5'>
                            <input
                              type='text'
                              value='+234'
                              className='w-16 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-[9px] text-gray-700'
                              readOnly
                            />
                            <input
                              type='text'
                              className='flex-1 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-[9px]'
                              readOnly
                            />
                          </div>
                        </div>
                      </div>

                      {/* Button */}
                      <button className='w-full rounded-lg bg-orange-400 py-2 text-[10px] font-semibold text-white'>
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
                <h3 className='mt-5 text-lg font-bold leading-tight'>
                  Create your free account.
                </h3>
                <p className='mt-2 text-sm text-white/80 leading-relaxed'>
                  Enter your business details and get verified quickly.
                </p>
              </div>
            </div>

            {/* Step 3 Card */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                activeStep === 2
                  ? 'scale-100 opacity-100'
                  : 'scale-95 opacity-60'
              }`}
            >
              <div className='rounded-3xl bg-[#3b2008] p-6 text-white shadow-xl h-full'>
                <div className='mb-6 text-lg font-semibold text-white/70'>
                  03
                </div>
                <div className='rounded-2xl bg-[#b8afa5] p-5 shadow-lg'>
                  <div className='rounded-xl bg-white/95 p-4'>
                    <div className='space-y-3'>
                      {/* Stats Grid */}
                      <div className='grid grid-cols-2 gap-2'>
                        <div className='rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 p-3 shadow-sm'>
                          <div className='text-[9px] font-medium text-orange-800'>
                            Total Revenue
                          </div>
                          <div className='mt-1 text-lg font-bold text-orange-900'>
                            ₦2.4M
                          </div>
                          <div className='mt-2 flex items-end gap-0.5'>
                            <div className='h-4 w-1.5 rounded-sm bg-orange-300' />
                            <div className='h-5 w-1.5 rounded-sm bg-orange-300' />
                            <div className='h-7 w-1.5 rounded-sm bg-orange-400' />
                            <div className='h-5 w-1.5 rounded-sm bg-orange-300' />
                            <div className='h-8 w-1.5 rounded-sm bg-orange-400' />
                          </div>
                        </div>
                        <div className='rounded-lg bg-gradient-to-br from-orange-400 to-orange-300 p-3 shadow-md'>
                          <div className='text-[9px] font-medium text-orange-900'>
                            Transactions
                          </div>
                          <div className='mt-1 text-lg font-bold text-orange-950'>
                            1,234
                          </div>
                          <div className='mt-2 space-y-0.5'>
                            <div className='h-1 w-full rounded-full bg-orange-500' />
                            <div className='h-1 w-3/4 rounded-full bg-orange-500' />
                            <div className='h-1 w-5/6 rounded-full bg-orange-500' />
                          </div>
                        </div>
                      </div>

                      {/* Recent Activity */}
                      <div className='rounded-lg bg-gray-50 p-2.5'>
                        <div className='mb-2 text-[9px] font-semibold text-gray-700'>
                          Recent Transactions
                        </div>
                        <div className='space-y-1.5'>
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className='flex items-center justify-between rounded-md bg-white p-1.5 shadow-sm'
                            >
                              <div className='flex items-center gap-1.5'>
                                <div className='h-4 w-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-300' />
                                <div>
                                  <div className='text-[8px] font-medium text-gray-800'>
                                    Payment #{1000 + i}
                                  </div>
                                  <div className='text-[7px] text-gray-500'>
                                    2 mins ago
                                  </div>
                                </div>
                              </div>
                              <div className='text-[9px] font-bold text-gray-800'>
                                ₦{(Math.random() * 10000).toFixed(0)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className='grid grid-cols-2 gap-2'>
                        <button className='rounded-lg bg-orange-400 py-2 text-[9px] font-semibold text-white'>
                          Create Link
                        </button>
                        <button className='rounded-lg border-2 border-orange-400 bg-white py-2 text-[9px] font-semibold text-orange-600'>
                          View Analytics
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className='mt-5 text-lg font-bold leading-tight'>
                  Start accepting payments.
                </h3>
                <p className='mt-2 text-sm text-white/80 leading-relaxed'>
                  Share payment links or integrate with your website.
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar Loader */}
          <div className='mt-12 max-w-md mx-auto'>
            <div className='flex items-center justify-center gap-3 mb-4'>
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`transition-all duration-300 ${
                    activeStep === step.id
                      ? 'h-2.5 w-2.5 rounded-full bg-orange-500 ring-4 ring-orange-100'
                      : 'h-2 w-2 rounded-full bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to step ${step.number}`}
                />
              ))}
            </div>
            
            {/* Animated Progress Bar */}
            <div className='relative h-1.5 w-full overflow-hidden rounded-full bg-gray-200'>
              <div
                className='absolute left-0 top-0 h-full bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-100 ease-linear rounded-full'
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Navigation Controls */}
          <div className='mt-8 flex items-center justify-center gap-4'>
            <button
              onClick={() => {
                setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
                setProgress(0);
              }}
              className='flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 transition hover:border-gray-400 hover:bg-gray-50'
              aria-label='Previous step'
            >
              <svg
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button
              onClick={() => {
                setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
                setProgress(0);
              }}
              className='flex h-10 w-10 items-center justify-center rounded-lg border border-gray-900 bg-gray-900 text-white transition hover:bg-gray-800'
              aria-label='Next step'
            >
              <svg
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
