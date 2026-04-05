import HeroSection from '@/app/_components/HeroSection';
import CTASection from '@/app/home/_components/CTASection';
import FeaturesSection from '@/app/home/_components/FeaturesSection';
import StepsSection from '@/app/home/_components/StepsSection';
import TestimonialsSection from '@/app/home/_components/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
