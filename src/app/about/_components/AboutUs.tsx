const AboutUs = () => {
  const stats = [
    {
      value: '1.5%',
      label: 'Low Transaction Fee',
    },
    {
      value: '$50M',
      label: 'Processed Volume',
    },
    {
      value: '1K',
      label: 'Active Businesses',
    },
    {
      value: '5+',
      label: 'African Countries',
    },
  ];

  return (
    <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center bg-gray-50'>
      {/* Who We Are Tag */}
      <div className='inline-flex items-center gap-2 mb-6'>
        <div className='w-2 h-2 bg-orange-400 rounded-full'></div>
        <span className='text-orange-400 text-sm font-medium'>Who We Are</span>
      </div>

      {/* Main Heading */}
      <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-8'>
        About Us
      </h2>

      {/* Description */}
      <p className='text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12'>
        9th Swift was born out of the need for something better, a financial
        platform built for African businesses. We saw businesses struggle with
        fragmented payments, delayed settlements, opaque fees, and limited
        access to capital.
      </p>

      {/* Team Image */}
      <div className='relative mb-16'>
        <div className='aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl'>
          <img
            src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            alt='Team meeting with global presence'
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      {/* Statistics Grid */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
        {stats.map((stat, index) => (
          <div key={index} className='text-center'>
            <div className='text-3xl lg:text-4xl font-bold text-gray-900 mb-2'>
              {stat.value}
            </div>
            <div className='text-gray-600 text-sm lg:text-base font-medium'>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
