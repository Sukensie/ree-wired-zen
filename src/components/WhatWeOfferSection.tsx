import { motion } from "framer-motion";
import { Smartphone, Headphones, Monitor, Sparkles, Shield, Clock } from "lucide-react";
import homeVr from "@/assets/home-vr.png";

const features = [
  { icon: Smartphone, title: "Use your own smartphone", desc: "No expensive equipment needed" },
  { icon: Shield, title: "Completely anonymous", desc: "No stigma, total privacy" },
  { icon: Clock, title: "Train anytime", desc: "Use as often as you need, at home" },
  { icon: Headphones, title: "Affordable Solution", desc: "Simple and efficient VR set with Ree-Wired software." },
  { icon: Monitor, title: "Personal mental fitness centre", desc: "Proven psychological principles" },
  { icon: Sparkles, title: "Track your improvement", desc: "Train and track – all in your personal Ree-Wired dashboard." },
];

const WhatWeOfferSection = () => (
  <section className="section-padding bg-section-light">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">The Solution</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            A mental fitness tool<br/>you use at home.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Ree-Wired uses VR technology combined with scientifically backed mental traning to bereak from rumination thoughts. The kind that can lead to depression, anxiety, social isolation, stress and other serious challenges.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{f.title}</p>
                  <p className="text-muted-foreground text-xs">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={homeVr}
            alt="Person using VR at home"
            className="rounded-2xl shadow-2xl w-full object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
          <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-5 border border-orange/30">
            <p className="font-heading font-bold text-2xl text-orange">73%</p>
            <p className="text-muted-foreground text-xs">of users report feeling calmer after first session</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhatWeOfferSection;
