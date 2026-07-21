import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import SignalTrace from "@/components/layout/SignalTrace";

// NOTE: IBM Plex Sans / IBM Plex Mono are the intended typefaces (see
// design spec). next/font/google is used in production to self-host and
// optimize them automatically -- swap the class names below for
// `plexSans.variable` / `plexMono.variable` once deployed somewhere with
// access to Google Fonts at build time. The CSS variables below fall back
// to close system equivalents so the site renders correctly either way.
const fontVariables = "font-vars";

const SITE_URL = "https://omarelebiary.dev";
const TITLE = "Omar Elebiary \u2014 Computer & Communications Engineer";
const DESCRIPTION =
  "Portfolio of Omar Elebiary, a Computer and Communications Engineering student at Cairo University building toward telecom and network engineering, with embedded systems projects and leadership experience.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Omar Elebiary",
    "Computer and Communications Engineering",
    "Cairo University",
    "Telecom Engineer",
    "Embedded Systems",
    "Network Engineering Portfolio",
  ],
  authors: [{ name: "Omar Elebiary" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Omar Elebiary",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} antialiased`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SignalTrace />
        <Nav />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
