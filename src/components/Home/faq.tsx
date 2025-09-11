"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "Is NestFund safe?",
    answer:
      "Yes. We partner with regulated institutions, use bank‑grade encryption, and follow NDPR best practices.",
  },
  {
    question: "How does automated savings work?",
    answer:
      "Set a frequency (daily/weekly/monthly), amount, and start date. We charge your linked account automatically to fund your goals.",
  },
  {
    question: "Can I withdraw anytime?",
    answer:
      "You can withdraw flexible savings anytime to your bank. Some investment products may have lock‑in periods for higher returns.",
  },
  {
    question: "What returns can I expect?",
    answer:
      "Returns vary by product and market conditions. We show clear, transparent projections before you invest.",
  },
  {
    question: "Do I need to complete KYC?",
    answer:
      "Yes. KYC helps keep your account secure and enables higher limits and investment access.",
  },
  {
    question: "Are there hidden fees?",
    answer:
      "No hidden fees. We may charge small management fees on certain investments and for premium features.",
  },
];

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section id="faq" className="w-full mt-20">
      <div className="w-[97%] mx-auto md:mx-0 md:w-[68%]">
        <h2 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4">
          Frequently <span className="text-emerald-400">asked questions</span>
        </h2>
        <p className="text-base pt-3.5 text-slate-300 text-center md:text-left">
          Still have questions? Email us at <a href="mailto:support@nestfund.africa" className="text-emerald-400 hover:underline">support@nestfund.africa</a>
        </p>
      </div>

      <div className="relative mt-6 w-full mb-2">
        <div className="grid md:grid-cols-2 gap-5">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl px-6 py-6 border border-slate-800/60 bg-[#111827]"
            >
              <h3 className="text-lg">{faq.question}</h3>
              <div className="my-4 h-px bg-slate-800/60" />
              <p className="text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {!showAll && (
        <div className="w-full flex items-center justify-center mt-5">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 rounded-full border border-slate-700 text-base hover:bg-slate-800/60 transition-colors"
          >
            Load All FAQs ↓
          </button>
        </div>
      )}
    </section>
  );
};

export default FAQ;
