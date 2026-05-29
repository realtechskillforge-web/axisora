import { createFileRoute, notFound } from "@tanstack/react-router";
import { FreelanceTemplate } from "@/components/site/FreelanceTemplate";
import { FREELANCING } from "@/data/freelancing";

export const Route = createFileRoute("/freelancing/$slug")({
  head: ({ params }) => {
    const f = FREELANCING[params.slug];
    return {
      meta: [
        { title: f ? `${f.category} — Axisora Forge` : "Freelancing — Axisora Forge" },
        { name: "description", content: f?.tagline ?? "Axisora Forge freelancing services." },
      ],
    };
  },
  loader: ({ params }) => {
    if (!FREELANCING[params.slug]) throw notFound();
    return { slug: params.slug };
  },
  component: FreelancePage,
});

function FreelancePage() {
  const { slug } = Route.useLoaderData();
  return <FreelanceTemplate data={FREELANCING[slug]} />;
}
