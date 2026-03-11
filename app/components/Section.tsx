import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative flex min-h-screen w-full flex-col items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
}
