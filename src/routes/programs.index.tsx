import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { PROGRAMS } from "@/data/programs";
import { ArrowUpRight, Trophy } from "lucide-react";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programs — Axisora Forge" },
      { name: "description", content: "Role-based programs in Applied AI, Data Intelligence, Generative AI, Java Backend, Flutter, Java Android, and Angular." },
    ],
  }),
  component: Programs,
});

function Programs() {
  const entries = Object.entries(PROGRAMS);
  return (
    <PageShell>
      <section className="border-b border-border bg-paper">
        <div className="container-prose py-20">
          <Reveal>
            <p className="eyebrow">All Programs</p>
            <h1 className="mt-5 max-w-3xl text-balance text-[40px] leading-[1.05] md:text-[60px]">
              Eight enterprise-grade tracks for modern technical careers.
            </h1>
            <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted-foreground">
              Mentor-guided, project-driven, and built so that your top performers walk into paid
              freelancing work with our studio. Placement, ATS resume, LinkedIn & GitHub portfolio included.
            </p>
          </Reveal>
        </div>
      </section>


      <section className="border-b border-border bg-background">
        <div className="container-prose py-10">
          <Reveal>
            <div className="card-soft flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between" style={{ borderColor: "var(--color-ember)" }}>
              <div className="flex items-start gap-4">
                <Trophy size={26} style={{ color: "var(--color-ember)" }} />
                <div>
                  <h3 className="text-[18px]">Top 5 students per batch unlock paid freelancing.</h3>
                  <p className="mt-1 text-[13.5px] text-muted-foreground">
                    Verified through skill assessment at the end of every cohort.
                  </p>
                </div>
              </div>
              <Link to="/freelancing" className="btn-primary shrink-0">See Freelancing →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-prose py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {entries.map(([slug, p], i) => (
              <Reveal key={slug} delay={i * 0.04}>
                <Link to={`/programs/${slug}` as string} className="card-soft group block h-full">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground">0{i + 1}</p>
                      <h3 className="mt-3 text-[20px] leading-snug">{p.title}</h3>
                      <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{p.tagline}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.audience.map((a) => <span key={a} className="chip">{a}</span>)}
                        <span className="chip" style={{ color: p.color, borderColor: p.color }}>{p.duration}</span>
                      </div>
                    </div>
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-base font-bold text-white transition-transform group-hover:scale-110 group-hover:rotate-6" style={{ background: `linear-gradient(135deg, ${p.color}, ${p.colorTo})` }}>
                      {p.initials}
                    </div>
                  </div>
                  <p className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium transition-all group-hover:gap-3" style={{ color: p.color }}>
                    Explore syllabus <ArrowUpRight size={14} />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
