import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "App | Loops House",
  description:
    "Loops House App — manage your loops, track activity, and stay in the flow.",
  openGraph: {
    title: "App | Loops House",
    description: "Manage your loops, track activity, and stay in the flow.",
    url: "https://app.loops.house",
    siteName: "Loops House",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App | Loops House",
    description: "Manage your loops, track activity, and stay in the flow.",
  },
};

export default function AppSiteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
