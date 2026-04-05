const testimonials = [
  {
    tag: 'Ecommerce',
    quote:
      'Swift transformed how we handle payments. Our checkout conversion rate increased by 40% in the first month. The settlement speed is incredible.',
    name: 'Chioma Okafor',
    role: 'Founder',
    company: 'FreshMarket',
  },
  {
    tag: 'School',
    quote:
      'As a school, collecting fees was always a nightmare. With Swift, parents can pay online and we reconcile everything automatically.',
    name: 'Dr. Ibrahim Musa',
    role: 'Founder',
    company: 'Legacy International Academy',
  },
];

export default function TestimonialsSection() {
  return (
    <section className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <span className='inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600'>
              <span className='h-1.5 w-1.5 rounded-full bg-orange-400' />
              Testimonials
            </span>
            <h2 className='mt-4 text-3xl sm:text-4xl font-bold text-gray-900'>
              Loved by businesses
              <br />
              across Africa
            </h2>
            <p className='mt-3 text-sm text-gray-500'>
              Join thousands of businesses growing with Swift.
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-gray-300'
              aria-label='Previous testimonial'
            >
              <svg
                viewBox='0 0 20 20'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                className='h-4 w-4'
              >
                <path d='M12.5 4.5 L7.5 10 L12.5 15.5' />
              </svg>
            </button>
            <button
              type='button'
              className='inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white hover:bg-gray-800'
              aria-label='Next testimonial'
            >
              <svg
                viewBox='0 0 20 20'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                className='h-4 w-4'
              >
                <path d='M7.5 4.5 L12.5 10 L7.5 15.5' />
              </svg>
            </button>
          </div>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className='rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm'
            >
              <span className='inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-500'>
                {t.tag}
              </span>
              <div className='mt-4 text-2xl text-orange-300'>""</div>
              <p className='mt-2 text-sm text-gray-600 leading-relaxed'>
                {t.quote}
              </p>
              <div className='mt-5 flex items-center gap-3'>
                <div className='flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-500'>
                  {t.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div>
                  <p className='text-sm font-semibold text-gray-900'>
                    {t.name}
                  </p>
                  <p className='text-xs text-gray-500'>
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
