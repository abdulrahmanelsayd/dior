import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero/Hero';
import Features from '@/components/sections/Features';
import ScienceMeetsNature from '@/components/sections/ScienceMeetsNature';
import Ingredients from '@/components/sections/Ingredients';
import HowToUse from '@/components/sections/HowToUse';
import Testimonials from '@/components/sections/Testimonials';
import ProductDetails from '@/components/sections/ProductDetails/ProductDetails';
import Guarantee from '@/components/sections/Guarantee';
import Faq from '@/components/sections/Faq';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/ui/StickyCTA';
import SocialProofToast from '@/components/ui/SocialProofToast';
import ExitIntent from '@/components/ui/ExitIntent';
import SmoothScroll from '@/components/ui/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
    <main className="flex min-h-screen flex-col font-sans overflow-x-hidden bg-white">
      <Header />
      <Hero />

      <div className="bg-brand-bg rounded-t-[2.5rem] lg:rounded-t-[4rem] rounded-b-[2.5rem] lg:rounded-b-[4rem] mx-3 lg:mx-8 my-6 lg:my-10 overflow-hidden">
        <Features />
        <ScienceMeetsNature />
        <Ingredients />
        <HowToUse />
        <Testimonials />
      </div>

      <ProductDetails />
      <Guarantee />
      <Faq />
      <FinalCTA />
      <Footer />
      <StickyCTA />
      <SocialProofToast />
      <ExitIntent />
    </main>
    </SmoothScroll>
  );
}
