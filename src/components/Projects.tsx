"use client";

import { motion } from "framer-motion";
import ProjectCard, { type Project } from "@/components/projects/ProjectCard";
import content from "@/data/projects/content.json";
import projectsData from "@/data/projects/projects.json";
import labels from "@/data/sections/labels.json";

const projects = projectsData as Project[];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-3">{labels.projects}</p>
          <h2 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-text md:text-6xl">
            {content.headline}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
