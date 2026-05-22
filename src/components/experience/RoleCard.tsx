"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Sparkles } from "lucide-react";

export type Role = {
  title: string;
  period: string;
  award: string | null;
  summary: string;
  impact: Array<{ value: string; label: string }>;
  outcomes: Array<{ label: string; metric: string; detail: string }>;
  tags: string[];
};

export default function RoleCard({ role, index }: { role: Role; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="card-border bg-surface rounded-lg overflow-hidden"
    >
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-border bg-bg p-5 lg:border-b-0 lg:border-r">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-muted">{role.period}</p>
              <h3 className="mt-2 font-heading text-xl font-bold text-text">{role.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{role.summary}</p>
            </div>
            <Briefcase size={20} className="mt-1 flex-shrink-0 text-accent" />
          </div>

          {role.award && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted">
              <Award size={13} className="text-accent" />
              {role.award}
            </div>
          )}

          <div className="mt-5 grid grid-cols-3 gap-2">
            {role.impact.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-border bg-surface p-3">
                <p className="font-heading text-lg font-bold text-text">{metric.value}</p>
                <p className="mt-1 text-[11px] leading-tight text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5">
          <p className="mb-3 text-xs font-mono uppercase tracking-widest text-accent">
            Selected Outcomes
          </p>
          <div className="grid gap-3">
            {role.outcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="rounded-lg border border-border bg-bg p-4"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-white">
                    <Sparkles size={12} />
                    {outcome.label}
                  </span>
                  <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-bold text-accent">
                    {outcome.metric}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{outcome.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {role.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-border bg-elevated px-2.5 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
