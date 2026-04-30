import { Mail, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import avatarFemale1 from "@/assets/avatar-female-1.png";
import avatarMale1 from "@/assets/avatar-male-1.png";
import avatarFemale2 from "@/assets/avatar-female-2.png";
import avatarFemale3 from "@/assets/avatar-female-3.png";
import avatarMale2 from "@/assets/avatar-male-2.png";

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
    name: "Marianne Fischer",
    position: "Founder",
    email: "mf@ree-wired.com",
    image: avatarFemale1,
    description:
      "Founder of Ree-Wired, combining human-centred welfare design, digital leadership and healthcare insight to build scalable, evidence-based VR for mental wellbeing.",
    accent: "primary",
  },
  {
    name: "Henrik Rafn",
    position: "Co-Founder",
    email: "hr@ree-wired.com",
    image: avatarMale1,
    description:
      "Experienced Business Development specialist with a Go-To-Market profile. Background from Marketing, Insurance, top management roles and startup challenges.",
    accent: "accent",
  },
  {
    name: "Birgit Lindqvist",
    position: "Acad. Emp.",
    email: "bl@ree-wired.com",
    image: avatarFemale2,
    description:
      "Academic contributor at Ree-Wired, co-developing the core methodology and shaping ethical, evidence-based VR scenarios through pedagogy and psychoeducation.",
    accent: "primary",
  },
  {
    name: "Pil Hartmann K.",
    position: "Co-founder Psychologist",
    email: "ph@ree-wired.com",
    image: avatarFemale3,
    description:
      "Experienced psychologist and hypnotherapist. Background in Cognitive Behavioral Therapy, psychoeducation, testing & assessments and health insurance and PFA.",
    accent: "accent",
  },
  {
    name: "Tomas Soucek",
    position: "Co-founder IT Specialist",
    email: "ts@ree-wired.com",
    image: avatarMale2,
    description:
      "Software Engineer with startup experience, focused on web, automation, and cloud computing. Strong in UX and turning business goals into technical solutions.",
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

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => {
            const isAccent = m.accent === "accent";

            return (
              <motion.article
                key={m.email}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-3xl overflow-hidden border border-border/60 bg-card"
              >
                {/* Accent corner gradient */}
                <div
                  className={`absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-60 ${
                    isAccent ? "bg-accent/30" : "bg-primary/30"
                  }`}
                />

                <div className="relative p-7 flex flex-col h-full">
                  {/* Image with frame */}
                  <div className="relative mb-6 w-fit">
                    <div className="relative h-24 w-24 rounded-2xl overflow-hidden bg-muted ring-1 ring-border">
                      <img
                        src={m.image}
                        alt={m.name}
                        loading="lazy"
                        width={512}
                        height={512}
                        className="h-full w-full object-cover"
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
                    <p
                      className={`text-sm font-heading font-semibold uppercase tracking-wider ${
                        isAccent ? "text-accent" : "text-primary"
                      }`}
                    >
                      {m.position}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {m.description}
                  </p>

                  {/* Email */}
                  <a
                    href={`mailto:${m.email}`}
                    className="group/link mt-auto inline-flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
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
