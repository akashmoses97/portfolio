"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Award } from "lucide-react";

const roles = [
  {
    company: "JP Morgan Chase & Co.",
    location: "India",
    title: "Software Engineer II",
    period: "Jan 2023 – Jul 2024",
    award: "Silent Runner Outstanding Contributor Award",
    bullets: [
      "Designed a multi-threaded Data Migration ETL pipeline (Spring Boot) with pagination, batching, and encryption matching to migrate ~100K authentication records (Sybase/DB2 → AWS) at 95% efficiency in ~10 mins; ensured secure credential transfer with aligned password hashing.",
      "Engineered globally distributed Access Control & Federation Microservices (Spring Boot, LDAP, ADLDS) powering entitlement enforcement and access governance across multi-region, multi-datacenter infrastructure; supported ~10K concurrent users at 99% availability, reducing production failures by 70%.",
      "Containerized a One-Stop Onboarding Portal (Spring Boot + React) via Docker, Kubernetes, Jenkins across multiple regions; reduced manual onboarding by 90% with monitoring via Apica, AppDynamics, and Splunk.",
      "Architected Oracle DB layer with schema design, query tuning, and indexing; implemented Liquibase-driven deployments and Blue-Green routing for zero-downtime releases via ServiceNow Change Management.",
    ],
    tags: ["Spring Boot", "AWS", "Kubernetes", "Docker", "LDAP", "Oracle DB", "Jenkins"],
  },
  {
    company: "JP Morgan Chase & Co.",
    location: "India",
    title: "Software Engineer I",
    period: "Aug 2020 – Dec 2022",
    award: "Extra Mile Team Award",
    bullets: [
      "Built enterprise Visualization Dashboards (QlikSense/QlikView + Jira APIs) for ~10K users; slashed load times from ~60s to milliseconds via caching, pre-fetch, background loading, WebSockets, and JVM tuning.",
      "Implemented Privilege Management & Policy Enforcement APIs (Spring Security, PingFederate, Transmit Security) following SCIM standards with RBAC filters, entitlement checks, and DAO-layer credential services for OIDC/SAML, OTP, and secure ADLDS storage.",
      "Modernized legacy authentication to Kerberos; designed access governance workflows with CyberArk/KMS secret management, functional account separation, least-privilege RBAC, and audit trail across all access changes.",
      "Performed L3 root-cause analysis across OIDC/SAML flows via Splunk; remediated 500+ vulnerabilities (Snyk, SonarQube), executed Java 8→17 and Spring Boot upgrades, and drove on-prem to AWS migration.",
    ],
    tags: ["Spring Security", "OAuth2", "OIDC", "SAML", "PingFederate", "CyberArk", "Splunk"],
  },
  {
    company: "JP Morgan Chase & Co.",
    location: "India",
    title: "Software Engineer Intern",
    period: "Jan 2020 – Jul 2020",
    award: null,
    bullets: [
      "Developed Python-based data migration POC; built unit/integration test suite (JUnit, Mockito) achieving 90% code coverage, improving debugging efficiency and reconciliation accuracy.",
    ],
    tags: ["Python", "JUnit", "Mockito", "Data Migration"],
  },
];

function RoleCard({ role, index }: { role: typeof roles[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-[22px] w-3 h-3 rounded-full bg-accent border-2 border-bg" />

      <div className="card-border bg-surface rounded-2xl overflow-hidden">
        {/* Header — always visible */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full text-left px-5 py-5 flex items-start gap-4 hover:bg-[rgba(124,77,255,0.03)] transition-colors"
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="font-heading font-bold text-base text-text">
                {role.title}
              </span>
              {role.award && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[rgba(255,184,108,0.1)] text-[#ffb86c] border border-[rgba(255,184,108,0.2)]">
                  <Award size={10} />
                  {role.award}
                </span>
              )}
            </div>
            <p className="text-sm text-muted">
              {role.company} · {role.location}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 mt-0.5">
            <span className="font-mono text-xs text-muted hidden sm:block">
              {role.period}
            </span>
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-muted"
            >
              <ChevronDown size={16} />
            </motion.div>
          </div>
        </button>

        {/* Period on mobile */}
        <div className="px-5 pb-0 sm:hidden">
          <span className="font-mono text-xs text-muted">{role.period}</span>
        </div>

        {/* Expandable bullets */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
            >
              <div className="px-5 pb-5 pt-1 border-t border-border space-y-4">
                <ul className="space-y-3 mt-3">
                  {role.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted/90 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-light flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {role.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-accent-light bg-accent/[0.08] border border-accent/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text leading-tight">
            Where I've built
          </h2>
        </motion.div>

        {/* Company block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-elevated border border-border flex items-center justify-center">
            <span className="font-heading font-black text-xs text-accent">JPM</span>
          </div>
          <div>
            <p className="font-heading font-bold text-text text-lg">JP Morgan Chase & Co.</p>
            <p className="text-xs text-muted font-mono">Jan 2020 – Jul 2024 · 4+ years</p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-6 bottom-6 w-px timeline-line" />

          <div className="space-y-5">
            {roles.map((role, i) => (
              <RoleCard key={`${role.title}-${i}`} role={role} index={i} />
            ))}
          </div>
        </div>

        {/* Education quick note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 grid sm:grid-cols-2 gap-4"
        >
          {[
            {
              degree: "MS Computer Engineering",
              school: "Texas A&M University",
              period: "Aug 2024 – May 2026",
              gpa: "GPA 3.8 / 4.0",
            },
            {
              degree: "B.Tech Electronics & Comm. Engineering",
              school: "Jawaharlal Nehru Technological University",
              period: "Jul 2016 – Sept 2020",
              gpa: "GPA 9.8 / 10 · Gold Medal",
            },
          ].map((edu) => (
            <div
              key={edu.school}
              className="card-border bg-surface rounded-2xl p-5 space-y-1"
            >
              <p className="text-xs text-accent font-mono uppercase tracking-widest">Education</p>
              <p className="font-heading font-semibold text-sm text-text leading-snug">
                {edu.degree}
              </p>
              <p className="text-xs text-muted">{edu.school}</p>
              <p className="text-xs text-muted font-mono">{edu.period}</p>
              <p className="text-xs text-cyan font-medium">{edu.gpa}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
