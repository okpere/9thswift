// Icon components for better organization
function OnlinePaymentIcon() {
  return (
    <div className='relative w-32 h-32 mx-auto'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='relative'>
          {/* Phone frame */}
          <div className='w-20 h-28 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border-4 border-gray-300 shadow-xl relative overflow-hidden'>
            {/* Screen */}
            <div className='absolute inset-2 bg-white rounded-lg flex items-center justify-center'>
              <div className='text-gray-400'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <rect
                    x='3'
                    y='7'
                    width='18'
                    height='12'
                    rx='2'
                    strokeWidth='2'
                  />
                  <path d='M3 11h18' strokeWidth='2' />
                </svg>
              </div>
            </div>
            {/* Home button */}
            <div className='absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-400' />
          </div>
          {/* Payment card overlay */}
          <div className='absolute -right-4 top-8 w-14 h-10 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg border-2 border-orange-200 shadow-lg transform rotate-12'>
            <div className='p-1'>
              <div className='w-4 h-3 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-sm mb-1' />
              <div className='space-y-0.5'>
                <div className='h-0.5 bg-orange-300 w-8' />
                <div className='h-0.5 bg-orange-300 w-6' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GlobalPaymentsIcon() {
  return (
    <div className='relative w-32 h-32 mx-auto'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='relative'>
          {/* Globe */}
          <div className='w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 shadow-lg relative overflow-hidden'>
            {/* Continents/map-like shapes */}
            <div className='absolute top-4 left-4 w-8 h-6 bg-blue-200/30 rounded-full blur-sm' />
            <div className='absolute bottom-6 right-4 w-10 h-7 bg-purple-200/30 rounded-full blur-sm' />
            <div className='absolute top-10 right-6 w-6 h-8 bg-blue-300/30 rounded-full blur-sm' />
            {/* Grid lines */}
            <div className='absolute inset-0'>
              <div className='absolute top-1/2 left-0 right-0 h-px bg-blue-200/40' />
              <div className='absolute top-0 bottom-0 left-1/2 w-px bg-blue-200/40' />
              <div className='absolute inset-4 border border-blue-200/30 rounded-full' />
            </div>
          </div>
          {/* Currency symbols floating around */}
          <div className='absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full shadow-md flex items-center justify-center text-white font-bold text-sm'>
            ₦
          </div>
          <div className='absolute top-4 -left-3 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-300 rounded-full shadow-md flex items-center justify-center text-white font-bold text-sm'>
            ¥
          </div>
          <div className='absolute bottom-6 -right-2 w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-300 rounded-full shadow-md flex items-center justify-center text-white font-bold text-sm'>
            $
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityIcon() {
  return (
    <div className='relative w-32 h-32 mx-auto'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='relative'>
          {/* Shield */}
          <svg
            className='w-24 h-24 text-gray-300 drop-shadow-lg'
            viewBox='0 0 100 100'
            fill='currentColor'
          >
            <path
              d='M50 5 L90 20 L90 45 Q90 70 50 95 Q10 70 10 45 L10 20 Z'
              className='fill-current'
            />
          </svg>
          {/* Inner shield highlight */}
          <svg
            className='absolute inset-0 w-24 h-24 text-gray-200'
            viewBox='0 0 100 100'
            fill='currentColor'
          >
            <path
              d='M50 10 L85 23 L85 45 Q85 67 50 88 Q15 67 15 45 L15 23 Z'
              className='fill-current'
            />
          </svg>
          {/* Lock */}
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='relative mt-2'>
              {/* Lock body */}
              <div className='w-10 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg shadow-md relative'>
                {/* Keyhole */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-1'>
                  <div className='w-2 h-2 bg-gray-600 rounded-full' />
                  <div className='w-1 h-3 bg-gray-600 mx-auto' />
                </div>
              </div>
              {/* Lock shackle */}
              <div className='absolute -top-5 left-1/2 -translate-x-1/2 w-7 h-6 border-4 border-gray-400 rounded-t-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionBadge({ label }: { label: string }) {
  return (
    <div className='inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-500'>
      <span className='h-2.5 w-2.5 rounded-full bg-orange-400 ring-4 ring-orange-100' />
      {label}
    </div>
  );
}

export default function PaymentFeatures() {
  const features = [
    {
      title: 'Online Payment',
      description:
        'Accept payments anywhere — on your website, in person, or on the go.',
      icon: <OnlinePaymentIcon />,
    },
    {
      title: 'Global Payments',
      description: 'Send and receive payments across borders with ease.',
      icon: <GlobalPaymentsIcon />,
    },
    {
      title: 'Bank Grade Security',
      description:
        'Bank-level encryption and FCA regulation for your peace of mind.',
      icon: <SecurityIcon />,
    },
  ];

  return (
    <section className='bg-white py-20 sm:py-24'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <SectionBadge label='Features' />
          <h2 className='mt-6 text-4xl font-bold text-gray-900 leading-tight mb-6 sm:text-5xl'>
            Built for payments that are fast, global, and secure.
          </h2>
          <p className='text-lg text-gray-600 leading-relaxed'>
            Whether you're running a shop, a school, or a growing enterprise,
            getting paid should be the easiest part of your day. We made sure it
            is.
          </p>
        </div>

        {/* Feature Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
          {features.map((feature) => (
            <div key={feature.title} className='text-center'>
              {/* Title */}
              <h3 className='text-xl font-bold text-gray-900 mb-3'>
                {feature.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 leading-relaxed mb-8 max-w-sm mx-auto'>
                {feature.description}
              </p>

              {/* Icon */}
              <div className='mt-auto'>{feature.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
