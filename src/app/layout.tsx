import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Saksham Kushwaha | lirena00 | Portfolio",
  description:
    "Saksham Kushwaha (lirena00), a 19-year-old CS undergrad, is a full-stack developer, programmer, and artist passionate about AI, web development, and creative storytelling. A weeb at heart, I enjoy reading manga, watching anime, and working on my own post-apocalyptic story, soon to be published. Explore projects like Odash, Animood, open-source contributions, and unique anime-inspired tools.",
  icons: [{ rel: "icon", url: "/favicon.jpg" }],
  openGraph: {
    title: "Saksham Kushwaha | lirena00",
    images: [{ url: "/og.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
