import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className='relative overflow-hidden bg-[#0f0f0f] py-40 sm:py-20'>
      <div
        className='pointer-events-none absolute inset-0'
        style={{
          background:
            'radial-gradient(600px 300px at 30% 80%, rgba(249,115,22,0.35), transparent 70%), radial-gradient(400px 240px at 70% 65%, rgba(249,115,22,0.2), transparent 70%)',
        }}
      />
      <div className='relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8'>
        <h2 className='text-3xl sm:text-5xl font-extrabold text-white leading-tight'>
          Stop leaving money on the table.
        </h2>
        <p className='mt-4 text-sm sm:text-base text-gray-300 leading-relaxed'>
          Capture every payment efficiently and grow your business with
          confidence. Start accepting payments today.
        </p>
        <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4'>
          <Link
            href='https://app.9thswift.com/register'
            className='inline-flex items-center justify-center gap-2 rounded-xl bg-orange-400 px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,0.35)] transition-colors hover:bg-orange-500 w-full sm:w-auto'
          >
            Create your free account
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
          </Link>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/10 w-full sm:w-auto'
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
