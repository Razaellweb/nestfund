import { CheckCircle } from "lucide-react";
import React from "react";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    id: "starter",
    highlight: false,
    features: [
      "Goal-based savings",
      "Autosave schedules",
      "Bank transfers",
      "Basic dashboard",
    ],
  },
  {
    name: "Plus",
    price: "₦1,500/mo",
    id: "plus",
    highlight: true,
    features: [
      "Advanced projections",
      "Multiple investment products",
      "Priority withdrawals",
      "Email support",
    ],
  },
  {
    name: "Investor",
    price: "2% mgmt fee",
    id: "investor",
    highlight: false,
    features: [
      "Curated portfolios",
      "Auto-rebalancing",
      "Advisory insights",
      "Dedicated support",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full mt-20">
      <div className="w-[97%] mx-auto md:mx-0 md:w-[68%]">
        <h2 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4">
          Simple, transparent <span className="text-emerald-400">pricing</span>
        </h2>
        <p className="text-base pt-3.5 text-slate-300 text-center md:text-left">
          No hidden charges. We earn from interest margins and optional premium features.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {tiers.map((t) => (
          <div key={t.id} className={`rounded-2xl border p-6 ${t.highlight ? "border-emerald-400/60 bg-emerald-400/5" : "border-slate-800/60 bg-[#111827]"}`}>
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              {t.highlight && (
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-400 text-slate-900">Most popular</span>
              )}
            </div>
            <p className="text-3xl mt-3 font-semibold">{t.price}</p>
            <ul className="mt-5 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle className="h-4 w-4 text-emerald-400" /> {f}
                </li>
              ))}
            </ul>
            <a href="/signup" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-base font-medium transition-colors ${t.highlight ? "bg-emerald-400 text-slate-900 hover:bg-emerald-300" : "border border-slate-700 hover:bg-slate-800/60"}`}>
              {t.name === "Starter" ? "Create Free Account" : "Get Started"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
