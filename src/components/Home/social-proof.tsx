import React from "react";

const brands = ["NIBSS", "Paystack", "Flutterwave", "Mono", "Carbon", "Cowrywise"];

const SocialProof = () => {
  return (
    <section className="w-full mt-14">
      <div className="w-full rounded-2xl border border-slate-800/60 bg-[#0b1220]/60 p-6">
        <p className="text-center text-sm text-slate-400">Trusted by thousands of savers and integrated with leading African fintech partners</p>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
          {brands.map((b) => (
            <div key={b} className="flex items-center justify-center opacity-80 hover:opacity-100 transition">
              <span className="text-slate-400 tracking-wide text-sm">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
