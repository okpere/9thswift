import { Check } from 'lucide-react';

const MissionVision = () => {
  const values = [
    {
      title: 'Transparency:',
      description: 'Clear fees. Honest terms. No surprises.',
    },
    {
      title: 'Security:',
      description: 'Safeguarding your data and assets is non-negotiable.',
    },
    {
      title: 'Speed & Simplicity:',
      description: 'Everything should be fast and intuitive.',
    },
    {
      title: 'Client Success:',
      description: 'We build tools that make your business life easier.',
    },
  ];

  return (
    <div className='relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-50'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
        {/* Our Mission Card */}
        <div className='bg-white rounded-3xl p-8 lg:p-12 shadow-sm'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
            Our{' '}
            <span className='bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'>
              Mission
            </span>
          </h2>
          <div className='space-y-4'>
            <p className='text-gray-600 text-lg leading-relaxed'>
              To be the leading financial platform for African businesses, one
              that helps them compete globally, scale effortlessly, and transact
              securely.
            </p>
            <p className='text-gray-600 text-lg leading-relaxed'>
              To be the leading financial platform for African businesses, one
              that helps them compete globally, scale effortlessly, and transact
              securely.
            </p>
            <p className='text-gray-600 text-lg leading-relaxed'>
              To be the leading financial platform for African businesses, one
              that helps them compete globally, scale effortlessly, and transact
              securely.
            </p>
          </div>
        </div>

        {/* Our Vision Card */}
        <div className='bg-white rounded-3xl p-8 lg:p-12 shadow-sm'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
            Our{' '}
            <span className='bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'>
              Vision
            </span>
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed mb-8'>
            To be the leading financial platform for African businesses, one
            that helps them compete globally, scale effortlessly, and transact
            securely.
          </p>

          {/* Values Section */}
          <div className='mt-8'>
            <h3 className='text-xl font-semibold text-orange-600 mb-6'>
              Values that carry us:
            </h3>
            <div className='space-y-4'>
              {values.map((value, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <div className='flex-shrink-0 mt-1'>
                    <div className='w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center'>
                      <Check className='w-4 h-4 text-white' strokeWidth={3} />
                    </div>
                  </div>
                  <p className='text-gray-600 text-base'>
                    <span className='font-semibold text-gray-900'>
                      {value.title}
                    </span>{' '}
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
