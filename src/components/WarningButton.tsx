import { useState } from "react";
import { motion } from "framer-motion";

const warningText = "You should find your own way to deal with your personal mental challenges. Ree-Wired offer a simple solution recommended by experts.";

const WarningButton = () => {
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  return (
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
      className="fixed bottom-6 right-6 z-40 overflow-hidden rounded-xl border border-amber-950/15 bg-amber-400 text-left text-amber-950 shadow-[0_20px_50px_rgba(120,53,15,0.28)]"
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
        <span className="inline-flex items-center justify-center text-amber-900">
            <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-none stroke-current"
            strokeWidth="2.4"
            role="img"
            aria-label="Warning icon"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            {/* This path creates the actual triangle and exclamation mark */}
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        </span>
        </div>
      )}
    </motion.button>
  );
};

export default WarningButton;
