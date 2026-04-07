'use client';

import { useMemo, useState } from 'react';
import { Check } from 'lucide-react';

const feeItems = [
  'Bank Transfers (all Nigerian banks)',
  '₦2,000 maximum fee cap',
  'Global Payments (USD, GBP, EUR)',
  'Free dashboard & reconciliation tools',
  'No setup fee. No monthly fee',
];

const feeRate = 0.015;
const feeCap = 2000;

function SectionBadge({ label }: { label: string }) {
  return (
    <div className='inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300'>
      <span className='h-2.5 w-2.5 rounded-full bg-orange-400 ring-4 ring-orange-500/10' />
      {label}
    </div>
  );
}

function CheckIcon() {
  return (
    <span className='flex h-8 w-8 items-center justify-center rounded-full border border-orange-400/20 bg-orange-500/10 text-orange-400'>
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        className='h-4 w-4'
      >
        <path
          d='M20 6L9 17l-5-5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  );
}

function formatNaira(value: number) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(value)));
}

function formatAmount(value: string) {
  const num = Number(value.replace(/,/g, ''));
  if (num === 0 || isNaN(num)) return '0';
  return new Intl.NumberFormat('en-NG').format(num);
}

export default function PricingSection() {
  const [mode, setMode] = useState<'customers' | 'merchants'>('customers');
  const [amountInput, setAmountInput] = useState('230000');
  const [isEditing, setIsEditing] = useState(false);

  const amount = Number(amountInput.replace(/,/g, '')) || 0;
  const displayAmount = amount === 0 ? '' : formatAmount(amountInput);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value.replace(/[^\d]/g, '');
    setAmountInput(rawValue);
  };

  const pricing = useMemo(() => {
    if (amount === 0) {
      return {
        fee: 0,
        total: 0,
        saved: 0,
      };
    }

    const customerPays = amount;
    const chargedFee = Math.min(customerPays * feeRate, feeCap);
    const merchantGets = Math.max(customerPays - chargedFee, 0);

    if (mode === 'customers') {
      return {
        fee: chargedFee,
        total: merchantGets,
        saved: Math.max(customerPays * feeRate - chargedFee, 0),
      };
    }

    // For merchants mode - calculate what customer needs to pay
    const uncappedGross = amount / (1 - feeRate);
    const grossWithCap = amount + feeCap;
    const gross = Math.min(uncappedGross, grossWithCap);
    const effectiveFee = gross - amount;

    return {
      fee: effectiveFee,
      total: gross,
      saved: Math.max(gross * feeRate - effectiveFee, 0),
    };
  }, [amount, mode]);

  return (
    <section className='bg-[radial-gradient(circle_at_top,rgba(255,144,69,0.12),transparent_28%),linear-gradient(180deg,#171513_0%,#11100f_100%)] px-4 py-20 text-white sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-6xl  px-6 py-14  sm:px-8 lg:px-12'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl'>
            With Transparent Pricing
          </h2>
          <p className='mt-4 text-base leading-7 text-white/65 sm:text-lg'>
            One flat rate. One cap. No hidden charges. Calculate exactly what
            you&apos;ll pay or receive.
          </p>
        </div>

        <div className='mt-14 grid gap-6 lg:grid-cols-[1.02fr_1fr]'>
          <div className='rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]'>
            <div className='mb-10'>
              <div className='text-5xl font-extrabold tracking-tight text-white'>
                1.5<span className='text-orange-400'>%</span>
              </div>
              <p className='mt-3 text-sm text-white/60'>
                per successful transaction · capped at ₦2,000.
              </p>
            </div>

            <div className='space-y-0'>
              {feeItems.map((item) => (
                <div
                  key={item}
                  className='flex items-center justify-between gap-4 py-4'
                >
                  <div className='flex items-center gap-3'>
                    <CheckIcon />
                    <span className='text-sm text-white/85'>{item}</span>
                  </div>
                  {item === '₦2,000 maximum fee cap' ? (
                    <span className='rounded-full border border-orange-400/20 bg-orange-500/10 px-2 py-1 text-xs font-medium text-orange-300'>
                      Capped
                    </span>
                  ) : null}
                </div>
              ))}
            </div>

            <button
              type='button'
              className='mt-6 inline-flex w-full items-center justify-center rounded-xl bg-orange-400 px-5 py-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-orange-300'
            >
              Get Started for free
            </button>
          </div>

          <div className='rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]'>
            <h3 className='text-3xl font-semibold tracking-tight text-white'>
              Fee Calculator
            </h3>
            <p className='mt-2 text-sm text-white/60'>
              See exactly what you&apos;ll pay and what you&apos;ll save.
            </p>

            <div className='mt-6 rounded-xl border border-white/10 bg-white/5 p-1'>
              <div className='grid grid-cols-2 gap-1'>
                <button
                  type='button'
                  onClick={() => setMode('customers')}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    mode === 'customers'
                      ? 'bg-white/20 text-white shadow-sm'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  Customers Pay
                </button>
                <button
                  type='button'
                  onClick={() => setMode('merchants')}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    mode === 'merchants'
                      ? 'bg-white/20 text-white shadow-sm'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  Merchants Gets
                </button>
              </div>
            </div>

            <div className='mt-6'>
              <label htmlFor='pricing-amount' className='text-sm text-white/70'>
                Transaction Amount
              </label>
              <div className='mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-4'>
                <input
                  id='pricing-amount'
                  value={isEditing ? amountInput : `₦${displayAmount || '0'}`}
                  onChange={handleAmountChange}
                  onFocus={() => setIsEditing(true)}
                  onBlur={() => setIsEditing(false)}
                  inputMode='numeric'
                  className='w-full bg-transparent text-2xl font-semibold text-white outline-none placeholder:text-white/30'
                  placeholder='₦0'
                />
              </div>
            </div>

            <div className='mt-8 space-y-4'>
              <div className='flex items-center justify-between py-3 border-b border-white/10'>
                <span className='text-sm text-white/70'>
                  Swift Processing Fee (1.5%)
                </span>
                <span className='text-sm text-white'>
                  {formatNaira(pricing.fee)}
                </span>
              </div>
              <div className='flex items-center justify-between py-4'>
                <span className='text-lg font-medium text-white'>
                  {mode === 'customers' ? 'You Receive' : 'Customer Pays'}
                </span>
                <span className='text-2xl font-bold text-orange-400'>
                  {formatNaira(pricing.total)}
                </span>
              </div>
              <div className='flex items-center justify-between py-3 border-t border-white/10'>
                <span className='text-sm text-white/50'>Fee Cap Applied</span>
                <span className='rounded-full border border-green-400/20 bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 flex items-center gap-1'>
                  <Check className='w-3 h-3' /> Saved{' '}
                  {formatNaira(pricing.saved)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
