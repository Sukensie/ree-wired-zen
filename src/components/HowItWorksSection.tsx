import { motion } from "framer-motion";
import { ShoppingBag, Download, Headphones, TrendingUp } from "lucide-react";

const steps = [
  { num: "01", icon: ShoppingBag, title: "Order your kit", desc: "Get an affordable VR headset and access to the Ree-Wired app.", color: "from-primary to-primary/80", dot: false },
  { num: "02", icon: Download, title: "Choose a scenario", desc: "Pick from immersive 3D environments designed for your needs.", color: "from-orange to-orange/80", dot: true },
  { num: "03", icon: Headphones, title: "Start training", desc: "Put on your headset and follow guided voice-led exercises.", color: "from-primary/90 to-primary/70", dot: false },
  { num: "04", icon: TrendingUp, title: "Track progress", desc: "Monitor your mental fitness journey on your personal dashboard.", color: "from-orange/90 to-orange/70", dot: true },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-background overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Simple from the start</p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
          How it works
        </h2>
      </motion.div>

      <div className="relative">
        {/* Curved SVG path connecting the steps */}
        <svg
          className="hidden md:block absolute top-16 left-0 w-full h-16 pointer-events-none"
          viewBox="0 0 1200 60"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
              <stop offset="25%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="75%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 100 30 C 250 5, 350 55, 450 30 C 550 5, 650 55, 750 30 C 850 5, 950 55, 1100 30"
            stroke="url(#lineGrad)"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {/* Glow dots at connection points */}
          {[100, 450, 750, 1100].map((cx, i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={30}
              r="4"
              fill="hsl(var(--primary))"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.3, duration: 0.4 }}
            />
          ))}
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative group"
            >
              {/* Icon circle with ring */}
              <div className="relative mx-auto mb-6 w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-primary/10 scale-125 group-hover:scale-[1.35] transition-transform duration-500" />
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center relative z-10 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-300`}>
                  <s.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>

              <span className="font-heading font-extrabold text-4xl text-primary/15 block mb-1">{s.num}</span>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px] mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
