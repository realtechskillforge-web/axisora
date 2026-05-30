import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProgramTemplate } from "@/components/site/ProgramTemplate";
import { PROGRAMS } from "@/data/programs";

export const Route = createFileRoute("/programs/$slug")({
  head: ({ params }) => {
    const p = PROGRAMS[params.slug];
    return {
      meta: [
        { title: p ? `${p.title} — Axisora Forge` : "Program — Axisora Forge" },
        { name: "description", content: p?.tagline ?? "Axisora Forge program." },
      ],
    };
  },
  loader: ({ params }) => {
    if (!PROGRAMS[params.slug]) throw notFound();
    return { slug: params.slug };
  },
  component: ProgramPage,
});

const placementSlugs = ["java-placement", "python-placement"];

function ProgramPage() {
  const { slug } = Route.useLoaderData();
  return (
    <ProgramTemplate
      data={PROGRAMS[slug]}
      isPlacement={placementSlugs.includes(slug)}
    />
  );
}
