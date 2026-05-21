"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Award } from "lucide-react";

const metrics = [
  { value: "4+", unit: "yrs", label: "Engineering Experience", color: "text-accent-light" },
  { value: "1M+", unit: "/day", label: "Requests Handled", color: "text-cyan" },
  { value: "99%", unit: "", label: "System Availability", color: "text-accent-light" },
  { value: "100K", unit: "", label: "Auth Records Migrated", color: "text-cyan" },
  { value: "500+", unit: "", label: "Vulnerabilities Fixed", color: "text-accent-light" },
  { value: "90%", unit: "", label: "Onboarding Reduction", color: "text-cyan" },
];

const awards = [
  "Silent Runner Outstanding Contributor Award — JPMC",
  "Extra Mile Team Award — JPMC",
  "Gold Medal · Highest Departmental CGPA — JNTU",
];

const highlights = [
  { icon: <Briefcase size={16} />, text: "SDE II at JPMorgan Chase India (2020–2024)" },
  { icon: <GraduationCap size={16} />, text: "MS Computer Engineering @ Texas A&M (GPA 3.8, May 2026)" },
  { icon: <MapPin size={16} />, text: "College Station, Texas · Open to US roles on OPT" },
  { icon: <Award size={16} />, text: "3× Award Winner · Gold Medalist" },
];

function MetricCard({ value, unit, label, color, index }: { value: string; unit: string; label: string; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
      className="card-border bg-surface rounded-2xl p-5 flex flex-col gap-1"
    >
      <div className={`font-heading font-extrabold text-3xl md:text-4xl ${color}`}>
        {value}
        <span className="text-xl font-medium text-muted">{unit}</span>
      </div>
      <p className="text-xs text-muted leading-tight">{label}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">About</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text leading-tight">
            Engineering at{" "}
            <span className="gradient-text">production scale</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-text/80 leading-relaxed"
            >
              I'm a Senior Software Engineer with 4+ years of experience building
              mission-critical systems at JPMorgan Chase — from globally distributed
              authentication microservices handling <span className="text-text font-medium">1M+ daily requests</span> to
              multi-threaded ETL pipelines migrating 100K+ auth records with 95% efficiency.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-muted leading-relaxed"
            >
              My work spans IAM platforms, access governance, containerized deployments, and
              observability infrastructure — with deep expertise in Spring Boot, Kubernetes,
              AWS, and enterprise security standards (OAuth2, OIDC, SAML, CyberArk).
              Currently finishing my MS in Computer Engineering at Texas A&M (GPA 3.8).
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted">
                  <span className="text-accent-light flex-shrink-0">{h.icon}</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 space-y-2"
            >
              {awards.map((a, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-muted">
                  <span className="mt-0.5 text-cyan">▸</span>
                  <span>{a}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Metric grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <MetricCard key={m.label} {...m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
