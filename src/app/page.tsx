import Link from "next/link";
import Features from "@/components/Home/features";
import SocialProof from "@/components/Home/social-proof";
import Pricing from "@/components/Home/pricing";
import Testimonials from "@/components/Home/testimonials";
import FAQ from "@/components/Home/faq";
import CTA from "@/components/cta";
import Contact from "@/components/Home/contact";

export default function Home() {
  return (
    <div className="mt-20 md:mt-28 mb-24">
      {/* Hero */}
      <section className="w-full flex flex-col md:flex-row items-start justify-between gap-10">
        <div className="w-[97%] mx-auto md:mx-0 md:w-[52%] text-center md:text-left">
          <div className="w-fit mx-auto md:mx-0 rounded-full border border-slate-800/80 bg-slate-900/50 px-3 py-2 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-slate-300 text-sm">Bank‑grade security • CBN‑aligned partners</span>
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight pt-4">
            Automate your savings. <span className="text-emerald-400">Grow your wealth.</span>
          </h1>

          <p className="text-base md:text-lg pt-5 text-slate-300">
            NestFund is a digital savings and investment platform for young professionals across Nigeria and emerging markets. Set goals, automate deposits to match your payday, earn competitive returns, and withdraw when you need—backed by bank‑grade security and regulated partners.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-7 justify-center md:justify-start">
            <Link href="/signup" className="inline-flex items-center justify-center rounded-full bg-emerald-400 text-slate-900 px-6 py-3 text-lg font-medium hover:bg-emerald-300 transition-colors">
              Create Free Account
            </Link>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-lg text-slate-200 hover:bg-slate-800/60 transition-colors">
              See how it works
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative w-[97%] mx-auto md:mx-0 md:w-[44%]">
          <div className="relative rounded-2xl border border-slate-800/60 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-5 shadow-[0_10px_40px_rgba(0,0,0,.35)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Savings Goal</p>
                <p className="text-lg font-semibold">Lagos Apartment</p>
              </div>
              <span className="text-emerald-400 text-sm">₦1,200,000 / ₦5,000,000</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div className="h-2 rounded-full bg-emerald-400" style={{ width: "24%" }} />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {["Mon", "Tue", "Wed"].map((d, i) => (
                <div key={i} className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-3">
                  <p className="text-xs text-slate-400">Auto‑save</p>
                  <p className="text-sm font-medium">₦{[5000, 5000, 5000][i].toLocaleString()}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-slate-800/60 bg-slate-900/40 p-4">
              <p className="text-xs text-slate-400">Projected balance in 12 months</p>
              <p className="text-xl font-semibold">₦1,950,000</p>
            </div>
          </div>
        </div>
      </section>

      <SocialProof />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
    </div>
  );
}
