import Link from 'next/link';
import {
  BriefcaseBusiness,
  Camera,
  Landmark,
  Music2,
  Shield,
  ShieldCheck,
  Users,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12'>
          <div className='lg:col-span-1'>
            <div className='flex items-center gap-2 mb-4'>
              <svg width='32' height='32' viewBox='0 0 32 32' fill='none'>
                <path d='M8 28 L16 4 L24 16 L16 20 Z' fill='#F97316' />
                <path d='M8 28 L16 20 L12 28 Z' fill='#DC2626' />
              </svg>
              <span className='font-bold text-gray-900 text-lg'>
                <span className='font-black'>9th</span> Swift
              </span>
            </div>
            <p className='text-sm text-gray-600 leading-relaxed mb-1.5'>
              The operating system for African commerce.
            </p>
            <p className='text-sm text-gray-600 leading-relaxed'>
              Built for developers, scaled for enterprises.
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 mb-4'>Products</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link
                  href='/payments'
                  className='text-gray-600 hover:text-orange-500 transition-colors'
                >
                  Payments
                </Link>
              </li>
              <li>
                <Link
                  href='/checkout'
                  className='text-gray-600 hover:text-orange-500 transition-colors'
                >
                  Checkout
                </Link>
              </li>
              <li>
                <Link
                  href='/payment-links'
                  className='text-gray-600 hover:text-orange-500 transition-colors'
                >
                  Payment Links
                </Link>
              </li>
              <li>
                <Link
                  href='/api'
                  className='text-gray-600 hover:text-orange-500 transition-colors'
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href='/pricing'
                  className='text-gray-600 hover:text-orange-500 transition-colors'
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 mb-4'>Company</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-600 hover:text-orange-500 transition-colors'
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-gray-600 hover:text-orange-500 transition-colors'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-600 hover:text-orange-500 transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 mb-4'>
              Legal & Compliance
            </h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <Link
                  href='/terms'
                  className='text-gray-600 hover:text-orange-500 transition-colors'
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='text-gray-600 hover:text-orange-500 transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/support'
                  className='text-gray-600 hover:text-orange-500 transition-colors'
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-gray-900 mb-4'>Socials</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <a
                  href='https://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2'
                >
                  <span className='inline-flex items-center justify-center w-5 h-5 rounded-md bg-gray-100 text-gray-600'>
                    <Camera className='h-3.5 w-3.5' />
                  </span>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='https://linkedin.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2'
                >
                  <span className='inline-flex items-center justify-center w-5 h-5 rounded-md bg-gray-100 text-gray-600'>
                    <BriefcaseBusiness className='h-3.5 w-3.5' />
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='https://tiktok.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2'
                >
                  <span className='inline-flex items-center justify-center w-5 h-5 rounded-md bg-gray-100 text-gray-600'>
                    <Music2 className='h-3.5 w-3.5' />
                  </span>
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href='https://facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2'
                >
                  <span className='inline-flex items-center justify-center w-5 h-5 rounded-md bg-gray-100 text-gray-600'>
                    <Users className='h-3.5 w-3.5' />
                  </span>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-4 mb-6'>
            <p className='text-sm text-gray-600'>
              © 2026 9th Tech Ltd. All rights reserved.
            </p>
            <div className='flex items-center gap-6 flex-wrap justify-center'>
              <div className='flex items-center gap-2 text-sm font-medium text-gray-700'>
                <span className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-50 text-orange-500'>
                  <Landmark className='h-4 w-4' />
                </span>
                CBN Licensed
              </div>
              <div className='flex items-center gap-2 text-sm font-medium text-gray-700'>
                <span className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-50 text-green-600'>
                  <ShieldCheck className='h-4 w-4' />
                </span>
                NDPR
              </div>
              <div className='flex items-center gap-2 text-sm font-medium text-gray-700'>
                <span className='inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600'>
                  <Shield className='h-4 w-4' />
                </span>
                PCI DSS
              </div>
            </div>
          </div>
          <p className='text-xs text-gray-500 text-center lg:text-left leading-relaxed max-w-4xl'>
            Swift is a registered payment service provider. Your funds are
            secured in segregated accounts with tier-1 banks. We do not store
            card information on our servers. All transactions are encrypted
            end-to-end.
          </p>
        </div>
      </div>
    </footer>
  );
}
