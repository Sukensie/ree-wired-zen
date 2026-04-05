import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-vr.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="VR mental wellness" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-hero-overlay" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <p className="text-primary-light font-heading font-semibold text-sm tracking-widest uppercase mb-4">
          The Mental First Aid Kit
        </p>
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl leading-tight text-primary-foreground mb-6">
          Rewire your mind.{" "}
          <span className="text-primary-light">Reclaim your life.</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
          A VR-based mental fitness tool that breaks the vicious cycle of thoughts — from the comfort of your home. Anonymous, evidence-based, and designed for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="text-base px-8 py-6">
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            Learn More
          </Button>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
