import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import {
  Code2, Brain, Users, Mic2, MonitorPlay, FileText,
  Linkedin, Bell, Zap, MessageSquare, ArrowRight, Tag, Calendar, Gift
} from "lucide-react";
import { useState, useEffect } from "react";

// ─── Benefit modules ────────────────────────────────────────────────────────

const modules = [
  {
    id: "technical",
    label: "Technical Mastery",
    eyebrow: "Module 01",
    headline: "Build the skills that get you hired",
    description: "Hands-on coding, algorithm training, and real problem-solving practice — the technical foundation every interviewer tests.",
    color: "#6366f1",
    colorTo: "#a5b4fc",
    benefits: [
      {
        icon: Code2,
        title: "Programming",
        desc: "Structured coding sessions covering core concepts, patterns, and language-specific depth — Java or Python.",
      },
      {
        icon: MonitorPlay,
        title: "Practice Sessions",
        desc: "Guided LeetCode, HackerRank, and timed coding rounds so you're comfortable under interview pressure.",
      },
    ],
  },
  {
    id: "aptitude",
    label: "Aptitude & Reasoning",
    eyebrow: "Module 02",
    headline: "Ace every aptitude round",
    description: "Quantitative, logical, and verbal reasoning — the rounds most candidates skip and most companies use to filter.",
    color: "#f59e0b",
    colorTo: "#fcd34d",
    benefits: [
      {
        icon: Brain,
        title: "Aptitude & Reasoning",
        desc: "Quant, logical reasoning, and verbal ability drills aligned to real campus and off-campus placement patterns.",
      },
    ],
  },
  {
    id: "interview",
    label: "Interview Preparation",
    eyebrow: "Module 03",
    headline: "Walk into interviews with confidence",
    description: "Simulated interviews, group discussions, and 1-on-1 doubt sessions — the closest thing to the real experience before it counts.",
    color: "#10b981",
    colorTo: "#6ee7b7",
    benefits: [
      {
        icon: Users,
        title: "Group Discussion",
        desc: "Facilitated GD sessions covering current topics, communication frameworks, and how to stand out without interrupting.",
      },
      {
        icon: Mic2,
        title: "Mock Interviews",
        desc: "Full-length HR + technical mock interviews with detailed feedback on answers, body language, and presentation.",
      },
      {
        icon: MessageSquare,
        title: "1:1 Doubt Clearance",
        desc: "Scheduled one-on-one sessions with your mentor — no question left unanswered, no concept left fuzzy.",
      },
    ],
  },
  {
    id: "career",
    label: "Career & Profile",
    eyebrow: "Module 04",
    headline: "Get noticed before the interview",
    description: "A polished resume, an optimised LinkedIn, and a GitHub that speaks for itself — so recruiters come to you.",
    color: "#ec4899",
    colorTo: "#f9a8d4",
    benefits: [
      {
        icon: FileText,
        title: "Resume Building",
        desc: "ATS-optimised, recruiter-reviewed resumes crafted to highlight your projects, skills, and placement readiness.",
      },
      {
        icon: Linkedin,
        title: "Social Profiling for Jobs",
        desc: "LinkedIn headline, summary, skills, and connection strategy — plus GitHub portfolio setup with pinned projects.",
      },
    ],
  },
  {
    id: "placement",
    label: "Placement Support",
    eyebrow: "Module 05",
    headline: "We stay with you until you're placed",
    description: "Off-campus drive alerts, a focused pre-placement sprint, and ongoing support — because the training doesn't stop at batch end.",
    color: "#8b5cf6",
    colorTo: "#c4b5fd",
    benefits: [
      {
        icon: Bell,
        title: "Off-Campus Drive Notifications",
        desc: "Curated job drive alerts sent directly to you — no hunting job boards, no missing deadlines.",
      },
      {
        icon: Zap,
        title: "1-Week Pre-Placement Training",
        desc: "An intensive final sprint before you start applying — revision, strategy, and confidence calibration.",
      },
    ],
  },
];

// ─── Promo banners ───────────────────────────────────────────────────────────

interface Banner {
  id: string;
  tag: string;
  headline: string;
  sub: string;
  cta: string;
  color: string;
  colorTo: string;
  icon: React.ElementType;
}

const banners: Banner[] = [
  {
    id: "discount",
    tag: "LIMITED OFFER",
    headline: "Student discount — up to 30% off",
    sub: "Present your college ID at enrolment. Valid for current & next batch.",
    cta: "Claim Discount",
    color: "#f59e0b",
    colorTo: "#fcd34d",
    icon: Tag,
  },
  {
    id: "batch",
    tag: "NEXT BATCH",
    headline: "New batch starting soon",
    sub: "Seats fill fast. Register now to lock in your spot before the batch closes.",
    cta: "Reserve My Seat",
    color: "#6366f1",
    colorTo: "#a5b4fc",
    icon: Calendar,
  },
  {
    id: "free",
    tag: "FREE SESSION",
    headline: "Try a free demo class first",
    sub: "Attend one full session — no payment, no commitment. See if the program fits.",
    cta: "Book Free Session",
    color: "#10b981",
    colorTo: "#6ee7b7",
    icon: Gift,
  },
];

// ─── Scrolling banner strip ──────────────────────────────────────────────────

export function PromoBannerStrip({ color = "#6366f1", colorTo = "#a5b4fc" }: { color?: string; colorTo?: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % banners.length), 4000);
    return () => clearInterval(t);
  }, []);

  const b = banners[active];
  const Icon = b.icon;

  return (
    <div className="overflow-hidden border-b border-border" style={{ background: `linear-gradient(90deg, ${b.color}18, ${b.colorTo}18)` }}>
      <div className="container-prose flex items-center justify-between gap-4 py-3">
        {/* Left: cycling content */}
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="hidden shrink-0 rounded-full p-1.5 sm:flex"
            style={{ background: `${b.color}25`, color: b.color }}
          >
            <Icon size={14} />
          </span>
          <span
            className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-widest"
            style={{ background: b.color, color: "#fff" }}
          >
            {b.tag}
          </span>
          <p className="truncate text-[13px] font-medium text-foreground">
            {b.headline}
            <span className="ml-2 hidden text-muted-foreground sm:inline font-normal">{b.sub}</span>
          </p>
        </div>

        {/* Right: CTA + dots */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/support"
            className="hidden whitespace-nowrap rounded-full px-3 py-1 text-[11.5px] font-semibold transition-colors sm:inline-flex items-center gap-1"
            style={{ background: b.color, color: "#fff" }}
          >
            {b.cta} <ArrowRight size={11} />
          </Link>
          {/* Dot indicators */}
          <div className="flex gap-1">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === active ? "16px" : "6px",
                  background: i === active ? b.color : "#00000025",
                }}
                aria-label={`Banner ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Full benefits section ───────────────────────────────────────────────────

export function PlacementBenefitsSection({ color = "#6366f1", colorTo = "#a5b4fc" }: { color?: string; colorTo?: string }) {
  const [activeModule, setActiveModule] = useState(0);
  const mod = modules[activeModule];

  return (
    <section className="border-b border-border bg-paper">
      <div className="container-prose py-20">
        <Reveal>
          <p className="eyebrow mb-3">Student Exclusive · Placement Benefits</p>
          <h2 className="max-w-3xl text-balance text-3xl leading-tight md:text-[40px]">
            Everything you need to{" "}
            <span className="italic font-serif" style={{ color }}>land your first job</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            10 structured benefits across 5 modules — technical depth, aptitude training,
            interview simulation, career profiling, and active placement support.
          </p>
        </Reveal>

        {/* Module tab pills */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {modules.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActiveModule(i)}
                className="rounded-full border px-4 py-2 text-[12.5px] font-semibold tracking-wide transition-all"
                style={
                  i === activeModule
                    ? { background: m.color, borderColor: m.color, color: "#fff" }
                    : { borderColor: "var(--color-border)", color: "var(--color-muted-foreground)", background: "transparent" }
                }
              >
                {m.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active module panel */}
        <Reveal key={activeModule} delay={0.05}>
          <div
            className="mt-8 overflow-hidden rounded-2xl border border-border"
            style={{ background: `linear-gradient(135deg, ${mod.color}0d, transparent 60%)` }}
          >
            {/* Module header */}
            <div className="border-b border-border px-8 py-7">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span
                    className="rounded-md px-2 py-1 text-[10px] font-bold tracking-widest text-white"
                    style={{ background: mod.color }}
                  >
                    {mod.eyebrow}
                  </span>
                  <h3 className="mt-3 text-[22px] font-semibold leading-snug">{mod.headline}</h3>
                  <p className="mt-2 max-w-xl text-[14px] text-muted-foreground">{mod.description}</p>
                </div>
                <div
                  className="hidden shrink-0 rounded-2xl p-4 md:flex"
                  style={{ background: `${mod.color}18` }}
                >
                  <span className="text-3xl font-bold font-serif" style={{ color: mod.color }}>
                    {String(activeModule + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>

            {/* Benefits grid */}
            <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {mod.benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="bg-paper p-6">
                    <div
                      className="mb-4 inline-flex rounded-xl p-2.5"
                      style={{ background: `${mod.color}18` }}
                    >
                      <Icon size={18} style={{ color: mod.color }} />
                    </div>
                    <h4 className="text-[15px] font-semibold">{b.title}</h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{b.desc}</p>
                  </div>
                );
              })}

              {/* "All X benefits" count cell if only 1 benefit in module */}
              {mod.benefits.length === 1 && (
                <div
                  className="bg-paper p-6 flex items-center justify-center"
                  style={{ background: `${mod.color}06` }}
                >
                  <div className="text-center">
                    <p className="text-4xl font-bold font-serif" style={{ color: mod.color }}>10</p>
                    <p className="mt-1 text-[12px] font-medium tracking-wide text-muted-foreground">TOTAL BENEFITS</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        {/* All benefits summary strip */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {modules.flatMap((m) => m.benefits).map((b) => {
              const Icon = b.icon;
              return (
                <span
                  key={b.title}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[12px] font-medium text-foreground"
                >
                  <Icon size={12} className="text-muted-foreground" />
                  {b.title}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Home page compact teaser (for non-placement pages) ─────────────────────

export function PlacementBenefitsTeaser() {
  return (
    <section className="border-b border-border bg-paper">
      <div className="container-prose py-20">
        <Reveal>
          <p className="eyebrow mb-3">Student Exclusive Programs</p>
          <h2 className="max-w-3xl text-balance text-3xl leading-tight md:text-[40px]">
            Dedicated placement programs for final-year students
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Java & Python placement tracks come with 10 structured benefits designed to get you from
            student to employed — technical depth, aptitude, interview prep, career profiling, and active
            placement support.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {modules.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.06}>
              <div
                className="flex flex-col gap-3 rounded-2xl border border-border p-5 h-full"
                style={{ background: `${m.color}08` }}
              >
                <span
                  className="w-fit rounded-md px-2 py-0.5 text-[9.5px] font-bold tracking-widest text-white"
                  style={{ background: m.color }}
                >
                  {m.eyebrow}
                </span>
                <h3 className="text-[14px] font-semibold leading-snug">{m.label}</h3>
                <ul className="mt-auto space-y-1.5">
                  {m.benefits.map((b) => {
                    const Icon = b.icon;
                    return (
                      <li key={b.title} className="flex items-center gap-2 text-[12px] text-muted-foreground">
                        <Icon size={11} style={{ color: m.color }} className="shrink-0" />
                        {b.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to={"/programs/java-placement" as string} className="btn-primary">
              Java Placement Program →
            </Link>
            <Link to={"/programs/python-placement" as string} className="btn-ghost">
              Python Placement Program →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
