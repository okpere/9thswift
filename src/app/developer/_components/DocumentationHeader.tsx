const DocumentationHeader = () => {
  return (
    <div className='bg-orange-50/30 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      <div className='max-w-5xl mx-auto text-center'>
        {/* API Documentation Tag */}
        <div className='inline-flex items-center gap-2 mb-4 sm:mb-6'>
          <div className='w-2 h-2 bg-orange-400 rounded-full'></div>
          <span className='text-orange-400 text-xs sm:text-sm font-medium'>
            API Documentation
          </span>
        </div>

        {/* Heading */}
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 break-words'>
          9th Swift Documentation
        </h1>

        {/* Description */}
        <p className='text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-2 break-words'>
          We help African businesses get paid by anyone, anywhere in the world —
          while giving them the tools to collect payments, access loans, and
          manage daily operations through a complete business banking solution.
        </p>
      </div>
    </div>
  );
};

export default DocumentationHeader;
