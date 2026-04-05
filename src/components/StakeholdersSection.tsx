import { motion } from "framer-motion";

const stakeholders = [
  {
    name: "Morten Ronnenberg",
    role: "Secretary General",
    org: "DepressionsForeningen",
    quote: "Ree-Wired addresses a need for easily accessible help, which we experience many times. The idea and concept seem relevant and appear professionally well-considered.",
  },
  {
    name: "Marie Paldam Folker",
    role: "Center Director",
    org: "Center for Digital Psychiatry",
    quote: "Ree-Wired's solution with an anonymous, home-based VR training tool for mental distress is relevant as a self-help-based and preventive offering. The solution addresses a well-documented challenge.",
  },
];

const StakeholdersSection = () => (
  <section className="section-padding bg-section-light">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Trusted by experts</p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
          Major stakeholders say
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {stakeholders.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card rounded-2xl p-10 shadow-sm border border-border hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <span className="text-primary font-heading font-bold text-lg">{s.name[0]}</span>
            </div>
            <p className="text-foreground leading-relaxed mb-6 italic">"{s.quote}"</p>
            <div className="border-t border-border pt-4">
              <p className="font-heading font-bold text-foreground">{s.name}</p>
              <p className="text-muted-foreground text-sm">{s.role}, {s.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StakeholdersSection;
