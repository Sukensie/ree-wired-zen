import { motion } from "framer-motion";

const facts = [
  {
    title: "Reclaim Your thoughts (control rumination)",
    body: "Repeated negative thinking (often called rumination) is a key factor in mental distress. Research shows that people can learn to disengage from these patterns and regain control over their attention.",
    source: ""
  },
  {
    title: "Exercise your mind, like it was muscle",
    body: "The method is based on well-documented psychological principles shown to significantly improve symptoms of anxiety and depression. Ree-Wired translates these into simple, repeatable mental exercises.",
    source: "",
  },
  {
    title: "If you need help, you need help!",
    body: "Your Mental well-being is what it's all about. Ree-Wired provides immediate, private training you can start in minutes. But we cannot tell you that Ree-Wired is the help you really need because we do not know you. If any doubt, please contact your family Docter ore other mental health care providers.",
    source: "",
  },
  {
    title: "VR creates a mental fitness centre",
    body: "Ree-Wired offer Virtual reality training because it creates a focused, immersive environment, reducing external noise and giving direct access to how attention and thoughts are experienced. This makes it possible to train mental control more effectively. And it is so easy to use.",
    source: "",
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
            <p className={`font-heading font-extrabold text-4xl md:text-5xl mb-2 ${i % 2 === 0 ? 'text-white' : 'text-orange'}`}>{s.value}</p>
            <p className="text-white/50 text-sm leading-relaxed">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EvidenceSection;
