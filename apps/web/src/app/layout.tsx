import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Majuli Goods",
  description: "Authentic goods from Majuli and Assam.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
