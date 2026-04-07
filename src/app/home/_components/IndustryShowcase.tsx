'use client';

import { useRef } from 'react';

type Industry = {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
};

const industries: Industry[] = [
  {
    title: 'SMEs',
    description:
      'Accept walk-in, online, and invoice payments without changing how you already sell.',
    imageUrl:
      'https://res.cloudinary.com/dougwnqok/image/upload/q_auto/f_auto/v1775566308/Frame_2147226083_cmredn.svg',
    tags: ['Online Store', 'Online Store'],
  },
  {
    title: 'Ecommerce',
    description:
      'Launch fast checkout flows, automate collections, and keep conversion high across devices.',
    imageUrl:
      'https://res.cloudinary.com/dougwnqok/image/upload/q_auto/f_auto/v1775566286/Frame_2147226084_mvr2nc.svg',
    tags: ['Online Store', 'Online Store'],
  },
  {
    title: 'Schools & Institutions',
    description:
      'Collect tuition, levies, and recurring fees with clean reporting for administrators.',
    imageUrl:
      'https://res.cloudinary.com/dougwnqok/image/upload/q_auto/f_auto/v1775566276/Frame_2147226090_dqk7vv.svg',
    tags: ['Online Store', 'Online Store'],
  },
  {
    title: 'Enterprises & B2B',
    description:
      'Handle complex invoicing, multi-currency payments, and enterprise-grade reconciliation.',
    imageUrl:
      'https://res.cloudinary.com/dougwnqok/image/upload/q_auto/f_auto/v1775566269/Frame_2147226085_xuriqz.svg',
    tags: ['Online Store', 'Online Store'],
  },
  {
    title: 'Logistics & Transport',
    description:
      'Manage collections, delivery settlements, and partner payouts in one payment workflow.',
    imageUrl:
      'https://res.cloudinary.com/dougwnqok/image/upload/q_auto/f_auto/v1775566264/Frame_2147226086_u6pydp.svg',
    tags: ['Online Store', 'Online Store'],
  },
  {
    title: 'Developers & SaaS',
    description:
      'Integrate powerful payment APIs and automate billing for your software platform.',
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tags: ['Online Store', 'Online Store'],
  },
];

function SectionBadge({ label }: { label: string }) {
  return (
    <div className='inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-500'>
      <span className='h-2.5 w-2.5 rounded-full bg-orange-400 ring-4 ring-orange-100' />
      {label}
    </div>
  );
}

function IndustryTag({ label }: { label: string }) {
  return (
    <span className='rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm'>
      {label}
    </span>
  );
}

function IndustryCard({ title, description, imageUrl, tags }: Industry) {
  return (
    <article
      className='group relative h-[22rem] w-[28rem] shrink-0 overflow-hidden rounded-[2rem] bg-neutral-200 shadow-[0_20px_50px_-30px_rgba(17,24,39,0.3)] sm:w-[32rem]'
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.05) 0%, rgba(15,23,42,0.25) 54%, rgba(15,23,42,0.85) 100%), url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100' />
      <div className='absolute inset-x-0 bottom-0 p-6'>
        <h3 className='text-[2rem] font-semibold tracking-tight text-white mb-2'>
          {title}
        </h3>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <IndustryTag key={`${tag}-${index}`} label={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}

function NavButton({
  direction,
  onClick,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
}) {
  const isLeft = direction === 'left';

  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={isLeft ? 'Scroll left' : 'Scroll right'}
      className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors ${
        isLeft
          ? 'border-slate-300 bg-white text-slate-600 hover:border-slate-500 hover:text-slate-900'
          : 'border-slate-950 bg-slate-950 text-white hover:bg-slate-800'
      }`}
    >
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        className='h-5 w-5'
      >
        <path
          d={isLeft ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
}

export default function IndustryShowcase() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: 'left' | 'right') => {
    const element = scrollerRef.current;
    if (!element) return;

    const cardWidth = 384; // Approximate card width + gap
    element.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className='overflow-hidden bg-white py-20 sm:py-24'>
      <div className='mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl '>
            Built for every industry
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-500'>
            Whether you run a school, a logistics company, or a tech startup,
            9th Swift is built for how you actually do business.
          </p>
        </div>

        <div className='relative mt-14'>
          <div
            ref={scrollerRef}
            className='flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
          >
            {industries.map((industry) => (
              <div key={industry.title} className='snap-start'>
                <IndustryCard {...industry} />
              </div>
            ))}
          </div>

          <div className='mt-8 flex justify-end gap-3'>
            <NavButton direction='left' onClick={() => scrollCards('left')} />
            <NavButton direction='right' onClick={() => scrollCards('right')} />
          </div>
        </div>
      </div>
    </section>
  );
}
