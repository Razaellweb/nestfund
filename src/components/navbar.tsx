"use client";

import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "", label: "Security" },
    { href: "#faq", label: "FAQs" },
    { href: "#contact", label: "Contact" },
  ];

  const Brand = () => (
    <div className="flex items-center gap-2">
      <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <path fill="url(#g)" d="M12 2c-4.97 0-9 3.582-9 8 0 3.314 2.239 6.14 5.4 7.39.34.14.6.45.6.83v2.03a1 1 0 0 0 1.64.77L14 19.5c4.42-.11 8-3.71 8-7.5 0-4.418-4.03-8-10-8Z"/>
      </svg>
      <span className="text-2xl font-semibold tracking-tight">NestFund</span>
    </div>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden xl:block">
        <section className="w-full bg-[#1C1C1C] rounded-full flex items-center justify-between px-6 py-3 border border-slate-800/60">
          <Brand />

          <nav className="flex items-center">
            {links.map((link) => (
              <h1
                key={link.href}
                className={`text-base px-4 py-2 rounded-full cursor-pointer transition-colors hover:bg-slate-800/60 ${
                  pathname === link.href ? "bg-slate-800/80" : ""
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </h1>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-base px-5 py-2 rounded-full border border-slate-700 hover:bg-slate-800/60 transition-colors">
              Login
            </Link>
            <Link href="/" className="px-6 py-2.5 rounded-full bg-emerald-400 text-slate-900 text-base font-medium hover:bg-emerald-300 transition-colors">
              Create Free Account
            </Link>
          </div>
        </section>
      </div>

      {/* Mobile & Tablet Navbar */}
      <div className="xl:hidden w-[97%] mx-auto bg-[#1C1C1C] px-6 py-4 flex justify-between items-center rounded-full border border-slate-800/60">
        <Brand />
        <button
          onClick={() => setMenuOpen(true)}
          className="text-slate-900 text-3xl px-3 py-2 rounded-full bg-emerald-400"
          aria-label="Open menu"
        >
          <Bars3BottomRightIcon className="w-7 h-7" />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu overlay"
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar Menu */}
      <aside
        className={`fixed top-0 z-[1000] right-0 h-full w-72 bg-[#111827] text-white px-6 py-6 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="text-white text-3xl mb-6"
          aria-label="Close menu"
        >
          <HiOutlineX />
        </button>

        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base px-3 py-2 rounded-full hover:bg-slate-800/60 ${
                pathname === link.href ? "bg-slate-800/80" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <hr className="border-slate-700 my-4" />
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-base">
            Login
          </Link>
          <Link href="/" onClick={() => setMenuOpen(false)} className="w-full text-center py-3 rounded-full bg-emerald-400 text-slate-900 text-base font-medium mt-2">
            Create Free Account
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
