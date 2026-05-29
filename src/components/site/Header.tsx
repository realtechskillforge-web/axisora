import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

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
  const [programsOpen, setProgramsOpen] = useState(false);
  const [freelancingOpen, setFreelancingOpen] = useState(false);

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
        {/* Logo */}
        <Link to="/" aria-label="Axisora Forge — Home" className="shrink-0" onClick={() => setOpen(false)}>
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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Dropdown label="Programs" items={programs} active={path.startsWith("/programs")} />
          <Dropdown label="Freelancing" items={freelancing} active={path.startsWith("/freelancing")} />
          <NavLink to="/support">Support</NavLink>
          <Link to="/support" className="btn-primary ml-2">Talk to Us</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 top-16 z-50 flex flex-col bg-background md:hidden overflow-y-auto">
          {/* Header bar inside drawer */}
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <p className="text-[10px] font-semibold tracking-[0.3em] text-muted-foreground">NAVIGATION</p>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-col px-5 py-4 gap-1">

            {/* Home */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                path === "/" ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors ${
                path === "/about" ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              About
            </Link>

            {/* Programs accordion */}
            <div className="rounded-xl overflow-hidden border border-border mt-1">
              <button
                onClick={() => setProgramsOpen((v) => !v)}
                className={`flex w-full items-center justify-between px-4 py-3.5 text-[15px] font-medium transition-colors ${
                  path.startsWith("/programs") ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                Programs
                <ChevronDown size={16} className={`text-muted-foreground transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`} />
              </button>
              {programsOpen && (
                <div className="border-t border-border bg-paper px-2 py-2 flex flex-col gap-0.5">
                  {programs.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-[13.5px] transition-colors ${
                        path === p.to ? "bg-muted font-medium text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {p.label}
                      <ArrowUpRight size={13} className="shrink-0 opacity-40" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Freelancing accordion */}
            <div className="rounded-xl overflow-hidden border border-border mt-1">
              <button
                onClick={() => setFreelancingOpen((v) => !v)}
                className={`flex w-full items-center justify-between px-4 py-3.5 text-[15px] font-medium transition-colors ${
                  path.startsWith("/freelancing") ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                Freelancing
                <ChevronDown size={16} className={`text-muted-foreground transition-transform duration-200 ${freelancingOpen ? "rotate-180" : ""}`} />
              </button>
              {freelancingOpen && (
                <div className="border-t border-border bg-paper px-2 py-2 flex flex-col gap-0.5">
                  {freelancing.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-[13.5px] transition-colors ${
                        path === p.to ? "bg-muted font-medium text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {p.label}
                      <ArrowUpRight size={13} className="shrink-0 opacity-40" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Support */}
            <Link
              to="/support"
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors mt-1 ${
                path === "/support" ? "bg-muted text-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              Support
            </Link>
          </div>

          {/* CTA at bottom */}
          <div className="mt-auto border-t border-border px-5 py-5">
            <Link
              to="/support"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center text-[14px] py-3"
            >
              Talk to Us
            </Link>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Usually reply within minutes on WhatsApp
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
