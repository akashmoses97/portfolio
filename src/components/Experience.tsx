"use client";

import { motion } from "framer-motion";
import RoleCard from "@/components/experience/RoleCard";
import BrandMark from "@/components/ui/BrandMark";
import company from "@/data/experience/company.json";
import roles from "@/data/experience/roles.json";
import labels from "@/data/sections/labels.json";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
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

        <div className="mb-6 flex items-center gap-3 rounded-lg border border-border bg-surface p-4">
          <BrandMark brand={company.logo} />
          <div>
            <p className="font-heading text-lg font-bold text-text">{company.name}</p>
            <p className="text-sm text-muted">
              {company.roleRange}, {company.location}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {roles.map((role, index) => (
            <RoleCard key={role.title} role={role} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
