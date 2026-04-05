const notifications = [
  { text: 'Credit payment notification', time: 'Just now' },
  { text: 'Credit payment notification', time: 'Just now' },
  { text: 'New admin user registered.', time: '59 minutes ago' },
  { text: 'Settlement notification', time: '12 hours ago' },
  { text: 'Credit payment notification', time: 'Just now' },
  { text: 'Credit payment notification', time: 'Just now' },
  { text: 'Settlement notification', time: '12 hours ago' },
  { text: 'Sub-account created', time: 'Today, 11:59 AM' },
];

export default function DashboardMockup() {
  return (
    <div
      className='rounded-2xl overflow-hidden shadow-2xl shadow-orange-200 border border-orange-100'
      style={{ background: 'linear-gradient(135deg, #fff5ef 0%, #fff 60%)' }}
    >
      <div className='flex h-[520px]'>
        {/* ── Sidebar ── */}
        <aside className='w-52 shrink-0 bg-white border-r border-orange-100 flex flex-col p-4 gap-1 overflow-hidden'>
          {/* Logo */}
          <div className='flex items-center gap-2 mb-5'>
            <svg width='28' height='28' viewBox='0 0 32 32' fill='none'>
              <path d='M8 28 L16 4 L24 16 L16 20 Z' fill='#F97316' />
              <path d='M8 28 L16 20 L12 28 Z' fill='#DC2626' />
            </svg>
            <span className='font-bold text-gray-900 text-sm'>
              <span className='font-black'>9th</span> Swift
            </span>
          </div>

          {/* OVERVIEW */}
          <p className='text-[9px] font-semibold text-gray-400 tracking-widest mb-1'>
            OVERVIEW
          </p>
          <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-500 text-white text-xs font-semibold mb-2'>
            <span>⊞</span>
            Dashboard
          </div>

          {/* 9TH HUB */}
          <div className='flex items-center justify-between mb-1'>
            <p className='text-[9px] font-semibold text-gray-400 tracking-widest'>
              9TH HUB
            </p>
            <span className='text-gray-300 text-xs'>∧</span>
          </div>
          {[
            { icon: '📊', label: 'Transaction' },
            { icon: '👥', label: 'Customers' },
            { icon: '💳', label: 'Wallet' },
          ].map((item) => (
            <div
              key={item.label}
              className='flex items-center gap-2 px-3 py-1.5 rounded-lg text-gray-600 text-xs hover:bg-orange-50 cursor-default'
            >
              <span className='text-sm'>{item.icon}</span>
              {item.label}
            </div>
          ))}

          {/* OPERATIONS */}
          <div className='flex items-center justify-between mt-3 mb-1'>
            <p className='text-[9px] font-semibold text-gray-400 tracking-widest'>
              OPERATIONS
            </p>
            <span className='text-gray-300 text-xs'>∧</span>
          </div>

          {/* ADMIN TOOLS */}
          <div className='flex items-center justify-between mt-2 mb-1'>
            <p className='text-[9px] font-semibold text-gray-400 tracking-widest'>
              ADMIN TOOLS
            </p>
            <span className='text-gray-300 text-xs'>∧</span>
          </div>
        </aside>

        {/* ── Main ── */}
        <div className='flex-1 flex flex-col overflow-hidden'>
          {/* Top header */}
          <div className='flex items-center justify-end gap-3 px-5 py-3 bg-white border-b border-orange-100'>
            <div className='relative'>
              <span className='text-lg'>🔔</span>
              <span className='absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-400 rounded-full' />
            </div>
            <div className='w-8 h-8 rounded-full bg-orange-200 overflow-hidden flex items-center justify-center text-xs font-bold text-orange-600'>
              SM
            </div>
            <div className='leading-tight'>
              <p className='text-xs font-semibold text-gray-800'>
                Sharafadeen M.
              </p>
              <p className='text-[10px] text-gray-400'>user@email.com</p>
            </div>
          </div>

          {/* Content area */}
          <div className='flex flex-1 overflow-hidden bg-[#FFF8F5]'>
            {/* Center */}
            <div className='flex-1 p-4 overflow-hidden flex flex-col gap-3'>
              {/* Overview bar */}
              <div className='flex items-center justify-between bg-white rounded-xl px-4 py-2.5 border border-orange-100'>
                <div className='flex items-center gap-2'>
                  <span className='text-orange-400 text-sm'>📋</span>
                  <span className='text-sm font-semibold text-gray-800'>
                    Overview
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <button className='text-[10px] text-gray-500 border border-gray-200 rounded-lg px-2.5 py-1 bg-white'>
                    Export PDF
                  </button>
                  <button className='text-[10px] text-gray-500 border border-gray-200 rounded-lg px-2.5 py-1 bg-white flex items-center gap-1'>
                    Sort <span>⌄</span>
                  </button>
                  <button className='text-[10px] text-gray-500 border border-gray-200 rounded-lg px-2.5 py-1 bg-white flex items-center gap-1'>
                    🗓 Filter
                  </button>
                </div>
              </div>

              {/* Metric cards */}
              <div className='grid grid-cols-3 gap-3'>
                {[
                  {
                    icon: '📶',
                    label: 'Total Transaction',
                    value: '₦23,450,000.00',
                  },
                  { icon: '📥', label: 'Settlements', value: '₦23,100,000.00' },
                  { icon: '👤', label: 'Customers', value: '7,890' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className='bg-white rounded-xl p-3 border border-orange-100 flex flex-col gap-2'
                  >
                    <div className='w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-sm'>
                      {m.icon}
                    </div>
                    <p className='text-[10px] text-gray-400'>{m.label}</p>
                    <p className='text-sm font-extrabold text-gray-900'>
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className='bg-white rounded-xl border border-orange-100 p-3 flex-1'>
                <div className='flex items-center gap-3 mb-2 flex-wrap'>
                  <span className='text-xs font-bold text-gray-800'>
                    Transaction Trend
                  </span>
                  <span className='text-[10px] text-gray-400'>
                    Total Inflow
                  </span>
                  <span className='text-[10px] text-gray-400'>
                    Settlement Status
                  </span>
                  <span className='mx-1 text-gray-200'>|</span>
                  <span className='flex items-center gap-1 text-[10px] text-gray-500'>
                    <span className='w-2 h-2 rounded-full bg-orange-400 inline-block' />
                    This year
                  </span>
                  <span className='flex items-center gap-1 text-[10px] text-gray-400'>
                    <span className='w-2 h-2 rounded-full bg-blue-300 inline-block' />
                    Last year
                  </span>
                </div>

                <svg
                  viewBox='0 0 320 100'
                  className='w-full h-28'
                  preserveAspectRatio='none'
                >
                  <defs>
                    <linearGradient id='grad1' x1='0' y1='0' x2='0' y2='1'>
                      <stop offset='0%' stopColor='#F97316' stopOpacity='0.2' />
                      <stop offset='100%' stopColor='#F97316' stopOpacity='0' />
                    </linearGradient>
                  </defs>
                  {/* Y grid lines */}
                  {[0, 33, 66, 100].map((y) => (
                    <line
                      key={y}
                      x1='0'
                      y1={y}
                      x2='320'
                      y2={y}
                      stroke='#f3e8e0'
                      strokeWidth='0.5'
                    />
                  ))}
                  {/* This year line */}
                  <path
                    d='M0,80 C20,75 40,60 60,55 C80,50 95,65 120,45 C145,25 160,20 185,15 C210,10 230,35 255,30 C275,25 300,35 320,30'
                    fill='none'
                    stroke='#F97316'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <path
                    d='M0,80 C20,75 40,60 60,55 C80,50 95,65 120,45 C145,25 160,20 185,15 C210,10 230,35 255,30 C275,25 300,35 320,30 L320,100 L0,100 Z'
                    fill='url(#grad1)'
                  />
                  {/* Last year line (dashed) */}
                  <path
                    d='M0,90 C20,85 40,80 60,75 C80,70 95,72 120,65 C145,58 160,55 185,50 C210,45 230,55 255,52 C275,49 300,55 320,50'
                    fill='none'
                    stroke='#93C5FD'
                    strokeWidth='1.5'
                    strokeDasharray='4 3'
                    strokeLinecap='round'
                  />
                </svg>

                {/* X-axis */}
                <div className='flex justify-between text-[9px] text-gray-300 px-1 mt-1'>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map(
                    (m) => (
                      <span key={m}>{m}</span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* ── Notifications panel ── */}
            <div className='w-52 bg-white border-l border-orange-100 flex flex-col overflow-hidden'>
              <div className='p-3 border-b border-orange-50'>
                <p className='text-xs font-bold text-gray-800'>Notifications</p>
              </div>
              <div className='flex-1 overflow-y-auto p-3 space-y-3'>
                {notifications.map((n, i) => (
                  <div key={i} className='flex gap-2 items-start'>
                    <span className='text-orange-300 text-xs mt-0.5'>🔔</span>
                    <div>
                      <p className='text-[10px] font-medium text-gray-700 leading-tight'>
                        {n.text}
                      </p>
                      <p className='text-[9px] text-gray-400 mt-0.5'>
                        {n.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='p-3 border-t border-orange-50'>
                <p className='text-xs font-bold text-gray-800 mb-2'>
                  Activity Log
                </p>
                <div className='flex gap-2 items-start'>
                  <div className='w-5 h-5 rounded-full bg-orange-200 shrink-0' />
                  <div>
                    <p className='text-[10px] font-medium text-gray-700'>
                      updated KYC doc
                    </p>
                    <p className='text-[9px] text-gray-400'>Just now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
