import { useEffect, useState } from "react";
import { Phone, MessageCircle, X, PhoneCall } from "lucide-react";
import { SITE, buildWhatsAppUrl } from "@/lib/site-config";

export function FloatingActions() {
  const [showTalk, setShowTalk] = useState(false);
  const waHref = buildWhatsAppUrl(SITE.defaultWhatsAppMessage);

  useEffect(() => {
    if (!showTalk) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShowTalk(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showTalk]);

  return (
    <>
      {/* Floating cluster — bottom right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        <button
          onClick={() => setShowTalk(true)}
          className="group flex items-center gap-2 rounded-full border border-border-strong bg-foreground px-4 py-2.5 text-[12.5px] font-medium text-background shadow-lg shadow-black/15 transition-all hover:scale-105 hover:shadow-xl"
          aria-label="Talk to us"
        >
          <Phone size={15} />
          Talk to Us
        </button>

        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-emerald-900/25 transition-transform hover:scale-110"
          style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
        >
          <span className="absolute inset-0 animate-ping rounded-full opacity-40" style={{ background: "#25D366" }} />
          <MessageCircle size={26} className="relative" fill="white" strokeWidth={0} />
        </a>
      </div>

      {showTalk && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 animate-fade-in"
          onClick={() => setShowTalk(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl border border-border bg-surface p-7 shadow-2xl animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTalk(false)}
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <p className="eyebrow">Talk to Axisora</p>
            <h3 className="mt-2 text-2xl">How would you like to reach us?</h3>
            <p className="mt-2 text-[13.5px] text-muted-foreground">
              Pick the option that works best for you — we usually respond within minutes during work hours.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phoneNumber}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background p-4 transition-all hover:border-ember hover:shadow-md"
                style={{ ["--c" as never]: "var(--color-ember)" }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full text-white" style={{ background: "var(--color-ember)" }}>
                    <PhoneCall size={18} />
                  </span>
                  <div>
                    <p className="text-[13.5px] font-semibold text-foreground">Call Us</p>
                    <p className="text-[12.5px] text-muted-foreground">{SITE.phoneNumber}</p>
                  </div>
                </div>
                <span className="text-[12px] font-semibold text-ember opacity-0 transition-opacity group-hover:opacity-100">Dial →</span>
              </a>
              <a
                href={buildWhatsAppUrl(SITE.defaultWhatsAppMessage)}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background p-4 transition-all hover:shadow-md"
                style={{ borderColor: "transparent", backgroundImage: "linear-gradient(var(--color-background), var(--color-background)), linear-gradient(135deg,#25D366,#128C7E)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box" }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full text-white" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
                    <MessageCircle size={18} fill="white" strokeWidth={0} />
                  </span>
                  <div>
                    <p className="text-[13.5px] font-semibold text-foreground">Chat on WhatsApp</p>
                    <p className="text-[12.5px] text-muted-foreground">Quick replies, file sharing</p>
                  </div>
                </div>
                <span className="text-[12px] font-semibold opacity-0 transition-opacity group-hover:opacity-100" style={{ color: "#128C7E" }}>Open →</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
