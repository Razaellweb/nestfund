"use client";

import React, { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Setting autosave on payday changed everything. I hit my emergency fund goal in 6 months.",
    author: "Adaora, Lagos",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "The projections are clear and the withdrawals are quick. Feels safe and easy.",
    author: "Tunde, Abuja",
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    text: "I love splitting goals—travel, rent, investments—all in one dashboard.",
    author: "Amina, Kano",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(1);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const getIndex = (offset: number) => (current + offset + testimonials.length) % testimonials.length;

  const Card = ({ idx, muted = false }: { idx: number; muted?: boolean }) => (
    <article className={`relative w-[87%] mx-auto md:mx-0 md:w-[33.3%] flex flex-col items-center justify-center gap-4 px-6 py-8 rounded-2xl border ${
      muted ? "scale-95 border-slate-800/60 bg-[#0b1220]/40" : "scale-105 border-emerald-400/40 bg-emerald-400/5"
    } transition-all`}>
      <Quote className="h-5 w-5 text-emerald-400" />
      <p className={`text-base text-center ${muted ? "text-slate-300" : "text-white"}`}>{testimonials[idx].text}</p>
      <div className="flex items-center gap-3">
        <img src={testimonials[idx].avatar} alt="avatar" className="h-8 w-8 rounded-full object-cover" />
        <span className="text-sm text-emerald-400">{testimonials[idx].author}</span>
      </div>
    </article>
  );

  return (
    <section className="w-full mt-20">
      <div className="flex items-center flex-wrap justify-between">
        <div className="w-[97%] md:w-[62%] 2xl:w-[52%]">
          <h2 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4">
            What our <span className="text-emerald-400">customers say</span>
          </h2>
          <p className="text-base pt-3.5 text-slate-300 text-center md:text-left">
            Real stories from savers and investors building their nest egg with NestFund.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center flex-wrap mt-8 justify-center relative gap-6">
        {/* Left Arrow */}
        <button
          className="absolute cursor-pointer left-0 z-10 bg-[#1C1C1C] rounded-full p-2 hover:bg-emerald-400 hover:text-black transition md:block hidden"
          onClick={prevTestimonial}
          aria-label="Previous"
        >
          <ArrowLeftIcon className="w-6 h-6 text-emerald-400" />
        </button>

        {/* Left muted */}
        <div className="hidden md:block">
          <Card idx={getIndex(-1)} muted />
        </div>

        {/* Center focus */}
        <Card idx={getIndex(0)} />

        {/* Right muted */}
        <div className="hidden md:block">
          <Card idx={getIndex(1)} muted />
        </div>

        {/* Right Arrow */}
        <button
          className="absolute cursor-pointer right-0 z-10 bg-[#1C1C1C] rounded-full p-2 transition md:block hidden"
          onClick={nextTestimonial}
          aria-label="Next"
        >
          <ArrowRightIcon className="w-6 h-6 text-emerald-400" />
        </button>

        {/* Mobile navigation arrows */}
        <div className="flex w-full justify-center items-center gap-4 mt-6 md:hidden">
          <button
            className="bg-[#1C1C1C] rounded-full border border-slate-800/60 p-2 hover:bg-emerald-400 hover:text-black transition"
            onClick={prevTestimonial}
            aria-label="Previous"
          >
            <ArrowLeftIcon className="w-7 h-7 text-emerald-400" />
          </button>
          <button
            className="bg-[#1C1C1C] rounded-full border border-slate-800/60 p-2 transition"
            onClick={nextTestimonial}
            aria-label="Next"
          >
            <ArrowRightIcon className="w-7 h-7 text-emerald-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
