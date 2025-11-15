"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

type ContactType = "individual" | "business";

export default function FinGPTContactForm() {
  const [contactType, setContactType] = useState<ContactType>("individual");
  const [subject, setSubject] = useState<string>("general");
  const [customSubject, setCustomSubject] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalSubject = subject === "other" ? customSubject : subject;

    const formData = {
      contactType,
      subject: finalSubject,
      // سایر فیلدها رو اگر خواستی اینجا جمع کن
    };

    console.log("Contact form submit:", formData);
    // اینجا بعداً می‌تونی API کال بزنی
  };

  return (
    <section id="contact" className="mrelative max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-[#0d0d12]/80 p-6 sm:p-8 md:p-10 border border-white/10 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-1000">
        {/* گرادیان بوردر شیشه‌ای */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            padding: 1,
            background:
              "linear-gradient(180deg, rgba(142,97,255,0.6), rgba(74,222,255,0.2) 60%, rgba(255,255,255,0.06))",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor" as any,
            maskComposite: "exclude",
          }}
        />

        {/* Header */}
        <div className="relative mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-violet-400" />
            Contact FinGPT
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Let’s talk about your financial assistant
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/70">
            Tell us a bit about yourself and how you want to use FinGPT.
          </p>
        </div>

        {/* Tabs: حقیقی / حقوقی */}
        <div className="relative mb-6 inline-flex rounded-full bg-white/5 p-1 text-sm">
          <button
            type="button"
            onClick={() => setContactType("individual")}
            className={cn(
              "flex-1 rounded-full px-4 py-2 transition-all duration-300",
              contactType === "individual"
                ? "bg-white text-black shadow-sm"
                : "text-white/70 hover:text-white"
            )}
          >
            Individual
          </button>
          <button
            type="button"
            onClick={() => setContactType("business")}
            className={cn(
              "flex-1 rounded-full px-4 py-2 transition-all duration-300",
              contactType === "business"
                ? "bg-white text-black shadow-sm"
                : "text-white/70 hover:text-white"
            )}
          >
            Company
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative grid gap-5 md:grid-cols-2"
        >
          {/* Name */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium tracking-wide text-white/60">
              {contactType === "individual" ? "Your Name" : "Your Name"}
            </label>
            <input
              type="text"
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400 transition-all duration-300"
              placeholder="e.g. John Doe"
            />
          </div>

          {/* Company (فقط حقوقی) */}
          {contactType === "business" ? (
            <div className="md:col-span-1">
              <label className="mb-1 block text-xs font-medium tracking-wide text-white/60">
                Your Company Name
              </label>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400 transition-all duration-300"
                placeholder="FinTech Holding"
              />
            </div>
          ) : (
            <div className="md:col-span-1">
              <label className="mb-1 block text-xs font-medium tracking-wide text-white/60">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400 transition-all duration-300"
                placeholder="you@example.com"
              />
            </div>
          )}

          {/* اگر حقوقی هست، ایمیل میاد اینجا */}
          {contactType === "business" && (
            <div className="md:col-span-1">
              <label className="mb-1 block text-xs font-medium tracking-wide text-white/60">
                Company Email
              </label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400 transition-all duration-300"
                placeholder="you@company.com"
              />
            </div>
          )}

          {/* Phone (اختیاری) */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium tracking-wide text-white/60">
              Your Phone Number (Optional)
            </label>
            <input
              type="tel"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400 transition-all duration-300"
              placeholder="+1..."
            />
          </div>

          {/* Subject select + Other */}
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium tracking-wide text-white/60">
              Subject
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400 transition-all duration-300"
            >
              <option value="general">General inquiry</option>
              <option value="demo">Product demo</option>
              <option value="partnership">Partnership / Collaboration</option>
              <option value="support">Support</option>
              <option value="other">Other</option>
            </select>

            {subject === "other" && (
              <input
                type="text"
                value={customSubject}
                onChange={(e) => setCustomSubject(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400 transition-all duration-300"
                placeholder="Write your subject..."
              />
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium tracking-wide text-white/60">
              Your Message
            </label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400 transition-all duration-300"
              placeholder={
                contactType === "business"
                  ? "Write a little about your business, data, and need for FinGPT..."
                  : "Tell me how FinGPT can help you..."
              }
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-end pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-2.5 text-sm font-medium text-black shadow-lg shadow-violet-500/30 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
