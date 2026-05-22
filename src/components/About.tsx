"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, MapPin, ShieldCheck } from "lucide-react";
import about from "@/data/about/profile.json";
import labels from "@/data/sections/labels.json";

const factIcons = {
  briefcase: <Briefcase size={16} />,
  graduation: <GraduationCap size={16} />,
  map: <MapPin size={16} />,
  award: <Award size={16} />,
} as const;

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <p className="section-label mb-3">{labels.about}</p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-text md:text-5xl">
            {about.headline}
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {about.cards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card-border rounded-lg bg-surface p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-elevated text-accent">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-heading text-lg font-bold text-text">{card.title}</h3>
                <ul className="mt-4 space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="card-border rounded-lg bg-surface p-5"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-accent">
              Snapshot
            </p>
            <div className="mt-5 space-y-4">
              {about.facts.map((fact) => (
                <div key={fact.label} className="flex gap-3 text-sm text-muted">
                  <span className="mt-0.5 flex-shrink-0 text-accent">
                    {factIcons[fact.icon as keyof typeof factIcons]}
                  </span>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
