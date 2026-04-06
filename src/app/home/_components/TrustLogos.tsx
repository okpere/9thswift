import React from 'react';

// Logo components with actual designs
function LogoTriangle() {
  return (
    <div className='flex items-center gap-2'>
      <div className='w-8 h-8 relative'>
        <svg viewBox='0 0 32 32' className='w-full h-full'>
          <path
            d='M16 4 L28 26 L4 26 Z'
            fill='#4F46E5'
            stroke='#4F46E5'
            strokeWidth='1'
          />
        </svg>
      </div>
      <span className='text-gray-700 font-medium text-sm'>logoipsum</span>
    </div>
  );
}

function LogoDots() {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex items-center gap-1'>
        <div className='w-3 h-3 rounded-full bg-purple-500'></div>
        <div className='w-3 h-3 rounded-full bg-red-400'></div>
        <div className='w-3 h-3 rounded-full bg-green-600'></div>
        <div className='w-3 h-3 rounded-full bg-blue-600'></div>
      </div>
      <span className='text-gray-700 font-medium text-sm'>logoipsum</span>
    </div>
  );
}

function LogoTriangleAlt() {
  return (
    <div className='flex items-center gap-2'>
      <div className='w-8 h-8 relative'>
        <svg viewBox='0 0 32 32' className='w-full h-full'>
          <path
            d='M16 4 L28 26 L4 26 Z'
            fill='#4F46E5'
            stroke='#4F46E5'
            strokeWidth='1'
          />
        </svg>
      </div>
      <span className='text-gray-700 font-medium text-sm'>logoipsum</span>
    </div>
  );
}

function LogoCross() {
  return (
    <div className='flex items-center gap-2'>
      <div className='w-8 h-8 flex items-center justify-center'>
        <svg viewBox='0 0 32 32' className='w-full h-full'>
          <path
            d='M14 2 L18 2 L18 14 L30 14 L30 18 L18 18 L18 30 L14 30 L14 18 L2 18 L2 14 L14 14 Z'
            fill='#374151'
          />
        </svg>
      </div>
      <div className='flex flex-col'>
        <span className='text-gray-700 font-medium text-xs leading-tight'>
          Logo
        </span>
        <span className='text-gray-700 font-medium text-xs leading-tight'>
          Ipsum
        </span>
        <span className='text-gray-700 font-medium text-xs leading-tight'>
          Plus
        </span>
      </div>
    </div>
  );
}

function LogoColorful() {
  return (
    <div className='flex items-center gap-2'>
      <div className='flex items-center gap-1'>
        <div className='w-3 h-3 rounded-full bg-teal-400'></div>
        <div className='w-3 h-3 rounded-full bg-pink-400'></div>
      </div>
      <span className='text-blue-600 font-semibold text-sm'>Logoipsum</span>
    </div>
  );
}

const trustLogos = [
  { component: <LogoTriangle />, key: 'triangle1' },
  { component: <LogoDots />, key: 'dots' },
  { component: <LogoTriangleAlt />, key: 'triangle2' },
  { component: <LogoCross />, key: 'cross' },
  { component: <LogoColorful />, key: 'colorful' },
];
const TrustLogos = () => {
  return (
    <div className='relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center bg-white'>
      <p className='text-gray-500 text-sm mb-8'>
        We are trusted by 1000+ businesses
      </p>
      <div className='flex items-center justify-center gap-8 sm:gap-12 flex-wrap'>
        {trustLogos.map((logo) => (
          <div
            key={logo.key}
            className='opacity-70 hover:opacity-100 transition-opacity'
          >
            {logo.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustLogos;
