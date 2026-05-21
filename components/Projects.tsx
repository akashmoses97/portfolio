"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

const projects = [
  {
    title: "HireSight",
    subtitle: "Visual Analytics for Tech Job Search",
    period: "Jan – May 2026",
    description:
      "Full-stack deployed analytics platform modeling the tech hiring funnel (Applications → Callbacks → Interviews → Offers) with D3 Sankey diagrams, role heatmaps, and trend charts.",
    bullets: [
      "AI-powered recommendation engine parsing uploaded resume PDFs and delivering LLM-generated guidance (Mistral-7B) on role fit and application strategy.",
      "Deployed on Vercel + Render with a FastAPI backend and React 18 frontend.",
    ],
    tags: ["React 18", "D3.js", "FastAPI", "Pandas", "HuggingFace LLM API", "Python"],
    github: "https://github.com/akashmoses97",
    live: "https://hiresight.vercel.app",
    accent: "from-[#7c4dff]/20 to-[#a87fff]/5",
    dot: "#a87fff",
    featured: true,
  },
  {
    title: "News Recommendation Atlas",
    subtitle: "Cold-Start Signal Study",
    period: "Jan – May 2026",
    description:
      "Controlled experiment on Microsoft MIND-small (50K users, 156K impressions) evaluating content + topic signals vs. behavioral signals for cold-start users.",
    bullets: [
      "Multi-signal pipeline: FP-Growth co-occurrence, co-click graph mining, TF-IDF + LDA under a logistic regression ranker.",
      "Content signals outperformed behavioral by +13.8% MRR and +11.5% NDCG@10 on cold-start users (32.8% of dataset).",
    ],
    tags: ["Python", "scikit-learn", "NetworkX", "mlxtend", "LDA", "TF-IDF"],
    github: "https://github.com/akashmoses97",
    live: null,
    accent: "from-[#00d9ff]/15 to-[#00d9ff]/5",
    dot: "#00d9ff",
    featured: true,
  },
  {
    title: "Cache Replacement Policy",
    subtitle: "PACIPV + RL-Based Study",
    period: "Graduate Research",
    description:
      "Implemented and evaluated PACIPV cache replacement policy alongside a reinforcement learning-based replacement strategy using ZSim simulation framework.",
    bullets: [
      "Evaluated on SPEC CPU2006 and PARSEC benchmark suites across varying cache configurations.",
      "Analyzed miss rate reduction, IPC improvements, and policy tradeoffs under different workload patterns.",
    ],
    tags: ["C++", "ZSim", "SPEC CPU2006", "PARSEC", "Reinforcement Learning"],
    github: "https://github.com/akashmoses97",
    live: null,
    accent: "from-[#50fa7b]/15 to-[#50fa7b]/5",
    dot: "#50fa7b",
    featured: false,
  },
  {
    title: "CUDA Cholesky Factorization",
    subtitle: "~76× GPU Speedup",
    period: "Graduate Research",
    description:
      "Implemented parallel Cholesky factorization on GPU using CUDA, achieving approximately 76× speedup over sequential CPU baseline.",
    bullets: [
      "Leveraged tiled matrix operations, shared memory, and optimized thread block configurations.",
      "Benchmarked across matrix sizes demonstrating superlinear GPU acceleration for dense linear algebra.",
    ],
    tags: ["CUDA", "C++", "GPU Computing", "Linear Algebra", "Parallel Programming"],
    github: "https://github.com/akashmoses97",
    live: null,
    accent: "from-[#ffb86c]/15 to-[#ffb86c]/5",
    dot: "#ffb86c",
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 md:py-36 bg-surface/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Projects</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text leading-tight">
            Things I've built
          </h2>
        </motion.div>

        {/* Featured projects (2-col) */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} large />
          ))}
        </div>

        {/* Other projects (2-col) */}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i + 2} large={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  large,
}: {
  project: typeof projects[0];
  index: number;
  large: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group card-border bg-surface rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

      <div className="flex-1 p-6 flex flex-col gap-4">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: project.dot }}
              />
              <h3 className="font-heading font-bold text-lg text-text leading-tight">
                {project.title}
              </h3>
            </div>
            <p className="text-xs text-muted">{project.subtitle} · {project.period}</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-border text-muted hover:text-cyan hover:border-cyan/40 transition-all"
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

        {/* Description */}
        <p className="text-sm text-muted/90 leading-relaxed">{project.description}</p>

        {/* Bullets */}
        {large && (
          <ul className="space-y-2">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 text-xs text-muted leading-relaxed">
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: project.dot }} />
                {b}
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-lg text-xs font-medium text-muted bg-elevated border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
