"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { fadeUp, scaleIn, VIEWPORT } from "@/lib/motion";

const reveal = fadeUp();
const tagAnim = scaleIn(0.35);

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  brand: {
    bg: "rgba(232,98,42,0.08)",
    text: "#e8622a",
    border: "rgba(232,98,42,0.2)",
    dot: "#e8622a",
  },
  indigo: {
    bg: "rgba(99,102,241,0.08)",
    text: "#6366f1",
    border: "rgba(99,102,241,0.2)",
    dot: "#6366f1",
  },
  emerald: {
    bg: "rgba(16,185,129,0.08)",
    text: "#10b981",
    border: "rgba(16,185,129,0.2)",
    dot: "#10b981",
  },
  amber: {
    bg: "rgba(245,158,11,0.08)",
    text: "#f59e0b",
    border: "rgba(245,158,11,0.2)",
    dot: "#f59e0b",
  },
  slate: {
    bg: "rgba(100,116,139,0.06)",
    text: "#64748b",
    border: "rgba(100,116,139,0.15)",
    dot: "#94a3b8",
  },
};


export default function Skills() {
  const prefersReduced = useReducedMotion();
  const animate = !prefersReduced;

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-rule"
      style={{ background: "#f7f6f3" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex items-center gap-3 mb-14"
        >
          <span className="w-4 h-px bg-ink-3" />
          <span className="text-[0.62rem] font-mono tracking-[0.2em] uppercase text-ink-3">
            Skills & Tools
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, gi) => {
            const colors = COLOR_MAP[group.color] ?? COLOR_MAP.slate;
            return (
              <motion.div
                key={group.category}
                variants={reveal}
                initial={animate ? "hidden" : "visible"}
                whileInView="visible"
                viewport={VIEWPORT}
                custom={gi * 0.08}
                className="bg-white border border-rule p-6 hover:shadow-sm transition-shadow duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: colors.dot }}
                  />
                  <span
                    className="text-[0.62rem] font-mono tracking-[0.16em] uppercase"
                    style={{ color: colors.text }}
                  >
                    {group.category}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      variants={tagAnim}
                      initial={animate ? "hidden" : "visible"}
                      whileInView="visible"
                      viewport={VIEWPORT}
                      custom={gi * 0.06 + ii * 0.03}
                      className="text-[0.75rem] px-2.5 py-1 rounded-sm font-mono border cursor-default"
                      style={{
                        background: colors.bg,
                        color: colors.text,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          custom={0.4}
          className="mt-10 text-[0.78rem] text-ink-3 font-mono text-center"
        >
          * 생성형 AI로 기획을 구현까지 직접 연결하는 PO입니다.
          Next.js·Supabase·Vercel 기반 사내 도구를 직접 제작한 경험이 있습니다.
        </motion.p>
      </div>
    </section>
  );
}
