'use client';

import { useState } from 'react';
import { Copy, Check, Menu, X } from 'lucide-react';

const DocumentationContent = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [copiedCode, setCopiedCode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const sidebarSections = [
    {
      title: 'Get Started',
      items: [
        { id: 'introduction', label: 'Introduction' },
        { id: 'quick-start', label: 'Quick Start' },
        { id: 'webhook-url', label: 'Webhook URL' },
      ],
    },
    {
      title: 'Guide',
      items: [
        { id: 'signature-validation', label: 'Signature Validation' },
        { id: 'supported-events', label: 'Supported Events' },
        { id: 'payload-format', label: 'Payload Format' },
        { id: 'handling-webhooks', label: 'Handling Webhooks' },
        { id: 'important-notes', label: 'Important Notes' },
        { id: 'retry-recall', label: 'Retry & Recall' },
      ],
    },
  ];

  const codeExample = `const apiKey = process.env.SECRET_KEY;
app.post("/api/webhook/url", function(req, res) {
  //Validate event
  const signature = req.header('ApiKey')!.replace('ApiKey ', '');
  if (!signature || (signature !== apiKey)) {
    throw new Error('Webhook notification not from 9th Swift');
  }
  // Retrieve the request's body
  const event = req.body;
  // Send acknowledge
  res.status(200).send('ok');
  // Do something with event
});`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsDrawerOpen(false);
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
    <div className='flex min-h-screen px-0 bg-orange-50/20 overflow-hidden relative'>
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
        {/* Introduction Section */}
        <section
          id='introduction'
          className='mb-8 sm:mb-12 bg-orange-50/50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h2 className='text-xl sm:text-2xl font-bold text-orange-600 mb-3 sm:mb-4 break-words'>
            Introduction
          </h2>
          <p className='text-sm sm:text-base text-gray-700 leading-relaxed break-words'>
            The webhook service allows real-time communication of transaction
            notifications between your system and 9thSwift. You can receive
            transaction details promptly, enabling you to process them
            efficiently within your application.
          </p>
        </section>

        {/* Quick Start Section */}
        <section
          id='quick-start'
          className='mb-8 sm:mb-12 bg-orange-50/50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h2 className='text-xl sm:text-2xl font-bold text-orange-600 mb-4 sm:mb-6 break-words'>
            Quick Start
          </h2>
          <ol className='space-y-3 text-sm sm:text-base text-gray-700'>
            <li className='flex gap-2 sm:gap-3'>
              <span className='font-semibold shrink-0'>1.</span>
              <span className='break-words'>
                Add your webhook URL on the 9thSwift dashboard.
              </span>
            </li>
            <li className='flex gap-2 sm:gap-3'>
              <span className='font-semibold shrink-0'>2.</span>
              <span className='break-words'>
                Ensure your webhook URL is publicly available (localhost URLs
                cannot receive events).
              </span>
            </li>
            <li className='flex gap-2 sm:gap-3'>
              <span className='font-semibold shrink-0'>3.</span>
              <span className='break-words'>
                Implement signature validation using the ApiKey header.
              </span>
            </li>
            <li className='flex gap-2 sm:gap-3'>
              <span className='font-semibold shrink-0'>4.</span>
              <span className='break-words'>
                Test your webhook to ensure you're getting the JSON body and
                returning a 200 OK HTTP response.
              </span>
            </li>
          </ol>
        </section>

        {/* Webhook URL Section */}
        <section
          id='webhook-url'
          className='mb-8 sm:mb-12 bg-orange-50/50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h2 className='text-xl sm:text-2xl font-bold text-orange-600 mb-4 sm:mb-6 break-words'>
            Webhook URL
          </h2>
          <p className='text-sm sm:text-base text-gray-700 mb-4 break-words'>
            You can add your webhook URL from your dashboard. Example:
          </p>
          <p className='text-xs sm:text-sm text-gray-600 mb-4 break-all font-mono bg-gray-50 p-2 rounded'>
            https://api.yourdomain.com/webhook
          </p>
          <div className='bg-gray-100 p-3 sm:p-4 rounded-lg overflow-x-auto'>
            <p className='text-xs sm:text-sm text-gray-600'>
              <span className='font-semibold whitespace-nowrap'>Endpoint:</span>{' '}
              <code className='bg-white px-2 py-1 rounded text-orange-600 text-xs sm:text-sm whitespace-nowrap'>
                POST your-web-hook-url
              </code>
            </p>
          </div>
        </section>

        {/* Signature Validation Section */}
        <section
          id='signature-validation'
          className='mb-8 sm:mb-12 bg-orange-50/50 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl overflow-hidden'
        >
          <h2 className='text-xl sm:text-2xl font-bold text-orange-600 mb-4 sm:mb-6 break-words'>
            Webhook URL
          </h2>
          <p className='text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 break-words'>
            Events sent from 9thSwift carry an ApiKey header. The value of this
            header is your API secret key. Verifying the header signature should
            be done before processing the event.
          </p>

          {/* Code Block */}
          <div className='relative overflow-hidden'>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3 bg-gray-800 border-b border-gray-700'>
                <span className='text-xs sm:text-sm text-gray-300 truncate pr-2 flex-1 min-w-0'>
                  Signature Validation Example (Node.js/Express)
                </span>
                <button
                  onClick={handleCopy}
                  className='flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white transition-colors shrink-0'
                >
                  {copiedCode ? (
                    <>
                      <Check className='w-3 h-3 sm:w-4 sm:h-4' />
                      <span className='text-xs sm:text-sm hidden sm:inline'>
                        Copied
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className='w-3 h-3 sm:w-4 sm:h-4' />
                      <span className='text-xs sm:text-sm hidden sm:inline'>
                        Copy
                      </span>
                    </>
                  )}
                </button>
              </div>
              <pre className='p-3 sm:p-6 overflow-x-auto'>
                <code className='text-xs sm:text-sm text-gray-300 font-mono'>
                  {codeExample}
                </code>
              </pre>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DocumentationContent;
