import { ArrowRight, Link } from 'lucide-react';

const CTA = () => {
  return (
    <div className='relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900'>
      <div className='max-w-5xl mx-auto text-center'>
        {/* Heading */}
        <h2 className='text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
          Stop leaving money on the table.
        </h2>

        {/* Subtitle */}
        <p className='text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed'>
          Capture every payment efficiently and grow your business with
          confidence. Start accepting payments today.
        </p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          {/* Primary CTA Button */}
          <a
            href='https://app.9thswift.com/register'
            className='inline-flex items-center justify-center gap-2 rounded-xl bg-orange-400 px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(249,115,22,0.35)] transition-colors hover:bg-orange-500 w-full sm:w-auto'
          >
            Create your free account
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
          </a>

          {/* Secondary Button */}
          <a  
            href='/faq#contactForm'
            className='px-8 py-4 bg-transparent border-2 border-gray-600 text-white font-semibold rounded-full hover:bg-gray-800 hover:border-gray-500 transition-all duration-300'
          >
            Talk to sales
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
