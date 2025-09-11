import { Mail, Phone, MapPin, ShieldCheck, Lock } from "lucide-react";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f172a] mt-28 text-slate-300 border-t border-slate-800/60">
      <div className="w-[98%] md:w-[90%] 2xl:w-[80%] mx-auto py-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6">
              <defs>
                <linearGradient id="g2" x1="0" x2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#60a5fa" />
                </linearGradient>
              </defs>
              <path fill="url(#g2)" d="M12 2c-4.97 0-9 3.582-9 8 0 3.314 2.239 6.14 5.4 7.39.34.14.6.45.6.83v2.03a1 1 0 0 0 1.64.77L14 19.5c4.42-.11 8-3.71 8-7.5 0-4.418-4.03-8-10-8Z"/>
            </svg>
            <h1 className="text-2xl font-semibold">NestFund</h1>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-8">
            <Link href="/" className="px-3 py-2 rounded-full hover:bg-slate-800/60">Home</Link>
            <a href="#features" className="px-3 py-2 rounded-full hover:bg-slate-800/60">Features</a>
            <a href="#pricing" className="px-3 py-2 rounded-full hover:bg-slate-800/60">Pricing</a>
            <Link href="/security" className="px-3 py-2 rounded-full hover:bg-slate-800/60">Security</Link>
            <a href="#faq" className="px-3 py-2 rounded-full hover:bg-slate-800/60">FAQs</a>
            <a href="#contact" className="px-3 py-2 rounded-full hover:bg-slate-800/60">Contact</a>
          </nav>

          <div className="w-full h-px bg-slate-800/60 mt-8" />

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-8 text-slate-300">
            <p className="flex items-center gap-2 text-sm md:text-base"><Mail className="h-4 w-4 text-emerald-400" /> support@nestfund.africa</p>
            <p className="flex items-center gap-2 text-sm md:text-base"><Phone className="h-4 w-4 text-emerald-400" /> +234 700 000 0000</p>
            <p className="flex items-center gap-2 text-sm md:text-base"><MapPin className="h-4 w-4 text-emerald-400" /> Lagos, Nigeria</p>
          </div>

          <div className="w-full h-px bg-slate-800/60 mt-8" />

          <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="flex justify-center md:justify-start items-center gap-4 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> PCIDSS Compliant
              <Lock className="h-4 w-4 text-emerald-400" /> 256-bit SSL
            </div>
            <p className="text-center text-sm text-slate-400">© {new Date().getFullYear()} NestFund. All rights reserved.</p>
            <p className="text-center md:text-right text-sm text-slate-400">Privacy Policy • Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
