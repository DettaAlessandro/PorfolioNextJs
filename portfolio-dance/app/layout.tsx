import type { Metadata } from "next";
import "./globals.css";
import { sora } from '@/app/ui/fonts';
import { Navbar } from "./ui/navbar";
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Anna Deganello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} antialiased bg-black`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
