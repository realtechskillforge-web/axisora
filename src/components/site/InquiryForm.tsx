import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, FileText } from "lucide-react";
import { SITE, COURSE_OPTIONS, PROJECT_TYPES, buildWhatsAppUrl } from "@/lib/site-config";

type Category = "Course Registration" | "Project Development" | "Get Quotation";

interface InquiryFormProps {
  defaultCourse?: string;
  compact?: boolean;
  title?: string;
  subtitle?: string;
}

export function InquiryForm({ defaultCourse, compact = false, title, subtitle }: InquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState<Category>(defaultCourse ? "Course Registration" : "Course Registration");
  const [course, setCourse] = useState(defaultCourse ?? COURSE_OPTIONS[0]);
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState("");

  function buildMessage() {
    const lines = [
      "*NEW ENQUIRY — AXISORA FORGE*",
      "",
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      `*Phone:* ${phone}`,
      `*Category:* ${category}`,
    ];
    if (category === "Course Registration") lines.push(`*Course:* ${course}`);
    if (category === "Project Development") lines.push(`*Project Type:* ${projectType}`);
    if (category === "Get Quotation") {
      lines.push(`*Project Type:* ${projectType}`);
      if (budget) lines.push(`*Budget:* ${budget}`);
      if (timeline) lines.push(`*Timeline:* ${timeline}`);
    }
    if (message) lines.push(`*Message:* ${message}`);
    return lines.join("\n");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) return;
    setStatus("sending");
    setErrMsg("");

    const payload = {
      timestamp: new Date().toISOString(),
      name, email, phone, category,
      course: category === "Course Registration" ? course : "",
      projectType: category !== "Course Registration" ? projectType : "",
      budget, timeline, message,
      source: typeof window !== "undefined" ? window.location.href : "",
    };

    // Try Google Sheets (Apps Script Web App) — non-blocking
    if (SITE.sheetsWebhookUrl) {
      try {
        await fetch(SITE.sheetsWebhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.warn("Sheets webhook failed", err);
      }
    }

    // Open WhatsApp in a new tab — site stays open
    try {
      const waUrl = buildWhatsAppUrl(buildMessage());
      const waWindow = window.open(waUrl, "_blank", "noopener,noreferrer");
      // If pop-up was blocked, fall back to same-tab navigation
      if (!waWindow) {
        window.location.href = waUrl;
      }
      setStatus("ok");
    } catch (err) {
      setStatus("err");
      setErrMsg("Could not open WhatsApp. Please call us directly.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`card-soft w-full ${compact ? "" : "max-w-2xl"}`}
      aria-label="Inquiry form"
    >
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h3 className="text-2xl">{title}</h3>}
          {subtitle && <p className="mt-2 text-[13.5px] text-muted-foreground">{subtitle}</p>}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" required>
          <input value={name} onChange={(e) => setName(e.target.value)} required maxLength={120} className={inputCls} placeholder="Your name" />
        </Field>
        <Field label="Phone" required>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} required maxLength={20} type="tel" className={inputCls} placeholder="+91 9XXXXXXXXX" />
        </Field>
        <Field label="Email" required>
          <input value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={200} type="email" className={inputCls} placeholder="you@email.com" />
        </Field>
        <Field label="I'm interested in" required>
          <select value={category} onChange={(e) => setCategory(e.target.value as Category)} className={inputCls}>
            <option>Course Registration</option>
            <option>Project Development</option>
            <option>Get Quotation</option>
          </select>
        </Field>

        {category === "Course Registration" && (
          <Field label="Choose course" required className="md:col-span-2">
            <select value={course} onChange={(e) => setCourse(e.target.value)} className={inputCls}>
              {COURSE_OPTIONS.map((c) => <option key={c}>{c}</option>)}
            </select>
          </Field>
        )}

        {category !== "Course Registration" && (
          <Field label="Project type" required className="md:col-span-2">
            <select value={projectType} onChange={(e) => setProjectType(e.target.value)} className={inputCls}>
              {PROJECT_TYPES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </Field>
        )}

        {category === "Get Quotation" && (
          <>
            <Field label="Budget (optional)">
              <input value={budget} onChange={(e) => setBudget(e.target.value)} maxLength={60} className={inputCls} placeholder="₹ 25,000 – 1,00,000" />
            </Field>
            <Field label="Timeline (optional)">
              <input value={timeline} onChange={(e) => setTimeline(e.target.value)} maxLength={60} className={inputCls} placeholder="e.g. 2 weeks" />
            </Field>
          </>
        )}

        <Field label="Message" className="md:col-span-2">
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} maxLength={1000} rows={4} className={inputCls} placeholder="Tell us briefly what you need." />
        </Field>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary disabled:opacity-60"
        >
          <Send size={14} className="mr-2" />
          {status === "sending" ? "Sending…" : category === "Get Quotation" ? "Request Quotation" : "Send Inquiry"}
        </button>
        <button
          type="button"
          onClick={() => {
            const waWindow = window.open(buildWhatsAppUrl(SITE.defaultWhatsAppMessage), "_blank", "noopener,noreferrer");
            if (!waWindow) window.location.href = buildWhatsAppUrl(SITE.defaultWhatsAppMessage);
          }}
          className="btn-ghost"
        >
          <FileText size={14} className="mr-2" /> Quick WhatsApp
        </button>

        {status === "ok" && (
          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-emerald-600">
            <CheckCircle2 size={15} /> Sent — check WhatsApp.
          </span>
        )}
        {status === "err" && (
          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-rose-600">
            <AlertCircle size={15} /> {errMsg}
          </span>
        )}
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-[13.5px] text-foreground transition-colors focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/20";

function Field({
  label, required, className, children,
}: { label: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <label className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <span className="text-[11.5px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="text-ember"> *</span>}
      </span>
      {children}
    </label>
  );
}
