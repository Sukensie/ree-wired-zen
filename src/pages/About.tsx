import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  position: string;
  email: string;
  image: string;
  description: string;
}

const team: TeamMember[] = [
  {
    name: "Team Member 1",
    position: "Position",
    email: "person1@ree-wired.com",
    image: "/placeholder.svg",
    description: "Short description coming soon.",
  },
  {
    name: "Team Member 2",
    position: "Position",
    email: "person2@ree-wired.com",
    image: "/placeholder.svg",
    description: "Short description coming soon.",
  },
  {
    name: "Team Member 3",
    position: "Position",
    email: "person3@ree-wired.com",
    image: "/placeholder.svg",
    description: "Short description coming soon.",
  },
  {
    name: "Team Member 4",
    position: "Position",
    email: "person4@ree-wired.com",
    image: "/placeholder.svg",
    description: "Short description coming soon.",
  },
  {
    name: "Team Member 5",
    position: "Position",
    email: "person5@ree-wired.com",
    image: "/placeholder.svg",
    description: "Short description coming soon.",
  },
];

const About = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-28 pb-20 px-6 md:px-12 lg:px-20 bg-section-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            About Us
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            The team behind Ree-Wired
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A small, dedicated team building tools to support mental wellbeing.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <motion.article
              key={m.email}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 border border-border/50 flex flex-col items-center text-center"
            >
              <img
                src={m.image}
                alt={m.name}
                className="h-28 w-28 rounded-full object-cover mb-4 bg-muted"
              />
              <h2 className="font-heading font-bold text-lg text-foreground">{m.name}</h2>
              <p className="text-sm text-accent font-medium mb-3">{m.position}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {m.description}
              </p>
              <a
                href={`mailto:${m.email}`}
                className="mt-auto inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Mail size={14} />
                {m.email}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
