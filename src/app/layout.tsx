import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE VALUE SHIFT — An Interactive Journey Through the Global Economy",
  description:
    "Follow the value. Understand the shift. Shape Vietnam's future. An interactive digital learning experience exploring global value chains, surplus value, and strategic economic decisions.",
  keywords: [
    "Global Value Chains",
    "GVC",
    "Marxist Political Economy",
    "Surplus Value",
    "Vietnam Economy",
    "FDI",
    "Economics Interactive",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-midnight-navy text-off-white font-sans antialiased selection:bg-electric-blue/15 selection:text-electric-blue">
        {children}
      </body>
    </html>
  );
}
