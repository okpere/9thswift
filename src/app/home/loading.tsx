export default function Loading() {
  return (
    <div className='p-6 space-y-6 animate-pulse'>
      {/* Header skeleton */}
      <div className='h-8 bg-gray-200 rounded-md w-1/3' />

      {/* Subheading skeleton */}
      <div className='h-4 bg-gray-200 rounded-md w-1/2' />

      {/* Card grid skeleton */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className='rounded-xl border border-gray-200 p-4 space-y-3'
          >
            <div className='h-32 bg-gray-200 rounded-lg' />
            <div className='h-4 bg-gray-200 rounded w-3/4' />
            <div className='h-3 bg-gray-200 rounded w-1/2' />
          </div>
        ))}
      </div>
    </div>
  );
}
