"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Cloud, Database, Shield, Cpu, Activity } from "lucide-react";
import ToolMark from "@/components/ui/ToolMark";
import categories from "@/data/skills/categories.json";
import content from "@/data/skills/content.json";
import labels from "@/data/sections/labels.json";

const categoryIcons = {
  code:     <Code2 size={20} />,
  layers:   <Layers size={20} />,
  cloud:    <Cloud size={20} />,
  database: <Database size={20} />,
  shield:   <Shield size={20} />,
  cpu:      <Cpu size={20} />,
  activity: <Activity size={20} />,
} as const;

type Skill = {
  name: string;
  logo: string;
  slug?: string;
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">{labels.skills}</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text leading-tight">
            {content.headline}
          </h2>
        </motion.div>

        {/* Category rows */}
        <div className="space-y-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
              className="card-border grid gap-5 rounded-xl border border-border bg-surface p-5 md:grid-cols-[230px_1fr] md:items-start md:p-6"
            >
              <div className="flex items-center gap-3 md:pt-2">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-elevated text-accent">
                  {categoryIcons[cat.icon as keyof typeof categoryIcons]}
                </span>
                <span className="font-heading text-sm font-semibold uppercase tracking-widest text-text/80">
                  {cat.label}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {(cat.skills as Skill[]).map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: ci * 0.06 + si * 0.025 }}
                    className="skill-pill flex min-h-12 items-center gap-3 rounded-lg border border-border bg-elevated/80 px-3.5 py-2.5 text-sm font-semibold text-muted transition-all hover:border-border-bright hover:bg-elevated"
                  >
                    <ToolMark
                      logo={skill.logo}
                      name={skill.name}
                      slug={skill.slug}
                      index={si}
                    />
                    <span className="text-text/80">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
