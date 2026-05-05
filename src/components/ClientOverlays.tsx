"use client";

import dynamic from 'next/dynamic';

const StickyCTA = dynamic(() => import('@/components/ui/StickyCTA'), { ssr: false });
const SocialProofToast = dynamic(() => import('@/components/ui/SocialProofToast'), { ssr: false });
const ExitIntent = dynamic(() => import('@/components/ui/ExitIntent'), { ssr: false });

export default function ClientOverlays() {
  return (
    <>
      <StickyCTA />
      <SocialProofToast />
      <ExitIntent />
    </>
  );
}
