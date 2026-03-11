import type { Metadata } from "next";
import { Section } from "@/app/components/Section";

export const metadata: Metadata = {
  title: "Residency | App | Loops House",
  description:
    "Access and manage your Loops House residency programs directly from the app.",
};

export default function ResidencyPage() {
  return (
    <main>
      <Section id="residency" className="bg-background text-foreground">
        <h1 className="text-4xl font-bold tracking-tight">Residency</h1>
        <p className="mt-4 max-w-xl text-center text-foreground/60">
          This is the Residency area of the Loops House app experience.
        </p>
      </Section>
    </main>
  );
}

