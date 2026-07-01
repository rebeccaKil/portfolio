"use client";

import { motion, useReducedMotion } from "framer-motion";
import { VALUES } from "@/lib/data";
import { fadeUp, scaleIn, VIEWPORT } from "@/lib/motion";

const reveal = fadeUp();
const scale = scaleIn();

export default function Process() {
  const prefersReduced = useReducedMotion();
  const animate = !prefersReduced;

  return (
    <section
      id="process"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-rule"
      style={{ background: "#f7f6f3" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-4 h-px bg-ink-3" />
          <span className="text-[0.62rem] font-mono tracking-[0.2em] uppercase text-ink-3">How I Work</span>
        </motion.div>

        <motion.h2
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          custom={0.1}
          className="text-2xl md:text-3xl font-semibold tracking-tight text-ink mb-3"
          style={{ letterSpacing: "-0.02em" }}
        >
          일하는 방식
        </motion.h2>
        <motion.p
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          custom={0.15}
          className="text-[0.9rem] text-ink-3 mb-14 max-w-lg"
        >
          고객·운영자·개발팀이 교차하는 지점에서 판단하는 기준.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-rule">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.n}
              variants={scale}
              initial={animate ? "hidden" : "visible"}
              whileInView="visible"
              viewport={VIEWPORT}
              custom={i * 0.07}
              className="p-6 hover:bg-white transition-colors duration-200 group"
              style={{
                borderRight: (i % 3 !== 2) ? "1px solid var(--color-rule)" : "none",
                borderBottom: i < VALUES.length - 3 ? "1px solid var(--color-rule)" : "none",
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <span
                  className="text-[0.58rem] font-mono tracking-[0.1em] mt-1 flex-shrink-0"
                  style={{ color: "#e8622a" }}
                >
                  {v.n}
                </span>
                <h3 className="text-[0.9rem] font-semibold text-ink leading-snug">
                  {v.title}
                </h3>
              </div>
              <p className="text-[0.82rem] text-ink-2 leading-relaxed pl-6">
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
