import { Target, Calendar, LineChart, PiggyBank, Wallet, LayoutDashboard } from "lucide-react";
import React from "react";

const items = [
  {
    title: "Goal-based savings",
    desc: "Create multiple goals (rent, travel, emergency) and fund them automatically.",
    icon: Target,
  },
  {
    title: "Automated deposits",
    desc: "Set daily, weekly or monthly autosave to match your salary cycle.",
    icon: Calendar,
  },
  {
    title: "Investment options",
    desc: "Access low-to-medium risk products with clear projections.",
    icon: LineChart,
  },
  {
    title: "Interest earnings",
    desc: "Earn competitive returns with transparent fees.",
    icon: PiggyBank,
  },
  {
    title: "Flexible withdrawals",
    desc: "Withdraw to your bank securely when you need it.",
    icon: Wallet,
  },
  {
    title: "Simple dashboard",
    desc: "Track all goals and investments in real time.",
    icon: LayoutDashboard,
  },
];

const Features = () => {
  return (
    <section id="features" className="w-full mt-16 md:mt-24">
      <div className="w-[97%] mx-auto md:mx-0 md:w-[68%]">
        <h2 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4">
          Built to help you <span className="text-emerald-400">save and grow</span>
        </h2>
        <p className="text-base pt-3.5 text-slate-300 text-center md:text-left">
          Everything you need to build a stronger financial future—automatically.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {items.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="rounded-2xl bg-[#111827] border border-slate-800/60 p-6 hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(0,0,0,.25)] transition">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/30">
                <Icon className="h-5 w-5 text-emerald-400" />
              </span>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-slate-300 mt-3">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
