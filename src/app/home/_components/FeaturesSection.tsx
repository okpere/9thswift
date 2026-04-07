function CheckoutMockup() {
  return (
    <div className='mt-5 flex gap-3 overflow-hidden'>
      {/* Left: Payment Methods */}
      <div className='w-36 shrink-0 rounded-xl border border-orange-100 bg-white p-3 shadow-sm'>
        <div className='flex items-center gap-1.5 mb-3'>
          <div className='w-5 h-5 rounded bg-gradient-to-br from-orange-400 to-red-500' />
          <span className='text-[10px] font-bold text-gray-800'>9th Swift</span>
        </div>
        <div className='mb-2 h-6 w-full rounded bg-blue-50 border border-blue-100' />
        <div className='space-y-1.5'>
          {['USSD', 'Card', 'Transfer', 'QR Code'].map((method, i) => (
            <div
              key={method}
              className={`flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[9px] font-medium ${
                i === 1
                  ? 'bg-orange-400 text-white'
                  : 'bg-gray-50 text-gray-600'
              }`}
            >
              <span className='w-3 h-3 rounded-full bg-current opacity-30' />
              {method}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Payment Summary */}
      <div className='flex-1 rounded-xl border border-gray-200 bg-white p-3 shadow-sm'>
        <div className='flex items-center justify-between mb-3'>
          <span className='text-[10px] font-semibold text-gray-800'>
            Payment Summary
          </span>
          <span className='text-gray-400 text-xs'>×</span>
        </div>
        <div className='space-y-1.5 text-[9px] mb-3'>
          <div className='flex justify-between'>
            <span className='text-gray-400'>Merchant id</span>
            <span className='text-gray-600'>7Central Inc.</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-gray-400'>Description</span>
            <span className='text-gray-600'>test payment</span>
          </div>
          <div className='flex justify-between font-semibold'>
            <span className='text-gray-600'>Amount</span>
            <span className='text-gray-900'>₦245,000.00</span>
          </div>
        </div>
        <div className='border-t border-gray-100 pt-2'>
          <p className='text-[8px] text-gray-400 mb-1'>Card Number</p>
          <div className='h-5 rounded bg-gray-50 border border-gray-100 mb-2' />
          <div className='flex gap-2'>
            <div className='flex-1'>
              <p className='text-[8px] text-gray-400 mb-1'>Expiry</p>
              <div className='h-5 rounded bg-gray-50 border border-gray-100' />
            </div>
            <div className='w-12'>
              <p className='text-[8px] text-gray-400 mb-1'>CVV</p>
              <div className='h-5 rounded bg-gray-50 border border-gray-100' />
            </div>
          </div>
        </div>
        <div className='mt-3 h-6 rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center'>
          <span className='text-[9px] font-semibold text-white'>
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
      id: 'PSB001',
      wallet: '9th Volt',
      amount: '₦450,000.00',
      acc: '8114960...',
      date: '24/02/2025',
    },
    {
      id: 'PSB004070021',
      wallet: 'Jean Tech Finance',
      amount: '₦450,000.00',
      acc: '8114960...',
      date: '03/07/2025',
    },
  ];

  return (
    <div className='mt-5 rounded-xl border border-gray-100 bg-white p-3 shadow-sm overflow-hidden'>
      {/* Header */}
      <div className='flex items-center justify-between mb-3'>
        <div className='flex items-center gap-1.5'>
          <div className='w-4 h-4 rounded bg-gradient-to-br from-orange-400 to-red-500' />
          <span className='text-[9px] font-bold text-gray-800'>9th Swift</span>
        </div>
        <div className='flex items-center gap-1'>
          <div className='w-5 h-5 rounded-full bg-orange-100' />
          <span className='text-[8px] text-gray-600'>Sharafadeen M.</span>
        </div>
      </div>

      {/* Overview */}
      <div className='flex items-center gap-1 mb-2'>
        <span className='text-[8px] text-orange-500'>◐</span>
        <span className='text-[9px] font-semibold text-gray-700'>Overview</span>
      </div>

      {/* Balance Card */}
      <div className='flex gap-2 mb-3'>
        <div className='flex-1 rounded-lg bg-gradient-to-r from-orange-400 to-orange-500 p-2'>
          <p className='text-[8px] text-orange-100'>Main Balance</p>
          <p className='text-sm font-bold text-white'>₦70,000.00</p>
        </div>
        <div className='w-16 rounded-lg border border-gray-100 bg-gray-50 p-2 text-center'>
          <p className='text-[8px] text-gray-400'>Wallet Count</p>
          <p className='text-sm font-bold text-gray-900'>4</p>
        </div>
      </div>

      {/* Table */}
      <div className='text-[7px]'>
        <div className='grid grid-cols-5 gap-1 text-gray-400 mb-1 px-1'>
          <span>Wallet ID</span>
          <span>Wallet Name</span>
          <span>Balance</span>
          <span>Account No</span>
          <span>Created</span>
        </div>
        {transactions.map((tx, i) => (
          <div
            key={i}
            className='grid grid-cols-5 gap-1 py-1 px-1 border-t border-gray-50 text-gray-600'
          >
            <span className='truncate'>{tx.id}</span>
            <span className='truncate'>{tx.wallet}</span>
            <span>{tx.amount}</span>
            <span>{tx.acc}</span>
            <span>{tx.date}</span>
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
