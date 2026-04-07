import HeroSection from '@/app/home/_components/HeroSection';
import PaymentFeatures from '@/app/home/_components/PaymentFeatures';
import IndustryShowcase from '@/app/home/_components/IndustryShowcase';
import CTASection from '@/app/home/_components/CTASection';
import FeaturesSection from '@/app/home/_components/FeaturesSection';
import StepsSection from '@/app/home/_components/StepsSection';
import TestimonialsSection from '@/app/home/_components/TestimonialsSection';
import PricingSection from './_components/PricingSection';
import TrustLogos from './_components/TrustLogos';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustLogos />
      <PaymentFeatures />
      <FeaturesSection />
      <IndustryShowcase />
      <PricingSection />
      <StepsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
