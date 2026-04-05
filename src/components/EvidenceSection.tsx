import { motion } from "framer-motion";

const facts = [
  {
    title: "Waiting times",
    body: "Access to a psychologist in Denmark typically involves a wait of 12 weeks to 1 year, depending on the type of referral and provider.",
  },
  {
    title: "VR in mental health contexts",
    body: "Virtual reality has been used in clinical and research settings for mental health-related training since the 1990s, including for PTSD and anxiety-related disorders.",
    source: "Documented in academic literature",
  },
  {
    title: "Rumination and depression",
    body: "Rumination — the tendency to repeatedly focus on distressing thoughts — is identified as a transdiagnostic factor in depression and anxiety research.",
  },
  {
    title: "Metacognitive therapy",
    body: "Metacognitive Therapy (MCT) was developed by Adrian Wells and has shown efficacy rates above 80% in clinical trials for generalised anxiety disorder and depression.",
    source: "Wells, A. (2009). Metacognitive Therapy. Guilford Press.",
  },
];

const stats = [
  { value: "20%", label: "of all people will suffer from depression in their lifetime" },
  { value: "600K", label: "people in Denmark estimated to have depression" },
  { value: "250K", label: "persons suffer from severe stress" },
  { value: "25%", label: "of all sick leave is due to stress" },
];

const EvidenceSection = () => (
  <section className="bg-[hsl(220,20%,14%)] section-padding" id="evidence">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          Research &amp; Facts
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
          Grounded in evidence.
        </h2>
        <p className="text-white/50 text-lg">
          Factual information only — no emotional framing.
        </p>
      </motion.div>

      {/* Fact cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {facts.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/[0.06] rounded-2xl p-8 border border-white/[0.08] hover:border-primary/30 transition-colors"
          >
            <h3 className="text-primary font-heading font-bold text-lg mb-3">{f.title}</h3>
            <p className="text-white/70 leading-relaxed">{f.body}</p>
            {f.source && (
              <p className="text-white/40 text-sm mt-4">{f.source}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center py-6"
          >
            <p className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-2">{s.value}</p>
            <p className="text-white/50 text-sm leading-relaxed">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EvidenceSection;
