import { Link } from "@tanstack/react-router";
import { PageShell } from "./PageShell";
import { Reveal } from "./Reveal";
import { InquiryForm } from "./InquiryForm";


export interface ProgramData {
  code: string;
  title: string;
  tagline: string;
  audience: string[];
  duration: string;
  color: string; // hex gradient end-from
  colorTo: string;
  initials: string;
  overview: string;
  outcomes: string[];
  syllabus: { title: string; items: string[] }[];
}

export function ProgramTemplate({ data }: { data: ProgramData }) {
  return (
    <PageShell>
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

      {/* Freelancing perk */}
      <section className="border-b border-border bg-background">
        <div className="container-prose py-10">
          <Reveal className="card-soft flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between"
            >
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
              <li>✓ Premium curriculum &amp; mentor guidance</li>
              <li>✓ ATS resume, LinkedIn &amp; GitHub portfolio</li>
              <li>✓ Placement prep + mock interviews</li>
              <li>✓ Top 5 students get paid freelancing</li>
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

