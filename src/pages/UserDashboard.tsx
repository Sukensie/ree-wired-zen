import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, TrendingUp, Calendar, Clock, CreditCard, ChevronRight, Brain, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import logo from "@/assets/logo.png";

const weeklyData = [
  { day: "Mon", minutes: 25 },
  { day: "Tue", minutes: 30 },
  { day: "Wed", minutes: 0 },
  { day: "Thu", minutes: 20 },
  { day: "Fri", minutes: 35 },
  { day: "Sat", minutes: 15 },
  { day: "Sun", minutes: 0 },
];

const maxMin = Math.max(...weeklyData.map((d) => d.minutes));

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Ree-Wired" className="h-8 w-8" />
            <span className="font-heading font-bold text-foreground">ree-wired</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">Hi, Sarah 👋</span>
            <Button variant="ghost" size="sm" onClick={() => navigate("/login")} className="text-muted-foreground">
              <LogOut size={16} />
              <span className="hidden sm:inline ml-1">Sign out</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {/* Welcome */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-heading font-bold text-foreground">Your Journey</h1>
          <p className="text-muted-foreground text-sm mt-1">Keep going — every session counts.</p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Sessions", value: "24", icon: Brain, color: "text-primary" },
            { label: "This week", value: "3h 15m", icon: Clock, color: "text-primary" },
            { label: "Streak", value: "5 days", icon: Zap, color: "text-[hsl(var(--orange))]" },
            { label: "Wellbeing", value: "+18%", icon: Heart, color: "text-emerald-500" },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card className="border-border/50">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`${s.color}`}>
                    <s.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-lg font-bold font-heading text-foreground">{s.value}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Weekly activity */}
          <motion.div className="md:col-span-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-heading flex items-center gap-2">
                  <TrendingUp size={16} className="text-primary" /> Weekly Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="flex items-end gap-2 h-36">
                  {weeklyData.map((d) => (
                    <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t-md bg-primary/15 relative" style={{ height: "100%" }}>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${maxMin ? (d.minutes / maxMin) * 100 : 0}%` }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="absolute bottom-0 left-0 right-0 rounded-t-md bg-gradient-to-t from-primary to-primary/70"
                        />
                      </div>
                      <span className="text-[10px] text-muted-foreground">{d.day}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Current program */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <Card className="border-border/50 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-heading flex items-center gap-2">
                  <Calendar size={16} className="text-[hsl(var(--orange))]" /> Current Program
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-2">
                <div>
                  <p className="text-sm font-medium text-foreground">MCT — Module 3</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Rumination & Worry Control</p>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span>62%</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Continue Session <ChevronRight size={14} />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Subscription */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <Card className="border-border/50">
            <CardContent className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">Premium Plan — €14.99/mo</p>
                  <p className="text-xs text-muted-foreground">Next billing: May 1, 2026</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Manage Subscription</Button>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default UserDashboard;
