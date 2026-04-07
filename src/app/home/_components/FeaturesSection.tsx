import Logo from '@/app/_components/Logo';
import {
  MessageSquare,
  CreditCard,
  ArrowRightLeft,
  QrCode,
  CircleDot,
  Bell,
  Filter,
  Search,
  MoreVertical,
  Plus,
  Wallet as WalletIcon,
  Edit2,
  Trash2,
} from 'lucide-react';

function CheckoutMockup() {
  return (
    <div className='mt-5 flex gap-3 overflow-hidden bg-[#ffe8d7] p-2 boder border-orange-100 rounded-xl'>
      {/* Left: Payment Methods */}
      <div className='w-36 shrink-0 rounded-xl border border-orange-100 bg-[#ffe8d7] p-3 shadow-sm'>
        <div className='mb-3'>
          <Logo width={10} height={10} showText textClassName='text-[2px]' />
        </div>

        {/* Language Selector */}
        <div className='mb-3'>
          <div className='flex items-center justify-between rounded-md border border-orange-200 bg-[#fff5ee] px-2 py-1.5 text-[8px] text-amber-700'>
            <span>- Select Language -</span>
            <svg
              className='h-2.5 w-2.5 text-amber-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div>
        </div>

        {/* Payment Methods */}
        <div className='space-y-1.5'>
          {[
            { name: 'USSD', icon: <MessageSquare className='w-3 h-3' /> },
            { name: 'Card', icon: <CreditCard className='w-3 h-3' /> },
            { name: 'Transfer', icon: <ArrowRightLeft className='w-3 h-3' /> },
            { name: 'QR Code', icon: <QrCode className='w-3 h-3' /> },
          ].map((method, i) => (
            <div
              key={method.name}
              className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[9px] font-medium transition-all ${
                i === 1
                  ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {method.icon}
              <span>{method.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Payment Summary */}
      <div className='flex-1 rounded-xl border border-gray-200 bg-white p-4 shadow-sm'>
        <div className='flex items-center justify-between mb-4'>
          <span className='text-[11px] font-semibold text-gray-800'>
            Payment Summary
          </span>
          <button className='text-gray-400 hover:text-gray-600 transition-colors'>
            <svg
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* Summary Info */}
        <div className='bg-orange-50/60 rounded-lg p-3 mb-4'>
          <div className='space-y-2 text-[9px]'>
            <div className='flex justify-between'>
              <span className='text-gray-500'>Merchant id</span>
              <span className='text-gray-700 font-medium'>7Central Inc.</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-500'>Description</span>
              <span className='text-gray-700 font-medium'>test payment</span>
            </div>
            <div className='flex justify-between pt-1.5 border-t border-orange-100/60'>
              <span className='text-gray-800 font-bold'>Amount</span>
              <span className='text-gray-900 font-bold'>₦245,000.00</span>
            </div>
          </div>
        </div>

        {/* Card Details Form */}
        <div className='space-y-3'>
          <div>
            <p className='text-[8px] text-gray-500 mb-1.5'>Card Number</p>
            <div className='flex items-center gap-2 h-6 rounded-md bg-gray-50/50 border border-gray-200 px-2.5'>
              <span className='text-[9px] text-gray-400'>
                0000 000 0000 0000
              </span>
              <svg
                className='h-3.5 w-3.5 text-gray-300 ml-auto'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                />
              </svg>
            </div>
          </div>

          <div className='flex gap-3'>
            <div className='flex-1'>
              <p className='text-[8px] text-gray-500 mb-1.5'>Expiry</p>
              <div className='flex items-center gap-2 h-6 rounded-md bg-gray-50/50 border border-gray-200 px-2.5'>
                <span className='text-[9px] text-gray-400'>MM / YY</span>
                <svg
                  className='h-3 w-3 text-gray-300 ml-auto'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                  />
                </svg>
              </div>
            </div>
            <div className='w-20'>
              <p className='text-[8px] text-gray-500 mb-1.5'>CVV</p>
              <div className='flex items-center gap-2 h-6 rounded-md bg-gray-50/50 border border-gray-200 px-2.5'>
                <span className='text-[9px] text-gray-400'>x x x</span>
                <svg
                  className='h-3 w-3 text-gray-300 ml-auto'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                  />
                </svg>
              </div>
            </div>
          </div>

          <p className='text-[7px] text-center text-gray-400/80 leading-relaxed pt-1'>
            Enter your card details to complete this transaction. Make sure to
            <br />
            keep details of your card private at all times
          </p>
        </div>

        {/* Pay Button */}
        <div className='mt-4 h-7 rounded-lg bg-orange-100/40 flex items-center justify-center border border-orange-200/30'>
          <span className='text-[10px] font-semibold text-orange-400/60'>
            Pay ₦245,000.00
          </span>
        </div>
      </div>
    </div>
  );
}

function ReconciliationMockup() {
  const transactions = [
    {
      name: 'Jean Tech Nigeria Ltd.',
      amount: '₦450,000.00',
      ref: 'INV-20456...',
      status: 'Pending',
    },
    {
      name: '7Central Inc.',
      amount: '₦450,000.00',
      ref: 'INV-20456...',
      status: 'Matched',
    },
  ];

  return (
    <div className='mt-5 rounded-xl border border-gray-100 bg-white p-3 shadow-sm'>
      {/* Stats */}
      <div className='grid grid-cols-3 gap-2 mb-3'>
        {[
          { label: 'Matched', value: '124' },
          { label: 'Unmatched', value: '6' },
          { label: 'Pending', value: '11' },
        ].map((stat) => (
          <div
            key={stat.label}
            className='rounded-lg border border-gray-100 bg-gray-50 p-2 text-center'
          >
            <p className='text-[8px] text-gray-400'>{stat.label}</p>
            <p className='text-sm font-bold text-gray-900'>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Header */}
      <div className='flex items-center justify-between mb-2'>
        <p className='text-[9px] font-semibold text-gray-700'>
          Recent Transactions
        </p>
        <div className='flex gap-1.5'>
          <span className='text-[8px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5'>
            July 1-8, 2026
          </span>
          <span className='text-[8px] text-gray-500 border border-gray-200 rounded px-1.5 py-0.5'>
            Export CSV
          </span>
        </div>
      </div>

      {/* Table header */}
      <div className='grid grid-cols-4 gap-1 text-[8px] text-gray-400 mb-1 px-1'>
        <span>Beneficiary</span>
        <span>Amount</span>
        <span>INV-Ref</span>
        <span>Status</span>
      </div>

      {/* Rows */}
      {transactions.map((tx, i) => (
        <div
          key={i}
          className='grid grid-cols-4 gap-1 text-[8px] py-1.5 px-1 border-t border-gray-50'
        >
          <span className='text-gray-700 truncate'>{tx.name}</span>
          <span className='text-gray-600'>{tx.amount}</span>
          <span className='text-gray-400'>{tx.ref}</span>
          <span
            className={`flex items-center gap-1 ${
              tx.status === 'Matched' ? 'text-green-500' : 'text-orange-400'
            }`}
          >
            <span className='w-1.5 h-1.5 rounded-full bg-current' />
            {tx.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function CustomPaymentsMockup() {
  return (
    <div className='mt-5 space-y-3'>
      {/* API Response */}
      <div className='rounded-xl border border-gray-100 bg-white p-3 shadow-sm'>
        <p className='text-[9px] font-semibold text-gray-600 mb-2'>RESPONSES</p>
        <div className='space-y-1 text-[9px]'>
          <div className='flex justify-between'>
            <span className='text-gray-400'>status</span>
            <span className='text-green-500 font-medium'>● Success</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-400'>amount</span>
            <span className='text-orange-500 font-semibold'>₦450,000.00</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-400'>ref</span>
            <span className='text-gray-600'>ord_8821x</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-400'>channel</span>
            <span className='text-gray-600'>card</span>
          </div>
        </div>

        <div className='mt-3 pt-2 border-t border-gray-100'>
          <p className='text-[8px] text-gray-400 mb-1.5'>SDKS AVAILABLE</p>
          <div className='flex gap-1.5 flex-wrap'>
            {['Node.js', 'Python', 'React', 'Go'].map((sdk, i) => (
              <span
                key={sdk}
                className={`text-[8px] px-2 py-0.5 rounded-full border ${
                  i === 0
                    ? 'bg-green-50 border-green-200 text-green-600'
                    : 'bg-gray-50 border-gray-200 text-gray-500'
                }`}
              >
                {sdk}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Code Preview */}
      <div className='rounded-xl bg-gray-900 p-3 shadow-sm'>
        <div className='flex items-center gap-1.5 mb-2'>
          <span className='w-2 h-2 rounded-full bg-red-400' />
          <span className='w-2 h-2 rounded-full bg-yellow-400' />
          <span className='w-2 h-2 rounded-full bg-green-400' />
          <span className='ml-2 text-[8px] text-gray-500'>
            swift_payments.js
          </span>
        </div>
        <div className='space-y-0.5 text-[8px] font-mono'>
          <p>
            <span className='text-purple-400'>const</span>{' '}
            <span className='text-blue-300'>swift</span>{' '}
            <span className='text-white'>=</span>{' '}
            <span className='text-yellow-300'>require</span>
            <span className='text-gray-400'>(</span>
            <span className='text-green-300'>&apos;9thswift&apos;</span>
            <span className='text-gray-400'>)</span>
          </p>
          <p className='text-gray-600'>// Initialize payment</p>
          <p>
            <span className='text-purple-400'>await</span>{' '}
            <span className='text-blue-300'>swift</span>
            <span className='text-white'>.</span>
            <span className='text-yellow-300'>charge</span>
            <span className='text-gray-400'>(&#123;</span>
          </p>
          <p className='pl-3'>
            <span className='text-blue-300'>amount</span>
            <span className='text-white'>:</span>{' '}
            <span className='text-orange-300'>450000</span>
          </p>
          <p className='text-gray-400'>&#125;)</p>
        </div>
      </div>
    </div>
  );
}

function EasyBankingMockup() {
  const transactions = [
    {
      id: '#098456',
      wallet: 'Default',
      balance: '₦450,000.00',
      bank: '9th MT Bank Ltd',
      account: '346678902',
    },
    {
      id: '#098456/89021',
      wallet: 'Jzeet Tech Finance',
      balance: '₦450,000.00',
      bank: '9th MT Bank Ltd',
      account: '346678902',
    },
    {
      id: '#098456/89021',
      wallet: '9th Cloud Services',
      balance: '₦450,000.00',
      bank: '9th MT Bank Ltd',
      account: '346678902',
    },
    {
      id: '#098456/89021',
      wallet: '/centry MT Bank',
      balance: '₦450,000.00',
      bank: '9th MT Bank Ltd',
      account: '346678902',
    },
  ];

  return (
    <div className='mt-5 rounded-xl border border-gray-100 bg-white p-3 shadow-sm overflow-hidden'>
      {/* Header */}
      <div className='flex items-center justify-between mb-3 pb-2 border-b border-gray-100'>
        <Logo width={16} height={16} showText textClassName='text-[10px]' />
        <div className='flex items-center gap-2'>
          <div className='relative'>
            <Bell className='w-3.5 h-3.5 text-gray-500' />
            <span className='absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-orange-400 rounded-full' />
          </div>
          <div className='w-5 h-5 rounded-full bg-gray-300 overflow-hidden' />
          <div className='leading-tight'>
            <p className='text-[8px] font-semibold text-gray-800'>
              Sharafadeen M.
            </p>
            <p className='text-[6px] text-gray-400'>user@email.com</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className='flex items-center gap-1 mb-2'>
        <CircleDot className='w-3 h-3 text-orange-500' />
        <span className='text-[9px] font-semibold text-gray-700'>Overview</span>
      </div>

      {/* Balance Cards */}
      <div className='flex gap-2 mb-3'>
        <div className='flex-1 rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 p-2.5 relative overflow-hidden'>
          <div className='absolute top-1 right-1'>
            <WalletIcon className='w-4 h-4 text-white/20' />
          </div>
          <p className='text-[7px] text-orange-100 mb-0.5'>Main Balance</p>
          <p className='text-base font-bold text-white'>₦70,000.00</p>
        </div>
        <div className='w-16 rounded-lg border border-gray-100 bg-gray-50 p-2 text-center'>
          <p className='text-[7px] text-gray-400 mb-0.5'>Wallet Count</p>
          <p className='text-lg font-bold text-gray-900'>4</p>
        </div>
      </div>

      {/* Search and Actions */}
      <div className='flex items-center gap-2 mb-2'>
        <div className='flex-1 flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-md px-2 py-1'>
          <Search className='w-2.5 h-2.5 text-gray-400' />
          <span className='text-[7px] text-gray-400'>Search for invoice</span>
        </div>
        <button className='px-2 py-1 text-[7px] text-gray-600 border border-gray-200 rounded-md flex items-center gap-1 bg-white'>
          Export Selected
        </button>
        <button className='px-2 py-1 text-[7px] text-gray-600 border border-gray-200 rounded-md flex items-center gap-1 bg-white'>
          <Filter className='w-2.5 h-2.5' />
          Filter
        </button>
        <button className='px-2 py-1 text-[7px] text-white bg-gradient-to-r from-orange-400 to-orange-500 rounded-md flex items-center gap-1 font-medium'>
          <Plus className='w-2.5 h-2.5' />
          Add Wallet
        </button>
      </div>

      {/* Table */}
      <div className='text-[7px] overflow-hidden'>
        {/* Table Header */}
        <div className='grid grid-cols-6 gap-1 text-gray-400 mb-1 px-1 bg-gray-50/50 py-1 rounded-t-md border-b border-gray-100'>
          <span className='flex items-center gap-1'>
            <WalletIcon className='w-2 h-2' />
            Wallet ID
          </span>
          <span>Wallet Name</span>
          <span>Balance Amount</span>
          <span>Deposit Bank</span>
          <span>Account Number</span>
          <span></span>
        </div>

        {/* Table Rows */}
        {transactions.map((tx, i) => (
          <div
            key={i}
            className='grid grid-cols-6 gap-1 py-1.5 px-1 border-b border-gray-50 text-gray-600 hover:bg-gray-50/50 transition-colors group'
          >
            <span className='truncate font-medium text-gray-700'>{tx.id}</span>
            <span className='truncate'>{tx.wallet}</span>
            <span className='font-semibold text-gray-800'>{tx.balance}</span>
            <span className='truncate text-gray-500'>{tx.bank}</span>
            <span className='text-gray-500'>{tx.account}</span>
            <div className='flex items-center justify-end'>
              <button className='opacity-0 group-hover:opacity-100 transition-opacity'>
                <MoreVertical className='w-3 h-3 text-gray-400 hover:text-gray-600' />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className='bg-gray-50 py-16 sm:py-24'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900'>
            Everything you need to get paid.
          </h2>
          <p className='mt-2 text-sm text-gray-500'>
            A complete payment infrastructure designed for modern businesses.
          </p>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {/* Checkouts */}
          <div className='rounded-2xl border border-gray-100 bg-white p-6 shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-900'>Checkouts</h3>
            <p className='mt-1 text-sm text-gray-500'>
              Beautiful, conversion-optimized payment pages that work on any
              device.
            </p>
            <CheckoutMockup />
          </div>

          {/* Reconciliation */}
          <div className='rounded-2xl border border-gray-100 bg-white p-6 shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-900'>
              Reconciliation
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              Automatically match payments with invoices and track every
              transaction.
            </p>
            <ReconciliationMockup />
          </div>

          {/* Custom Payments */}
          <div className='rounded-2xl border border-gray-100 bg-white p-6 shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-900'>
              Custom Payments
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              Well-documented APIs that plug into your product with ease in a
              few minutes.
            </p>
            <CustomPaymentsMockup />
          </div>

          {/* Easy Banking */}
          <div className='rounded-2xl border border-gray-100 bg-white p-6 shadow-sm'>
            <h3 className='text-lg font-semibold text-gray-900'>
              Easy Banking
            </h3>
            <p className='mt-1 text-sm text-gray-500'>
              Manage your balance, send money to vendors or employees, and track
              every transaction in real time.
            </p>
            <EasyBankingMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
