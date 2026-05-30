"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import ProjectVisual from "@/components/projects/ProjectVisual";

export type Project = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  outcome: string;
  bullets: string[];
  tags: string[];
  github: string;
  live: string | null;
  accent: "primary" | "neutral";
  visual: "funnel" | "ranking" | "research";
  featured: boolean;
};

const accentClass = {
  primary: {
    bar: "bg-accent",
    dot: "#2563eb",
  },
  neutral: {
    bar: "bg-border-bright",
    dot: "#64748b",
  },
} as const;

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const accent = accentClass[project.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group card-border grid overflow-hidden rounded-xl bg-surface lg:grid-cols-[minmax(280px,0.42fr)_1fr]"
    >
      <div className={`h-1.5 ${accent.bar} lg:hidden`} />

      <div className="relative border-b border-border bg-elevated/60 p-5 lg:border-b-0 lg:border-r lg:p-6">
        <div className={`absolute left-0 top-0 hidden h-full w-1.5 ${accent.bar} lg:block`} />
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted">
            {project.featured ? "Featured" : "Project"}
          </span>
          <span className="text-sm font-semibold text-subtle">{project.period}</span>
        </div>
        <ProjectVisual title={project.title} visual={project.visual} accent={project.accent} />
      </div>

      <div className="flex flex-col gap-5 p-5 md:p-6 lg:p-7">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2">
              <span
                className="h-3 w-3 flex-shrink-0 rounded-full"
                style={{ backgroundColor: accent.dot }}
              />
              <h3 className="font-heading text-2xl font-bold leading-tight text-text md:text-3xl">
                {project.title}
              </h3>
            </div>
            <p className="text-base font-semibold text-muted">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-shrink-0 items-center gap-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border p-2 text-muted transition-all hover:border-accent/40 hover:text-accent"
                aria-label="Live demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border p-2 text-muted transition-all hover:border-border-bright hover:text-text"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_minmax(220px,0.45fr)]">
          <p className="text-base font-semibold leading-relaxed text-text md:text-lg">
            {project.description}
          </p>
          <div className="border-l-4 border-accent bg-accent/[0.06] px-4 py-3 text-sm font-semibold leading-relaxed text-accent">
            {project.outcome}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {project.bullets.map((bullet) => (
            <div key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
              <ArrowUpRight
                size={16}
                className="mt-0.5 flex-shrink-0 text-accent"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border bg-elevated px-3 py-1.5 text-xs font-semibold text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.live && (
          <div className="flex">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-accent-light"
            >
              View live project
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
