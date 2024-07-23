import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { WideNav } from "@/components/header/wide-nav";

import { ReactLenis } from "@studio-freight/react-lenis";
import { MobileMenu } from "@/components/mobile-menu";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linn Htet Aung",
  description: "Protfilo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WideNav />

        {children}
      
      </body>
    </html>
  );
}
