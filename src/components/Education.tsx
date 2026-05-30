"use client";

import { motion } from "framer-motion";
import { BookOpen, CalendarDays, GraduationCap, Medal } from "lucide-react";
import BrandMark from "@/components/ui/BrandMark";
import content from "@/data/education/content.json";
import education from "@/data/experience/education.json";
import labels from "@/data/sections/labels.json";

const focusAreas: Record<string, string[]> = {
  tamu: [
    "Applied AI and machine learning systems",
    "Data visualization and mining",
    "Parallel computing, architecture, and networks",
  ],
  jntu: [
    "Computer systems fundamentals",
    "Database and network foundations",
    "Electronics and communication engineering",
  ],
};

function splitStanding(gpa: string) {
  const [primary, ...rest] = gpa.split(",");
  return {
    primary: primary.trim(),
    note: rest.join(",").trim(),
  };
}

function parsePeriod(period: string) {
  const [start = period, end = "Present"] = period.split(" - ");
  const startYear = start.match(/\d{4}/)?.[0] ?? start;
  const endYear = end.match(/\d{4}/)?.[0] ?? end;

  return { start, end, startYear, endYear };
}

export default function Education() {
  return (
    <section id="education" className="bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
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

        <div className="relative space-y-6 lg:pl-10">
          <div className="absolute left-4 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-border lg:block" />
          {education.map((edu, index) => (
            <EducationRow key={edu.school} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

type EducationEntry = (typeof education)[number];

function EducationRow({ edu, index }: { edu: EducationEntry; index: number }) {
  const standing = splitStanding(edu.gpa);
  const period = parsePeriod(edu.period);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative"
    >
      <div className="absolute -left-[2.45rem] top-8 hidden lg:block">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-bg bg-accent text-xs font-black text-white">
          {education.length - index}
        </div>
      </div>

      <div className="card-border group grid overflow-hidden rounded-xl bg-surface lg:grid-cols-[minmax(330px,0.38fr)_1fr]">
        <div className="relative border-b border-border bg-elevated/60 p-5 lg:border-b-0 lg:border-r lg:p-6">
          <div className="mb-5 flex items-start gap-4">
            <BrandMark
              brand={edu.logo}
              className="h-20 w-20 rounded-xl bg-white p-1 shadow-sm lg:h-24 lg:w-24"
            />
          </div>

          <p className="font-heading text-2xl font-bold leading-tight text-text">
            {edu.school}
          </p>
          <div className="mt-5 grid gap-3">
            <div className="rounded-lg border border-accent/25 bg-accent/[0.06] p-4">
              <div className="mb-2 flex items-center gap-2 text-accent">
                <CalendarDays size={17} aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest">Academic Timeline</span>
              </div>
              <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
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

            <div className="rounded-lg border border-border bg-surface p-3">
              <div className="mb-2 flex items-center gap-2 text-accent">
                <Medal size={17} aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest">Standing</span>
              </div>
              <p className="text-sm font-bold leading-snug text-text">{standing.primary}</p>
              {standing.note && (
                <p className="mt-1 text-xs font-semibold leading-snug text-muted">
                  {standing.note}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="p-5 md:p-6 lg:p-8">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <div className="mb-4 flex items-start gap-3">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-elevated text-accent">
                  <GraduationCap size={24} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">
                    Credential
                  </p>
                  <h3 className="mt-1 text-balance font-heading text-2xl font-bold leading-tight text-text md:text-3xl">
                    {edu.degree}
                  </h3>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-bg p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-text">
                  <BookOpen size={18} className="text-accent" aria-hidden="true" />
                  Academic Focus
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  {(focusAreas[edu.logo] ?? edu.coursework.slice(0, 3)).map((focus) => (
                    <div
                      key={focus}
                      className="min-w-0 border-l-4 border-accent bg-surface px-3 py-2 text-sm font-semibold leading-relaxed text-muted"
                    >
                      {focus}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-elevated/70 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                Snapshot
              </p>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-text">
                Coursework and academic projects align with scalable backend systems,
                data-intensive applications, and applied engineering work.
              </p>
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
                  className="rounded-lg border border-border bg-elevated px-3 py-1.5 text-xs font-semibold leading-snug text-muted transition-colors group-hover:border-border-bright"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
