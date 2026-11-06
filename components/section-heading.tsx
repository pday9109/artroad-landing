import { Tagline } from "@/components/tagline";

export function SectionHeading({ id, index, eyebrow, title, description }: {
  id: string; index: string; eyebrow: string; title: string; description?: string;
}) {
  return <div className="section-heading"><Tagline index={index}>{eyebrow}</Tagline><h2 id={id}>{title}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
