"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.2, rootMargin: "-60px 0px -40% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-rule shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="text-[0.65rem] font-mono tracking-[0.18em] uppercase transition-colors"
            style={{ color: scrolled ? "#0f172a" : "rgba(255,255,255,0.9)" }}
          >
            Rebecca K.
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full bg-brand"
            aria-hidden
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[0.65rem] font-mono tracking-[0.14em] uppercase px-3 py-1.5 rounded transition-all duration-200"
                style={{
                  color: isActive
                    ? scrolled ? "#0f172a" : "rgba(255,255,255,1)"
                    : scrolled ? "#64748b" : "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = scrolled
                    ? "#0f172a"
                    : "rgba(255,255,255,1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = isActive
                    ? scrolled ? "#0f172a" : "rgba(255,255,255,1)"
                    : scrolled ? "#64748b" : "rgba(255,255,255,0.6)";
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0.5 left-3 right-3 h-px"
                    style={{ background: scrolled ? "#e8622a" : "rgba(232,98,42,0.8)" }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-6 h-5 justify-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span
            className={`block h-px w-full transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
            style={{ background: scrolled ? "#0f172a" : "white" }}
          />
          <span
            className={`block h-px w-full transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
            style={{ background: scrolled ? "#0f172a" : "white" }}
          />
          <span
            className={`block h-px w-full transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
            style={{ background: scrolled ? "#0f172a" : "white" }}
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-rule shadow-lg md:hidden"
          >
            <div className="flex flex-col py-4 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm font-mono tracking-wider uppercase py-3 border-b border-rule last:border-0 text-ink-3 hover:text-ink transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
