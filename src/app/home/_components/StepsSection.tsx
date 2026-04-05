export default function StepsSection() {
  return (
    <section className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center text-center'>
          <span className='inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600'>
            <span className='h-1.5 w-1.5 rounded-full bg-orange-400' />
            How it works
          </span>
          <h2 className='mt-4 text-3xl sm:text-4xl font-bold text-gray-900'>
            Get started in 3 simple steps
          </h2>
          <p className='mt-2 text-sm text-gray-500'>
            Running a business is hard enough, getting paid should not be.
          </p>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {/* Step 1 */}
          <div className='rounded-2xl bg-[#3b2008] p-5 text-white shadow-lg'>
            <div className='flex items-center justify-between text-xs font-semibold text-orange-200'>
              <span>01</span>
            </div>
            <div className='mt-4 rounded-xl bg-white p-4 text-gray-900'>
              <div className='rounded-lg border border-orange-100 bg-orange-50 p-3'>
                <div className='h-2.5 w-24 rounded bg-orange-200' />
                <div className='mt-3 grid grid-cols-3 gap-2'>
                  <div className='h-14 rounded bg-white shadow-sm' />
                  <div className='h-14 rounded bg-white shadow-sm' />
                  <div className='h-14 rounded bg-white shadow-sm' />
                </div>
                <div className='mt-4 h-7 rounded bg-orange-200' />
              </div>
            </div>
            <h3 className='mt-5 text-base font-semibold'>
              Select your business type.
            </h3>
            <p className='mt-2 text-xs text-orange-100/80'>
              Whether you are an individual, corporate or government
              institution, we got you covered.
            </p>
            <div className='mt-4 h-0.5 w-16 rounded bg-orange-200/60' />
          </div>

          {/* Step 2 */}
          <div className='rounded-2xl bg-[#3b2008] p-5 text-white shadow-lg'>
            <div className='flex items-center justify-between text-xs font-semibold text-orange-200'>
              <span>02</span>
            </div>
            <div className='mt-4 rounded-xl bg-white/10 p-4'>
              <div className='rounded-lg bg-white/80 p-4'>
                <div className='h-3 w-24 rounded bg-orange-200' />
                <div className='mt-4 space-y-2'>
                  <div className='h-2.5 w-full rounded bg-orange-100' />
                  <div className='h-2.5 w-5/6 rounded bg-orange-100' />
                  <div className='h-2.5 w-3/4 rounded bg-orange-100' />
                </div>
                <div className='mt-4 h-7 rounded bg-orange-300' />
              </div>
            </div>
            <h3 className='mt-5 text-base font-semibold'>
              Create your free account.
            </h3>
            <p className='mt-2 text-xs text-orange-100/80'>
              Enter your business details and get verified quickly.
            </p>
            <div className='mt-4 h-0.5 w-16 rounded bg-orange-200/60' />
          </div>

          {/* Step 3 */}
          <div className='rounded-2xl bg-[#3b2008] p-5 text-white shadow-lg'>
            <div className='flex items-center justify-between text-xs font-semibold text-orange-200'>
              <span>03</span>
            </div>
            <div className='mt-4 rounded-xl bg-white/10 p-4'>
              <div className='rounded-lg bg-white/80 p-4'>
                <div className='grid grid-cols-2 gap-3'>
                  <div className='h-16 rounded bg-orange-100' />
                  <div className='h-16 rounded bg-orange-200' />
                </div>
                <div className='mt-3 h-10 rounded bg-orange-100' />
              </div>
            </div>
            <h3 className='mt-5 text-base font-semibold'>
              Start accepting payments.
            </h3>
            <p className='mt-2 text-xs text-orange-100/80'>
              Share payment links or integrate with your website.
            </p>
            <div className='mt-4 h-0.5 w-16 rounded bg-orange-200/60' />
          </div>
        </div>
      </div>
    </section>
  );
}
