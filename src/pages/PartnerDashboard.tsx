import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, Users, TrendingUp, Activity, BarChart3, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import logo from "@/assets/logo.png";

const monthlyData = [
  { month: "Jul", users: 45 },
  { month: "Aug", users: 72 },
  { month: "Sep", users: 98 },
  { month: "Oct", users: 120 },
  { month: "Nov", users: 185 },
  { month: "Dec", users: 210 },
  { month: "Jan", users: 290 },
  { month: "Feb", users: 345 },
  { month: "Mar", users: 410 },
];

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

const maxUsers = Math.max(...monthlyData.map((d) => d.users));
const chartW = 100;
const chartH = 50;
const growthPoints = monthlyData.map((d, i) => ({
  x: (i / (monthlyData.length - 1)) * chartW,
  y: chartH - (d.users / maxUsers) * chartH * 0.9,
}));
const growthLine = growthPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
const growthArea = `${growthLine} L ${chartW} ${chartH} L 0 ${chartH} Z`;

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
          {/* User growth line chart */}
          <motion.div className="md:col-span-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Card className="border-border/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-heading flex items-center gap-2">
                  <TrendingUp size={16} className="text-primary" /> User Growth
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <svg viewBox={`-2 -2 ${chartW + 4} ${chartH + 18}`} className="w-full h-44" preserveAspectRatio="none">
                  {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
                    <line key={pct} x1={0} x2={chartW} y1={chartH * (1 - pct)} y2={chartH * (1 - pct)} stroke="hsl(var(--border))" strokeWidth={0.3} />
                  ))}
                  <motion.path d={growthArea} fill="url(#growthGrad)" initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ duration: 1 }} />
                  <motion.path
                    d={growthLine}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  />
                  {growthPoints.map((p, i) => (
                    <motion.circle
                      key={i} cx={p.x} cy={p.y} r={1.8}
                      fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth={1}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.06 }}
                    />
                  ))}
                  {monthlyData.map((d, i) => (
                    <text key={i} x={growthPoints[i].x} y={chartH + 10} textAnchor="middle" className="fill-muted-foreground" style={{ fontSize: 3.2 }}>{d.month}</text>
                  ))}
                  <defs>
                    <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1 px-1">
                  <span>45 → 410 users</span>
                  <span className="text-emerald-500 font-medium">+811% growth</span>
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
