"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CASES, CX_SCOPE, type CaseStudy, type CaseSection } from "@/lib/data";
import { fadeUp, cardVariant, VIEWPORT } from "@/lib/motion";

const reveal = fadeUp();
const cardVariants = cardVariant();

// ── Section renderers ──────────────────────────────────────────────────────

function Paragraph({ content }: { content: string }) {
  return (
    <p className="text-[0.88rem] text-ink-2 leading-relaxed">{content}</p>
  );
}

function Pullquote({ content }: { content: string }) {
  return (
    <blockquote className="border-l-2 border-brand pl-4 py-1">
      <p className="text-[0.88rem] text-ink-2 leading-relaxed italic">{content}</p>
    </blockquote>
  );
}

function Flow({ label, steps }: { label: string; steps: { label: string; key?: boolean }[] }) {
  return (
    <div>
      <p className="text-[0.62rem] font-mono tracking-[0.12em] uppercase text-ink-3 mb-2">{label}</p>
      <div className="flex flex-wrap items-center gap-1.5">
        {steps.map((s, i) => (
          <span
            key={i}
            className="text-[0.78rem] font-mono px-2.5 py-1"
            style={
              s.key
                ? { background: "#e8622a", color: "white" }
                : s.label === "→"
                ? { color: "#9ca3af", fontSize: "0.7rem" }
                : { background: "var(--color-paper-2)", color: "var(--color-ink-2)", border: "1px solid var(--color-rule)" }
            }
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Decision({ title, cols }: { title: string; cols: { label: string; role: "no" | "yes"; content: string }[] }) {
  return (
    <div className="border border-rule overflow-hidden">
      <div className="px-4 py-2.5 border-b border-rule bg-paper-2">
        <p className="text-[0.72rem] font-mono text-ink-2">{title}</p>
      </div>
      <div className="grid grid-cols-2">
        {cols.map((col) => (
          <div
            key={col.label}
            className="p-4"
            style={{
              borderRight: col.role === "no" ? "1px solid var(--color-rule)" : undefined,
              borderTop: `2px solid ${col.role === "yes" ? "#e8622a" : "#94a3b8"}`,
            }}
          >
            <p
              className="text-[0.62rem] font-mono tracking-[0.1em] uppercase mb-2"
              style={{ color: col.role === "yes" ? "#e8622a" : "#94a3b8" }}
            >
              {col.label}
            </p>
            <p className="text-[0.82rem] text-ink-2 leading-relaxed">{col.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Impacts({ items, accent }: { items: { value: string; label: string; desc?: string }[]; accent: string }) {
  return (
    <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${Math.min(items.length, 3)}, 1fr)` }}>
      {items.map((item) => (
        <div key={item.label} className="border border-rule p-3">
          <p className="font-semibold leading-none mb-1" style={{ fontSize: "1.5rem", color: accent }}>{item.value}</p>
          <p className="text-[0.62rem] font-mono tracking-[0.1em] uppercase text-ink-3 mb-1">{item.label}</p>
          {item.desc && <p className="text-[0.75rem] text-ink-3 leading-relaxed">{item.desc}</p>}
        </div>
      ))}
    </div>
  );
}

function InsightBlock({ label, body }: { label: string; body: string }) {
  return (
    <div className="p-4" style={{ background: "rgba(232,98,42,0.04)", borderLeft: "3px solid #e8622a" }}>
      <p className="text-[0.62rem] font-mono tracking-[0.12em] uppercase text-brand mb-2">{label}</p>
      <p className="text-[0.84rem] text-ink-2 leading-relaxed">{body}</p>
    </div>
  );
}

function Highlight({ eyebrow, body }: { eyebrow: string; body: string }) {
  return (
    <div className="p-4 bg-paper-2 border border-rule">
      <p className="text-[0.62rem] font-mono tracking-[0.12em] uppercase text-ink-3 mb-2">{eyebrow}</p>
      <p className="text-[0.84rem] text-ink-2 leading-relaxed">{body}</p>
    </div>
  );
}

function Roles({ scope, decided, coordinated }: { scope: string; decided: string; coordinated: string }) {
  const rows = [
    { k: "담당 범위", v: scope },
    { k: "결정한 것", v: decided },
    { k: "조율한 것", v: coordinated },
  ];
  return (
    <div className="border border-rule overflow-hidden">
      <div className="px-4 py-2.5 border-b border-rule bg-paper-2">
        <p className="text-[0.62rem] font-mono tracking-[0.12em] uppercase text-ink-3">나의 역할</p>
      </div>
      {rows.map((r, i) => (
        <div
          key={r.k}
          className="grid"
          style={{
            gridTemplateColumns: "88px 1fr",
            borderBottom: i < rows.length - 1 ? "1px solid var(--color-rule)" : "none",
          }}
        >
          <div
            className="px-4 py-3 text-[0.6rem] font-mono tracking-[0.08em] uppercase text-brand"
            style={{ borderRight: "1px solid var(--color-rule)" }}
          >
            {r.k}
          </div>
          <div className="px-4 py-3 text-[0.82rem] text-ink-2 leading-relaxed">{r.v}</div>
        </div>
      ))}
    </div>
  );
}

function Tags({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="border-t border-rule pt-4">
      <p className="text-[0.62rem] font-mono tracking-[0.12em] uppercase text-ink-3 mb-2.5">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((t) => (
          <span
            key={t}
            className="text-[0.72rem] font-mono px-2.5 py-1 border border-rule text-ink-2 bg-paper-2"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Footnote({ content }: { content: string }) {
  return (
    <p className="text-[0.78rem] text-ink-3 leading-relaxed border-t border-rule pt-3">{content}</p>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: { cells: string[]; highlight?: boolean }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[0.78rem] border-collapse">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-3 py-2 font-mono text-[0.62rem] tracking-[0.1em] uppercase text-ink-3 border-b border-rule"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={row.highlight ? { background: "rgba(232,98,42,0.05)" } : undefined}
            >
              {row.cells.map((cell, j) => (
                <td
                  key={j}
                  className="px-3 py-2 border-b border-rule text-ink-2"
                  style={row.highlight ? { fontWeight: 500 } : undefined}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Grid2({ items }: { items: { eyebrow: string; title: string; body: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <div key={item.eyebrow} className="p-3 border border-rule">
          <p className="text-[0.6rem] font-mono tracking-[0.1em] uppercase text-brand mb-1">{item.eyebrow}</p>
          {item.title && <p className="text-[0.82rem] font-medium text-ink mb-1">{item.title}</p>}
          <p className="text-[0.78rem] text-ink-2 leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

function Grid3({ items }: { items: { eyebrow: string; title: string; body: string }[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      {items.map((item) => (
        <div key={item.eyebrow} className="p-3 border border-rule">
          <p className="text-[0.6rem] font-mono tracking-[0.1em] uppercase text-brand mb-1">{item.eyebrow}</p>
          <p className="text-[0.82rem] font-medium text-ink mb-1">{item.title}</p>
          <p className="text-[0.78rem] text-ink-2 leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

function ImageGallery({ label, items }: { label?: string; items: { src: string; caption?: string }[] }) {
  return (
    <div>
      {label && (
        <p className="text-[0.62rem] font-mono tracking-[0.12em] uppercase text-ink-3 mb-3">{label}</p>
      )}
      <div className={`grid gap-3 ${items.length === 1 ? "grid-cols-1" : items.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
        {items.map((item, i) => (
          <div key={i} className="border border-rule overflow-hidden bg-paper-2">
            <img
              src={item.src}
              alt={item.caption ?? ""}
              className="w-full object-contain"
              style={{ maxHeight: "360px" }}
              loading="lazy"
              decoding="async"
            />
            {item.caption && (
              <p className="text-[0.7rem] text-ink-3 px-3 py-2 border-t border-rule">{item.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function renderSection(section: CaseSection, accent: string, idx: number) {
  switch (section.type) {
    case "paragraph":
      return <Paragraph key={idx} content={section.content} />;
    case "pullquote":
      return <Pullquote key={idx} content={section.content} />;
    case "flow":
      return <Flow key={idx} label={section.label} steps={section.steps} />;
    case "decision":
      return <Decision key={idx} title={section.title} cols={section.cols} />;
    case "impacts":
      return <Impacts key={idx} items={section.items} accent={accent} />;
    case "insight":
      return <InsightBlock key={idx} label={section.label} body={section.body} />;
    case "highlight":
      return <Highlight key={idx} eyebrow={section.eyebrow} body={section.body} />;
    case "roles":
      return <Roles key={idx} scope={section.scope} decided={section.decided} coordinated={section.coordinated} />;
    case "tags":
      return <Tags key={idx} label={section.label} items={section.items} />;
    case "footnote":
      return <Footnote key={idx} content={section.content} />;
    case "table":
      return <DataTable key={idx} headers={section.headers} rows={section.rows} />;
    case "grid2":
      return <Grid2 key={idx} items={section.items} />;
    case "grid3":
      return <Grid3 key={idx} items={section.items} />;
    case "images":
      return <ImageGallery key={idx} label={section.label} items={section.items} />;
    default:
      return null;
  }
}

// ── Case Card ──────────────────────────────────────────────────────────────

function CaseCard({
  c,
  index,
  animate,
}: {
  c: CaseStudy;
  index: number;
  animate: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  // Find impacts section for card summary
  const impactsSec = c.sections.find((s) => s.type === "impacts");
  const impacts = impactsSec && impactsSec.type === "impacts" ? impactsSec.items.slice(0, 2) : [];

  return (
    <motion.article
      variants={cardVariants}
      initial={animate ? "hidden" : "visible"}
      whileInView="visible"
      viewport={VIEWPORT}
      custom={index}
      whileHover={animate ? { y: -3 } : undefined}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-white border border-rule overflow-hidden hover:shadow-lg"
      style={{ transition: "box-shadow 0.25s ease" }}
    >
      {/* Top accent */}
      <div className="h-0.5 w-full" style={{ background: c.accent }} />

      {/* Card header — always visible */}
      <button
        type="button"
        className="w-full text-left p-6 md:p-8 cursor-pointer group"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="text-[0.6rem] font-mono tracking-[0.14em] uppercase" style={{ color: c.accent }}>
            {c.eyebrow}
          </span>
          <motion.span
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-5 flex items-center justify-center rounded-full border border-rule text-ink-3 text-sm flex-shrink-0 mt-0.5 group-hover:border-ink-2 transition-colors"
          >
            +
          </motion.span>
        </div>

        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-ink mb-1 leading-snug text-left">
          {c.title}
        </h3>
        <p className="text-[0.7rem] font-mono text-ink-3 pb-4 border-b border-rule text-left">{c.sub}</p>

        {/* Impact summary */}
        {impacts.length > 0 && (
          <div className="flex gap-6 pt-4">
            {impacts.map((imp) => (
              <div key={imp.label}>
                <p className="font-semibold leading-none mb-1" style={{ fontSize: "1.3rem", color: c.accent }}>
                  {imp.value}
                </p>
                <p className="text-[0.6rem] font-mono tracking-[0.1em] uppercase text-ink-3">{imp.label}</p>
              </div>
            ))}
          </div>
        )}
      </button>

      {/* Expandable full content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 space-y-5 border-t border-rule pt-6">
              {c.sections.map((section, i) => renderSection(section, c.accent, i))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function Projects() {
  const prefersReduced = useReducedMotion();
  const animate = !prefersReduced;

  return (
    <section id="work" className="relative py-16 md:py-24 px-6 md:px-12 lg:px-20" style={{ background: "#f8f9fa" }}>
      {/* Hero→Work gradient bridge */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0a1628, transparent)" }}
        aria-hidden
      />
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
          <span className="text-[0.62rem] font-mono tracking-[0.2em] uppercase text-ink-3">Work</span>
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
          케이스 스터디
        </motion.h2>
        <motion.p
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          custom={0.15}
          className="text-[0.9rem] text-ink-3 mb-12 max-w-lg"
        >
          카드를 클릭하면 문제·해결방식·성과를 확인할 수 있습니다.
        </motion.p>

        {/* Case cards — single column for full detail */}
        <div className="space-y-5">
          {CASES.map((c, i) => (
            <CaseCard key={c.id} c={c} index={i} animate={animate} />
          ))}
        </div>

        {/* CX Scope strip */}
        <motion.div
          variants={reveal}
          initial={animate ? "hidden" : "visible"}
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 border border-rule overflow-hidden"
          style={{ background: "#0f172a" }}
        >
          <div className="px-6 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <p className="text-[0.6rem] font-mono tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
              AI Experience Unit 담당 영역 — 결제 · 회원 · 전시 · 투티 · 쿠폰
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6">
            {CX_SCOPE.map((item, i) => (
              <div
                key={item.name}
                className="px-4 py-4"
                style={{
                  borderRight: i < 5 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  borderTop: item.own ? "2px solid #e8622a" : "2px solid transparent",
                }}
              >
                <p
                  className="text-[0.78rem] font-medium mb-1"
                  style={{ color: item.own ? "white" : "rgba(255,255,255,0.4)" }}
                >
                  {item.name}
                </p>
                <p className="text-[0.62rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.25)" }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
