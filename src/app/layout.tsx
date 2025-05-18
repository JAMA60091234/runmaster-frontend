import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RunMaster - Your AI Running Coach",
  description: "Personalized training plans powered by AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <main className="pb-16">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
