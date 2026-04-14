import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "It's easier to practise in VR, without all the everyday distractions…",
    role: "Depression recovery",
    x: "5%", y: "8%",
  },
  {
    quote: "Training the brain to handle my thoughts better – I find that genuinely fascinating and very useful…",
    role: "Stress management",
    x: "55%", y: "2%",
  },
  {
    quote: "Helped me learn to focus on something other than my thoughts…",
    role: "Anxiety relief",
    x: "28%", y: "38%",
  },
  {
    quote: "The first exercise helped me move from negative thoughts to focusing on what's around me here and now…",
    role: "Mindfulness training",
    x: "65%", y: "42%",
  },
  {
    quote: "Really pleasant experience – lovely voice and great exercises…",
    role: "General wellbeing",
    x: "8%", y: "68%",
  },
  {
    quote: "The sessions could easily last a bit longer — I didn't want them to end…",
    role: "Rumination recovery",
    x: "52%", y: "72%",
  },
];

const TestimonialsSection = () => (
  <section className="relative section-padding bg-background overflow-hidden" id="testimonials">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Experiences from testers</p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
          What our users say
        </h2>
      </motion.div>

      {/* Mobile: stacked layout */}
      <div className="md:hidden space-y-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative bg-section-light-highlight rounded-2xl px-5 py-4 shadow-sm border border-border/30"
          >
            <p className="text-foreground text-sm leading-relaxed italic">"{t.quote}"</p>
            <p className="text-primary text-xs font-heading font-semibold mt-2">{t.role}</p>
            {/* Speech bubble tail */}
            <div className="absolute -bottom-2 left-8 w-4 h-4 bg-section-light-highlight rotate-45 border-b border-r border-border/30" />
          </motion.div>
        ))}
      </div>

      {/* Desktop: floating bubbles */}
      <div className="hidden md:block relative" style={{ height: "520px" }}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, type: "spring", stiffness: 120 }}
            className="absolute max-w-xs"
            style={{ left: t.x, top: t.y }}
          >
            <div className="relative bg-section-light-highlight rounded-2xl px-5 py-4 shadow-md border border-border/20 transition-all duration-300 group cursor-default">
              <p className="text-foreground text-sm leading-relaxed italic">"{t.quote}"</p>
              <p className="text-primary text-xs font-heading font-semibold mt-2">{t.role}</p>
              {/* Speech bubble tail */}
              <div className="absolute -bottom-2 left-6 w-3.5 h-3.5 bg-section-light-highlight rotate-45 shadow-md border-b border-r border-border/20 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
