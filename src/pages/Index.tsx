import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LifeHappensSection from "@/components/LifeHappensSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EvidenceSection from "@/components/EvidenceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StakeholdersSection from "@/components/StakeholdersSection";
import PrivacySection from "@/components/PrivacySection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <LifeHappensSection />
    <WhatWeOfferSection />
    <HowItWorksSection />
    <EvidenceSection />
    <TestimonialsSection />
    <StakeholdersSection />
    <PrivacySection />
    <PricingSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
