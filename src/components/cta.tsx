import React from 'react'
import Link from "next/link";

const CTA = () => {
  return (
    <section className="mt-24 w-full bg-[#0b1220]/60 py-10 relative border border-slate-800/60 rounded-2xl">
      <div className="w-[90%] mx-auto flex items-center flex-wrap justify-between gap-6">
        <div className="w-[96%] md:w-[67%]">
          <h2 className="text-3xl md:text-4xl text-center md:text-left">
            Start your wealth journey with <span className="text-emerald-400">NestFund</span>
          </h2>
          <p className="text-base pt-3.5 text-slate-300 text-center md:text-left">
            Open a free account in minutes. Set goals, automate savings and grow with confidence.
          </p> 
        </div>
        <div className="w-fit mx-auto md:mx-0">
          <Link href="/" className='px-7 py-3 rounded-full bg-emerald-400 text-slate-900 text-lg font-medium hover:bg-emerald-300 transition-colors'>Create Free Account</Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
