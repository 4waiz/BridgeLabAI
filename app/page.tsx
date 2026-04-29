import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Features } from "@/components/landing/Features";
import { HowItWorksTeaser } from "@/components/landing/HowItWorksTeaser";
import { ResponsibleAI } from "@/components/landing/ResponsibleAI";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <HowItWorksTeaser />
      <ResponsibleAI />
    </>
  );
}
