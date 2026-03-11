import type { Metadata } from "next";
import { Section } from "@/app/components/Section";

export const metadata: Metadata = {
  title: "Login | App | Loops House",
  description:
    "Join Loops House and start creating your own loops.",
};

export default function LoginPage() {
  return (
    <main>
      <Section id="login" className="bg-background text-foreground">
        <h1 className="text-4xl font-bold tracking-tight">Login</h1>
        <p className="mt-4 max-w-xl text-center text-foreground/60">
          This is the Login area of the Loops House app experience.
        </p>
      </Section>
    </main>
  );
}

