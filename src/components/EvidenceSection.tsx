import { motion } from "framer-motion";
import oceanBg from "@/assets/ocean-bg.jpg";

const stats = [
  { value: "20%", label: "of all people will suffer from depression in their lifetime" },
  { value: "600K", label: "people in Denmark estimated to have depression" },
  { value: "250K", label: "persons suffer from severe stress" },
  { value: "25%", label: "of all sick leave is due to stress" },
];

const EvidenceSection = () => (
  <section className="relative section-padding overflow-hidden" id="evidence">
    <div className="absolute inset-0">
      <img src={oceanBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
      <div className="absolute inset-0 bg-hero-overlay" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary-light font-heading font-semibold text-sm tracking-widest uppercase mb-3">Grounded in evidence</p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-4">
          The numbers speak for themselves.
        </h2>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Mental health challenges are widespread. Ree-Wired is built on proven Meta-Cognitive Therapy principles used daily by healthcare professionals.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-8 text-center border border-primary-foreground/10"
          >
            <p className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground mb-3">{s.value}</p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EvidenceSection;
