import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NestFund – Automate your savings. Grow your wealth.",
  description:
    "NestFund is a digital savings and investment platform for young professionals across Nigeria and emerging markets. Set goals, automate deposits to match your payday, earn competitive returns, and withdraw when you need—backed by bank‑grade security and regulated partners.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${inter.variable}`}>
      <body
        className="antialiased min-h-screen text-slate-100 bg-[#0b1220] [--bg:theme(colors.slate.900)] [--accent:theme(colors.emerald.400)] [--brand:theme(colors.blue.600)]"
      >
        {/* Global backdrop gradient */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_40%_at_70%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(40%_30%_at_20%_20%,rgba(16,185,129,0.10),transparent)]"
        />
        <div className="w-[98%] md:w-[90%] 2xl:w-[80%] mx-auto pt-8">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
