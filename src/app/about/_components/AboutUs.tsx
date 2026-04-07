'use client';

import { useState, useEffect, useRef } from 'react';

const AboutUs = () => {
  const stats = [
    {
      value: '1.5%',
      label: 'Low Transaction Fee',
      target: 1.5,
      suffix: '%',
      prefix: '',
    },
    {
      value: '$50M',
      label: 'Processed Volume',
      target: 50,
      suffix: 'M',
      prefix: '$',
    },
    {
      value: '1K',
      label: 'Active Businesses',
      target: 1,
      suffix: 'K',
      prefix: '',
    },
    {
      value: '5+',
      label: 'African Countries',
      target: 5,
      suffix: '+',
      prefix: '',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px' },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60 fps
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts(
        stats.map((stat) => {
          return stat.target * easeOutQuart;
        }),
      );

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isVisible]);

  return (
    <div className='relative mx-auto px-0 lg:px-28 text-center overflow-hidden'>
      {/* Gradient Background */}
      {/* <div className='absolute inset-0 bg-gradient-to-br from-orange-50 via-blue-50 to-gray-50 opacity-60'></div> */}

      {/* Grid Pattern Background */}
      {/* <div
        className='absolute inset-0 opacity-20'
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(209, 213, 219) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(209, 213, 219) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div> */}

      {/* Content */}
      <div className='relative z-10'>
        <div
          className='relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-hidden rounded-2xl'
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgb(255, 249, 244), rgb(255, 254, 253)),
              linear-gradient(to right, rgba(107, 114, 128, 0.5) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(107, 114, 128, 0.5) 2px, transparent 2px)
            `,
            backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          }}
        >
          <div className='relative z-10'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-8'>
              About Us
            </h2>
            <p className='text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12'>
              9th Swift was born out of the need for something better, a
              financial platform built for African businesses. We saw businesses
              struggle with fragmented payments, delayed settlements, opaque
              fees, and limited access to capital.
            </p>
          </div>
        </div>

        {/* Team Image */}
        <div className='relative mb-16 mt-8'>
          <div className='aspect-[16/5] mx-auto rounded-2xl overflow-hidden '>
            <img
              src='https://res.cloudinary.com/dougwnqok/image/upload/q_auto/f_auto/v1775556959/imgi_8_image_1_eywqfk.svg'
              alt='Team meeting with global presence'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* Statistics Grid */}
        <div
          ref={statsRef}
          className='flex flex-wrap justify-center gap-2 lg:gap-12  p-8 bg-[#f9fafb]  rounded-xl'
        >
          {stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-2xl lg:text-4xl font-bold text-gray-900 mb-2'>
                {stat.prefix}
                {counts[index].toFixed(stat.suffix === '%' ? 1 : 0)}
                {stat.suffix}
              </div>
              <div className='text-gray-600 text-xs lg:text-sm font-medium'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
