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
