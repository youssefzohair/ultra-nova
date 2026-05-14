import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ultra Nova Machinery Repairing | Dubai",
  description:
    "Ultra Nova Machinery Repairing provides machinery repair, maintenance, installation, and machine sourcing services in Dubai.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
