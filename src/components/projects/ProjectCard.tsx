"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
  large,
}: {
  project: Project;
  index: number;
  large: boolean;
}) {
  const accent = accentClass[project.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group card-border bg-surface rounded-lg overflow-hidden flex flex-col"
    >
      <div className={`h-1.5 w-full ${accent.bar}`} />

      <div className="flex-1 p-6 flex flex-col gap-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                style={{ backgroundColor: accent.dot }}
              />
              <h3 className="font-heading text-2xl font-bold leading-tight text-text">
                {project.title}
              </h3>
            </div>
            <p className="text-sm font-medium text-muted">
              {project.subtitle} · {project.period}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-border text-muted hover:text-accent hover:border-accent/40 transition-all"
                aria-label="Live demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-border text-muted hover:text-text hover:border-border-bright transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={14} />
            </a>
          </div>
        </div>

        <ProjectVisual title={project.title} visual={project.visual} />

        <div>
          <p className="text-base font-semibold leading-relaxed text-text">{project.description}</p>
          <p className="mt-3 rounded-lg border border-accent/20 bg-accent/[0.06] px-4 py-3 text-sm font-semibold leading-relaxed text-accent">
            {project.outcome}
          </p>
        </div>

        {large && (
          <div className="grid gap-2">
            {project.bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex gap-2.5 rounded-lg border border-border bg-bg px-3 py-2 text-xs leading-relaxed text-muted"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: accent.dot }}
                />
                {bullet}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium text-muted bg-elevated border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
