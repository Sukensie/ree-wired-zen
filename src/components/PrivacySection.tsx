import { motion } from "framer-motion";
import { ShieldCheck, EyeOff, Lock, UserX, Server, Heart } from "lucide-react";

const features = [
  { icon: UserX, title: "Fully anonymous", desc: "No personal data required to use the platform." },
  { icon: Lock, title: "End-to-end encrypted", desc: "Your sessions and progress are protected at every step." },
  { icon: EyeOff, title: "No tracking", desc: "We don't sell or share your data. Ever." },
  { icon: ShieldCheck, title: "GDPR compliant", desc: "Built to the highest European privacy standards." },
  { icon: Server, title: "EU-hosted data", desc: "All data stored securely within the European Union." },
  { icon: Heart, title: "No stigma", desc: "Use at home, on your terms, completely privately." },
];

const PrivacySection = () => (
  <section className="section-padding bg-background" id="privacy">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Your safety matters</p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
          Private by design.
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Mental health is deeply personal. That's why Ree-Wired is built with privacy at its core — not as an afterthought.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-4 p-6 rounded-xl bg-section-light-highlight "
          >
            <div className="w-12 h-12 rounded-xl bg-primary/85 flex items-center justify-center flex-shrink-0">
              <f.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PrivacySection;
