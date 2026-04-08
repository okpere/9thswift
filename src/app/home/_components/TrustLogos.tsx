'use client';

import React from 'react';

// Logo components with actual designs


function LogoMicaimiah() {
  return (
    <div className='flex items-center gap-2'>
      <img
        src='https://img.logo.dev/micaimiah.com?token=pk_Gn-mh45nQCaklVB7ZGfTzw&retina=true'
        alt='Micaimiah'
        className='h-20 w-auto object-contain'
      />
    </div>
  );
}

function LogoGTMarket() {
  return (
    <div className='flex items-center gap-2'>
      <img
        src='/partnersLogo/Logo (1).svg'
        alt='GT Market'
        className='h-16 w-auto object-contain'
      />
    </div>
  );
}

function LogoPartner2() {
  return (
    <div className='flex items-center gap-2'>
      <img
        src='/partnersLogo/Logo (2).svg'
        alt='Partner'
        className='h-20 w-auto object-contain'
      />
    </div>
  );
}

function LogoPartner3() {
  return (
    <div className='flex items-center gap-2'>
      <img
        src='/partnersLogo/image 210.svg'
        alt='Partner'
        className='h-16 w-auto object-contain'
      />
    </div>
  );
}

function LogoPartner4() {
  return (
    <div className='flex items-center gap-2'>
      <img
        src='/partnersLogo/Logo.svg'
        alt='Partner'
        className='h-20 w-auto object-contain'
      />
    </div>
  );
}

const trustLogos = [
  { component: <LogoGTMarket />, key: 'gtmarket' },
  { component: <LogoPartner2 />, key: 'partner2' },
  { component: <LogoPartner3 />, key: 'partner3' },
  { component: <LogoPartner4 />, key: 'partner4' },
];
const TrustLogos = () => {
  return (
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center bg-white overflow-hidden'>
      <p className='text-gray-500 text-lg mb-8'>Trusted by Reputable Businesses</p>
      <div className='relative w-full'>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className='flex animate-scroll'>
          {/* First set of logos */}
          {trustLogos.map((logo) => (
            <div
              key={logo.key}
              className='flex-shrink-0 mx-8 sm:mx-12 opacity-70 hover:opacity-100 transition-opacity'
            >
              {logo.component}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {trustLogos.map((logo) => (
            <div
              key={`${logo.key}-duplicate`}
              className='flex-shrink-0 mx-8 sm:mx-12 opacity-70 hover:opacity-100 transition-opacity'
            >
              {logo.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustLogos;
