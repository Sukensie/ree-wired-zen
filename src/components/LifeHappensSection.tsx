import { motion } from "framer-motion";
import { Heart, Brain, ShieldAlert, Users, ArrowDown } from "lucide-react";

const triggers = [
  { icon: Heart, label: "Divorce & Loss", desc: "When relations break you keep asking yourselves the same questions." },
  { icon: ShieldAlert, label: "Work", desc: "The job situation or lack of one. It creates a lot of questions with no answers." },
  { icon: Brain, label: "Anxiety", desc: "Tomorrow feels full of danger and is more important than today." },
  { icon: Users, label: "Social life", desc: "It is easier to be by myself than socialise. How should I navigate in life?" },
];

const LifeHappensSection = () => (
  <section className="section-padding bg-background" id="life-happens">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Life happens</p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
          Everyone faces life's ups and downs.
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The downs can trigger a vicious cycle of thoughts that keep you occupied day and night and won't let you be your best version of your selves.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {triggers.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-section-light-highlight rounded-xl p-8 text-center group transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-primary/85 flex items-center justify-center mx-auto mb-5 transition-colors">
              <t.icon className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{t.label}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 text-center"
      >

        <div className="text-orange/85 gap-2 flex items-center justify-center text-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeIn" }}
          >
            <ArrowDown size={18} className="-top-0.5 relative" />
          </motion.div>
          <p className="font-heading font-medium">
            There's a new way to deal with your vicious thoughts.
          </p>
        </div>
        

          
      </motion.div>
    </div>
  </section>
);

export default LifeHappensSection;
