'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const DocumentationContent = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [copiedCode, setCopiedCode] = useState(false);

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

  return (
    <div className='flex min-h-screen px-0 lg:px-28  bg-orange-50/20'>
      {/* Sidebar */}
      <aside className='w-64 bg-white border-r border-gray-200 p-6 sticky top-0 h-screen overflow-y-auto hidden lg:block'>
        {sidebarSections.map((section) => (
          <div key={section.title} className='mb-8'>
            <h3 className='font-bold text-gray-900 mb-4'>{section.title}</h3>
            <ul className='space-y-2'>
              {section.items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
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
      </aside>

      {/* Main Content */}
      <main className='flex-1 p-6 lg:p-12 max-w-5xl'>
        {/* Introduction Section */}
        <section
          id='introduction'
          className='mb-12 bg-orange-50/50 p-8 rounded-2xl'
        >
          <h2 className='text-2xl font-bold text-orange-600 mb-4'>
            Introduction
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            The webhook service allows real-time communication of transaction
            notifications between your system and 9thSwift. You can receive
            transaction details promptly, enabling you to process them
            efficiently within your application.
          </p>
        </section>

        {/* Quick Start Section */}
        <section
          id='quick-start'
          className='mb-12 bg-orange-50/50 p-8 rounded-2xl'
        >
          <h2 className='text-2xl font-bold text-orange-600 mb-6'>
            Quick Start
          </h2>
          <ol className='space-y-3 text-gray-700'>
            <li className='flex gap-3'>
              <span className='font-semibold'>1.</span>
              <span>Add your webhook URL on the 9thSwift dashboard.</span>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold'>2.</span>
              <span>
                Ensure your webhook URL is publicly available (localhost URLs
                cannot receive events).
              </span>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold'>3.</span>
              <span>
                Implement signature validation using the ApiKey header.
              </span>
            </li>
            <li className='flex gap-3'>
              <span className='font-semibold'>4.</span>
              <span>
                Test your webhook to ensure you're getting the JSON body and
                returning a 200 OK HTTP response.
              </span>
            </li>
          </ol>
        </section>

        {/* Webhook URL Section */}
        <section
          id='webhook-url'
          className='mb-12 bg-orange-50/50 p-8 rounded-2xl'
        >
          <h2 className='text-2xl font-bold text-orange-600 mb-6'>
            Webhook URL
          </h2>
          <p className='text-gray-700 mb-4'>
            You can add your webhook URL from your dashboard. Example:
            https://api.yourdomain.com/webhook
          </p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='text-sm text-gray-600'>
              <span className='font-semibold'>Endpoint:</span>{' '}
              <code className='bg-white px-2 py-1 rounded text-orange-600'>
                POST your-web-hook-url
              </code>
            </p>
          </div>
        </section>

        {/* Signature Validation Section */}
        <section
          id='signature-validation'
          className='mb-12 bg-orange-50/50 p-8 rounded-2xl'
        >
          <h2 className='text-2xl font-bold text-orange-600 mb-6'>
            Webhook URL
          </h2>
          <p className='text-gray-700 mb-6'>
            Events sent from 9thSwift carry an ApiKey header. The value of this
            header is your API secret key. Verifying the header signature should
            be done before processing the event.
          </p>

          {/* Code Block */}
          <div className='relative'>
            <div className='bg-gray-900 rounded-lg overflow-hidden'>
              <div className='flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700'>
                <span className='text-sm text-gray-300'>
                  Signature Validation Example (Node.js/Express)
                </span>
                <button
                  onClick={handleCopy}
                  className='flex items-center gap-2 text-gray-300 hover:text-white transition-colors'
                >
                  {copiedCode ? (
                    <>
                      <Check className='w-4 h-4' />
                      <span className='text-sm'>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className='w-4 h-4' />
                      <span className='text-sm'>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className='p-6 overflow-x-auto'>
                <code className='text-sm text-gray-300 font-mono'>
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
