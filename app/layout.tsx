import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { AsideNav } from "@/app/components/AsideNav";
import { TopNav } from "@/app/components/TopNav";
import { Session } from "@/app/components/Session";

export const metadata: Metadata = {
  title: "AutoAlt",
  description: "AutoAlt is a tool for generating alternative text for images.",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <main className="flex flex-col">
          <TopNav />
          <div className="flex h-screen pt-16">
            {/* Sidebar */}
            <AsideNav />
            <div className="m-6 w-full flex">
              {/* Main Content */}
              <div className="w-5/6">
                {children}
              </div>
              {/* Session */}
              <div className="w-1/6">
                <Session />
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
