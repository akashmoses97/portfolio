"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "1M+", label: "Daily Requests" },
  { value: "99%", label: "System Uptime" },
  { value: "3.8", label: "GPA" },
];

const easeOut = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: easeOut },
});

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-a absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-accent/[0.12] blur-[120px]" />
        <div className="orb-b absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-cyan/[0.08] blur-[100px]" />
        <div className="orb-c absolute top-[50%] left-[50%] w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        {/* Availability badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium border border-accent/30 bg-accent/[0.08] text-accent-light">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Available for OPT · US-based SWE Roles
          </span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="font-heading font-extrabold text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-tight"
          >
            <span className="gradient-text">Akash Moses</span>
            <br />
            <span className="text-text/90">Guttedar</span>
          </motion.h1>
        </div>

        {/* Role line */}
        <motion.div {...fadeUp(0.45)} className="mb-5">
          <p className="text-[clamp(1rem,2.5vw,1.4rem)] text-muted font-medium tracking-wide">
            Senior Software Engineer{" "}
            <span className="text-border-bright">·</span>{" "}
            <span className="text-accent-light">SDE II @ JPMorgan Chase</span>
            <span className="text-border-bright"> · </span>
            MS Computer Engineering, Texas A&M
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.55)}
          className="max-w-2xl text-base md:text-lg text-muted/80 leading-relaxed mb-10"
        >
          Building production-grade distributed systems, secure IAM microservices, and
          AI-integrated platforms. Deep in Java/Spring Boot, Kubernetes, and AWS — with a
          systems-first mindset shaped by 4+ years of large-scale engineering at JPMC.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-4 mb-14">
          <button
            onClick={scrollToWork}
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
          >
            <span>View My Work</span>
            <ArrowRight size={15} className="relative z-10" />
          </button>
          <button
            onClick={scrollToContact}
            className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
          >
            Get in Touch
          </button>

          {/* Social links */}
          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://github.com/akashmoses97"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border text-muted hover:text-text hover:border-border-bright transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href="https://linkedin.com/in/akash-moses"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border text-muted hover:text-text hover:border-border-bright transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href="mailto:moses.ak1997@gmail.com"
              className="p-2.5 rounded-lg border border-border text-muted hover:text-text hover:border-border-bright transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.8)}
          className="flex flex-wrap gap-8 pt-8 border-t border-border"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 + i * 0.08 }}
              className="flex flex-col gap-0.5"
            >
              <span className="font-heading font-bold text-2xl md:text-3xl gradient-accent">
                {s.value}
              </span>
              <span className="text-xs text-muted font-medium tracking-wide">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
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
