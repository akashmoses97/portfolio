"use client";

import { motion } from "framer-motion";
import BrandMark from "@/components/ui/BrandMark";
import content from "@/data/education/content.json";
import education from "@/data/experience/education.json";
import labels from "@/data/sections/labels.json";

export default function Education() {
  return (
    <section id="education" className="bg-surface/30 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="section-label mb-3">{labels.education}</p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-text md:text-5xl">
              {content.headline}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted lg:max-w-xl">
            {content.description}
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((edu, index) => (
            <motion.article
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="card-border rounded-lg bg-surface p-5"
            >
              <div className="flex items-start gap-4">
                <BrandMark brand={edu.logo} />
                <div>
                  <p className="font-heading text-lg font-bold text-text">{edu.school}</p>
                  <p className="mt-1 text-sm font-medium text-muted">{edu.degree}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                      {edu.gpa}
                    </span>
                    <span className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-muted">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-border pt-5">
                <p className="mb-3 text-xs font-mono uppercase tracking-widest text-accent">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-lg border border-border bg-elevated px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
