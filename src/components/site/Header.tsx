import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const programs = [
  { to: "/programs/java-fullstack-angular", label: "Java Full Stack — Angular" },
  { to: "/programs/ai-java-backend", label: "AI-Enabled Java Backend" },
  { to: "/programs/angular-frontend", label: "Angular Front End Engineer" },
  { to: "/programs/flutter", label: "Flutter App Development" },
  { to: "/programs/android-java", label: "Java Android Development" },
  { to: "/programs/digital-marketing", label: "Digital Marketing" },
  { to: "/programs/java-placement", label: "Java Placement (Students)" },
  { to: "/programs/python-placement", label: "Python Placement (Students)" },
];


const freelancing = [
  { to: "/freelancing/full-stack", label: "Full Stack Applications" },
  { to: "/freelancing/frontend", label: "Frontend Development" },
  { to: "/freelancing/wordpress-shopify", label: "WordPress / Shopify" },
  { to: "/freelancing/static-sites", label: "Static HTML / CSS / JS" },
  { to: "/freelancing/digital-marketing", label: "Digital Marketing" },
  { to: "/freelancing/seo", label: "SEO & Content" },
];

export function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className={`text-[13.5px] font-medium transition-colors ${
        path === to ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </Link>
  );

  const Dropdown = ({ label, items, active }: { label: string; items: { to: string; label: string }[]; active: boolean }) => (
    <div className="group relative">
      <button
        className={`flex items-center gap-1 text-[13.5px] font-medium transition-colors ${
          active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
        <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-xl border border-border bg-surface p-2 opacity-0 shadow-xl shadow-black/5 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className="block rounded-md px-3 py-2 text-[13px] text-foreground transition-colors hover:bg-muted"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between md:h-20">
        <Link to="/" aria-label="Axisora Forge — Home" className="shrink-0">
          <span className="inline-flex items-center gap-2.5 text-foreground">
            <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-hidden>
              <path d="M8 38 L24 8 L40 38" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.5 30 L33.5 30" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M24 40 L24 18" stroke="var(--color-ember)" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M19.5 22.5 L24 17 L28.5 22.5" stroke="var(--color-ember)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold tracking-[0.14em]">AXISORA FORGE</span>
              <span className="mt-1 text-[9px] font-medium tracking-[0.32em] text-muted-foreground">
                ACADEMY · FREELANCING HUB
              </span>
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Dropdown label="Programs" items={programs} active={path.startsWith("/programs")} />
          <Dropdown label="Freelancing" items={freelancing} active={path.startsWith("/freelancing")} />
          <NavLink to="/support">Support</NavLink>
          <Link to="/support" className="btn-primary ml-2">Talk to Us</Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <div className="container-prose flex flex-col gap-1 py-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <details className="group">
              <summary className="cursor-pointer text-[13.5px] font-medium text-muted-foreground">Programs</summary>
              <div className="mt-2 flex flex-col gap-1 pl-3">
                {programs.map((p) => <NavLink key={p.to} to={p.to}>{p.label}</NavLink>)}
              </div>
            </details>
            <details className="group">
              <summary className="cursor-pointer text-[13.5px] font-medium text-muted-foreground">Freelancing</summary>
              <div className="mt-2 flex flex-col gap-1 pl-3">
                {freelancing.map((p) => <NavLink key={p.to} to={p.to}>{p.label}</NavLink>)}
              </div>
            </details>
            <NavLink to="/support">Support</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
