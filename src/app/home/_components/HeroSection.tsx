'use client';

import Link from 'next/link';
import DashboardMockup from '@/app/home/_components/DashboardMockup';
import { Landmark, ShieldCheck, Lock } from 'lucide-react';

export default function HeroSection() {
  return (
    <main className='flex-1 bg-[#FFFAF7] overflow-hidden'>
      {/* ── Hero copy ── */}
      <div className='relative mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 text-center'>
        <style jsx global>{`
          @keyframes gridFlow {
            0% {
              background-position:
                0 0,
                0 0,
                0 0,
                0 0;
            }
            100% {
              background-position:
                80px 80px,
                80px 80px,
                40px 40px,
                40px 40px;
            }
          }
          @keyframes gridPulse {
            0%,
            100% {
              opacity: 0.4;
            }
            50% {
              opacity: 1;
            }
          }
          @keyframes electricFlow {
            0% {
              background-position:
                0 0,
                0 0,
                0 0,
                0 0;
              filter: brightness(1);
            }
            25% {
              filter: brightness(1.3);
            }
            50% {
              background-position:
                40px 40px,
                40px 40px,
                20px 20px,
                20px 20px;
              filter: brightness(1.5);
            }
            75% {
              filter: brightness(1.3);
            }
            100% {
              background-position:
                80px 80px,
                80px 80px,
                40px 40px,
                40px 40px;
              filter: brightness(1);
            }
          }
          .animated-grid-bg {
            position: relative;
          }
          .animated-grid-bg::before {
            content: '';
            position: absolute;
            inset: -20px;
            background-image:
              linear-gradient(
                to right,
                rgba(240, 232, 224, 0.9) 2px,
                transparent 2px
              ),
              linear-gradient(
                to bottom,
                rgba(240, 232, 224, 0.9) 2px,
                transparent 2px
              ),
              linear-gradient(
                45deg,
                rgba(249, 115, 22, 0.3) 1px,
                transparent 1px
              ),
              linear-gradient(
                -45deg,
                rgba(249, 115, 22, 0.3) 1px,
                transparent 1px
              );
            background-size:
              80px 80px,
              80px 80px,
              40px 40px,
              40px 40px;
            animation:
              electricFlow 3s ease-in-out infinite,
              gridPulse 2s ease-in-out infinite;
            will-change: background-position, opacity, filter;
            z-index: -1;
            pointer-events: none;
          }
        `}</style>
        {/* Subtle grid background - only behind hero copy */}
        <div className='absolute inset-0 pointer-events-none' />
        <div className='animated-grid-bg'>
          <h1 className='text-2xl sm:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6 max-w-3xl mx-auto'>
            We Help African Businesses{' '}
            <span className='text-orange-400'>Get Paid</span> and Run Smoothly
          </h1>
        </div>
        {/* Heading */}

        {/* Subtext */}
        <p className='text-center text-gray-500 text-xl max-w-2xl mx-auto mb-10 leading-relaxed'>
          9th Swift helps businesses across Africa and beyond accept payments,
          send money, and access financial tools all in one place.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <Link
            href='/get-started'
            className='bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors w-full sm:w-auto'
          >
            Get Started
          </Link>
          <Link
            href='/how-it-works'
            className='border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-8 py-4 rounded-xl text-base transition-colors w-full sm:w-auto'
          >
            See how it works
          </Link>
        </div>

        {/* Compliance badges */}
        <div className='mt-10 flex items-center justify-center gap-8 flex-wrap'>
          <div className='flex items-center gap-2 text-sm font-medium text-gray-600'>
            <Landmark className='w-6 h-6 text-orange-500' />
            CBN Licensed
          </div>
          <div className='flex items-center gap-2 text-sm font-medium text-gray-600'>
            <ShieldCheck className='w-6 h-6 text-green-500' />
            NDPR
          </div>
          <div className='flex items-center gap-2 text-sm font-medium text-gray-600'>
            <Lock className='w-6 h-6 text-blue-500' />
            PCI/DSS
          </div>
        </div>
      </div>

      {/* ── Dashboard mockup ── */}
      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-10'>
        <DashboardMockup />
      </div>

      {/* ── Trusted by logos ── */}
    </main>
  );
}
