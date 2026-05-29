import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-[15px] font-semibold tracking-[0.14em]">AXISORA FORGE</p>
          <p className="mt-1 text-[10px] font-medium tracking-[0.32em] text-muted-foreground">
            ACADEMY · FREELANCING HUB
          </p>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-muted-foreground">
            A focused technical academy and freelancing studio. We train role-ready engineers and ship
            real-world web, mobile, and digital marketing work for our clients.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Academy</p>
          <ul className="space-y-2 text-[13.5px]">
            <li><Link to="/programs" className="text-muted-foreground hover:text-foreground">All Programs</Link></li>
            <li><Link to="/programs/flutter" className="text-muted-foreground hover:text-foreground">Flutter</Link></li>
            <li><Link to="/programs/angular-frontend" className="text-muted-foreground hover:text-foreground">Angular</Link></li>
            <li><Link to="/programs/java-backend" className="text-muted-foreground hover:text-foreground">Java Backend</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Freelancing</p>
          <ul className="space-y-2 text-[13.5px]">
            <li><Link to="/freelancing" className="text-muted-foreground hover:text-foreground">Our Work</Link></li>
            <li><Link to="/freelancing/full-stack" className="text-muted-foreground hover:text-foreground">Full Stack</Link></li>
            <li><Link to="/freelancing/wordpress-shopify" className="text-muted-foreground hover:text-foreground">WordPress / Shopify</Link></li>
            <li><Link to="/freelancing/digital-marketing" className="text-muted-foreground hover:text-foreground">Digital Marketing</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-prose flex flex-col items-start justify-between gap-3 py-5 text-[12px] text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Axisora Forge. Built with care.</p>
          <p>Hyderabad · India</p>
        </div>
      </div>
    </footer>
  );
}
