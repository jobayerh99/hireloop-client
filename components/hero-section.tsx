"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  MapPin,
  Briefcase,
  TrendingUp,
  Users,
  Star,
  Sparkles,
} from "lucide-react";

import globeImg from "@/app/images/globe.png";

const TRENDING_POSITIONS = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
];

const STATS = [
  {
    icon: Briefcase,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: TrendingUp,
    value: "12K",
    label: "Companies",
  },
  {
    icon: Users,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: Star,
    value: "97%",
    label: "Satisfication Rate",
  },
];

export function HeroSection() {
  const [jobQuery, setJobQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (jobQuery.trim()) params.set("query", jobQuery.trim());
    if (locationQuery.trim()) params.set("location", locationQuery.trim());
    window.location.href = `/browse${params.toString() ? `?${params.toString()}` : ""}`;
  };

  const handleTrendingClick = (position: string) => {
    setJobQuery(position);
  };

  return (
    <section className="relative w-full overflow-hidden bg-page pt-8 sm:pt-14 pb-20 sm:pb-32 font-sans">
      {/* Figma Hero Background: globe.png */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-8 sm:-top-14 -z-10 flex justify-center overflow-hidden select-none"
      >
        <div className="relative w-full max-w-[1440px] shrink-0">
          <Image
            src={globeImg}
            alt="HireLoop hero background globe"
            priority
            quality={100}
            className="w-full h-auto object-cover sm:object-contain"
          />
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col items-center px-4 sm:px-6">
        {/* ===================== Top Badge ===================== */}
        <div className="flex items-center gap-3 sm:gap-4 animate-fade-in">
          {/* Left subtle accent gradient line */}
          <span
            aria-hidden="true"
            className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-white/20 to-white/60"
          />

          {/* Badge Pill */}
          <div className="group relative inline-flex items-center gap-2.5 rounded-full p-[1px] bg-gradient-to-b from-white/30 via-white/10 to-transparent shadow-[0_0_24px_rgba(92,83,254,0.25)]">
            <div className="flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#2E2E30] via-[#161618] to-[#0A0A0C] px-4 py-2 sm:px-5 sm:py-2.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-[#FEA613] to-[#FEE45A] text-black shadow-sm">
                <Sparkles className="h-3 w-3 fill-amber-950 text-amber-950" />
              </span>
              <span className="font-space-mono text-xs sm:text-sm font-medium tracking-tight text-white">
                50,000+ new jobs this month
              </span>
            </div>
          </div>

          {/* Right subtle accent gradient line */}
          <span
            aria-hidden="true"
            className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent via-white/20 to-white/60"
          />
        </div>

        {/* ===================== Hero Title & Subtitle ===================== */}
        <div className="mt-6 sm:mt-8 max-w-[784px] text-center">
          <h1 className="font-manrope text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.12]">
            Find Your Dream Job Today
          </h1>
          <p className="mt-4 sm:mt-5 font-manrope text-base sm:text-lg lg:text-[20px] text-white/70 leading-relaxed max-w-[784px]">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>
        </div>

        {/* ===================== Interactive Search Box ===================== */}
        <form
          onSubmit={handleSearch}
          className="mt-8 sm:mt-10 w-full max-w-[784px] rounded-2xl bg-[#101010]/95 p-2 sm:p-2.5 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all focus-within:border-brand/70 focus-within:ring-2 focus-within:ring-brand/30"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            {/* Field 1: Job title / skill */}
            <div className="flex flex-1 items-center gap-3 px-3 py-2 sm:py-1">
              <Search className="h-5 w-5 shrink-0 text-white/60" />
              <input
                type="text"
                value={jobQuery}
                onChange={(e) => setJobQuery(e.target.value)}
                placeholder="Job tilte, skill or company"
                aria-label="Job title, skill or company"
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>

            {/* Vertical Separator */}
            <span
              aria-hidden="true"
              className="hidden sm:block h-6 w-px bg-white/20 shrink-0"
            />

            {/* Field 2: Location */}
            <div className="flex flex-1 items-center gap-3 px-3 py-2 sm:py-1 border-t sm:border-t-0 border-white/10 pt-2 sm:pt-1">
              <MapPin className="h-5 w-5 shrink-0 text-white/60" />
              <input
                type="text"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                placeholder="Location or Remote"
                aria-label="Location or Remote"
                className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand px-6 text-[16px] font-semibold text-brand-foreground shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),0_4px_16px_rgba(92,83,254,0.4)] transition-all hover:bg-brand-hover active:scale-[0.98]"
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
          </div>
        </form>

        {/* ===================== Trending Positions ===================== */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm">
          <span className="font-manrope text-white/70 font-normal">
            Trending Position
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {TRENDING_POSITIONS.map((pos) => (
              <button
                key={pos}
                type="button"
                onClick={() => handleTrendingClick(pos)}
                className="rounded-full bg-[#1A1A1B] border border-white/10 px-3.5 py-1 text-xs sm:text-sm text-white/90 transition-all hover:border-white/30 hover:bg-[#252528] hover:text-white active:scale-95"
              >
                {pos}
              </button>
            ))}
          </div>
        </div>

        {/* ===================== Stats Section ===================== */}
        <div className="mt-20 sm:mt-28 w-full max-w-[1320px]">
          {/* Subheading */}
          <h2 className="mx-auto max-w-[600px] text-center font-manrope text-2xl sm:text-3xl lg:text-[40px] font-medium leading-snug text-white/70">
            Assisting over 15,000 job seekers find their dream positions.
          </h2>

          {/* 4 Cards Grid */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex h-[254px] flex-col justify-between rounded-2xl bg-gradient-to-b from-[#141416]/95 via-[#0D0D10]/95 to-[#040406]/95 border border-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_12px_36px_rgba(92,83,254,0.15)]"
                >
                  {/* Subtle top card glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />

                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 transition-colors group-hover:bg-brand group-hover:ring-brand/50 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Numbers & Label */}
                  <div>
                    <div className="font-jakarta text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 font-manrope text-base sm:text-lg text-white/70">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
