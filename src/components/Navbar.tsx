import { useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const links = ["How it works", "Evidence", "Testimonials", "Privacy", "Pricing"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Ree-Wired" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
          <button
            onClick={() => navigate("/contact")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Contact Us
          </button>
          <button
            onClick={() => navigate("/login")}
            aria-label="Log in"
            title="Log in"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <LogIn size={18} />
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="block text-sm text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <button
            className="block text-sm text-muted-foreground hover:text-primary"
            onClick={() => { setOpen(false); navigate("/contact"); }}
          >
            Contact Us
          </button>
          <button
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            onClick={() => { setOpen(false); navigate("/login"); }}
          >
            <LogIn size={16} />
            <span>Log in</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
