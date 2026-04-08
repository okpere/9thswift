'use client';

import { useState } from 'react';
import { Copy, Check, Menu, X, Lock } from 'lucide-react';
import Logo from '@/app/_components/Logo';

const DocumentationContent = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const sidebarSections = [
    {
      title: 'Get Started',
      items: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'base-url', label: 'Base URL' },
        { id: 'authentication', label: 'Authentication' },
        { id: 'security', label: 'Security Measures' },
      ],
    },
    {
      title: 'Transactions',
      items: [
        { id: 'standard-checkout', label: 'Standard Checkout' },
        { id: 'initialize-transaction', label: 'Initialize Transaction' },
        { id: 'revenue-payment', label: 'Revenue Payment' },
        { id: 'usage-notes', label: 'Usage Notes' },
        { id: 'best-practices', label: 'Best Practices' },
        { id: 'verify-transaction', label: 'Verify Transaction' },
      ],
    },
    {
      title: 'Payout',
      items: [
        { id: 'add-payout-recipient', label: 'Add Payout Recipient' },
        { id: 'initiate-payout', label: 'Initiate Payout' },
      ],
    },
    {
      title: 'Bank',
      items: [
        { id: 'get-banks-list', label: 'Get Banks List' },
        { id: 'account-name-verification', label: 'Account Name Verification' },
      ],
    },
    {
      title: 'Webhooks',
      items: [
        { id: 'webhook-payload', label: 'Webhook Payload' },
        { id: 'webhook-event-types', label: 'Event Types' },
        { id: 'webhook-notes', label: 'Important Notes' },
      ],
    },
    {
      title: 'Wallet',
      items: [{ id: 'get-wallet-balance', label: 'Get Wallet Balance' }],
    },
    {
      title: 'Reference',
      items: [
        { id: 'payment-status', label: 'Payment Status' },
        { id: 'payment-channel', label: 'Payment Channel' },
        { id: 'payment-currency', label: 'Payment Currency' },
      ],
    },
  ];

  const codeExamples = {
    initTransaction: `curl --location -g '{{url}}/transaction/init' \\
--data-raw '{
  "reference": "MCD-12345667",
  "amount": 3000,
  "currency": "NGN",
  "callback_url": "https://www.google.com",
  "customer": {
    "payerName": "John Doe",
    "email": "john@gmail.com",
    "phoneNumber": "09088563125"
  }
}'`,
    revenuePayment: `curl --location -g '{{url}}/transaction/init-revenue-payment' \\
--data-raw '{
  "reference": "GLOB-KLLK9XCFGRGA",
  "amount": 200,
  "currency": "NGN",
  "revenueCode": "ENUG60123",
  "taxPayerNumber": "2019873451",
  "callback_url": "https://www.google.com",
  "customer": {
    "payerName": "John Doe",
    "email": "o.ayomikun83@gmail.com",
    "phoneNumber": "09088563125"
  }
}'`,
    verifyTransaction: `curl --location -g '{{url}}/transaction/verify/MCD-00345667'`,
    addPayoutRecipient: `curl --location -g '{{url}}/transaction/add-payout-recipient' \\
--data '{
  "type": "nuban",
  "name": "Oloyede Chizorom",
  "accountNumber": "8104656733",
  "bankCode": "305",
  "bankName": "PAYCOM (OPAY)",
  "currency": "NGN"
}'`,
    initiatePayout: `curl --location -g '{{url}}/transaction/init-payout' \\
--data '{
  "source": "wallet",
  "recipientCode": "SW-JTEQBHESCV-RECIPIENT",
  "reason": "Vendor 2 withdwal",
  "amount": 500,
  "reference": "UIOUV-980L980",
  "currency": "NGN"
}'`,
    getBanksList: `curl --location -g '{{url}}/config/bank-list'`,
    getWalletBalance: `curl --location -g '{{url}}/wallet/wallet-balance'`,
  };

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsDrawerOpen(false);

    // Scroll to the section smoothly
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Sidebar content component
  const SidebarContent = () => (
    <>
      {sidebarSections.map((section) => (
        <div key={section.title} className='mb-8'>
          <h3 className='font-bold text-gray-900 mb-4'>{section.title}</h3>
          <ul className='space-y-2'>
            {section.items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleSectionClick(item.id)}
                  className={`text-sm w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-orange-100 text-orange-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );

  return (
    <div className='flex min-h-screen px-0 bg-gray-50 overflow-hidden relative'>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className='lg:hidden fixed bottom-6 right-6 z-40 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all hover:scale-110'
        aria-label='Open menu'
      >
        <Menu className='w-6 h-6' />
      </button>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300'
          onClick={() => setIsDrawerOpen(false)}
          aria-label='Close menu overlay'
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-4'>
          {/* Close Button */}
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-lg font-bold text-gray-900'>Documentation</h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
              aria-label='Close menu'
            >
              <X className='w-5 h-5 text-gray-600' />
            </button>
          </div>
          <SidebarContent />
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside className='w-56 xl:w-64 bg-white border-r border-gray-200 p-4 xl:p-6 sticky top-0 h-screen overflow-y-auto hidden lg:block'>
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-4 sm:p-6 lg:p-12 max-w-full lg:max-w-5xl overflow-hidden'>
        {/* Header */}
        <div className='mb-8 pb-6 border-b border-gray-200'>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-2'>
            9TH SWIFT STANDARD API CHECKOUT
          </h1>
        </div>

        {/* Introduction Section */}
        <section
          id='introduction'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <div className='mb-6'>
            <Logo
              width={40}
              height={40}
              showText
              textClassName='text-xl font-bold'
            />
          </div>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>
            Welcome to the 9thSwift Payment Gateway API
          </h2>
          <p className='text-sm sm:text-base text-gray-700 leading-relaxed mb-4'>
            The <span className='font-semibold'>9thSwift API</span> provides a
            secure and reliable way to integrate payments, payouts, and bill
            payments into your applications.
          </p>
          <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
            All requests to the API must be authenticated and transmitted over
            HTTPS to ensure data integrity and security.
          </p>
        </section>

        {/* Base URL Section */}
        <section
          id='base-url'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>
            Base URL
          </h2>
          <div className='bg-gray-900 rounded-lg p-4 overflow-x-auto'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-xs sm:text-sm text-gray-400'>bash</span>
              <button
                onClick={() =>
                  handleCopy('https://server.9thswift.com/api/v1', 'base-url')
                }
                className='text-gray-400 hover:text-white transition-colors'
              >
                {copiedCode === 'base-url' ? (
                  <Check className='w-4 h-4' />
                ) : (
                  <Copy className='w-4 h-4' />
                )}
              </button>
            </div>
            <code className='text-sm text-red-400 font-mono'>
              https://server.9thswift.com/api/v1
            </code>
          </div>
        </section>

        {/* Authentication Section */}
        <section
          id='authentication'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>
            Authentication
          </h2>
          <p className='text-sm sm:text-base text-gray-700 mb-6'>
            To interact with the API, you need to include the following headers
            in your requests:
          </p>

          <div className='space-y-6'>
            {/* Authorization Header */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                1. Authorization Header
              </h3>
              <ul className='list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4'>
                <li>
                  Pass your{' '}
                  <span className='font-mono bg-gray-100 px-2 py-0.5 rounded'>
                    secret key
                  </span>{' '}
                  as a Bearer token.
                </li>
                <li>
                  Example:{' '}
                  <span className='font-mono bg-gray-100 px-2 py-0.5 rounded text-xs'>
                    Authorization: Bearer your_secret_key
                  </span>
                </li>
              </ul>
            </div>

            {/* Encryption Header */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                2. Encryption Header (HMAC Signature)
              </h3>
              <ul className='list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4'>
                <li>
                  Required only for{' '}
                  <span className='font-semibold'>Payouts</span> and{' '}
                  <span className='font-semibold'>Bill Payments</span>.
                </li>
                <li>
                  Signatures are generated using{' '}
                  <span className='font-mono bg-gray-100 px-2 py-0.5 rounded'>
                    HMAC-SHA512
                  </span>
                  , applied to the request payload, and signed with your API
                  key.
                </li>
                <li>
                  This ensures the request payload has not been altered during
                  transmission.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Security Measures Section */}
        <section
          id='security'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6'>
            Security Measures
          </h2>

          <div className='space-y-6'>
            {/* Signature Authentication */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2'>
                <Lock className='w-5 h-5 text-orange-500' />
                Signature Authentication
              </h3>
              <ul className='list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-8'>
                <li>Provides secure request validation.</li>
                <li>
                  Ensures both authenticity and integrity of your payload.
                </li>
              </ul>
            </div>

            {/* IP Whitelisting */}
            <div>
              <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2'>
                <Lock className='w-5 h-5 text-orange-500' />
                IP Whitelisting
              </h3>
              <ul className='list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-8'>
                <li>
                  As part of our firewall security, you must set your{' '}
                  <span className='font-semibold'>TEST</span> and{' '}
                  <span className='font-semibold'>LIVE IPs</span> on your
                  dashboard before making requests.
                </li>
                <li>Only whitelisted IPs will be allowed to access the API.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Transactions Header */}
        <div className='mb-8 pb-4 border-b border-gray-300'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
            TRANSACTIONS
          </h2>
        </div>

        {/* Standard Checkout Section */}
        <section
          id='standard-checkout'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4'>
            Standard Checkout
          </h2>
          <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
            The Transactions API allows you to create and manage payments on
            your integration.
          </p>
        </section>

        {/* Initialize Transaction Section */}
        <section
          id='initialize-transaction'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <div className='flex items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded'>
              POST
            </span>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900'>
              INITIALIZE TRANSACTION
            </h3>
            <Lock className='w-4 h-4 text-gray-400' />
          </div>

          <p className='text-sm text-gray-600 mb-4'>
            <span className='font-mono bg-gray-100 px-2 py-1 rounded text-xs'>
              &#123;&#123;url&#125;&#125;/transaction/init
            </span>
          </p>

          <p className='text-sm sm:text-base text-gray-700 mb-6 leading-relaxed'>
            Initialize a transaction from your backend.
          </p>

          <h4 className='text-base font-semibold text-gray-900 mb-3'>
            Endpoint: /transaction/init
          </h4>

          {/* Header Parameters */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>Header</h5>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border border-gray-200 rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Param
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Type
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Required?
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      authorization
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Set value to{' '}
                      <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                        Bearer SECRET_KEY
                      </span>
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      content-type
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Set value to{' '}
                      <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                        application/json
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Parameters */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Parameters
            </h5>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border border-gray-200 rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Param
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Type
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Required?
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>amount</td>
                    <td className='px-4 py-3 text-gray-600'>number</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Amount you are debiting customer.
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>currency</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Currency charge should be performed in. Allowed values
                      are: NGN, USD or GBP. It defaults to your integration
                      currency.
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>reference</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Unique case sensitive transaction reference. Only -,_,=
                      and alphanumeric characters allowed.
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      callback_url
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-gray-500'>No</td>
                    <td className='px-4 py-3 text-gray-600'>
                      Function that redirects user after payment completion.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Example Request */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Request
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>curl</span>
                <button
                  onClick={() =>
                    handleCopy(codeExamples.initTransaction, 'init-transaction')
                  }
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {copiedCode === 'init-transaction' ? (
                    <Check className='w-4 h-4' />
                  ) : (
                    <Copy className='w-4 h-4' />
                  )}
                </button>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono whitespace-pre'>
                  {codeExamples.initTransaction}
                </code>
              </pre>
            </div>
          </div>

          {/* Example Response */}
          <div>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Response
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>json</span>
                <span className='text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded'>
                  200 OK
                </span>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono'>
                  {`{
  "status": "success",
  "message": "Invoice created successfully",
  "data": {
    "statusCode": "00",
    "data": {
      "checkout": "https://staging.9thswift.com/mepvwkmf-SW-ESHI",
      "accessCode": "mepvwkmf-SW-EGoHJylSWS",
      "reference": "MCD-12345667"
    }
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Initialize Revenue Payment Section */}
        <section
          id='revenue-payment'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <div className='flex items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded'>
              POST
            </span>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900'>
              INITIALIZE REVENUE TRANSACTION
            </h3>
            <Lock className='w-4 h-4 text-gray-400' />
          </div>

          <p className='text-sm text-gray-600 mb-4'>
            <span className='font-mono bg-gray-100 px-2 py-1 rounded text-xs'>
              &#123;&#123;url&#125;&#125;/transaction/init-revenue-payment
            </span>
          </p>

          <p className='text-sm sm:text-base text-gray-700 mb-6 leading-relaxed'>
            This endpoint initializes a revenue payment transaction and creates
            an invoice for government revenue collection. Upon successful
            initialization, it returns a checkout URL where the payer can
            complete the payment.
          </p>

          {/* Request Body Parameters */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Request Body Parameters
            </h5>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border border-gray-200 rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Parameter
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Type
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Required
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>reference</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Unique transaction reference identifier (e.g.,
                      "GLOB-KLLK9XCFGRGA"). Must be unique for each transaction.
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>amount</td>
                    <td className='px-4 py-3 text-gray-600'>number</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Transaction amount in the smallest currency unit (e.g.,
                      200 for NGN 2.00 or ₦200 depending on implementation).
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>currency</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Three-letter ISO currency code (e.g., "NGN" for Nigerian
                      Naira).
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>revenueCode</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Government revenue code identifier (e.g., "ENUG60123").
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      taxPayerNumber
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Tax identification number of the payer (e.g.,
                      "2019873451").
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      callback_url
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-gray-500'>No</td>
                    <td className='px-4 py-3 text-gray-600'>
                      URL to redirect the user after payment completion.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Example Request */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Request
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>curl</span>
                <button
                  onClick={() =>
                    handleCopy(codeExamples.revenuePayment, 'revenue-payment')
                  }
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {copiedCode === 'revenue-payment' ? (
                    <Check className='w-4 h-4' />
                  ) : (
                    <Copy className='w-4 h-4' />
                  )}
                </button>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono whitespace-pre'>
                  {codeExamples.revenuePayment}
                </code>
              </pre>
            </div>
          </div>

          {/* Example Response */}
          <div>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Response
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>json</span>
                <span className='text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded'>
                  200 OK
                </span>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono'>
                  {`{
  "status": "success",
  "message": "Invoice created successfully",
  "data": {
    "statusCode": "00",
    "data": {
      "checkout": "https://checkout.9thswift.com/MLNGP00V-SW-G-SHYPCJBW",
      "accessCode": "MLNGP00V-SW-G-SHYPCJBW",
      "reference": "GLOB-KLLK9XCFGRGA"
    }
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Usage Notes Section */}
        <section
          id='usage-notes'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-6'>
            Usage Notes
          </h2>
          <ol className='space-y-4 text-sm sm:text-base text-gray-700'>
            <li className='flex gap-3'>
              <span className='font-semibold shrink-0'>1.</span>
              <div>
                <span className='font-semibold'>Unique References:</span> Always
                generate a unique reference for each transaction to avoid
                conflicts.
              </div>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold shrink-0'>2.</span>
              <div>
                <span className='font-semibold'>Amount Format:</span> Verify the
                amount format with your implementation - confirm whether amounts
                are in kobo/cents or the base currency unit.
              </div>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold shrink-0'>3.</span>
              <div>
                <span className='font-semibold'>Revenue Codes:</span> Ensure you
                have the correct revenue code from the government authority
                before initiating transactions.
              </div>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold shrink-0'>4.</span>
              <div>
                <span className='font-semibold'>Callback URL:</span> The
                callback URL must be publicly accessible to receive payment
                status webhooks.
              </div>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold shrink-0'>5.</span>
              <div>
                <span className='font-semibold'>Checkout Flow:</span> After
                receiving the response, redirect the customer to the{' '}
                <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                  checkout
                </span>{' '}
                URL to complete payment.
              </div>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold shrink-0'>6.</span>
              <div>
                <span className='font-semibold'>Transaction Tracking:</span>{' '}
                Store the{' '}
                <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                  accessCode
                </span>{' '}
                and{' '}
                <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                  reference
                </span>{' '}
                for transaction verification and reconciliation.
              </div>
            </li>
          </ol>
        </section>

        {/* Best Practices Section */}
        <section
          id='best-practices'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-6'>
            Best Practices
          </h2>
          <ul className='space-y-3 text-sm sm:text-base text-gray-700'>
            <li className='flex gap-3'>
              <span className='text-orange-500 shrink-0'>•</span>
              <span>
                Validate all customer information before submitting the request
              </span>
            </li>
            <li className='flex gap-3'>
              <span className='text-orange-500 shrink-0'>•</span>
              <span>
                Implement proper error handling for failed initialization
                attempts
              </span>
            </li>
            <li className='flex gap-3'>
              <span className='text-orange-500 shrink-0'>•</span>
              <span>
                Use HTTPS for callback URLs to ensure secure webhook delivery
              </span>
            </li>
            <li className='flex gap-3'>
              <span className='text-orange-500 shrink-0'>•</span>
              <span>
                Log transaction references for audit trails and customer support
              </span>
            </li>
            <li className='flex gap-3'>
              <span className='text-orange-500 shrink-0'>•</span>
              <span>
                Consider implementing idempotency checks using the reference
                field
              </span>
            </li>
          </ul>
        </section>

        {/* Verify Transaction Section */}
        <section
          id='verify-transaction'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <div className='flex items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded'>
              GET
            </span>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900'>
              VERIFY TRANSACTION
            </h3>
            <Lock className='w-4 h-4 text-gray-400' />
          </div>

          <p className='text-sm text-gray-600 mb-4'>
            <span className='font-mono bg-gray-100 px-2 py-1 rounded text-xs'>
              &#123;&#123;url&#125;&#125;/transaction/verify/:reference
            </span>
          </p>

          <p className='text-sm sm:text-base text-gray-700 mb-6 leading-relaxed'>
            The Transactions API allows you to verify payments on your
            integration.
          </p>

          <h4 className='text-base font-semibold text-gray-900 mb-3'>
            Endpoint: /transaction/verify/:reference
          </h4>
          <p className='text-sm text-gray-600 mb-6'>Method: GET</p>

          {/* Path Variables */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Path Variables
            </h5>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border border-gray-200 rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Param
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Type
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Required?
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>reference</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Payment reference id
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Header Parameters */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>Header</h5>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border border-gray-200 rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Param
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Type
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Required?
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      authorization
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Set value to{' '}
                      <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                        Bearer SECRET_KEY
                      </span>
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      content-type
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Set value to{' '}
                      <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                        application/json
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Example Request */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Request
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>curl</span>
                <button
                  onClick={() =>
                    handleCopy(
                      codeExamples.verifyTransaction,
                      'verify-transaction',
                    )
                  }
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {copiedCode === 'verify-transaction' ? (
                    <Check className='w-4 h-4' />
                  ) : (
                    <Copy className='w-4 h-4' />
                  )}
                </button>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono whitespace-pre'>
                  {codeExamples.verifyTransaction}
                </code>
              </pre>
            </div>
          </div>

          {/* Example Response */}
          <div>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Response
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>json</span>
                <span className='text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded'>
                  200 OK
                </span>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono'>
                  {`{
  "status": "success",
  "message": "Invoice verified successfully",
  "data": {
    "statusCode": "00",
    "data": {
      "reference": "MCD-00345667",
      "status": "success",
      "amount": 307.5,
      "settledAmount": 300,
      "feeCharged": 7.5,
      "currency": "NGN",
      "channel": "card",
      "customerEmail": "customer@email.com"
    }
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Payout Header */}
        <div className='mb-8 pb-4 border-b border-gray-300'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
            PAYOUT
          </h2>
        </div>

        {/* Add Payout Recipient Section */}
        <section
          id='add-payout-recipient'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <div className='flex items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded'>
              POST
            </span>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900'>
              ADD PAYOUT RECIPIENT
            </h3>
            <Lock className='w-4 h-4 text-gray-400' />
          </div>

          <p className='text-sm text-gray-600 mb-4'>
            <span className='font-mono bg-gray-100 px-2 py-1 rounded text-xs'>
              &#123;&#123;url&#125;&#125;/transaction/add-payout-recipient
            </span>
          </p>

          <p className='text-sm sm:text-base text-gray-700 mb-6 leading-relaxed'>
            The API allows you to create recipient for payout.
          </p>

          <div className='mb-4'>
            <h4 className='text-base font-semibold text-gray-900'>
              Add payout Recipient
            </h4>
          </div>

          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
            <p className='text-sm text-blue-900'>
              <span className='font-semibold'>Note:</span> after successful
              creation, this end point will return a 'recipientCode' which will
              be part of the payload when requesting for a payout
            </p>
          </div>

          <p className='text-sm text-gray-600 mb-4'>
            Endpoint: /transaction/add-payout-recipient
          </p>
          <p className='text-sm text-gray-600 mb-6'>
            Method: <span className='font-semibold'>POST</span>
          </p>

          {/* Header Parameters */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>Header</h5>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border border-gray-200 rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Param
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Type
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Required?
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      authorization
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Set value to{' '}
                      <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                        Bearer SECRET_KEY
                      </span>
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      content-type
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Set value to{' '}
                      <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                        application/json
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Parameters */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Parameters
            </h5>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border border-gray-200 rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Param
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Type
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Required?
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>type</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Recipient type (e.g., "nuban")
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>name</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>Recipient name</td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      accountNumber
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Bank account number
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>bankCode</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>Bank code</td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>bankName</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>Bank name</td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>currency</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Currency charge should be performed in. Allowed values
                      are: NGN, USD or GBP. It defaults to your integration
                      currency.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Example Request */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Request
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>curl</span>
                <button
                  onClick={() =>
                    handleCopy(
                      codeExamples.addPayoutRecipient,
                      'add-payout-recipient',
                    )
                  }
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {copiedCode === 'add-payout-recipient' ? (
                    <Check className='w-4 h-4' />
                  ) : (
                    <Copy className='w-4 h-4' />
                  )}
                </button>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono whitespace-pre'>
                  {codeExamples.addPayoutRecipient}
                </code>
              </pre>
            </div>
          </div>

          {/* Example Response */}
          <div>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Response
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>json</span>
                <span className='text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded'>
                  200 OK
                </span>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono'>
                  {`{
  "status": "success",
  "message": "Invoice created successfully",
  "data": {
    "statusCode": "00",
    "data": {
      "recipientCode": "SW-JTEQBHESCV-RECIPIENT"
    }
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Initiate Payout Section */}
        <section
          id='initiate-payout'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <div className='flex items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded'>
              POST
            </span>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900'>
              INITIATE PAYOUT
            </h3>
            <Lock className='w-4 h-4 text-gray-400' />
          </div>

          <p className='text-sm text-gray-600 mb-4'>
            <span className='font-mono bg-gray-100 px-2 py-1 rounded text-xs'>
              &#123;&#123;url&#125;&#125;/transaction/init-payout
            </span>
          </p>

          <p className='text-sm sm:text-base text-gray-700 mb-6 leading-relaxed'>
            The API allows you to create recipient for payout.
          </p>

          <div className='mb-4'>
            <h4 className='text-base font-semibold text-gray-900'>
              Add payout Recipient
            </h4>
          </div>

          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
            <p className='text-sm text-blue-900'>
              <span className='font-semibold'>Note:</span> after successful
              creation, this end point will return a 'recipientCode' which will
              be part of the payload when requesting for a payout
            </p>
          </div>

          <p className='text-sm text-gray-600 mb-4'>
            Endpoint: /transaction/add-payout-recipient
          </p>
          <p className='text-sm text-gray-600 mb-6'>
            Method: <span className='font-semibold'>POST</span>
          </p>

          {/* Header Parameters */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>Header</h5>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border border-gray-200 rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Param
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Type
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Required?
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      authorization
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Set value to{' '}
                      <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                        Bearer SECRET_KEY
                      </span>
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      content-type
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Set value to{' '}
                      <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                        application/json
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Parameters */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Parameters
            </h5>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border border-gray-200 rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Param
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Type
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Required?
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>source</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Payout source (e.g., "wallet")
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>
                      recipientCode
                    </td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Recipient code from payout recipient creation
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>reason</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Reason for payout
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>amount</td>
                    <td className='px-4 py-3 text-gray-600'>number</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>Payout amount</td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>reference</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Unique transaction reference
                    </td>
                  </tr>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>currency</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Currency charge should be performed in. Allowed values
                      are: NGN, USD or GBP. It defaults to your integration
                      currency.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Example Request */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Request
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>curl</span>
                <button
                  onClick={() =>
                    handleCopy(codeExamples.initiatePayout, 'initiate-payout')
                  }
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {copiedCode === 'initiate-payout' ? (
                    <Check className='w-4 h-4' />
                  ) : (
                    <Copy className='w-4 h-4' />
                  )}
                </button>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono whitespace-pre'>
                  {codeExamples.initiatePayout}
                </code>
              </pre>
            </div>
          </div>

          {/* Example Response */}
          <div>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Response
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>json</span>
                <span className='text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded'>
                  200 OK
                </span>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono'>
                  {`{
  "status": "success",
  "message": "Transfer successfully logged and Processing",
  "data": {
    "statusCode": "00"
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Bank Header */}
        <div className='mb-8 pb-4 border-b border-gray-300'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>BANK</h2>
        </div>

        {/* Get Banks List Section */}
        <section
          id='get-banks-list'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <div className='flex items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded'>
              GET
            </span>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900'>
              GET BANKS LIST
            </h3>
            <Lock className='w-4 h-4 text-gray-400' />
          </div>

          <p className='text-sm text-gray-600 mb-6'>
            <span className='font-mono bg-gray-100 px-2 py-1 rounded text-xs'>
              &#123;&#123;url&#125;&#125;/config/bank-list
            </span>
          </p>

          {/* Authorization */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              AUTHORIZATION{' '}
              <span className='text-gray-500 font-normal'>Bearer Token</span>
            </h5>
            <div className='bg-gray-50 rounded-lg p-4 border border-gray-200'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-600'>Token</span>
                <span className='text-xs font-mono text-gray-500'>
                  &#123;&#123;SECRET-KEY&#125;&#125;
                </span>
              </div>
            </div>
          </div>

          {/* Example Request */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Request
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>curl</span>
                <button
                  onClick={() =>
                    handleCopy(codeExamples.getBanksList, 'get-banks-list')
                  }
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {copiedCode === 'get-banks-list' ? (
                    <Check className='w-4 h-4' />
                  ) : (
                    <Copy className='w-4 h-4' />
                  )}
                </button>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono whitespace-pre'>
                  {codeExamples.getBanksList}
                </code>
              </pre>
            </div>
          </div>

          {/* Example Response */}
          <div>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Response
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>json</span>
                <span className='text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded'>
                  200 OK
                </span>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono'>
                  {`{
  "status": "success",
  "message": "Bank list retrieved",
  "data": {
    "statusCode": "00",
    "currency": "NGN",
    "banks": [
      {
        "bankName": "7B FINANCE COMPANY LIMITED",
        "bankCode": "110072",
        "logoUrl": "https://cdn.buildwithcedar.com/356/3830/283b1ss.png"
      }
    ]
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Account Name Verification Section */}
        <section
          id='account-name-verification'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <div className='flex items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded'>
              POST
            </span>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900'>
              ACCOUNT NAME VERIFICATION
            </h3>
            <Lock className='w-4 h-4 text-gray-400' />
          </div>

          <p className='text-sm text-gray-600 mb-6'>
            <span className='font-mono bg-gray-100 px-2 py-1 rounded text-xs'>
              &#123;&#123;url&#125;&#125;/config/account-name-verify
            </span>
          </p>

          {/* Authorization */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              AUTHORIZATION{' '}
              <span className='text-gray-500 font-normal'>Bearer Token</span>
            </h5>
            <div className='bg-gray-50 rounded-lg p-4 border border-gray-200'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-600'>Token</span>
                <span className='text-xs font-mono text-gray-500'>
                  &#123;&#123;SECRET-KEY&#125;&#125;
                </span>
              </div>
            </div>
          </div>

          <p className='text-sm text-gray-700 mb-4'>
            This endpoint allows you to verify account name and number for bank
            accounts.
          </p>
        </section>

        {/* Webhooks Header */}
        <div className='mb-8 pb-4 border-b border-gray-300'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
            WEBHOOKS
          </h2>
        </div>

        {/* Webhook Payload Section */}
        <section
          id='webhook-payload'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <div className='flex items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded'>
              POST
            </span>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900'>
              WEBHOOK PAYLOAD TO EXPECT
            </h3>
          </div>

          <p className='text-sm text-gray-600 mb-4'>
            <span className='font-mono bg-gray-100 px-2 py-1 rounded text-xs'>
              your-web-hook-url
            </span>
          </p>

          <div className='mb-6'>
            <h4 className='text-base font-semibold text-gray-900 mb-2'>
              WEBHOOK PAYLOAD TO EXPECT
            </h4>
            <p className='text-sm text-gray-700 mb-2'>
              Endpoint:{' '}
              <span className='font-mono bg-gray-100 px-2 py-0.5 rounded text-xs'>
                your-web-hook-url
              </span>
            </p>
            <p className='text-sm text-gray-700 mb-4'>
              Method: <span className='font-semibold'>POST</span>
            </p>
            <p className='text-sm text-gray-700 leading-relaxed mb-4'>
              The webhook service allows real-time communication of transaction
              notifications between your system and ours. you can receive
              transaction details promptly, enabling you to process them
              efficiently within your application.
            </p>
          </div>

          {/* Webhook URL */}
          <div className='mb-6'>
            <h5 className='text-base font-semibold text-gray-900 mb-3'>
              Webhook URL
            </h5>
            <p className='text-sm text-gray-700 mb-2'>
              You can add you webhook url from your dashboard. Example :
            </p>
            <div className='bg-gray-50 rounded-lg p-3 border border-gray-200'>
              <code className='text-sm text-orange-600 font-mono'>
                https://api.yourdomain.com/webhook
              </code>
            </div>
          </div>

          {/* Signature Validation */}
          <div className='mb-6'>
            <h5 className='text-base font-semibold text-gray-900 mb-3'>
              Signature validation
            </h5>
            <p className='text-sm text-gray-700 mb-4'>
              Events sent from 9thSwift carries{' '}
              <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                ApiKey
              </span>{' '}
              header . The value of this header is your api key. Verifying the
              header signature should be done before processing the event. See
              code sample below
            </p>

            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>javascript</span>
                <button
                  onClick={() =>
                    handleCopy(
                      `const apiKey = process.env.SECRET_KEY;
app.post('/my/webhook/url', function(req, res) {
  //validate event
  const signature = req.header('ApiKey').replace('ApiKey ', '');
  if (!signature || (signature !== apiKey)) {
    throw new Error('Webhook notification not from 9th Swift');
  }
  
  // Retrieve the request's body
  const event = req.body;
  // Do something with event
});`,
                      'webhook-signature',
                    )
                  }
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {copiedCode === 'webhook-signature' ? (
                    <Check className='w-4 h-4' />
                  ) : (
                    <Copy className='w-4 h-4' />
                  )}
                </button>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono'>
                  {`const apiKey = process.env.SECRET_KEY;
app.post('/my/webhook/url', function(req, res) {
  //validate event
  const signature = req.header('ApiKey').replace('ApiKey ', '');
  if (!signature || (signature !== apiKey)) {
    throw new Error('Webhook notification not from 9th Swift');
  }
  
  // Retrieve the request's body
  const event = req.body;
  // Do something with event
});`}
                </code>
              </pre>
            </div>
          </div>

          {/* Example Webhook Payload */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Request
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>curl</span>
                <button
                  onClick={() =>
                    handleCopy(
                      `curl --location 'your-web-hook-url' \\
--data-raw '{
  "id": "\\"67ec7641416a8374c865a167\\"",
  "type": "\\"payment.success\\"",
  "created": "\\"2025-09-03T10:40:18.742+00:00\\"",
  "data": {
    "reference": "\\"MFNRCBW0-SW-AFHJTTSA-M\\"",
    "status": "\\"success\\"",
    "amount": 1025,
    "settledAmount": 1000,
    "chargedFee": 25
  }
}'`,
                      'webhook-example',
                    )
                  }
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {copiedCode === 'webhook-example' ? (
                    <Check className='w-4 h-4' />
                  ) : (
                    <Copy className='w-4 h-4' />
                  )}
                </button>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono'>
                  {`curl --location 'your-web-hook-url' \\
--data-raw '{
  "id": "67ec7641416a8374c865a167",
  "type": "payment.success",
  "created": "2025-09-03T10:40:18.742+00:00",
  "data": {
    "reference": "MFNRCBW0-SW-AFHJTTSA-M",
    "status": "success",
    "amount": 1025,
    "settledAmount": 1000,
    "chargedFee": 25
  }
}'`}
                </code>
              </pre>
            </div>
          </div>

          {/* Body raw (text) */}
          <div>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Body raw (text)
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>json</span>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono'>
                  {`{
  "id": "67ec7641416a8374c865a167",
  "type": "payment.success",
  "created": "2025-09-03T10:40:18.742+00:00",
  "data": {
    "reference": "MFNRCBW0-SW-AFHJTTSA-M",
    "status": "success",
    "amount": 1025,
    "settledAmount": 1000,
    "chargedFee": 25
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section
          id='webhook-event-types'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>
            EventType
          </h3>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border border-gray-200 rounded-lg'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-4 py-3 text-left font-semibold text-gray-700'>
                    EventType
                  </th>
                  <th className='px-4 py-3 text-left font-semibold text-gray-700'>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>
                    payment.success
                  </td>
                  <td className='px-4 py-3 text-gray-600'>
                    Successful Transaction for all channels
                  </td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>
                    payment.failed
                  </td>
                  <td className='px-4 py-3 text-gray-600'>
                    Failed Transaction for channels
                  </td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>
                    payment.pending
                  </td>
                  <td className='px-4 py-3 text-gray-600'>
                    Pending Transaction for all channels
                  </td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>
                    transfer.success
                  </td>
                  <td className='px-4 py-3 text-gray-600'>
                    Successful Payout Transfer
                  </td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>
                    transfer.failed
                  </td>
                  <td className='px-4 py-3 text-gray-600'>
                    Failed Payout Transfer
                  </td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>
                    refund.processed
                  </td>
                  <td className='px-4 py-3 text-gray-600'>Processing Refund</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Important Notes Section */}
        <section
          id='webhook-notes'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>
            Here are some points to take notes
          </h3>
          <ol className='space-y-3 text-sm sm:text-base text-gray-700'>
            <li className='flex gap-3'>
              <span className='font-semibold shrink-0'>1.</span>
              <span>
                Add the webhook URL on your{' '}
                <span className='font-semibold text-orange-600'>
                  9thSwift dashboard
                </span>
              </span>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold shrink-0'>2.</span>
              <span>
                Ensure your webhook URL is publicly available (localhost URLs
                cannot receive events)
              </span>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold shrink-0'>3.</span>
              <span>
                Test your webhook to ensure you&apos;re getting the JSON body
                and returning a{' '}
                <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                  200 OK
                </span>{' '}
                HTTP response
              </span>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold shrink-0'>4.</span>
              <span>
                If your webhook function has long-running tasks, you should
                first acknowledge receiving the webhook by returning a{' '}
                <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                  200 OK
                </span>{' '}
                before proceeding with the long-running tasks
              </span>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold shrink-0'>5.</span>
              <span>
                If we don&apos;t get a{' '}
                <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                  200 OK
                </span>{' '}
                HTTP response from your webhooks, we flagged it as a failed
                attempt
              </span>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold shrink-0'>6.</span>
              <span>
                If we are unable to deliver webhook to you, there is an api to
                re call failed webhook notification.
              </span>
            </li>
          </ol>
        </section>

        {/* Wallet Header */}
        <div className='mb-8 pb-4 border-b border-gray-300'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
            WALLET
          </h2>
        </div>

        {/* Get Wallet Balance Section */}
        <section
          id='get-wallet-balance'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <div className='flex items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded'>
              GET
            </span>
            <h3 className='text-lg sm:text-xl font-bold text-gray-900'>
              GET WALLET BALANCE
            </h3>
            <Lock className='w-4 h-4 text-gray-400' />
          </div>

          <p className='text-sm text-gray-600 mb-6'>
            <span className='font-mono bg-gray-100 px-2 py-1 rounded text-xs'>
              &#123;&#123;url&#125;&#125;/wallet/wallet-balance
            </span>
          </p>

          <div className='mb-6'>
            <h4 className='text-base font-semibold text-gray-900 mb-3'>
              Verify Payment
            </h4>
            <p className='text-sm text-gray-700 mb-4'>
              The Transactions API allows you to verify payments on your
              integration
            </p>
            <p className='text-sm text-gray-600 mb-2'>
              Endpoint:{' '}
              <span className='font-mono bg-gray-100 px-1 rounded text-xs'>
                /transaction/verify/:reference
              </span>
            </p>
            <p className='text-sm text-gray-600 mb-4'>Method: GET</p>
          </div>

          {/* Authorization */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              AUTHORIZATION{' '}
              <span className='text-gray-500 font-normal'>Bearer Token</span>
            </h5>
            <div className='bg-gray-50 rounded-lg p-4 border border-gray-200'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-600'>Token</span>
                <span className='text-xs font-mono text-gray-500'>
                  &#123;&#123;BUSINESS-SECRET-KEY&#125;&#125;
                </span>
              </div>
            </div>
          </div>

          {/* Parameter */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Parameter
            </h5>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border border-gray-200 rounded-lg'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Param
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Type
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Required?
                    </th>
                    <th className='px-4 py-2 text-left font-semibold text-gray-700'>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t border-gray-200'>
                    <td className='px-4 py-3 font-mono text-xs'>reference</td>
                    <td className='px-4 py-3 text-gray-600'>string</td>
                    <td className='px-4 py-3 text-green-600 font-semibold'>
                      Yes
                    </td>
                    <td className='px-4 py-3 text-gray-600'>
                      Payment refrence id
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Example Request */}
          <div className='mb-6'>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Request
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>curl</span>
                <button
                  onClick={() =>
                    handleCopy(codeExamples.getWalletBalance, 'wallet-balance')
                  }
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  {copiedCode === 'wallet-balance' ? (
                    <Check className='w-4 h-4' />
                  ) : (
                    <Copy className='w-4 h-4' />
                  )}
                </button>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono whitespace-pre'>
                  {codeExamples.getWalletBalance}
                </code>
              </pre>
            </div>
          </div>

          {/* Example Response */}
          <div>
            <h5 className='text-sm font-semibold text-gray-900 mb-3'>
              Example Response
            </h5>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-4 py-2 bg-gray-800'>
                <span className='text-xs text-gray-400'>json</span>
                <span className='text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded'>
                  200 OK
                </span>
              </div>
              <pre className='p-4 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono'>
                  {`{
  "status": "success",
  "message": "Wallet balance retrieved successfully",
  "data": {
    "statusCode": "00"
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Response Data Enums Header */}
        <div className='mb-8 pb-4 border-b border-gray-300'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
            RESPONSE DATA ENUMS
          </h2>
        </div>

        {/* Payment Status Enums Section */}
        <section
          id='payment-status'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>
            Payment Status
          </h3>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border border-gray-200 rounded-lg'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-4 py-3 text-left font-semibold text-gray-700'>
                    Type
                  </th>
                  <th className='px-4 py-3 text-left font-semibold text-gray-700'>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>success</td>
                  <td className='px-4 py-3 text-gray-600'>
                    Transaction successful
                  </td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>pending</td>
                  <td className='px-4 py-3 text-gray-600'>
                    Transaction still pending
                  </td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>Failed</td>
                  <td className='px-4 py-3 text-gray-600'>
                    Transaction failed
                  </td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>abandoned</td>
                  <td className='px-4 py-3 text-gray-600'>Expired invoice</td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>refunded</td>
                  <td className='px-4 py-3 text-gray-600'>
                    Refund was processed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Payment Channel Section */}
        <section
          id='payment-channel'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>
            Payment Channel
          </h3>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border border-gray-200 rounded-lg'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-4 py-3 text-left font-semibold text-gray-700'>
                    Type
                  </th>
                  <th className='px-4 py-3 text-left font-semibold text-gray-700'>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>card</td>
                  <td className='px-4 py-3 text-gray-600'>Card Transaction</td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>transfer</td>
                  <td className='px-4 py-3 text-gray-600'>
                    Virtual account transfer Transaction
                  </td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>ussd</td>
                  <td className='px-4 py-3 text-gray-600'>
                    USSD bank Transaction
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Payment Currency Section */}
        <section
          id='payment-currency'
          className='mb-8 sm:mb-12 bg-white border border-gray-200 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h3 className='text-lg font-semibold text-gray-900 mb-4'>
            Payment Currency
          </h3>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border border-gray-200 rounded-lg'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-4 py-3 text-left font-semibold text-gray-700'>
                    Type
                  </th>
                  <th className='px-4 py-3 text-left font-semibold text-gray-700'>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>NGN</td>
                  <td className='px-4 py-3 text-gray-600'>Nigeria Naira</td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>USD</td>
                  <td className='px-4 py-3 text-gray-600'>
                    United state of america dollar
                  </td>
                </tr>
                <tr className='border-t border-gray-200'>
                  <td className='px-4 py-3 font-mono text-xs'>GBP</td>
                  <td className='px-4 py-3 text-gray-600'>
                    Great britsh pounds
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DocumentationContent;
