'use client';

import { useState } from 'react';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(1);

  const teamMembers = [
    {
      id: 1,
      name: 'Gabriella Anyiam',
      role: 'UI/ UX Designer',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Gabriella Anyiam',
      role: 'UI/ UX Designer',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Gabriella Anyiam',
      role: 'UI/ UX Designer',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'Gabriella Anyiam',
      role: 'UI/ UX Designer',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
        {
      id: 5,
      name: 'Gabriella Anyiam',
      role: 'UI/ UX Designer',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className='relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          {/* Our Team Tag */}
          <div className='inline-flex items-center gap-2 mb-6'>
            <div className='w-2 h-2 bg-orange-400 rounded-full'></div>
            <span className='text-orange-400 text-sm font-medium'>
              Our Team
            </span>
          </div>

          {/* Heading */}
          <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-4'>
            Meet the Team Behind 9th Swift
          </h2>

          {/* Subtitle */}
          <p className='text-gray-600 text-base lg:text-lg max-w-3xl mx-auto'>
            we are a diverse team of experts, all united by one goal: making
            financial operations easier, safer, and more empowering for our
            users.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className='relative'>
          <div className='flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:justify-center'>
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className='flex-shrink-0 w-64 text-center cursor-pointer group snap-center'
                onClick={() => setSelectedMember(member.id)}
              >
                {/* Image Container */}
                <div
                  className={`relative mb-4 rounded-3xl overflow-hidden transition-all duration-300 ${
                    selectedMember === member.id
                      ? 'ring-4 ring-blue-400 scale-105'
                      : 'ring-0 hover:scale-105'
                  }`}
                >
                  <div className='aspect-[3/4] bg-gray-200'>
                    <img
                      src={member.image}
                      alt={member.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                {/* Name and Role */}
                <h3 className='text-xl font-bold text-gray-900 mb-1'>
                  {member.name}
                </h3>
                <p className='text-gray-600 text-sm'>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
