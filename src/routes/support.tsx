import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SITE, buildWhatsAppUrl } from "@/lib/site-config";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Contact & Inquiry — Axisora Forge" },
      { name: "description", content: "Get in touch with Axisora Forge for course enrollment, freelancing projects, and project quotations. WhatsApp, call, or inquiry form." },
      { property: "og:title", content: "Contact & Inquiry — Axisora Forge" },
      { property: "og:description", content: "Course enrollment and freelancing project inquiries — fast WhatsApp replies." },
    ],
  }),
  component: Support,
});

function Support() {
  return (
    <PageShell>
      <section className="border-b border-border bg-paper">
        <div className="container-prose py-20">
          <Reveal>
            <p className="eyebrow">Support · Contact</p>
            <h1 className="mt-5 max-w-3xl text-balance text-[40px] leading-[1.05] md:text-[60px]">
              Let's talk — courses, projects, or quotations.
            </h1>
            <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted-foreground">
              Reach out for academy enrollment, freelancing project work, or request a quick
              quotation. We usually reply within minutes on WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-prose grid gap-10 py-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="card-soft h-full">
              <h2 className="text-2xl">Reach us directly</h2>
              <ul className="mt-6 space-y-4 text-[14.5px]">
                <li className="flex items-center gap-3">
                  <Phone size={18} style={{ color: "var(--color-ember)" }} />
                  <a href={`tel:${SITE.phoneNumber}`} className="hover:text-ember">{SITE.phoneNumber}</a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} style={{ color: "#25D366" }} />
                  <a href={buildWhatsAppUrl(SITE.defaultWhatsAppMessage)} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp Chat</a>
                </li>
                <li className="flex items-center gap-3"><Mail size={18} style={{ color: "var(--color-ember)" }} /> {SITE.email}</li>
                <li className="flex items-center gap-3"><MapPin size={18} style={{ color: "var(--color-ember)" }} /> Hyderabad, India</li>
              </ul>
              <p className="mt-8 text-[12.5px] text-muted-foreground">
                Prefer to talk? Tap the floating <strong>Talk to Us</strong> button at any time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <InquiryForm title="Send us an inquiry" subtitle="Course registration, project development, or a quick quotation — pick any." />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
