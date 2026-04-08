'use client';

import {
  CreditCard,
  Send,
  Building2,
  Webhook,
  Wallet,
  CheckCircle,
} from 'lucide-react';

const QuickStartGuide = () => {
  const collections = [
    {
      icon: CreditCard,
      title: 'Payment Collection',
      description: 'Accept payments from customers and get a checkout page',
      color: 'orange',
      endpoints: [
        {
          method: 'POST',
          path: '/transaction/init',
          purpose: 'Create a standard payment checkout',
          returns: 'Checkout URL for customer payment',
        },
        {
          method: 'POST',
          path: '/transaction/init-revenue-payment',
          purpose: 'Create government revenue payment',
          returns: 'Checkout URL for revenue collection',
        },
      ],
      keyFeatures: [
        'Generate unique checkout links',
        'Support for NGN, USD, GBP currencies',
        'Multiple payment channels (Card, Transfer, USSD)',
        'Automatic callback after payment',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Payment Verification',
      description: 'Verify and confirm payment status',
      color: 'blue',
      endpoints: [
        {
          method: 'GET',
          path: '/transaction/verify/:reference',
          purpose: 'Verify payment transaction status',
          returns: 'Complete transaction details and status',
        },
      ],
      keyFeatures: [
        'Real-time payment status',
        'Transaction amount and fees breakdown',
        'Payment channel information',
        'Settlement amount details',
      ],
    },
    {
      icon: Send,
      title: 'Payouts & Transfers',
      description: 'Send money to bank accounts (disbursements)',
      color: 'green',
      endpoints: [
        {
          method: 'POST',
          path: '/transaction/add-payout-recipient',
          purpose: 'Register a recipient for payouts',
          returns: 'Recipient code for future transfers',
        },
        {
          method: 'POST',
          path: '/transaction/init-payout',
          purpose: 'Send money to registered recipient',
          returns: 'Transfer confirmation and status',
        },
      ],
      keyFeatures: [
        'Transfer from wallet balance',
        'Recipient validation before payout',
        'Support for Nigerian banks',
        'Real-time transfer processing',
      ],
    },
    {
      icon: Building2,
      title: 'Bank Operations',
      description: 'Bank account verification and information',
      color: 'purple',
      endpoints: [
        {
          method: 'GET',
          path: '/config/bank-list',
          purpose: 'Get all supported banks',
          returns: 'List of banks with codes and names',
        },
        {
          method: 'POST',
          path: '/config/account-name-verify',
          purpose: 'Verify account name and number',
          returns: 'Account holder name verification',
        },
      ],
      keyFeatures: [
        'Real-time account name lookup',
        'Support for all Nigerian banks',
        'Bank code reference',
        'Account validation',
      ],
    },
    {
      icon: Webhook,
      title: 'Webhooks',
      description: 'Real-time payment notifications to your server',
      color: 'indigo',
      endpoints: [
        {
          method: 'POST',
          path: 'your-webhook-url',
          purpose: 'Receive payment event notifications',
          returns: 'Transaction updates in real-time',
        },
      ],
      keyFeatures: [
        'payment.success - Successful payments',
        'payment.failed - Failed transactions',
        'transfer.success - Successful payouts',
        'ApiKey signature validation',
      ],
    },
    {
      icon: Wallet,
      title: 'Wallet Management',
      description: 'Check your wallet balance and transactions',
      color: 'teal',
      endpoints: [
        {
          method: 'GET',
          path: '/wallet/wallet-balance',
          purpose: 'Get current wallet balance',
          returns: 'Available balance for payouts',
        },
      ],
      keyFeatures: [
        'Real-time balance check',
        'Available funds for transfers',
        'Transaction history access',
        'Multi-currency support',
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<
      string,
      { bg: string; text: string; border: string; icon: string }
    > = {
      orange: {
        bg: 'bg-orange-50',
        text: 'text-orange-600',
        border: 'border-orange-200',
        icon: 'text-orange-500',
      },
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        icon: 'text-blue-500',
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-600',
        border: 'border-green-200',
        icon: 'text-green-500',
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
        icon: 'text-purple-500',
      },
      indigo: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-600',
        border: 'border-indigo-200',
        icon: 'text-indigo-500',
      },
      teal: {
        bg: 'bg-teal-50',
        text: 'text-teal-600',
        border: 'border-teal-200',
        icon: 'text-teal-500',
      },
    };
    return colors[color] || colors.orange;
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'bg-blue-100 text-blue-700';
      case 'POST':
        return 'bg-yellow-100 text-yellow-700';
      case 'PUT':
        return 'bg-purple-100 text-purple-700';
      case 'DELETE':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className='bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 mb-4'>
            <div className='w-2 h-2 bg-orange-400 rounded-full'></div>
            <span className='text-orange-400 text-sm font-medium'>
              Quick Start Guide
            </span>
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
            API Collections by Use Case
          </h2>
          <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
            Everything you can build with 9thSwift API organized by
            functionality
          </p>
        </div>

        {/* Collections Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {collections.map((collection, index) => {
            const colors = getColorClasses(collection.color);
            const Icon = collection.icon;

            return (
              <div
                key={index}
                className={`border ${colors.border} ${colors.bg} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                {/* Icon and Title */}
                <div className='flex items-start gap-4 mb-4'>
                  <div
                    className={`p-3 rounded-lg bg-white border ${colors.border}`}
                  >
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-lg font-bold text-gray-900 mb-1'>
                      {collection.title}
                    </h3>
                    <p className='text-sm text-gray-600'>
                      {collection.description}
                    </p>
                  </div>
                </div>

                {/* Endpoints */}
                <div className='mb-4 space-y-3'>
                  <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
                    Endpoints
                  </h4>
                  {collection.endpoints.map((endpoint, idx) => (
                    <div
                      key={idx}
                      className='bg-white rounded-lg p-3 border border-gray-200'
                    >
                      <div className='flex items-center gap-2 mb-2'>
                        <span
                          className={`px-2 py-0.5 text-xs font-semibold rounded ${getMethodColor(
                            endpoint.method,
                          )}`}
                        >
                          {endpoint.method}
                        </span>
                        <code className='text-xs font-mono text-gray-700 break-all'>
                          {endpoint.path}
                        </code>
                      </div>
                      <p className='text-xs text-gray-600 mb-1'>
                        <span className='font-semibold'>Purpose:</span>{' '}
                        {endpoint.purpose}
                      </p>
                      <p className='text-xs text-gray-500'>
                        <span className='font-semibold'>Returns:</span>{' '}
                        {endpoint.returns}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Features */}
                <div>
                  <h4 className='text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2'>
                    Key Features
                  </h4>
                  <ul className='space-y-1.5'>
                    {collection.keyFeatures.map((feature, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-2 text-xs text-gray-700'
                      >
                        <span className={`${colors.text} shrink-0 mt-0.5`}>
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Getting Started Steps */}
        <div className='bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 border border-orange-200'>
          <h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
            How to Get Started
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white rounded-xl p-6 border border-orange-200'>
              <div className='w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4'>
                1
              </div>
              <h4 className='font-bold text-gray-900 mb-2'>Get Your API Key</h4>
              <p className='text-sm text-gray-600'>
                Sign up on the 9thSwift dashboard and get your secret API key
                from the settings
              </p>
            </div>
            <div className='bg-white rounded-xl p-6 border border-orange-200'>
              <div className='w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4'>
                2
              </div>
              <h4 className='font-bold text-gray-900 mb-2'>
                Choose Your Collection
              </h4>
              <p className='text-sm text-gray-600'>
                Pick the functionality you need - payments, payouts, or bank
                operations
              </p>
            </div>
            <div className='bg-white rounded-xl p-6 border border-orange-200'>
              <div className='w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4'>
                3
              </div>
              <h4 className='font-bold text-gray-900 mb-2'>
                Make Your First Call
              </h4>
              <p className='text-sm text-gray-600'>
                Use the code examples in the documentation to integrate the
                endpoints
              </p>
            </div>
          </div>
        </div>

        {/* Common Integration Patterns */}
        <div className='mt-12'>
          <h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
            Common Integration Patterns
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-white border border-gray-200 rounded-xl p-6'>
              <h4 className='font-bold text-gray-900 mb-3 flex items-center gap-2'>
                <span className='text-orange-500'>→</span>
                Accept Customer Payments
              </h4>
              <ol className='space-y-2 text-sm text-gray-700'>
                <li className='flex gap-2'>
                  <span className='font-semibold shrink-0'>1.</span>
                  <span>
                    Call{' '}
                    <code className='bg-gray-100 px-1 rounded text-xs'>
                      /transaction/init
                    </code>{' '}
                    to get checkout URL
                  </span>
                </li>
                <li className='flex gap-2'>
                  <span className='font-semibold shrink-0'>2.</span>
                  <span>Redirect customer to the checkout page</span>
                </li>
                <li className='flex gap-2'>
                  <span className='font-semibold shrink-0'>3.</span>
                  <span>Customer completes payment</span>
                </li>
                <li className='flex gap-2'>
                  <span className='font-semibold shrink-0'>4.</span>
                  <span>
                    Receive webhook notification OR verify with{' '}
                    <code className='bg-gray-100 px-1 rounded text-xs'>
                      /transaction/verify
                    </code>
                  </span>
                </li>
              </ol>
            </div>

            <div className='bg-white border border-gray-200 rounded-xl p-6'>
              <h4 className='font-bold text-gray-900 mb-3 flex items-center gap-2'>
                <span className='text-green-500'>→</span>
                Send Money (Payout)
              </h4>
              <ol className='space-y-2 text-sm text-gray-700'>
                <li className='flex gap-2'>
                  <span className='font-semibold shrink-0'>1.</span>
                  <span>
                    Get bank list with{' '}
                    <code className='bg-gray-100 px-1 rounded text-xs'>
                      /config/bank-list
                    </code>
                  </span>
                </li>
                <li className='flex gap-2'>
                  <span className='font-semibold shrink-0'>2.</span>
                  <span>
                    Verify account with{' '}
                    <code className='bg-gray-100 px-1 rounded text-xs'>
                      /config/account-name-verify
                    </code>
                  </span>
                </li>
                <li className='flex gap-2'>
                  <span className='font-semibold shrink-0'>3.</span>
                  <span>
                    Add recipient with{' '}
                    <code className='bg-gray-100 px-1 rounded text-xs'>
                      /add-payout-recipient
                    </code>
                  </span>
                </li>
                <li className='flex gap-2'>
                  <span className='font-semibold shrink-0'>4.</span>
                  <span>
                    Initiate transfer with{' '}
                    <code className='bg-gray-100 px-1 rounded text-xs'>
                      /init-payout
                    </code>
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStartGuide;
