import { useNavigate } from "react-router-dom";
import { User, Building2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-orange/5 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <div className="text-center mb-10">
          <a href="/" className="inline-flex items-center gap-2 mb-6">
            <img src={logo} alt="Ree-Wired" className="h-10" />
          </a>
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Choose how you'd like to sign in</p>
        </div>

        <div className="grid gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/dashboard/user")}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <User size={28} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-lg text-foreground">I'm a User</h3>
                <p className="text-sm text-muted-foreground mt-0.5">Access your personal therapy journey & progress</p>
              </div>
              <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/dashboard/partner")}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-left transition-all hover:border-orange/40 hover:shadow-lg hover:shadow-orange/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--orange)/0.1)] text-[hsl(var(--orange))]">
                <Building2 size={28} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-lg text-foreground">I'm a Partner</h3>
                <p className="text-sm text-muted-foreground mt-0.5">Health insurance & corporate wellness portal</p>
              </div>
              <ArrowRight size={20} className="text-muted-foreground group-hover:text-[hsl(var(--orange))] transition-colors" />
            </div>
          </motion.button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Demo portal — no credentials required
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
