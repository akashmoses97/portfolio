"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, TrendingUp } from "lucide-react";
import RoleCard from "@/components/experience/RoleCard";
import BrandMark from "@/components/ui/BrandMark";
import company from "@/data/experience/company.json";
import roles from "@/data/experience/roles.json";
import labels from "@/data/sections/labels.json";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <p className="section-label mb-3">{labels.experience}</p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-text md:text-5xl">
              {company.headline}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {company.stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border bg-surface p-4">
                <p className="font-heading text-xl font-bold text-text">{stat.value}</p>
                <p className="mt-1 text-xs leading-tight text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="card-border mb-8 grid overflow-hidden rounded-xl bg-surface lg:grid-cols-[minmax(280px,0.36fr)_1fr]">
          <div className="border-b border-border bg-elevated/60 p-5 lg:border-b-0 lg:border-r lg:p-6">
            <div className="flex items-center gap-4">
              <BrandMark brand={company.logo} className="h-16 w-16 rounded-xl bg-white p-1" />
              <div>
                <p className="font-heading text-xl font-bold text-text">{company.name}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-muted">
                  <MapPin size={15} aria-hidden="true" />
                  {company.location}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 p-5 xl:grid-cols-[1fr_minmax(420px,auto)] xl:items-center lg:p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                Career Progression
              </p>
              <p className="mt-2 font-heading text-2xl font-bold leading-tight text-text">
                {company.roleRange}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-bg p-3">
                <CalendarDays size={17} className="mb-2 text-accent" aria-hidden="true" />
                <p className="font-heading text-lg font-bold text-text">2020-2024</p>
                <p className="text-xs font-semibold leading-snug text-muted">active timeline</p>
              </div>
              <div className="rounded-lg border border-border bg-bg p-3">
                <TrendingUp size={17} className="mb-2 text-accent" aria-hidden="true" />
                <p className="font-heading text-lg font-bold text-text">3 roles</p>
                <p className="text-xs font-semibold leading-snug text-muted">promotion path</p>
              </div>
              <div className="rounded-lg border border-accent/25 bg-accent/[0.06] p-3">
                <p className="font-heading text-lg font-bold text-accent">4.5 yrs</p>
                <p className="text-xs font-semibold leading-snug text-accent">enterprise engineering</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative space-y-6 lg:pl-10">
          <div className="absolute left-4 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-border lg:block" />
          {roles.map((role, index) => (
            <RoleCard key={role.title} role={role} index={index} total={roles.length} />
          ))}
        </div>

      </div>
    </section>
  );
}
