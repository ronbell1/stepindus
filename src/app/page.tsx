import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { CredibilityStrip } from "@/components/sections/home/CredibilityStrip";
import { WhatWeDo } from "@/components/sections/home/WhatWeDo";
import { Approach } from "@/components/sections/home/Approach";
import { Proof } from "@/components/sections/home/Proof";
import { Differentiation } from "@/components/sections/home/Differentiation";
import { InsightsTeaser } from "@/components/sections/home/InsightsTeaser";
import { ClosingCta } from "@/components/sections/ClosingCta";

export const metadata: Metadata = {
  title: "StepIndus — Launch your India GCC in 90 days",
  description:
    "StepIndus is an execution-led partner for building Global Capability Centres in India — Captive GCC setup or GCC-as-a-Service, from board approval to go-live.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <WhatWeDo />
      <Approach />
      <Proof />
      <Differentiation />
      <InsightsTeaser />
      <ClosingCta />
    </>
  );
}
