"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import members from "@/db/members/members.json";

type Member = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  linkedin: string;
};

const team: Member[] = members as Member[];

export default function TeamSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* هدر سکشن */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="inline-block h-2 w-2 rounded-full bg-violet-400" />
          Our Team
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          <span className="block">Meet the Team Making</span>
          <span className="block text-white/70">FinGPT Happen Every Day</span>
        </h2>

        <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
          Our team brings together AI, product, and finance experts to build an assistant
          that turns complexity into clarity for users around the world.
        </p>

        <button
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/40 transition-transform duration-300 hover:-translate-y-0.5"
        >
          View About FinGPT
        </button>
      </div>

      {/* لیست اعضا */}
      <div className="grid gap-6 lg:grid-cols-2">
        {team.map((member, index) => (
          <TeamCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: Member; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[26px] bg-[#0d0d12]/80 border border-white/10 backdrop-blur
                 shadow-[0_24px_60px_rgba(0,0,0,0.8)]"
    >
      {/* گرادیان بوردر مثل تمپلیت */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[26px]"
        style={{
          padding: 1,
          background:
            "linear-gradient(180deg, rgba(142,97,255,0.7), rgba(74,222,255,0.25) 60%, rgba(255,255,255,0.08))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor" as any,
          maskComposite: "exclude",
        }}
      />

      <div className="relative flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* پروفایل سمت چپ */}
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white/5">
            <Image
              src={member.avatar}
              alt={member.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div className="space-y-1">
            <div className="text-sm font-semibold text-white">
              {member.name}
            </div>
            <div className="text-xs text-white/60">
              {member.role}
            </div>
          </div>
        </div>

        {/* دکمه لینکدین سمت راست */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-2xl",
            "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white",
            "shadow-lg shadow-violet-600/50 transition-all duration-300",
            "hover:-translate-y-0.5 hover:shadow-violet-400/60"
          )}
          aria-label={`${member.name} on LinkedIn`}
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </motion.div>
  );
}
