"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TEAM } from "@/lib/data";
import { fadeUp, VIEWPORT } from "@/lib/motion";

const reveal = fadeUp();

export default function Team() {
  const prefersReduced = useReducedMotion();
  const animate = !prefersReduced;

  return (
    <section
      id="team"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-rule bg-paper"
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-4 h-px bg-ink-3" />
          <span className="text-[0.62rem] font-mono tracking-[0.2em] uppercase text-ink-3">
            Team Leadership
          </span>
        </motion.div>

        <motion.p
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          className="text-[0.7rem] font-mono text-ink-3 mb-3"
        >
          {TEAM.eyebrow}
        </motion.p>

        <motion.h2
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          custom={0.1}
          className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-10"
          style={{ letterSpacing: "-0.02em" }}
        >
          {TEAM.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Paragraphs */}
          <div className="space-y-5">
            {TEAM.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={reveal}
                initial={animate ? "hidden" : "visible"}
                whileInView="visible"
                viewport={VIEWPORT}
                custom={i * 0.1}
                className="text-[0.92rem] text-ink-2 leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Pull quote + stats */}
          <div>
            <motion.blockquote
              variants={reveal}
              initial={animate ? "hidden" : "visible"}
              whileInView="visible"
              viewport={VIEWPORT}
              custom={0.2}
              className="border-l-2 border-brand pl-6 mb-10"
            >
              <p className="text-[0.95rem] italic text-ink-2 leading-relaxed">
                &ldquo;{TEAM.pullquote}&rdquo;
              </p>
            </motion.blockquote>

            {/* Key numbers */}
            <motion.div
              variants={reveal}
              initial={animate ? "hidden" : "visible"}
              whileInView="visible"
              viewport={VIEWPORT}
              custom={0.3}
              className="grid grid-cols-3 border border-rule"
            >
              {[
                { value: "5명", label: "CX PO 팀" },
                { value: "5개", label: "OKR" },
                { value: "73건+", label: "월간 티켓" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-4"
                  style={{ borderRight: i < 2 ? "1px solid var(--color-rule)" : "none" }}
                >
                  <p className="font-semibold text-xl text-brand mb-1">{stat.value}</p>
                  <p className="text-[0.62rem] font-mono tracking-[0.1em] uppercase text-ink-3">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
