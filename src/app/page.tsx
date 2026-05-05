import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero/Hero';
import SmoothScroll from '@/components/ui/SmoothScroll';

const Features = dynamic(() => import('@/components/sections/Features'), {
  loading: () => <div className="min-h-[600px]" />,
});
const ScienceMeetsNature = dynamic(() => import('@/components/sections/ScienceMeetsNature'), {
  loading: () => <div className="min-h-[500px]" />,
});
const Ingredients = dynamic(() => import('@/components/sections/Ingredients'), {
  loading: () => <div className="min-h-[500px]" />,
});
const HowToUse = dynamic(() => import('@/components/sections/HowToUse'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="min-h-[400px]" />,
});
const ProductDetails = dynamic(() => import('@/components/sections/ProductDetails/ProductDetails'), {
  loading: () => <div className="min-h-[800px]" />,
});
const Guarantee = dynamic(() => import('@/components/sections/Guarantee'), {
  loading: () => <div className="min-h-[300px]" />,
});
const Faq = dynamic(() => import('@/components/sections/Faq'), {
  loading: () => <div className="min-h-[400px]" />,
});
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA'), {
  loading: () => <div className="min-h-[300px]" />,
});
const Footer = dynamic(() => import('@/components/layout/Footer'), {
  loading: () => <div className="min-h-[400px]" />,
});
const ClientOverlays = dynamic(() => import('@/components/ClientOverlays'));

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
      <ClientOverlays />
    </main>
    </SmoothScroll>
  );
}
