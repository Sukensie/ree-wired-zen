import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, TrendingUp, Calendar, Clock, CreditCard, Brain, Heart, Zap, Flame, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import logo from "@/assets/logo.png";

// 4-week streak calendar data (1 = completed, 0 = missed, 2 = today)
const streakWeeks = [
  [1, 1, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 1, 1],
  [0, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 2, 0],
];
const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

// Wellbeing trend over 8 weeks
const wellbeingData = [
  { week: "W1", score: 42 },
  { week: "W2", score: 45 },
  { week: "W3", score: 48 },
  { week: "W4", score: 52 },
  { week: "W5", score: 55 },
  { week: "W6", score: 53 },
  { week: "W7", score: 59 },
  { week: "W8", score: 63 },
];
const maxScore = 80;
const minScore = 30;

const UserDashboard = () => {
  const navigate = useNavigate();

  // Build SVG line path for wellbeing
  const chartW = 800;
  const chartH = 260;
  const chartBottomPadding = 46;
  const chartSidePadding = 28;
  const plotLeft = chartSidePadding;
  const plotRight = chartW - chartSidePadding;
  const plotWidth = plotRight - plotLeft;
  const points = wellbeingData.map((d, i) => {
    const x = plotLeft + (i / (wellbeingData.length - 1)) * plotWidth;
    const y = chartH - ((d.score - minScore) / (maxScore - minScore)) * chartH;
    return { x, y };
  });
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${plotRight} ${chartH} L ${plotLeft} ${chartH} Z`;

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            aria-label="Go to homepage"
            className="flex items-center gap-2"
          >
            <img src={logo} alt="Ree-Wired" className="h-8" />
          </button>
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
          {/* Streak calendar */}
          <motion.div className="md:col-span-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Card className="border-border/50 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-heading flex items-center gap-2">
                  <Flame size={16} className="text-[hsl(var(--orange))]" /> Your Streak
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                {/* Day labels */}
                <div className="grid grid-cols-7 gap-1.5 mb-1.5">
                  {dayLabels.map((d, i) => (
                    <span key={i} className="text-[9px] text-muted-foreground text-center">{d}</span>
                  ))}
                </div>
                {/* Streak grid */}
                <div className="space-y-1.5">
                  {streakWeeks.map((week, wi) => (
                    <div key={wi} className="grid grid-cols-7 gap-1.5">
                      {week.map((status, di) => (
                        <motion.div
                          key={di}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + wi * 0.05 + di * 0.02 }}
                          className={`aspect-square rounded-md flex items-center justify-center text-[10px] ${
                            status === 2
                              ? "bg-[hsl(var(--orange))] text-white ring-2 ring-[hsl(var(--orange)/0.3)]"
                              : status === 1
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground/40"
                          }`}
                        >
                          {status >= 1 && <Check size={12} />}
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-muted-foreground text-center mt-3">Last 4 weeks • 20 of 28 days</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Wellbeing trend */}
          <motion.div className="md:col-span-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
            <Card className="border-border/50 h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-heading flex items-center gap-2">
                  <TrendingUp size={16} className="text-emerald-500" /> Wellbeing Trend
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <svg
                  viewBox={`0 0 ${chartW} ${chartH + chartBottomPadding}`}
                  className="w-full h-auto"
                  preserveAspectRatio="xMidYMid meet"
                  shapeRendering="geometricPrecision"
                >
                  {/* Grid lines */}
                  {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
                    <line
                      key={pct}
                      x1={plotLeft}
                      x2={plotRight}
                      y1={chartH * (1 - pct)}
                      y2={chartH * (1 - pct)}
                      stroke="hsl(var(--border))"
                      strokeWidth={1}
                    />
                  ))}
                  {/* Area fill */}
                  <motion.path
                    d={areaPath}
                    fill="url(#wellbeingGrad)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1 }}
                  />
                  {/* Line */}
                  <motion.path
                    d={linePath}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  />
                  {/* Dots */}
                  {points.map((p, i) => (
                    <motion.circle
                      key={i}
                      cx={p.x}
                      cy={p.y}
                      r={7}
                      fill="hsl(var(--background))"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      vectorEffect="non-scaling-stroke"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.08 }}
                    />
                  ))}
                  {/* Week labels */}
                  {wellbeingData.map((d, i) => (
                    <text
                      key={i}
                      x={points[i].x}
                      y={chartH + 24}
                      textAnchor="middle"
                      className="fill-muted-foreground"
                      style={{ fontSize: 14 }}
                    >
                      {d.week}
                    </text>
                  ))}
                  <defs>
                    <linearGradient id="wellbeingGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1 px-1">
                  <span>Score: 42 → 63</span>
                  <span className="text-emerald-500 font-medium">+50% improvement</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Current program — no continue button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <Card className="border-border/50">
            <CardContent className="p-5 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-3 shrink-0">
                <Calendar size={20} className="text-[hsl(var(--orange))]" />
                <div>
                  <p className="text-sm font-medium text-foreground">MCT — Module 3</p>
                  <p className="text-xs text-muted-foreground">Rumination & Worry Control</p>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Progress</span>
                  <span>62%</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

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
