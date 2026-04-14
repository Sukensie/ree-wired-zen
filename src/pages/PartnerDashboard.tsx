import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, Users, TrendingUp, Activity, BarChart3, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/logo.png";

const monthlyData = [
  { month: "Oct", users: 120 },
  { month: "Nov", users: 185 },
  { month: "Dec", users: 210 },
  { month: "Jan", users: 290 },
  { month: "Feb", users: 345 },
  { month: "Mar", users: 410 },
];

const maxUsers = Math.max(...monthlyData.map((d) => d.users));

const kpis = [
  { label: "Active Users", value: "410", change: "+18.8%", up: true, icon: Users },
  { label: "Avg. Engagement", value: "4.2 sessions/wk", change: "+12%", up: true, icon: Activity },
  { label: "Wellbeing Score", value: "73/100", change: "+6pts", up: true, icon: TrendingUp },
  { label: "Churn Rate", value: "2.1%", change: "-0.4%", up: false, icon: BarChart3 },
];

const topPrograms = [
  { name: "MCT Rumination", enrolled: 184, completion: 78 },
  { name: "Stress & Anxiety", enrolled: 127, completion: 65 },
  { name: "Sleep Improvement", enrolled: 99, completion: 82 },
];

const PartnerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ree-Wired" className="h-8 w-8" />
            <span className="font-heading font-bold text-foreground">ree-wired</span>
            <span className="text-xs bg-[hsl(var(--orange)/0.12)] text-[hsl(var(--orange))] px-2 py-0.5 rounded-full font-medium">Partner</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">Allianz Health</span>
            <Button variant="ghost" size="sm" onClick={() => navigate("/login")} className="text-muted-foreground">
              <LogOut size={16} />
              <span className="hidden sm:inline ml-1">Sign out</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-heading font-bold text-foreground">Partner Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Overview of your employee mental health program</p>
        </motion.div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((k, i) => (
            <motion.div key={k.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card className="border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <k.icon size={18} className="text-muted-foreground" />
                    <span className={`text-xs font-medium flex items-center gap-0.5 ${k.up ? "text-emerald-500" : "text-[hsl(var(--orange))]"}`}>
                      {k.up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                      {k.change}
                    </span>
                  </div>
                  <p className="text-lg font-bold font-heading text-foreground">{k.value}</p>
                  <p className="text-xs text-muted-foreground">{k.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* User growth chart */}
          <motion.div className="md:col-span-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-heading">User Growth</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="flex items-end gap-3 h-40">
                  {monthlyData.map((d, i) => (
                    <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t-md bg-primary/10 relative" style={{ height: "100%" }}>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${(d.users / maxUsers) * 100}%` }}
                          transition={{ duration: 0.6, delay: 0.2 + i * 0.05 }}
                          className="absolute bottom-0 left-0 right-0 rounded-t-md bg-gradient-to-t from-primary to-primary/60"
                        />
                      </div>
                      <span className="text-[10px] text-muted-foreground">{d.month}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top programs */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <Card className="border-border/50 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-heading">Top Programs</CardTitle>
              </CardHeader>
              <CardContent className="pt-2 space-y-4">
                {topPrograms.map((p) => (
                  <div key={p.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-medium">{p.name}</span>
                      <span className="text-xs text-muted-foreground">{p.enrolled} users</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${p.completion}%` }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(var(--orange))]"
                      />
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{p.completion}% avg. completion</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick actions */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <Card className="border-border/50">
            <CardContent className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-foreground">Enterprise Plan — 500 seats</p>
                <p className="text-xs text-muted-foreground">Contract renewal: September 2026</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Download Report</Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">Manage Seats</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default PartnerDashboard;
