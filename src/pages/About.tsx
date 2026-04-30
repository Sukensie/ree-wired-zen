import { Mail, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  position: string;
  email: string;
  image: string;
  description: string;
  accent: "primary" | "accent";
}

const team: TeamMember[] = [
  {
    name: "Team Member 1",
    position: "Position",
    email: "person1@ree-wired.com",
    image: "/placeholder.svg",
    description: "Short description coming soon.",
    accent: "primary",
  },
  {
    name: "Team Member 2",
    position: "Position",
    email: "person2@ree-wired.com",
    image: "/placeholder.svg",
    description: "Short description coming soon.",
    accent: "accent",
  },
  {
    name: "Team Member 3",
    position: "Position",
    email: "person3@ree-wired.com",
    image: "/placeholder.svg",
    description: "Short description coming soon.",
    accent: "primary",
  },
  {
    name: "Team Member 4",
    position: "Position",
    email: "person4@ree-wired.com",
    image: "/placeholder.svg",
    description: "Short description coming soon.",
    accent: "accent",
  },
  {
    name: "Team Member 5",
    position: "Position",
    email: "person5@ree-wired.com",
    image: "/placeholder.svg",
    description: "Short description coming soon.",
    accent: "primary",
  },
];

const About = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Navbar />
    <main className="flex-1 pt-28 pb-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-heading font-semibold tracking-widest uppercase text-primary">
              About Us
            </span>
          </div>
          <h1 className="font-heading font-bold text-5xl md:text-7xl text-foreground leading-[1.05] tracking-tight mb-6">
            The minds behind{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ree-Wired
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/20 -z-0" />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A small, dedicated team building tools to support mental wellbeing — combining
            science, design, and care.
          </p>
        </motion.div>

        {/* Team grid - asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-fr">
          {team.map((m, i) => {
            // Asymmetric layout: first 2 wider, next 3 narrower
            const span =
              i < 2
                ? "lg:col-span-3"
                : "lg:col-span-2";
            const isAccent = m.accent === "accent";

            return (
              <motion.article
                key={m.email}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative ${span} rounded-3xl overflow-hidden border border-border/60 bg-card hover:border-foreground/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl`}
              >
                {/* Accent corner gradient */}
                <div
                  className={`absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 ${
                    isAccent ? "bg-accent/30" : "bg-primary/30"
                  }`}
                />

                <div className="relative p-7 flex flex-col h-full">
                  {/* Image with frame */}
                  <div className="relative mb-6 w-fit">
                    <div
                      className={`absolute -inset-1 rounded-2xl ${
                        isAccent ? "bg-accent" : "bg-primary"
                      } opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
                    />
                    <div className="relative h-24 w-24 rounded-2xl overflow-hidden bg-muted ring-1 ring-border">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Number badge */}
                    <div
                      className={`absolute -bottom-2 -right-2 h-8 w-8 rounded-full flex items-center justify-center text-xs font-heading font-bold ring-4 ring-card ${
                        isAccent
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      0{i + 1}
                    </div>
                  </div>

                  {/* Name + position */}
                  <div className="mb-4">
                    <h2 className="font-heading font-bold text-2xl text-foreground leading-tight mb-1">
                      {m.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-px w-6 ${
                          isAccent ? "bg-accent" : "bg-primary"
                        }`}
                      />
                      <p
                        className={`text-sm font-heading font-semibold uppercase tracking-wider ${
                          isAccent ? "text-accent" : "text-primary"
                        }`}
                      >
                        {m.position}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {m.description}
                  </p>

                  {/* Email */}
                  <a
                    href={`mailto:${m.email}`}
                    className="group/link mt-auto inline-flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-muted/50 hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium truncate">
                      <Mail size={14} className="shrink-0" />
                      <span className="truncate">{m.email}</span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
