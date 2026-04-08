import AboutUs from '@/app/about/_components/AboutUs';
import OurStory from '@/app/about/_components/OurStory';
import MissionVision from '@/app/about/_components/MissionVision';
import Team from '@/app/about/_components/Team';
import CTA from '@/app/about/_components/CTA';

export default function AboutPage() {
  return (
    <main className='min-h-screen bg-white'>
      <AboutUs />
      <OurStory />
      <MissionVision />
      {/* <Team /> */}
      <CTA />
    </main>
  );
}
