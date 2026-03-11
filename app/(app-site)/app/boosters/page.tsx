import type { Metadata } from "next";
import { Section } from "@/app/components/Section";

export const metadata: Metadata = {
  title: "Boosters | App | Loops House",
  description:
    "Manage and explore your Loops House boosters to enhance your creative workflows.",
};

export default function BoostersPage() {
  return (
    <main>
      <Section id="boosters" className="bg-background text-foreground">
        <h1 className="text-4xl font-bold tracking-tight">Boosters</h1>
        <p className="mt-4 max-w-xl text-center text-foreground/60">
          This is the Boosters area of the Loops House app experience.
        </p>
      </Section>
    </main>
  );
}

