import { motion } from "framer-motion";
import { Heart, Brain, ShieldAlert, Users } from "lucide-react";

const triggers = [
  { icon: Heart, label: "Divorce & Loss", desc: "When relationships break down and grief takes hold." },
  { icon: ShieldAlert, label: "Stress & Burnout", desc: "Workplace pressure, layoffs, and overwhelming demands." },
  { icon: Brain, label: "Anxiety & Rumination", desc: "Thoughts that spiral and keep you trapped in loops." },
  { icon: Users, label: "Social Isolation", desc: "Loneliness and withdrawal from the world around you." },
];

const LifeHappensSection = () => (
  <section className="section-padding bg-background" id="how-it-works">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">We understand</p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
          Life happens —<br />sometimes it's hard.
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everyone faces life's ups and downs. The downs can be triggered by many things — and when they hit hard, finding help shouldn't be harder.
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
            className="bg-section-light rounded-xl p-8 text-center group hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <t.icon className="h-7 w-7 text-primary" />
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
        <div className="inline-flex items-center gap-3 bg-primary/5 rounded-full px-8 py-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <p className="text-foreground font-heading font-medium">
            There's a new way to deal with your vicious thoughts.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default LifeHappensSection;
