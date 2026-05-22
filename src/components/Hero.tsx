"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Database, Mail, Server, Shield } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import hero from "@/data/hero/content.json";
import profile from "@/data/site/profile.json";

const easeOut = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: easeOut },
});

const focusIcons = {
  server: <Server size={16} />,
  shield: <Shield size={16} />,
  database: <Database size={16} />,
  briefcase: <Briefcase size={16} />,
} as const;

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-border" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
          <div>
            <motion.div {...fadeUp(0.1)} className="mb-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium border border-accent/20 bg-accent/[0.06] text-accent-light">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {hero.availability}
              </span>
            </motion.div>

            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
                className="font-heading font-extrabold text-[clamp(2.7rem,6.5vw,5.8rem)] leading-[0.98] tracking-tight max-w-4xl"
              >
                {hero.name}
              </motion.h1>
            </div>

            <motion.p
              {...fadeUp(0.32)}
              className="mb-5 max-w-3xl text-[clamp(1.35rem,3vw,2.25rem)] font-semibold leading-tight text-accent"
            >
              {hero.tagline}
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="mb-8">
              <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl">
                {hero.description}
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.55)} className="grid sm:grid-cols-2 gap-3 mb-9 max-w-2xl">
              {hero.focusAreas.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-text"
                >
                  <span className="text-accent">
                    {focusIcons[item.icon as keyof typeof focusIcons]}
                  </span>
                  {item.label}
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-4">
              <button
                onClick={scrollToWork}
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight size={15} className="relative z-10" />
              </button>
              <button
                onClick={scrollToContact}
                className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold"
              >
                {hero.secondaryCta}
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={profile.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-surface text-muted hover:text-text hover:border-border-bright transition-all duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon size={17} />
                </a>
                <a
                  href={profile.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-surface text-muted hover:text-text hover:border-border-bright transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={17} />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="p-2.5 rounded-lg border border-border bg-surface text-muted hover:text-text hover:border-border-bright transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail size={17} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.aside
            {...fadeUp(0.35)}
            className="card-border bg-surface rounded-lg p-5 md:p-6"
            aria-label="Professional impact summary"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-accent">
                  Work Impact
                </p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-text">
                  {hero.impactCompany}
                </h2>
                <p className="mt-1 text-sm text-muted">{hero.impactRole}</p>
              </div>
              <span className="rounded-lg bg-elevated px-3 py-2 text-xs font-semibold text-accent">
                {hero.impactBadge}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 py-5">
              {hero.stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-border bg-bg p-4">
                  <p className="font-heading text-2xl font-bold text-text">{s.value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-border pt-5">
              {hero.evidence.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
