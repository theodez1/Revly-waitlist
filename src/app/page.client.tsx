"use client";

import { useRef } from "react";

// Demo removed; we'll use static mockups instead
import Faq from "~/components/faq";
import Footer from "~/components/footer";
import Hero from "~/components/hero";
import { Confetti, ConfettiRef } from "~/components/magicui/confetti";
// Powered section removed
import ValueProps from "~/components/value-props";
// Videos temporairement désactivé pour accélérer la compilation
// import Videos from "~/components/videos";
import FinalCta from "~/components/final-cta";

export function LandingPage({ waitlistPeople }: { waitlistPeople: number }) {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <main className="mx-auto max-w-screen-2xl w-full h-full flex-1 flex flex-col relative">
      <Confetti
        ref={confettiRef}
        className="fixed inset-0 z-50 pointer-events-none"
        manualstart={true}
      />
      <Hero waitlistPeople={waitlistPeople} />
      <ValueProps />
      {/* Videos temporairement désactivé pour accélérer la compilation */}
      {/* <Videos /> */}
      <FinalCta />
      <Faq />
      <Footer />
    </main>
  );
}
