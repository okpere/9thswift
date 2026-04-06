import Link from 'next/link';
import DashboardMockup from '@/app/home/_components/DashboardMockup';


export default function HeroSection() {
  return (
    <main className='flex-1 bg-[#FFFAF7] overflow-hidden'>
      {/* ── Hero copy ── */}
      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 text-center'>
        {/* Subtle grid background - only behind hero copy */}
        <div
          className='absolute inset-0 pointer-events-none'
          style={{
            backgroundImage:
              'linear-gradient(to right, #f0e8e0 1px, transparent 1px), linear-gradient(to bottom, #f0e8e0 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Badge */}
        <div className='inline-flex items-center gap-2 border border-orange-200 bg-white rounded-full px-4 py-2 mb-8'>
          <span className='w-2 h-2 rounded-full bg-orange-400 shrink-0' />
          <span className='text-sm text-orange-500 font-medium'>
            Built for African businesses. Trusted globally.
          </span>
        </div>

        {/* Heading */}
        <h1 className='text-5xl sm:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight text-center mb-6'>
          We Help African Businesses{' '}
          <span className='text-orange-400'>Get Paid</span> and Run Smoothly
        </h1>

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
            <span className='text-2xl'>🏛️</span>CBN Licensed
          </div>
          <div className='flex items-center gap-2 text-sm font-medium text-gray-600'>
            <span className='text-2xl'>🛡️</span>NDPR
          </div>
          <div className='flex items-center gap-2 text-sm font-medium text-gray-600'>
            <span className='text-2xl'>🔒</span>PCI/DSS
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
