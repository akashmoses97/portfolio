"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Cloud, Database, Shield, Cpu, Activity } from "lucide-react";
import ToolMark from "@/components/ui/ToolMark";
import categories from "@/data/skills/categories.json";
import content from "@/data/skills/content.json";
import labels from "@/data/sections/labels.json";

const categoryIcons = {
  code:     <Code2 size={15} />,
  layers:   <Layers size={15} />,
  cloud:    <Cloud size={15} />,
  database: <Database size={15} />,
  shield:   <Shield size={15} />,
  cpu:      <Cpu size={15} />,
  activity: <Activity size={15} />,
} as const;

type Skill = {
  name: string;
  logo: string;
  slug?: string;
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">

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

        {/* Category grid — 3 columns on lg */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
              className="card-border bg-surface rounded-xl overflow-hidden"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-elevated/60">
                <span className="text-accent">
                  {categoryIcons[cat.icon as keyof typeof categoryIcons]}
                </span>
                <span className="font-heading font-semibold text-xs uppercase tracking-widest text-text/80">
                  {cat.label}
                </span>
              </div>

              {/* Skill pills — wrapping flex */}
              <div className="p-4 flex flex-wrap gap-2">
                {(cat.skills as Skill[]).map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: ci * 0.06 + si * 0.025 }}
                    className="skill-pill flex items-center gap-2 rounded-lg border border-border bg-elevated/80 hover:bg-elevated hover:border-border-bright px-2.5 py-1.5 text-xs font-medium text-muted transition-all"
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
