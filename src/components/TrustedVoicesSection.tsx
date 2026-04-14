import { motion } from "framer-motion";

const stakeholders = [
  {
    name: "Morten Ronnenberg",
    image: "/morten.jpg",
    role: "Secretary General",
    org: "DepressionsForeningen",
    quote: "Ree-Wired addresses a need for easily accessible help, which we experience many times. The idea and concept seem relevant and appear professionally well-considered.",
  },
  {
    name: "Marie Paldam Folker",
    image: "/marie.jpg",
    role: "Center Director",
    org: "Center for Digital Psychiatry, OUH",
    quote: "Ree-Wired's solution with an anonymous, home-based VR training tool for mental distress is relevant as a self-help-based and preventive offering. The solution addresses a well-documented challenge.",
  },
];

const testimonials = [
  {
    quote: "It's easier to practise in VR, without all the everyday distractions…",
    role: "Depression recovery",
  },
  {
    quote: "Training the brain to handle my thoughts better – I find that genuinely fascinating and very useful…",
    role: "Stress management",
  },
  {
    quote: "Helped me learn to focus on something other than my thoughts…",
    role: "Anxiety relief",
  },
  {
    quote: "The first exercise helped me move from negative thoughts to focusing on what's around me here and now…",
    role: "Mindfulness training",
  },
  {
    quote: "Really pleasant experience – lovely voice and great exercises…",
    role: "General wellbeing",
  },
  {
    quote: "The sessions could easily last a bit longer — I didn't want them to end…",
    role: "Rumination recovery",
  },
];

const TrustedVoicesSection = () => {
  return (
    <>
      <section id="testimonials" className="section-padding bg-section-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Trusted by experts</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
              What experts and users say
            </h2>
          </motion.div>

          {/* Main Stakeholders */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {stakeholders.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-2xl p-10 border border-gray-200"
              >
                <div className="mb-6 flex items-center gap-4">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-heading font-bold text-foreground">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.role}, {s.org}</p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed italic">"{s.quote}"</p>
              </motion.div>
            ))}
          </div>

          {/* User Testimonials in compact grid */}
          <div className="mt-12 pt-12 border-t border-border/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-2">From our testers</p>
              <p className="text-muted-foreground">Real experiences shared by our users</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white rounded-xl px-5 py-4 border border-border/30 hover:border-border/50 transition-colors"
                >
                  <p className="text-foreground text-sm leading-relaxed italic line-clamp-3">"{t.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedVoicesSection;
