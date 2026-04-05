import HeroSection from '@/app/_components/HeroSection';
// import PaymentFeaturesSection from '@/app/_components/PaymentFeaturesSection';
import CTASection from '@/app/home/_components/CTASection';
import FeaturesSection from '@/app/home/_components/FeaturesSection';
import StepsSection from '@/app/home/_components/StepsSection';
import TestimonialsSection from '@/app/home/_components/TestimonialsSection';
import PricingSection from '../_components/PricingSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PricingSection />
      {/* <PaymentFeaturesSection /> */}
      <FeaturesSection />
      <StepsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
