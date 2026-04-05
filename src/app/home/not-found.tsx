// // src/app/not-found.tsx
// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { Home, Search } from 'lucide-react';

// export default function NotFound() {
//   return (
//     <div className='flex min-h-[100vh] flex-col bg-white'>
//       {/* Header with Logo */}
//       <header className='w-full border-b bg-white'>
//         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
//           <Link href='/' className='flex items-center gap-2 group'>
//             {/* <Image
//               src={'/logo.svg'}
//               alt='site logo'
//               width={120}
//               height={40}
//               className='h-8 w-auto transition-transform group-hover:scale-105'
//               priority
//             /> */}
//           </Link>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className='flex flex-1 items-center justify-center text-center p-4'>
//         <div className='max-w-2xl mx-auto'>
//           {/* 404 Text with Shadow */}
//           <div className='flex items-center justify-center gap-4 mb-6'>
//             <h1
//               className='text-[150px] sm:text-[200px] md:text-[220px] font-bold mb-4 leading-none'
//               style={{
//                 color: '#991B1B',
//                 textShadow: '8px 8px 16px rgba(0, 0, 0, 0.5)',
//               }}
//             >
//               4
//             </h1>
//             <h1
//               className='text-[150px] sm:text-[200px] md:text-[220px]  font-bold mb-4 leading-none'
//               style={{
//                 color: '#991B1B',
//                 textShadow: '8px 8px 16px rgba(0, 0, 0, 0.5)',
//                 transform: 'rotate(130deg)',
//               }}
//             >
//               0
//             </h1>
//             <h1
//               className='text-[150px] sm:text-[200px] md:text-[220px] font-bold mb-4 leading-none'
//               style={{
//                 color: '#991B1B',
//                 textShadow: '8px 8px 16px rgba(0, 0, 0, 0.5)',
//               }}
//             >
//               4
//             </h1>
//           </div>

//           {/* Page Not Found Heading */}
//           <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4'>
//             Page Not Found
//           </h2>

//           {/* Description */}
//           <p className='text-gray-600 text-base sm:text-lg mb-8 max-w-lg mx-auto px-4'>
//             Sorry! The page you&apos;re looking for does not exist. It might
//             have been moved, deleted, or never existed.
//           </p>

//           {/* Action Buttons */}
//           <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
//             <Link
//               href='/'
//               className='inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium min-w-[180px] justify-center'
//             >
//               Back to Home
//             </Link>

//             <Link
//               href='/marketplace'
//               className='inline-flex items-center gap-2 bg-white text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium min-w-45 justify-center'
//             >
//               <Search className='w-5 h-5' />
//               Search Products
//             </Link>
//           </div>
//           {/* <hr
//             className='my-8 border-gray-300 w-full'
//             style={{
//               color: '#991B1B',
//               textShadow: '8px 8px 16px rgba(0, 0, 0, 0.5)',
//             }}
//           /> */}
//         </div>
//       </div>
//     </div>
//   );
// }
