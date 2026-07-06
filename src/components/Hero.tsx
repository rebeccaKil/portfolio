"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HERO } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import type { Variants, Transition } from "framer-motion";

function CountUp({
  target,
  duration = 1800,
  inView,
}: {
  target: string;
  duration?: number;
  inView: boolean;
}) {
  const numMatch = target.match(/[\d.]+/);
  const num = numMatch ? parseFloat(numMatch[0]) : null;
  const prefix = num !== null ? target.slice(0, target.indexOf(numMatch![0])) : "";
  const suffix = num !== null ? target.slice(target.indexOf(numMatch![0]) + numMatch![0].length) : "";

  const [display, setDisplay] = useState(
    num !== null ? (Number.isInteger(num) ? String(Math.round(num)) : num.toFixed(1)) : target
  );
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView || num === null) return;
    startRef.current = null;

    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const progress = Math.min((ts - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num * 10) / 10;
      setDisplay(Number.isInteger(num) ? String(Math.round(current)) : current.toFixed(1));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, num, duration]);

  if (num === null) return <span>{target}</span>;
  return <span>{prefix}{display}{suffix}</span>;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay } as Transition,
  }),
};

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const animate = !prefersReduced;

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#0a1628" }}
    >
      {/* Background gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #e8622a 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-32 max-w-6xl w-full">
        {/* Kicker */}
        <motion.div
          variants={fadeUp}
          initial={animate ? "hidden" : "visible"}
          animate="visible"
          custom={0.1}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-6 h-px bg-brand" />
          <span className="text-[0.65rem] font-mono tracking-[0.22em] uppercase text-brand">
            Product Owner · Travel &amp; E-commerce · Payments · AI
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8">
          {HERO.headline.map((line, i) => (
            <motion.h1
              key={i}
              variants={fadeUp}
              initial={animate ? "hidden" : "visible"}
              animate="visible"
              custom={0.2 + i * 0.1}
              className="text-white font-semibold leading-tight tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)" }}
            >
              {i === 1 ? (
                <>
                  개선하고,{" "}
                  <em className="not-italic" style={{ color: "#e8622a" }}>
                    전환율
                  </em>
                  로
                </>
              ) : (
                line
              )}
            </motion.h1>
          ))}
        </div>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          initial={animate ? "hidden" : "visible"}
          animate="visible"
          custom={0.5}
          className="max-w-[560px] text-[0.95rem] leading-relaxed mb-10"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {HERO.subtext}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial={animate ? "hidden" : "visible"}
          animate="visible"
          custom={0.6}
          className="flex flex-wrap gap-3 mb-16"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "#e8622a",
              color: "white",
              boxShadow: "0 0 0 0 rgba(232,98,42,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 24px rgba(232,98,42,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            프로젝트 보기
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium tracking-wide transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.8)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            연락하기
          </a>
        </motion.div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {HERO.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial={animate ? "hidden" : "visible"}
              animate="visible"
              custom={0.7 + i * 0.2}
              className="pt-6 pr-8 pb-2"
              style={{
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <div
                className="font-semibold leading-none mb-2"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#e8622a" }}
              >
                <CountUp target={stat.value} inView={statsVisible} />
              </div>
              <div className="text-[0.62rem] font-mono tracking-[0.1em] uppercase mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                {stat.label}
              </div>
              <div className="text-[0.78rem]" style={{ color: "rgba(255,255,255,0.25)" }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[0.58rem] font-mono tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
          Scroll
        </span>
        <motion.div
          animate={animate ? { y: [0, 6, 0] } : undefined}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
