import { Link } from "@tanstack/react-router";
import { PageShell } from "./PageShell";
import { Reveal } from "./Reveal";
import { InquiryForm } from "./InquiryForm";
import { PlacementBenefitsSection, PromoBannerStrip } from "./PlacementBenefits";

export interface ProgramData {
  code: string;
  title: string;
  tagline: string;
  audience: string[];
  duration: string;
  color: string;
  colorTo: string;
  initials: string;
  overview: string;
  outcomes: string[];
  syllabus: { title: string; items: string[] }[];
}

export function ProgramTemplate({ data, isPlacement = false }: { data: ProgramData; isPlacement?: boolean }) {
  return (
    <PageShell>
      {/* Promo banner strip — placement programs only */}
      {isPlacement && <PromoBannerStrip color={data.color} colorTo={data.colorTo} />}

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(60% 50% at 80% 20%, ${data.color}33, transparent 60%)`,
          }}
        />
        <div className="container-prose relative grid gap-10 py-20 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <p className="eyebrow">Program · {data.code}</p>
            <h1 className="mt-5 text-balance text-[40px] leading-[1.05] md:text-[60px]">
              {data.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted-foreground">
              {data.tagline}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {data.audience.map((a) => (
                <span key={a} className="chip">{a}</span>
              ))}
              <span className="chip" style={{ borderColor: data.color, color: data.color }}>
                {data.duration}
              </span>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/support" className="btn-primary">Enroll / Inquire</Link>
              <Link to="/programs" className="btn-ghost">All Programs</Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="hidden md:col-span-4 md:flex md:items-center md:justify-end">
            <div
              className="flex h-44 w-44 items-center justify-center rounded-3xl text-4xl font-bold text-white shadow-2xl"
              style={{ background: `linear-gradient(135deg, ${data.color}, ${data.colorTo})` }}
            >
              {data.initials}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Placement-only: 3 promo offer cards */}
      {isPlacement && (
        <section className="border-b border-border bg-background">
          <div className="container-prose py-10">
            <div className="grid gap-4 md:grid-cols-3">
              {/* Discount */}
              <Reveal>
                <div
                  className="flex items-start gap-4 rounded-2xl border border-border p-5"
                  style={{ background: `#f59e0b0d` }}
                >
                  <div className="rounded-xl p-2.5 shrink-0" style={{ background: "#f59e0b20" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest" style={{ color: "#f59e0b" }}>STUDENT OFFER</p>
                    <h4 className="mt-1 text-[15px] font-semibold">Up to 30% off</h4>
                    <p className="mt-1 text-[12.5px] text-muted-foreground">Present your college ID. Valid current & next batch.</p>
                  </div>
                </div>
              </Reveal>

              {/* Batch starting */}
              <Reveal delay={0.05}>
                <div
                  className="flex items-start gap-4 rounded-2xl border border-border p-5"
                  style={{ background: `${data.color}0d` }}
                >
                  <div className="rounded-xl p-2.5 shrink-0" style={{ background: `${data.color}20` }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={data.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest" style={{ color: data.color }}>NEW BATCH</p>
                    <h4 className="mt-1 text-[15px] font-semibold">Batch starting soon</h4>
                    <p className="mt-1 text-[12.5px] text-muted-foreground">Limited seats — register now to lock your spot.</p>
                  </div>
                </div>
              </Reveal>

              {/* Free session */}
              <Reveal delay={0.1}>
                <div
                  className="flex items-start gap-4 rounded-2xl border border-border p-5"
                  style={{ background: `#10b9810d` }}
                >
                  <div className="rounded-xl p-2.5 shrink-0" style={{ background: "#10b98120" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest" style={{ color: "#10b981" }}>FREE SESSION</p>
                    <h4 className="mt-1 text-[15px] font-semibold">Try a free demo class</h4>
                    <p className="mt-1 text-[12.5px] text-muted-foreground">One full session, no payment, no commitment.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Freelancing perk — non-placement programs only */}
      {!isPlacement && (
        <section className="border-b border-border bg-background">
          <div className="container-prose py-10">
            <Reveal className="card-soft flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="eyebrow">Top 5 Perk</p>
                <h3 className="mt-2 text-[20px]">
                  Top 5 students per batch get real freelancing opportunities.
                </h3>
                <p className="mt-2 max-w-2xl text-[14px] text-muted-foreground">
                  Based on skill verification, the top 5 students from each batch are onboarded into live
                  Axisora freelancing projects — real clients, real shipping, real income.
                </p>
              </div>
              <Link to="/freelancing" className="btn-primary shrink-0">See Freelancing →</Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Overview + Outcomes */}
      <section className="border-b border-border bg-background">
        <div className="container-prose grid gap-12 py-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow mb-3">Overview</p>
            <h2 className="text-3xl leading-tight md:text-[36px]">What this program covers</h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-muted-foreground">{data.overview}</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="eyebrow mb-3">Outcomes</p>
            <ul className="space-y-3">
              {data.outcomes.map((o, i) => (
                <li key={i} className="flex gap-3 text-[14.5px] text-foreground">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: data.color }}
                  />
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Placement benefits — placement programs only */}
      {isPlacement && <PlacementBenefitsSection color={data.color} colorTo={data.colorTo} />}

      {/* Syllabus */}
      <section className="bg-paper">
        <div className="container-prose py-20">
          <Reveal>
            <p className="eyebrow mb-3">Syllabus</p>
            <h2 className="text-3xl leading-tight md:text-[40px]">
              A clear, week-by-week path
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {data.syllabus.map((mod, i) => (
              <Reveal key={mod.title} delay={i * 0.05}>
                <article className="card-soft h-full">
                  <div className="flex items-start gap-4">
                    <span
                      className="rounded-md px-2 py-1 text-[11px] font-semibold tracking-widest text-white"
                      style={{ background: data.color }}
                    >
                      MOD 0{i + 1}
                    </span>
                    <h3 className="text-[19px] leading-snug">{mod.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {mod.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[13.5px] text-muted-foreground">
                        <span style={{ color: data.color }}>›</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enroll form */}
      <section className="border-t border-border bg-background">
        <div className="container-prose grid gap-10 py-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Enroll · Inquire</p>
            <h2 className="mt-3 text-3xl md:text-[36px]">Start {data.title}</h2>
            <p className="mt-4 text-[15px] text-muted-foreground">
              Get a personalized roadmap, batch dates, and fee details from our mentors. We reply
              within minutes during work hours.
            </p>
            <ul className="mt-6 space-y-2.5 text-[14px] text-muted-foreground">
              {isPlacement ? (
                <>
                  <li>✓ 10 structured placement benefits</li>
                  <li>✓ Mock interviews + GD sessions</li>
                  <li>✓ ATS resume + LinkedIn + GitHub</li>
                  <li>✓ Off-campus drive notifications</li>
                  <li>✓ 1-week pre-placement sprint</li>
                </>
              ) : (
                <>
                  <li>✓ Premium curriculum &amp; mentor guidance</li>
                  <li>✓ ATS resume, LinkedIn &amp; GitHub portfolio</li>
                  <li>✓ Placement prep + mock interviews</li>
                  <li>✓ Top 5 students get paid freelancing</li>
                </>
              )}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <InquiryForm defaultCourse={data.title} title="Inquire about this program" subtitle="Fill in once — we'll reach you on WhatsApp." />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
