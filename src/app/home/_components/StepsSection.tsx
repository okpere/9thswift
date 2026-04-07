'use client';

import { useState, useEffect } from 'react';
import {
  BarChart3,
  Users,
  Wallet,
  FileText,
  Bell,
  TrendingUp,
  Download,
  User,
} from 'lucide-react';
import Logo from '@/app/_components/Logo';

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
    <section className='bg-white py-12 sm:py-16 lg:py-24 overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 px-2'>
            Get started in 3 simple steps
          </h2>
          <p className='mt-2 text-sm lg:text-base text-gray-500 px-2'>
            Running a business is hard enough, getting paid should not be.
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative mt-8 sm:mt-12 lg:mt-16'>
          <div className='flex justify-center gap-6 lg:gap-8'>
            {/* Step 1 Card */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                activeStep === 0
                  ? 'opacity-100'
                  : 'opacity-0 lg:opacity-60 hidden lg:block'
              }`}
              style={{
                width: activeStep === 0 ? 'min(90vw, 526px)' : '312px',
                minWidth: activeStep === 0 ? 'min(90vw, 526px)' : '312px',
              }}
            >
              <div className='rounded-2xl lg:rounded-3xl bg-[#3b2008] p-4 sm:p-6 lg:p-6 lg:pb-10 text-white shadow-xl relative overflow-hidden flex flex-col h-auto lg:h-[568px]'>
                <div className='mb-4 sm:mb-6 lg:mb-6 text-base sm:text-lg font-semibold text-white/70'>
                  01
                </div>
                <div className='rounded-xl lg:rounded-2xl bg-[#ffe1d0] p-2 sm:p-3 shadow-lg flex-grow'>
                  <div className='rounded-xl lg:rounded-2xl bg-[#f8f6f3] p-3 sm:p-5 text-gray-900 shadow-lg flex-grow'>
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
                      <div className='rounded-md  p-2'>
                        <div className='text-[8px] leading-tight text-gray-700'>
                          By clicking on Create Account, you agree to{' '}
                          <span className='font-medium text-[#fff5ee]'>
                            User Agreement
                          </span>{' '}
                          and{' '}
                          <span className='font-medium text-[#fff5ee]'>
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
                        <span className='font-semibold text-gray-900'>
                          Login
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className='mt-auto pt-4 sm:pt-5 text-base sm:text-lg font-bold leading-tight'>
                  Select you business type.
                </h3>
                <p className='mt-2 text-sm text-white/80 leading-relaxed'>
                  Whether you are an individual, corporate or government
                  institution, we got you covered.
                </p>

                {/* Progress Bar at bottom of card */}
                {activeStep === 0 && (
                  <div className='absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 h-1 bg-white/20 rounded-full'>
                    <div
                      className='h-full bg-white rounded-full transition-all duration-100 ease-linear'
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Step 2 Card */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                activeStep === 1
                  ? 'opacity-100'
                  : 'opacity-0 lg:opacity-60 hidden lg:block'
              }`}
              style={{
                width: activeStep === 1 ? 'min(90vw, 526px)' : '312px',
                minWidth: activeStep === 1 ? 'min(90vw, 526px)' : '312px',
              }}
            >
              <div className='rounded-2xl lg:rounded-3xl bg-[#3b2008] p-4 sm:p-6 lg:p-6 lg:pb-10 text-white shadow-xl relative overflow-hidden flex flex-col h-auto lg:h-[568px]'>
                <div className='mb-4 sm:mb-6 lg:mb-6 text-base sm:text-lg font-semibold text-white/70'>
                  02
                </div>
                <div className='rounded-xl lg:rounded-2xl bg-[#ffe1d0] p-2 sm:p-3 shadow-lg flex-grow'>
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
                        {/* <div>
                          <div className='mb-1 text-[9px] font-medium text-gray-700'>
                            VAT/SNAL/CAC
                          </div>
                          <input
                            type='text'
                            className='w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-[9px]'
                            readOnly
                          />
                        </div> */}
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
                <h3 className='mt-auto pt-4 sm:pt-5 text-base sm:text-lg font-bold leading-tight'>
                  Create your free account.
                </h3>
                <p className='mt-2 text-sm text-white/80 leading-relaxed'>
                  Enter your business details and get verified quickly.
                </p>

                {/* Progress Bar at bottom of card */}
                {activeStep === 1 && (
                  <div className='absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 h-1 bg-white/20 rounded-full'>
                    <div
                      className='h-full bg-white rounded-full transition-all duration-100 ease-linear'
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Step 3 Card */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                activeStep === 2
                  ? 'opacity-100'
                  : 'opacity-0 lg:opacity-60 hidden lg:block'
              }`}
              style={{
                width: activeStep === 2 ? 'min(90vw, 526px)' : '312px',
                minWidth: activeStep === 2 ? 'min(90vw, 526px)' : '312px',
              }}
            >
              <div className='rounded-2xl lg:rounded-3xl bg-[#3b2008] p-4 sm:p-6 lg:p-6 lg:pb-10 text-white shadow-xl relative overflow-hidden flex flex-col h-auto lg:h-[568px]'>
                <div className='mb-4 sm:mb-6 lg:mb-6 text-base sm:text-lg font-semibold text-white/70'>
                  03
                </div>
                <div className='rounded-xl lg:rounded-2xl bg-[#ffe1d0] p-2 shadow-lg flex-grow overflow-hidden'>
                  <div className='rounded-xl bg-white h-full flex overflow-hidden'>
                    {/* Sidebar */}
                    <div className='w-16 bg-[#ffe8d7] border-r border-orange-100 flex flex-col py-1.5 px-1 gap-0.5 overflow-hidden'>
                      {/* Logo */}
                      <Logo
                        width={16}
                        height={16}
                        showText
                        textClassName='text-[10px]'
                      />

                      {/* Section Label */}
                      <p className='text-[5px] font-semibold text-gray-400 tracking-wider px-0.5 mb-0.5'>
                        OVERVIEW
                      </p>

                      {/* Dashboard - Active */}
                      <div className='flex items-center gap-1 px-1 py-1 rounded bg-orange-500 text-white mb-1'>
                        <span className='text-[7px]'>⊞</span>
                        <span className='text-[6px] font-semibold'>
                          Dashboard
                        </span>
                      </div>

                      {/* Section Label */}
                      <p className='text-[5px] font-semibold text-gray-400 tracking-wider px-0.5 mt-1 mb-0.5'>
                        9TH HUB
                      </p>

                      {/* Menu Items */}
                      <div className='flex items-center gap-1 px-1 py-0.5 rounded text-gray-600'>
                        <BarChart3 className='w-2 h-2' />
                        <span className='text-[6px]'>Transaction</span>
                      </div>
                      <div className='flex items-center gap-1 px-1 py-0.5 rounded text-gray-600'>
                        <Users className='w-2 h-2' />
                        <span className='text-[6px]'>Customers</span>
                      </div>
                      <div className='flex items-center gap-1 px-1 py-0.5 rounded text-gray-600'>
                        <Wallet className='w-2 h-2' />
                        <span className='text-[6px]'>Wallet</span>
                      </div>

                      {/* Section Labels */}
                      <p className='text-[5px] font-semibold text-gray-400 tracking-wider px-0.5 mt-1'>
                        OPERATIONS
                      </p>
                      <p className='text-[5px] font-semibold text-gray-400 tracking-wider px-0.5 mt-1'>
                        ADMIN
                      </p>
                    </div>

                    {/* Main Content */}
                    <div className='flex-1 flex flex-col'>
                      {/* Header */}
                      <div className='bg-white border-b border-orange-100 px-2 py-1 flex items-center justify-between'>
                        <div className='flex items-center gap-1'>
                          <FileText className='w-2 h-2 text-orange-400' />
                          <span className='text-[7px] font-bold text-gray-800'>
                            Overview
                          </span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <div className='relative'>
                            <Bell className='w-2.5 h-2.5 text-gray-500' />
                            <span className='absolute -top-0.5 -right-0.5 w-1 h-1 bg-orange-400 rounded-full'></span>
                          </div>
                          <div className='w-4 h-4 rounded-full bg-orange-200 flex items-center justify-center text-[6px] font-bold text-orange-600'>
                            SM
                          </div>
                          <div>
                            <p className='text-[6px] font-semibold text-gray-800'>
                              Sharaf M.
                            </p>
                            <p className='text-[5px] text-gray-400'>
                              user@email.com
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content with Right Sidebar */}
                      <div className='flex flex-1 overflow-hidden bg-[#FFF8F5]'>
                        {/* Main Content Area */}
                        <div className='flex-1 p-1.5 space-y-1 overflow-hidden'>
                          {/* Action Bar */}
                          <div className='bg-white rounded-lg px-2 py-1 border border-orange-100 flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                              <span className='text-[7px] font-semibold text-gray-800'>
                                Overview
                              </span>
                            </div>
                            <div className='flex items-center gap-0.5'>
                              <button className='text-[5px] text-gray-500 border border-gray-200 rounded px-1 py-0.5 bg-white'>
                                Export
                              </button>
                              <button className='text-[5px] text-gray-500 border border-gray-200 rounded px-1 py-0.5 bg-white'>
                                Filter
                              </button>
                            </div>
                          </div>

                          {/* Stats Cards */}
                          <div className='grid grid-cols-3 gap-1'>
                            <div className='bg-white rounded p-1.5 border border-orange-100'>
                              <div className='w-3 h-3 rounded bg-gray-100 flex items-center justify-center mb-0.5'>
                                <TrendingUp className='w-1.5 h-1.5 text-orange-500' />
                              </div>
                              <div className='text-[5px] text-gray-400'>
                                Total Transaction
                              </div>
                              <div className='text-[8px] font-extrabold text-gray-900'>
                                ₦23.4M
                              </div>
                            </div>
                            <div className='bg-white rounded p-1.5 border border-orange-100'>
                              <div className='w-3 h-3 rounded bg-gray-100 flex items-center justify-center mb-0.5'>
                                <Download className='w-1.5 h-1.5 text-green-500' />
                              </div>
                              <div className='text-[5px] text-gray-400'>
                                Settlements
                              </div>
                              <div className='text-[8px] font-extrabold text-gray-900'>
                                ₦23.1M
                              </div>
                            </div>
                            <div className='bg-white rounded p-1.5 border border-orange-100'>
                              <div className='w-3 h-3 rounded bg-gray-100 flex items-center justify-center mb-0.5'>
                                <User className='w-1.5 h-1.5 text-blue-500' />
                              </div>
                              <div className='text-[5px] text-gray-400'>
                                Customers
                              </div>
                              <div className='text-[8px] font-extrabold text-gray-900'>
                                7,890
                              </div>
                            </div>
                          </div>

                          {/* Chart Area */}
                          <div className='bg-white rounded border border-orange-100 p-1.5 flex-1 flex flex-col'>
                            <div className='flex items-center gap-1 mb-1'>
                              <span className='text-[6px] font-bold text-gray-800'>
                                Transaction Trend
                              </span>
                              <span className='text-[5px] text-gray-400'>
                                Total Inflow
                              </span>
                            </div>
                            <div className='flex-1 flex items-end justify-between gap-0.5 pb-1'>
                              {[
                                40, 60, 45, 70, 55, 80, 65, 75, 85, 70, 90, 78,
                              ].map((height, i) => (
                                <div
                                  key={i}
                                  className='flex-1 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t'
                                  style={{ height: `${height}%` }}
                                />
                              ))}
                            </div>
                            <div className='flex justify-between border-t border-gray-100 pt-0.5'>
                              <span className='text-[5px] text-gray-400'>
                                Jan
                              </span>
                              <span className='text-[5px] text-gray-400'>
                                Mar
                              </span>
                              <span className='text-[5px] text-gray-400'>
                                Jun
                              </span>
                              <span className='text-[5px] text-gray-400'>
                                Sep
                              </span>
                              <span className='text-[5px] text-gray-400'>
                                Dec
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Notification Sidebar */}
                        <div className='w-16 bg-white border-l border-orange-100 flex flex-col'>
                          <div className='px-1 py-1 border-b border-orange-50'>
                            <h3 className='text-[6px] font-bold text-gray-800'>
                              Notifications
                            </h3>
                            <p className='text-[5px] text-gray-500'>Recent</p>
                          </div>
                          <div className='flex-1 px-1 py-1 space-y-1 overflow-hidden'>
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className='bg-orange-50 rounded p-1 border border-orange-100'
                              >
                                <div className='flex items-start gap-0.5'>
                                  <Bell className='w-2 h-2 text-orange-400 mt-0.5 shrink-0' />
                                  <div className='flex-1'>
                                    <p className='text-[5px] font-medium text-gray-800 leading-tight'>
                                      Payment received
                                    </p>
                                    <p className='text-[4px] text-gray-500'>
                                      Just now
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className='px-1 py-1 border-t border-orange-50'>
                            <button className='w-full bg-orange-400 text-white rounded px-1 py-0.5 text-[5px] font-semibold'>
                              View All
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className='mt-auto pt-4 sm:pt-5 text-base sm:text-lg font-bold leading-tight'>
                  Start accepting payments.
                </h3>
                <p className='mt-2 text-sm text-white/80 leading-relaxed'>
                  Share payment links or integrate with your website.
                </p>

                {/* Progress Bar at bottom of card */}
                {activeStep === 2 && (
                  <div className='absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 h-1 bg-white/20 rounded-full'>
                    <div
                      className='h-full bg-white rounded-full transition-all duration-100 ease-linear'
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Dots - Mobile */}
          <div className='mt-8 sm:mt-12 flex items-center justify-center gap-2 sm:gap-3 lg:hidden'>
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(step.id);
                  setProgress(0);
                }}
                className={`transition-all duration-300 ${
                  activeStep === step.id
                    ? 'h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-orange-500 ring-2 sm:ring-4 ring-orange-100'
                    : 'h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gray-300'
                }`}
                aria-label={`Go to step ${step.number}`}
              />
            ))}
          </div>

          {/* Navigation Controls - Mobile */}
          <div className='mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4 lg:hidden'>
            <button
              onClick={() => {
                setActiveStep((prev) =>
                  prev > 0 ? prev - 1 : steps.length - 1,
                );
                setProgress(0);
              }}
              className='flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 transition hover:border-gray-400 hover:bg-gray-50'
              aria-label='Previous step'
            >
              <svg
                className='h-4 w-4 sm:h-5 sm:w-5'
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
                setActiveStep((prev) =>
                  prev < steps.length - 1 ? prev + 1 : 0,
                );
                setProgress(0);
              }}
              className='flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-gray-900 bg-gray-900 text-white transition hover:bg-gray-800'
              aria-label='Next step'
            >
              <svg
                className='h-4 w-4 sm:h-5 sm:w-5'
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

          {/* Navigation Dots - Desktop (commented out) */}
          {/* <div className='mt-12 flex items-center justify-center gap-3'>
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(step.id);
                  setProgress(0);
                }}
                className={`transition-all duration-300 ${
                  activeStep === step.id
                    ? 'h-2.5 w-2.5 rounded-full bg-orange-500 ring-4 ring-orange-100'
                    : 'h-2 w-2 rounded-full bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to step ${step.number}`}
              />
            ))}
          </div> */}

          {/* Navigation Controls */}
          {/* <div className='mt-8 flex items-center justify-center gap-4'>
            <button
              onClick={() => {
                setActiveStep((prev) =>
                  prev > 0 ? prev - 1 : steps.length - 1,
                );
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
                setActiveStep((prev) =>
                  prev < steps.length - 1 ? prev + 1 : 0,
                );
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
