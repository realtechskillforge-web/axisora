import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Axisora Forge" },
      { name: "description", content: "Axisora Forge is a focused technical academy and an active freelancing studio shipping real client work." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="border-b border-border bg-paper">
        <div className="container-prose py-20">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="mt-5 max-w-3xl text-balance text-[40px] leading-[1.05] md:text-[60px]">
              Two things, one studio: a technical academy and a freelancing hub.
            </h1>
            <p className="mt-7 max-w-2xl text-[16.5px] leading-relaxed text-muted-foreground">
              We exist because most technical training stops at theory. Axisora Forge teaches
              role-ready skills and runs an active freelancing practice — full-stack, Shopify /
              WordPress, static sites, and digital marketing — so our learners can step into real work,
              not just demos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-prose grid gap-12 py-16 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">The Academy</p>
            <h2 className="text-3xl md:text-[36px]">Role-based programs, mentor-guided</h2>
            <p className="mt-5 text-muted-foreground">
              Applied AI, Data Intelligence, Generative AI, Java Backend, Flutter, Java Android, and
              Angular Frontend — built for clear orientation and applied depth.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-3">The Freelancing Hub</p>
            <h2 className="text-3xl md:text-[36px]">We've delivered for real clients</h2>
            <p className="mt-5 text-muted-foreground">
              From digital institutions and online shops to shop management systems and brand
              storefronts — junkyardnear.me, jaskautoparts.com, stylehueapparels.com,
              gandikotafirecamping.fun, nextkeymedia.com, villagenaturalsorganic.store and more.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-prose py-16 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-[36px]">Want to learn with us — or hire us?</h2>
            <div className="mt-7 flex justify-center gap-3">
              <Link to="/programs" className="btn-primary">Programs</Link>
              <Link to="/freelancing" className="btn-ghost">Freelancing</Link>
              <Link to="/support" className="btn-ghost">Contact</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
