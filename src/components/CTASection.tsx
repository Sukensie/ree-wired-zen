import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import JoinWaitlistButton from "@/components/JoinWaitlistButton";
import oceanBg from "@/assets/ocean-bg.jpg";

const CTASection = () => {
  const navigate = useNavigate();
  return (
  <section className="relative section-padding overflow-hidden">
    <div className="absolute inset-0">
      <img src={oceanBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
      <div className="absolute inset-0 bg-hero-overlay" />
    </div>

    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-6">
          Do you still have a question?<br />We're happy to help.
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
          Take the first step towards breaking free from ruminating thoughts. Your mental fitness journey starts here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <JoinWaitlistButton size="lg" className="text-base px-8 py-6 bg-orange text-orange-foreground hover:bg-orange/90">
            Join Waiting List
          </JoinWaitlistButton>
          <Button size="lg" variant="outline" className="text-base px-8 py-6 border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20" onClick={() => navigate('/contact')}>
            Contact Us
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default CTASection;
