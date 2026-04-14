import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  "VR set included",
  "Personal progress dashboard",
  "Cancel anytime",
  "Unlimited training",
  "100% anonymous usage",
  "Use your own smartphone and headset",
];

const PricingSection = () => (
  <section className="section-padding bg-section-light" id="pricing">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Get started</p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
          Start your mental fitness journey
        </h2>
        <p className="text-muted-foreground text-lg">
          No waiting lists. No appointments. Just you, your headset, and a calmer mind.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden"
      >
        <div className="bg-gradient-to-r from-primary to-orange p-8 text-center">
          <p className="text-primary-foreground/80 font-heading text-sm mb-2">Complete Mental Fitness Kit</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="font-heading font-extrabold text-5xl text-primary-foreground">1.199</span>
            <span className="text-primary-foreground/70 text-lg">DKK</span>
          </div>
          <p className="text-primary-foreground/60 text-sm mt-2">one-time setup · then 249 DKK/month</p>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="text-base px-12 py-6 bg-orange text-orange-foreground hover:bg-orange/90">
              Create Your Account <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-muted-foreground text-xs mt-4">You should find your own way to deal with your personal mental challenges. Ree-Wired offer a simple solution recommended by experts.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
