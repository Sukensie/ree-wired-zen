import { motion } from "framer-motion";
import { ShoppingBag, Download, Headphones, TrendingUp } from "lucide-react";

const steps = [
  { num: "01", icon: ShoppingBag, title: "Order your kit", desc: "Get an affordable VR headset and access to the Ree-Wired app." },
  { num: "02", icon: Download, title: "Choose a scenario", desc: "Pick from immersive 3D environments designed for your needs." },
  { num: "03", icon: Headphones, title: "Start training", desc: "Put on your headset and follow guided voice-led exercises." },
  { num: "04", icon: TrendingUp, title: "Track progress", desc: "Monitor your mental fitness journey on your personal dashboard." },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Simple from the start</p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
          How it works
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-primary/25">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-3xl text-primary/20 block mb-2">{s.num}</span>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
