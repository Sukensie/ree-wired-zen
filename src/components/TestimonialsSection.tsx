import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "It's easier to practise in VR, without all the everyday distractions…",
    author: "Test User",
    role: "Depression recovery",
  },
  {
    quote: "Training the brain to handle my thoughts better – I find that genuinely fascinating and very useful…",
    author: "Test User",
    role: "Stress management",
  },
  {
    quote: "Helped me learn to focus on something other than my thoughts…",
    author: "Test User",
    role: "Anxiety relief",
  },
  {
    quote: "The first exercise helped me move from negative thoughts to focusing on what's around me here and now…",
    author: "Test User",
    role: "Mindfulness training",
  },
  {
    quote: "Really pleasant experience – lovely voice and great exercises…",
    author: "Test User",
    role: "General wellbeing",
  },
  {
    quote: "The sessions could easily last a bit longer — I didn't want them to end…",
    author: "Test User",
    role: "Rumination recovery",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-background" id="testimonials">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Experiences from testers</p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
          What our users say
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-section-light rounded-xl p-8 relative group hover:shadow-lg transition-all"
          >
            <Quote className="h-8 w-8 text-primary/20 mb-4" />
            <p className="text-foreground text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-sm">{t.author[0]}</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-sm text-foreground">{t.author}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
