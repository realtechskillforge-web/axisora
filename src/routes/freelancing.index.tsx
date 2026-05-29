import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { FREELANCING, PROJECTS } from "@/data/freelancing";
import { ArrowUpRight, Briefcase } from "lucide-react";

export const Route = createFileRoute("/freelancing/")({
  head: () => ({
    meta: [
      { title: "Freelancing Hub — Axisora Forge" },
      { name: "description", content: "Full-stack apps, online shops, shop management, WordPress/Shopify, static sites, digital marketing and SEO — for real clients." },
    ],
  }),
  component: Freelancing,
});

function Freelancing() {
  const entries = Object.entries(FREELANCING);
  return (
    <PageShell>
      <section className="border-b border-border bg-paper">
        <div className="container-prose py-20">
          <Reveal>
            <p className="eyebrow">Freelancing Hub</p>
            <h1 className="mt-5 max-w-3xl text-balance text-[40px] leading-[1.05] md:text-[60px]">
              We ship real client work — apps, stores, marketing, SEO.
            </h1>
            <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted-foreground">
              Beyond the academy, Axisora Forge is a working freelancing studio. We've delivered
              full-stack platforms, digital institutions, Shopify and WordPress stores, static sites,
              and full-funnel digital marketing + SEO for clients across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/support" className="btn-primary">Start a Project</Link>
              <Link to="/programs" className="btn-ghost">Academy</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-prose py-16">
          <Reveal>
            <p className="eyebrow mb-3">Categories</p>
            <h2 className="text-3xl md:text-[40px]">What we do</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {entries.map(([slug, f], i) => (
              <Reveal key={slug} delay={i * 0.04}>
                <Link to={`/freelancing/${slug}` as string} className="card-soft group block h-full">
                  <Briefcase size={22} style={{ color: f.color }} />
                  <h3 className="mt-5 text-[19px] leading-snug">{f.category}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{f.tagline}</p>
                  <p className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium transition-all group-hover:gap-3" style={{ color: f.color }}>
                    View details <ArrowUpRight size={14} />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-prose py-16">
          <Reveal>
            <p className="eyebrow mb-3">Selected Client Work</p>
            <h2 className="text-3xl md:text-[40px]">Live projects we've delivered</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.04}>
                <a href={`https://${p.url}`} target="_blank" rel="noreferrer" className="card-soft block h-full">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-muted-foreground">PROJECT 0{i + 1}</p>
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
    </PageShell>
  );
}
