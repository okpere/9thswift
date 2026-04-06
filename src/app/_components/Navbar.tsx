'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'FAQs', href: '/faq' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [apiOpen, setApiOpen] = useState(false);

  return (
    <header className='w-full bg-white border-b border-gray-100 sticky top-0 z-50'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2 shrink-0'>
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M8 28 L16 4 L24 16 L16 20 Z' fill='#F97316' />
            <path d='M8 28 L16 20 L12 28 Z' fill='#DC2626' />
          </svg>
          <span className='text-lg font-bold text-gray-900'>9th Swift</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex items-center gap-1'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-orange-50 text-orange-500'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Developers API dropdown */}
          <div className='relative'>
            <button
              onClick={() => setApiOpen(!apiOpen)}
              className='flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'
            >
              Developers API
              <ChevronDown
                size={16}
                className={`transition-transform ${apiOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {apiOpen && (
              <div className='absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50'>
                <Link
                  href='/developer'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                  onClick={() => setApiOpen(false)}
                >
                  Documentation
                </Link>
                <Link
                  href='/developer#api-reference'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                  onClick={() => setApiOpen(false)}
                >
                  API Reference
                </Link>
                <Link
                  href='/developer#sdks'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                  onClick={() => setApiOpen(false)}
                >
                  SDKs
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className='hidden md:flex items-center gap-4'>
          <Link
            href='/login'
            className='text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors'
          >
            Login
          </Link>
          <Link
            href='/get-started'
            className='bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors'
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className='md:hidden p-2 text-gray-600'
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label='Toggle menu'
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className='md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-orange-50 text-orange-500'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href='/developer'
            className='block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50'
            onClick={() => setMobileOpen(false)}
          >
            Developers API
          </Link>
          <div className='border-t border-gray-100 pt-3 mt-3 flex flex-col gap-2'>
            <Link
              href='/login'
              className='block px-4 py-2 text-sm font-medium text-orange-500'
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
            <Link
              href='/get-started'
              className='block text-center bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg'
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
