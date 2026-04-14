import { useState } from "react";
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

const warningText = "You should find your own way to deal with your personal mental challenges. Ree-Wired offer a simple solution recommended by experts.";

const StakeholdersSection = () => {
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  return (
    <>
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
        </div>
      </section>

      <motion.button
        type="button"
        initial={false}
        animate={{
          width: isWarningOpen ? 360 : 48,
          height: isWarningOpen ? 124 : 48,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onHoverStart={() => setIsWarningOpen(true)}
        onHoverEnd={() => setIsWarningOpen(false)}
        onFocus={() => setIsWarningOpen(true)}
        onBlur={() => setIsWarningOpen(false)}
        className="fixed bottom-6 right-2 z-50 overflow-hidden rounded-xl border border-amber-950/15 bg-amber-400 text-left text-amber-950 shadow-[0_20px_50px_rgba(120,53,15,0.28)]"
        aria-expanded={isWarningOpen}
        aria-label={isWarningOpen ? warningText : "Warning"}
      >
        {isWarningOpen ? (
          <div className="flex h-full w-full flex-col items-start justify-start px-4 py-3">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.28em]">Warning</p>
            <p className="mt-2 text-sm leading-snug">{warningText}</p>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="inline-flex items-center justify-centerr text-amber-900">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-none stroke-current"
                strokeWidth="2.4"
                role="img"
                aria-label="Warning icon"
              >
                <path d="M12 3L2.7 19.5a1 1 0 0 0 .87 1.5h16.86a1 1 0 0 0 .87-1.5L12 3z" />
                <path d="M12 9v5" />
                <circle cx="12" cy="17" r="1" className="fill-current stroke-none" />
              </svg>
            </span>
          </div>
        )}
      </motion.button>
    </>
  );
};

export default StakeholdersSection;
