"use client";

import { motion } from "framer-motion";
import { Award, CalendarRange, Sparkles } from "lucide-react";

export type Role = {
  title: string;
  period: string;
  award: string | null;
  summary: string;
  impact: Array<{ value: string; label: string }>;
  outcomes: Array<{ label: string; metric: string; detail: string }>;
  tags: string[];
};

function parsePeriod(period: string) {
  const [start = period, end = "Present"] = period.split(" - ");
  const startYear = start.match(/\d{4}/)?.[0] ?? start;
  const endYear = end.match(/\d{4}/)?.[0] ?? end;

  return { start, end, startYear, endYear };
}

export default function RoleCard({
  role,
  index,
  total,
}: {
  role: Role;
  index: number;
  total: number;
}) {
  const period = parsePeriod(role.period);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="relative"
    >
      <div className="absolute -left-[2.45rem] top-8 hidden lg:block">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-bg bg-accent text-xs font-black text-white">
          {total - index}
        </div>
      </div>

      <div className="card-border grid overflow-hidden rounded-xl bg-surface lg:grid-cols-[minmax(300px,0.36fr)_1fr]">
        <div className="border-b border-border bg-bg p-5 lg:border-b-0 lg:border-r lg:p-6">
          <div className="rounded-lg border border-accent/25 bg-accent/[0.06] p-4">
            <div className="flex items-center gap-2 text-accent">
              <CalendarRange size={18} aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest">Timeline</span>
            </div>
            <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <div className="min-w-0 rounded-lg border border-border bg-surface px-3 py-2">
                <p className="font-heading text-2xl font-bold leading-none text-text">
                  {period.startYear}
                </p>
                <p className="mt-1 truncate text-xs font-semibold text-muted">{period.start}</p>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">to</span>
              <div className="min-w-0 rounded-lg border border-border bg-surface px-3 py-2 text-right">
                <p className="font-heading text-2xl font-bold leading-none text-text">
                  {period.endYear}
                </p>
                <p className="mt-1 truncate text-xs font-semibold text-muted">{period.end}</p>
              </div>
            </div>
          </div>

          {role.award && (
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-bold leading-relaxed text-muted">
              <Award size={14} className="text-accent" aria-hidden="true" />
              <span className="min-w-0">{role.award}</span>
            </div>
          )}

          <div className="mt-5 grid grid-cols-3 gap-2">
            {role.impact.map((metric) => (
              <div key={metric.label} className="min-w-0 rounded-lg border border-border bg-surface p-3">
                <p className="font-heading text-lg font-bold leading-tight text-text">{metric.value}</p>
                <p className="mt-1 break-words text-[11px] leading-tight text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 lg:p-6">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Role {total - index}
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold leading-tight text-text md:text-3xl">
              {role.title}
            </h3>
            <p className="mt-3 max-w-3xl text-base font-semibold leading-relaxed text-muted">
              {role.summary}
            </p>
          </div>

          <p className="mb-3 text-xs font-mono uppercase tracking-widest text-accent">
            Selected Outcomes
          </p>
          <div className="grid gap-3">
            {role.outcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="rounded-lg border border-border bg-bg p-4 transition-colors hover:border-border-bright"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-white">
                    <Sparkles size={12} aria-hidden="true" />
                    {outcome.label}
                  </span>
                  <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-bold leading-snug text-accent">
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
                className="rounded-lg border border-border bg-elevated px-2.5 py-1 text-xs font-medium leading-snug text-muted"
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
