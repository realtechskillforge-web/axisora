import { Link } from "@tanstack/react-router";
import { PageShell } from "./PageShell";
import { Reveal } from "./Reveal";

export interface FreelanceData {
  category: string;
  title: string;
  tagline: string;
  color: string;
  colorTo: string;
  services: string[];
  stack: string[];
  projects: { name: string; url?: string; note: string }[];
}

export function FreelanceTemplate({ data }: { data: FreelanceData }) {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-border bg-paper">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(50% 50% at 20% 30%, ${data.color}26, transparent 60%)` }}
        />
        <div className="container-prose relative py-20">
          <Reveal>
            <p className="eyebrow">Freelancing · {data.category}</p>
            <h1 className="mt-5 max-w-3xl text-balance text-[40px] leading-[1.05] md:text-[60px]">
              {data.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted-foreground">
              {data.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="support" className="btn-primary">Start a Project</a>
              <a href="freelancing" className="btn-ghost">All Services</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-prose grid gap-12 py-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow mb-3">What we deliver</p>
            <ul className="grid gap-3 md:grid-cols-2">
              {data.services.map((s) => (
                <li key={s} className="flex gap-3 text-[14.5px]">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: data.color }} />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="eyebrow mb-3">Stack & Tools</p>
            <div className="flex flex-wrap gap-2">
              {data.stack.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-prose py-20">
          <Reveal>
            <p className="eyebrow mb-3">Selected Projects</p>
            <h2 className="text-3xl md:text-[40px]">Recent work we've shipped</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {data.projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <article className="card-soft h-full">
                  <div
                    className="mb-5 inline-block rounded-md px-2 py-1 text-[11px] font-semibold tracking-widest text-white"
                    style={{ background: `linear-gradient(135deg, ${data.color}, ${data.colorTo})` }}
                  >
                    PROJECT 0{i + 1}
                  </div>
                  <h3 className="text-[20px]">{p.name}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{p.note}</p>
                  {p.url && (
                    <a
                      href={`https://${p.url}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium hover:gap-3"
                      style={{ color: data.color }}
                    >
                      Visit {p.url} →
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
