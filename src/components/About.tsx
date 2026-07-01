"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ABOUT, CAREER } from "@/lib/data";
import { fadeUp, VIEWPORT } from "@/lib/motion";

const reveal = fadeUp();

export default function About() {
  const prefersReduced = useReducedMotion();
  const animate = !prefersReduced;

  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-paper border-t border-rule">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex items-center gap-3 mb-14"
        >
          <span className="w-4 h-px bg-ink-3" />
          <span className="text-[0.62rem] font-mono tracking-[0.2em] uppercase text-ink-3">About</span>
        </motion.div>

        {/* Top: intro + highlights */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Left: Intro */}
          <div>
            <motion.h2
              variants={reveal}
              initial={animate ? "hidden" : "visible"}
              whileInView="visible"
              viewport={VIEWPORT}
              className="text-2xl md:text-3xl font-semibold leading-snug tracking-tight mb-8 text-ink"
              style={{ letterSpacing: "-0.02em" }}
            >
              데이터에서 문제를 찾고,<br />
              <span style={{ color: "#e8622a" }}>구조</span>로 해결합니다
            </motion.h2>

            {ABOUT.intro.map((para, i) => (
              <motion.p
                key={i}
                variants={reveal}
                initial={animate ? "hidden" : "visible"}
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i * 0.1}
                className="text-[0.95rem] leading-relaxed text-ink-2 mb-4"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Right: Highlights grid */}
          <div>
            <motion.p
              variants={reveal}
              initial={animate ? "hidden" : "visible"}
              whileInView="visible"
              viewport={VIEWPORT}
              className="text-[0.62rem] font-mono tracking-[0.16em] uppercase text-ink-3 mb-6"
            >
              What I Do
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-rule">
              {ABOUT.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  variants={reveal}
                  initial={animate ? "hidden" : "visible"}
                  whileInView="visible"
                  viewport={VIEWPORT}
                  custom={i * 0.07}
                  className="p-5 border-b border-rule hover:bg-paper-2 transition-colors duration-200"
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid var(--color-rule)" : "none",
                  }}
                >
                  <p className="text-sm font-medium text-ink mb-1">{h.label}</p>
                  <p className="text-[0.8rem] text-ink-3 leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.blockquote
              variants={reveal}
              initial={animate ? "hidden" : "visible"}
              whileInView="visible"
              viewport={VIEWPORT}
              custom={0.3}
              className="mt-8 pl-5 border-l-2 border-brand"
            >
              <p className="text-sm italic text-ink-2 leading-relaxed">
                &ldquo;기획은 화면이 아니라 구조에서 시작합니다. 운영자가 직접 설정하고, 개발팀이 반복하지 않고, 데이터가 다음 결정을 이끄는 — 그게 제가 만드는 플랫폼입니다.&rdquo;
              </p>
            </motion.blockquote>
          </div>
        </div>

        {/* External Validation */}
        <motion.div
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-16 border border-rule overflow-hidden"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-rule bg-paper-2">
            <span className="text-[0.62rem] font-mono tracking-[0.2em] uppercase text-ink-3">
              외부 평가 — Convince X · Product Lead 후보자 분석 리포트
            </span>
            <div className="flex items-center gap-2">
              <span
                className="text-[0.72rem] font-mono font-semibold px-2 py-0.5"
                style={{ background: "#0f172a", color: "#10b981" }}
              >
                A+
              </span>
              <span className="text-[0.65rem] text-ink-3 font-mono">Product Lead 적임자</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: quote */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-rule flex flex-col justify-center">
              <p
                className="text-[0.95rem] font-medium leading-relaxed text-ink mb-4"
                style={{ letterSpacing: "-0.01em" }}
              >
                {ABOUT.validation.quote}
              </p>
              <p className="text-[0.82rem] text-ink-2 leading-relaxed">
                비즈니스 목적에 최적화된 프로덕트 구조(System Architecture)를 설계하는 역량이 탁월합니다. 파편화된 서비스들을 하나의 통합 플랫폼으로 재구축하고, 신규 서비스 런칭 전 과정을 주도했습니다.
              </p>
            </div>

            {/* Right: 4 points */}
            <div className="grid grid-cols-2">
              {ABOUT.validation.points.map((pt, i) => (
                <div
                  key={i}
                  className="p-4 border-b border-rule"
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid var(--color-rule)" : "none",
                    borderBottom: i < 2 ? "1px solid var(--color-rule)" : "none",
                  }}
                >
                  <p className="text-[0.6rem] font-mono tracking-[0.12em] uppercase mb-1.5" style={{ color: "#e8622a" }}>
                    {pt.label}
                  </p>
                  <p className="text-[0.78rem] text-ink-2 leading-relaxed">{pt.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Career — full width */}
        <motion.div
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          className="border-t border-rule pt-10"
        >
          <p className="text-[0.62rem] font-mono tracking-[0.2em] uppercase text-ink-3 mb-8">
            Career
          </p>

          <div className="relative pl-5">
            {/* Vertical timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "var(--color-rule)" }} />

            {CAREER.map((c, i) => {
              const isCurrent = c.period === "현재";
              return (
                <motion.div
                  key={i}
                  variants={reveal}
                  initial={animate ? "hidden" : "visible"}
                  whileInView="visible"
                  viewport={VIEWPORT}
                  custom={i * 0.06}
                  className="relative flex flex-col sm:grid gap-x-8 gap-y-1 py-5 border-b border-rule last:border-0"
                  style={{ gridTemplateColumns: "140px 1fr" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-5 top-6 flex items-center justify-center w-4">
                    {isCurrent ? (
                      <span className="relative flex h-2.5 w-2.5">
                        <span
                          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                          style={{ background: "#e8622a" }}
                        />
                        <span
                          className="relative inline-flex rounded-full h-2.5 w-2.5"
                          style={{ background: "#e8622a" }}
                        />
                      </span>
                    ) : (
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: "var(--color-ink-3)", opacity: 0.4 }}
                      />
                    )}
                  </div>

                  {/* Left: period + company */}
                  <div className="pt-0.5">
                    <p
                      className="text-[0.68rem] font-mono mb-1 leading-relaxed"
                      style={{ color: isCurrent ? "#e8622a" : "var(--color-ink-3)" }}
                    >
                      {c.period}
                    </p>
                    <p className="text-[0.72rem] text-ink-3 leading-snug">{c.company}</p>
                  </div>

                  {/* Right: role + desc */}
                  <div>
                    <p className="text-[0.88rem] font-semibold text-ink mb-1">{c.role}</p>
                    <p className="text-[0.8rem] text-ink-2 leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
