import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { funnelSans, pixelifySans } from "./fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Loops House",
    default: "Loops House",
  },
  description: "Loops House — your creative loop engine.",
  metadataBase: new URL("https://loops.house"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} ${funnelSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
