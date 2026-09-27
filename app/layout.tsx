import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Kirap Pairap",
  description:
    "Kirap Pairap — music, culture and community from Papua New Guinea to Wellington, New Zealand.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}