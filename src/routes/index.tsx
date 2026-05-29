import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { PROGRAMS } from "@/data/programs";
import { FREELANCING, PROJECTS } from "@/data/freelancing";
import { ArrowUpRight, Sparkles, Trophy, Briefcase } from "lucide-react";
import heroImg from "@/assets/hero-ambient.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Axisora Forge — Technical Academy & Freelancing Hub" },
      { name: "description", content: "Role-based technical programs and a freelancing studio that ships real full-stack, WordPress/Shopify, and digital marketing work." },
      { property: "og:title", content: "Axisora Forge — Technical Academy & Freelancing Hub" },
      { property: "og:description", content: "Learn what matters. Ship real work. Get paid freelancing opportunities as a top student." },
    ],
  }),
  component: Home,
});

const programList = Object.entries(PROGRAMS);
const freelanceList = Object.entries(FREELANCING);

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <img src={heroImg} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-background/55" />
        <div className="container-prose relative grid gap-12 py-24 md:grid-cols-12 md:py-28">
          <Reveal className="md:col-span-9">
            <p className="eyebrow">Axisora Forge · Academy + Freelancing Hub</p>
            <h1 className="mt-6 text-balance text-[40px] leading-[1.05] md:text-[68px]">
              Focused technical learning and a freelancing studio that{" "}
              <span className="italic font-serif" style={{ color: "var(--color-ember)" }}>
                ships real work
              </span>
              .
            </h1>
            <p className="mt-7 max-w-2xl text-[16.5px] leading-relaxed text-muted-foreground">
              Axisora Forge is two things in one: a focused technical academy and an active freelancing
              studio. We train role-ready engineers and we deliver full-stack apps, online shops, shop
              management systems, WordPress / Shopify builds, static sites, and digital marketing for
              real clients.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/programs" className="btn-primary">Explore Programs</Link>
              <Link to="/freelancing" className="btn-ghost">See Our Freelancing Work</Link>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="hidden md:col-span-3 md:flex md:items-end md:justify-end">
            <p className="text-right text-[11px] tracking-[0.3em] text-muted-foreground" style={{ writingMode: "vertical-rl" }}>
              LEARN · BUILD · SHIP · EARN
            </p>
          </Reveal>
        </div>
      </section>

      {/* highlight strip */}
      <section className="border-b border-border bg-paper">
        <div className="container-prose grid grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
          {["Role-based programs", "Mentor-guided learning", "Real freelancing projects", "Top-5 paid opportunities"].map((s) => (
            <div key={s} className="px-2 py-6 text-center md:py-8">
              <p className="text-[12.5px] font-medium tracking-wide text-foreground/80">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOP-5 freelancing highlight */}
      <section className="border-b border-border bg-background">
        <div className="container-prose py-20">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-14"
              style={{
                background:
                  "linear-gradient(135deg, oklch(62% 0.155 47 / 0.10), oklch(62% 0.155 47 / 0.02))",
              }}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle, var(--color-ember) 0%, transparent 70%)", opacity: 0.25 }} />
              <div className="relative grid items-center gap-10 md:grid-cols-12">
                <div className="md:col-span-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-background/60 px-3 py-1 text-[11px] font-semibold tracking-widest text-ember" style={{ borderColor: "var(--color-ember)", color: "var(--color-ember)" }}>
                    <Trophy size={14} /> TOP 5 STUDENTS · FREELANCING ACCESS
                  </div>
                  <h2 className="mt-5 text-balance text-3xl leading-tight md:text-[44px]">
                    Top 5 students from every batch get real freelancing opportunities.
                  </h2>
                  <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
                    Based on skill verification at the end of each batch, our top 5 students are
                    onboarded into live Axisora freelancing projects — full-stack apps, Shopify stores,
                    SEO campaigns, and digital marketing for real clients. Real shipping. Real pay.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link to="/programs" className="btn-primary">Pick a Program</Link>
                    <Link to="/freelancing" className="btn-ghost">See the Work</Link>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3, 4, 5].map((n, i) => (
                      <div key={n} className={`flex aspect-square items-center justify-center rounded-2xl border text-2xl font-serif ${i === 4 ? "col-span-3 text-3xl" : ""}`} style={{ borderColor: "var(--color-ember)", color: "var(--color-ember)", background: "oklch(62% 0.155 47 / 0.05)" }}>
                        #{n}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="border-b border-border bg-paper">
        <div className="container-prose py-20">
          <Reveal>

            <p className="eyebrow mb-3">Academy · Programs</p>
            <h2 className="max-w-3xl text-balance text-3xl leading-[1.1] md:text-[44px]">
              Eight enterprise-grade tracks for modern technical careers
            </h2>
            <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
              Each program is built for clear orientation, applied depth, and role alignment — Java Full
              Stack, AI Backend, Angular, Flutter, Android, Digital Marketing, and student-only
              placement tracks for Java &amp; Python.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programList.map(([slug, p], i) => (
              <Reveal key={slug} delay={i * 0.04}>
                <Link to={`/programs/${slug}` as string} className="card-soft group block h-full">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground">
                        0{i + 1}
                      </p>
                      <h3 className="mt-3 text-[19px] leading-snug transition-colors" style={{ ['--c' as never]: p.color }}>
                        {p.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.audience.map((a) => <span key={a} className="chip">{a}</span>)}
                      </div>
                    </div>
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white transition-transform group-hover:scale-110 group-hover:rotate-6"
                      style={{ background: `linear-gradient(135deg, ${p.color}, ${p.colorTo})` }}
                    >
                      {p.initials}
                    </div>
                  </div>
                  <p className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium transition-all group-hover:gap-3" style={{ color: p.color }}>
                    Explore program <ArrowUpRight size={14} />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FREELANCING */}
      <section className="border-b border-border bg-background">
        <div className="container-prose py-20">
          <Reveal>
            <p className="eyebrow mb-3">Freelancing Hub</p>
            <h2 className="max-w-3xl text-balance text-3xl leading-[1.1] md:text-[44px]">
              We're not just an academy — we ship real client work
            </h2>
            <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
              Full-stack apps, online shops, shop management, digital institutions, WordPress / Shopify,
              static sites, and digital marketing + SEO — for real businesses across India.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {freelanceList.map(([slug, f], i) => (
              <Reveal key={slug} delay={i * 0.04}>
                <Link to={`/freelancing/${slug}` as string} className="card-soft group block h-full">
                  <Briefcase size={22} style={{ color: f.color }} />
                  <h3 className="mt-5 text-[19px] leading-snug">{f.category}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
                    {f.services.slice(0, 3).join(" · ")}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium transition-all group-hover:gap-3" style={{ color: f.color }}>
                    View details <ArrowUpRight size={14} />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="border-b border-border bg-paper">
        <div className="container-prose py-20">
          <Reveal>
            <p className="eyebrow mb-3">Selected Client Work</p>
            <h2 className="text-3xl md:text-[40px]">Live projects we've delivered</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.04}>
                <a href={`https://${p.url}`} target="_blank" rel="noreferrer" className="card-soft block h-full">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground">
                    PROJECT 0{i + 1}
                  </p>
                  <h3 className="mt-3 text-[18px]">{p.name}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{p.note}</p>
                  <p className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-ember">
                    Visit live <ArrowUpRight size={14} />
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="container-prose py-20 text-center">
          <Reveal>
            <Sparkles className="mx-auto mb-5" style={{ color: "var(--color-ember)" }} />
            <h2 className="text-balance text-3xl md:text-[44px]">
              Learn what matters. Ship real work. Get paid.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Whether you're here to learn or to hire us for your next build, let's talk.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link to="/support" className="btn-primary">Talk to Us</Link>
              <Link to="/about" className="btn-ghost">About Axisora</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
