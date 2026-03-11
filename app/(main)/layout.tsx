import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Loops House",
  description:
    "Loops House — discover, create, and share loops. Your creative loop engine.",
  openGraph: {
    title: "Loops House",
    description: "Discover, create, and share loops.",
    url: "https://loops.house",
    siteName: "Loops House",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loops House",
    description: "Discover, create, and share loops.",
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
