"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, VIEWPORT } from "@/lib/motion";

const reveal = fadeUp();

const LINKS = [
  {
    label: "Email",
    value: "rebeccakil8615@gmail.com",
    href: "mailto:rebeccakil8615@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 3h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M1 4l7 5 7-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/rebeccaKil",
    href: "https://github.com/rebeccaKil",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1.5a6.5 6.5 0 00-2.055 12.67c.325.06.445-.14.445-.31v-1.08c-1.8.39-2.18-.87-2.18-.87-.295-.75-.72-.95-.72-.95-.59-.4.045-.39.045-.39.65.045 1 .67 1 .67.58 1 1.525.71 1.895.545.06-.42.23-.71.42-.875-1.44-.165-2.955-.72-2.955-3.205 0-.71.255-1.29.67-1.745-.07-.165-.29-.825.06-1.72 0 0 .545-.175 1.785.665A6.22 6.22 0 018 5.87c.555 0 1.11.075 1.63.215 1.235-.84 1.78-.665 1.78-.665.35.895.13 1.555.065 1.72.415.455.665 1.035.665 1.745 0 2.49-1.52 3.04-2.965 3.2.235.2.445.6.445 1.21v1.79c0 .175.115.375.45.31A6.5 6.5 0 008 1.5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  const prefersReduced = useReducedMotion();
  const animate = !prefersReduced;

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-rule"
      style={{ background: "#0a1628" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            variants={reveal}
            initial={animate ? "hidden" : "visible"}
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-4 h-px" style={{ background: "rgba(255,255,255,0.25)" }} />
            <span className="text-[0.62rem] font-mono tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
              Contact
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={reveal}
            initial={animate ? "hidden" : "visible"}
            whileInView="visible"
            viewport={VIEWPORT}
            custom={0.1}
            className="font-semibold text-white leading-tight mb-4 tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
          >
            새로운 기회나 협업,<br />
            <span style={{ color: "#e8622a" }}>언제든 연락 주세요</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            initial={animate ? "hidden" : "visible"}
            whileInView="visible"
            viewport={VIEWPORT}
            custom={0.2}
            className="text-[0.95rem] leading-relaxed mb-12"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            여행·이커머스 도메인에서 PO로 협업하거나,
            새로운 프로젝트를 제안해 주신다면 편하게 연락 주세요.
          </motion.p>

          {/* Contact links */}
          <div className="space-y-3">
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === "GitHub" ? "_blank" : undefined}
                rel={link.label === "GitHub" ? "noopener noreferrer" : undefined}
                variants={reveal}
                initial={animate ? "hidden" : "visible"}
                whileInView="visible"
                viewport={VIEWPORT}
                custom={0.25 + i * 0.08}
                whileHover={animate ? { x: 4 } : undefined}
                className="flex items-center justify-between group py-4 border-b transition-colors duration-200"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>{link.icon}</span>
                  <div>
                    <p className="text-[0.62rem] font-mono tracking-[0.14em] uppercase mb-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {link.label}
                    </p>
                    <p className="text-[0.9rem]" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {link.value}
                    </p>
                  </div>
                </div>
                <span
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: "#e8622a" }}
                >
                  →
                </span>
              </motion.a>
            ))}
          </div>

          {/* Status */}
          <motion.div
            variants={reveal}
            initial={animate ? "hidden" : "visible"}
            whileInView="visible"
            viewport={VIEWPORT}
            custom={0.5}
            className="mt-12 flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: "#10b981" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#10b981" }} />
            </span>
            <span className="text-[0.75rem] font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
              현재 새로운 기회를 열어두고 있습니다
            </span>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="mt-24 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span className="text-[0.65rem] font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>
          © 2025 Rebecca K. · Product Owner
        </span>
        <span className="text-[0.65rem] font-mono" style={{ color: "rgba(255,255,255,0.15)" }}>
          Built with Next.js · Framer Motion
        </span>
      </div>
    </section>
  );
}
