const OurStory = () => {
  return (
    <div className='relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto'>
        {/* Image Section */}
        <div className='relative'>
          <div className='aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl'>
            <img
              src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              alt='9th Swift team collaborating'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* Content Section */}
        <div className='text-left lg:pl-8'>
          {/* What Drives Us Tag */}
          <div className='inline-flex items-center gap-2 mb-6'>
            <div className='w-2 h-2 bg-orange-400 rounded-full'></div>
            <span className='text-orange-400 text-sm font-medium'>
              What Drives Us
            </span>
          </div>

          {/* Heading */}
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Our Story
          </h2>

          {/* Description Paragraphs */}
          <div className='space-y-6'>
            <p className='text-gray-600 text-lg leading-relaxed'>
              9th Swift was born out of the need for something better: a
              financial platform built for African businesses. We saw businesses
              struggle with fragmented payments, delayed settlements, opaque
              fees, and limited access to capital.
            </p>
            <p className='text-gray-600 text-lg leading-relaxed'>
              We believed there could be a more efficient and transparent way.
              So we built 9th Swift, a platform combining payments, business
              banking, reconciliation, and finance tools, tailored to the
              realities and opportunities of Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
