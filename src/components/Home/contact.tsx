import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="w-full mt-20">
      <div className="w-[97%] mx-auto md:mx-0 md:w-[68%]">
        <h2 className="text-3xl md:text-4xl xl:text-5xl text-center md:text-left pt-4">
          Get in <span className="text-emerald-400">touch</span>
        </h2>
        <p className="text-base pt-3.5 text-slate-300 text-center md:text-left">
          Questions, feedback or partnership? Send us a message and we’ll respond.
        </p>
      </div>

      <form
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 rounded-2xl border border-slate-800/60 bg-[#0b1220]/50 p-6"
        action="mailto:support@nestfund.africa"
        method="post"
        encType="text/plain"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-slate-300">Name</label>
          <input id="name" name="name" required className="h-12 rounded-xl bg-[#111827] border border-slate-800/60 px-4 outline-none focus:ring-2 focus:ring-emerald-400/40" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-slate-300">Email</label>
          <input id="email" name="email" type="email" required className="h-12 rounded-xl bg-[#111827] border border-slate-800/60 px-4 outline-none focus:ring-2 focus:ring-emerald-400/40" />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label htmlFor="message" className="text-sm text-slate-300">Message</label>
          <textarea id="message" name="message" rows={5} required className="rounded-xl bg-[#111827] border border-slate-800/60 p-4 outline-none focus:ring-2 focus:ring-emerald-400/40" />
        </div>
        <div className="md:col-span-2 flex justify-start">
          <button type="submit" className="rounded-full bg-emerald-400 text-slate-900 px-6 py-3 text-base font-medium hover:bg-emerald-300 transition-colors">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
