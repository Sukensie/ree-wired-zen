import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LifeHappensSection from "@/components/LifeHappensSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EvidenceSection from "@/components/EvidenceSection";
import TrustedVoicesSection from "@/components/TrustedVoicesSection";
import PrivacySection from "@/components/PrivacySection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WarningButton from "@/components/WarningButton";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <LifeHappensSection />
    <WhatWeOfferSection />
    <HowItWorksSection />
    <EvidenceSection />
    <TrustedVoicesSection />
    <PrivacySection />
    <PricingSection />
    <CTASection />
    <Footer />
    <WarningButton />
  </div>
);

export default Index;
