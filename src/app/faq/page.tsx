import FAQSection from '@/app/faq/_components/FAQSection';
import ContactForm from '@/app/faq/_components/ContactForm';
import CTA from '../about/_components/CTA';

export default function FAQPage() {
  return (
    <main className='min-h-screen bg-white'>
      <FAQSection />
      <ContactForm />
      <CTA />
    </main>
  );
}
