"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CDN = "https://cdn.simpleicons.org";

interface Skill {
  name: string;
  slug?: string;     // simple-icons slug → https://simpleicons.org
  fallbackBg?: string; // bg colour when no logo available
}

interface Category {
  label: string;
  description: string;
  accent: string;
  border: string;
  bg: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    label: "Languages",
    description: "Core languages for production code",
    accent: "#a87fff",
    border: "rgba(168,127,255,0.25)",
    bg: "rgba(168,127,255,0.06)",
    skills: [
      { name: "Java",       slug: "openjdk" },
      { name: "Python",     slug: "python" },
      { name: "C++",        slug: "cplusplus" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "SQL",        fallbackBg: "#336791" },
      { name: "Shell",      slug: "gnubash" },
    ],
  },
  {
    label: "Frameworks & APIs",
    description: "Backend, frontend & messaging",
    accent: "#7c9eff",
    border: "rgba(124,158,255,0.25)",
    bg: "rgba(124,158,255,0.06)",
    skills: [
      { name: "Spring Boot",     slug: "springboot" },
      { name: "Spring Security", slug: "springsecurity" },
      { name: "Spring Batch",    slug: "spring" },
      { name: "FastAPI",         slug: "fastapi" },
      { name: "ReactJS",         slug: "react" },
      { name: "Apache Kafka",    slug: "apachekafka" },
      { name: "REST APIs",       fallbackBg: "#005C97" },
    ],
  },
  {
    label: "Cloud & DevOps",
    description: "Infrastructure, containers & CI/CD",
    accent: "#00d9ff",
    border: "rgba(0,217,255,0.25)",
    bg: "rgba(0,217,255,0.06)",
    skills: [
      { name: "AWS",           slug: "amazonwebservices" },
      { name: "Docker",        slug: "docker" },
      { name: "Kubernetes",    slug: "kubernetes" },
      { name: "Jenkins",       slug: "jenkins" },
      { name: "Cloud Foundry", slug: "cloudfoundry" },
      { name: "Apache Tomcat", slug: "apachetomcat" },
      { name: "Liquibase",     slug: "liquibase" },
    ],
  },
  {
    label: "Databases",
    description: "Relational & distributed data stores",
    accent: "#50fa7b",
    border: "rgba(80,250,123,0.25)",
    bg: "rgba(80,250,123,0.06)",
    skills: [
      { name: "Oracle DB",      slug: "oracle" },
      { name: "PostgreSQL",     slug: "postgresql" },
      { name: "MySQL",          slug: "mysql" },
      { name: "Amazon Aurora",  slug: "amazonaws" },
      { name: "DB2",            slug: "ibm" },
      { name: "Sybase",         fallbackBg: "#B8003F" },
      { name: "ADLDS",          fallbackBg: "#0078D4" },
    ],
  },
  {
    label: "IAM & Security",
    description: "Identity, access governance & policy",
    accent: "#ff79c6",
    border: "rgba(255,121,198,0.25)",
    bg: "rgba(255,121,198,0.06)",
    skills: [
      { name: "OAuth 2.0",        fallbackBg: "#EB5424" },
      { name: "OIDC",             fallbackBg: "#F78C40" },
      { name: "SAML / SSO",       fallbackBg: "#E27D3E" },
      { name: "PingFederate",     slug: "pingidentity" },
      { name: "CyberArk",         slug: "cyberark" },
      { name: "KMS / Secrets",    slug: "amazonaws" },
      { name: "Transmit Security",fallbackBg: "#6E3FF3" },
      { name: "RBAC",             fallbackBg: "#D4380D" },
    ],
  },
  {
    label: "AI & LLM",
    description: "AI-assisted development & LLM APIs",
    accent: "#ffb86c",
    border: "rgba(255,184,108,0.25)",
    bg: "rgba(255,184,108,0.06)",
    skills: [
      { name: "HuggingFace",    slug: "huggingface" },
      { name: "Anthropic Claude",slug: "anthropic" },
      { name: "GitHub Copilot", slug: "github" },
      { name: "Prompt Eng.",    fallbackBg: "#10B981" },
      { name: "LLM APIs",       fallbackBg: "#8B5CF6" },
    ],
  },
  {
    label: "Observability & Tools",
    description: "Monitoring, security scanning & dev tooling",
    accent: "#8be9fd",
    border: "rgba(139,233,253,0.25)",
    bg: "rgba(139,233,253,0.06)",
    skills: [
      { name: "Splunk",       slug: "splunk" },
      { name: "AppDynamics",  slug: "appdynamics" },
      { name: "SonarQube",    slug: "sonarqube" },
      { name: "Snyk",         slug: "snyk" },
      { name: "JUnit",        slug: "junit5" },
      { name: "Git",          slug: "git" },
      { name: "Jira",         slug: "jira" },
      { name: "Bitbucket",    slug: "bitbucket" },
    ],
  },
];

// Renders logo from Simple Icons CDN, falls back to a coloured initial badge
function SkillBadge({ skill, accent }: { skill: Skill; accent: string }) {
  const [imgFailed, setImgFailed] = useState(false);

  const showInitial = !skill.slug || imgFailed;

  return (
    <div className="group flex items-center gap-2.5 bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.14)] rounded-xl px-3 py-2 transition-all duration-200 cursor-default">
      {/* Logo */}
      <div className="w-[18px] h-[18px] flex-shrink-0 flex items-center justify-center">
        {!showInitial && skill.slug && (
          <img
            src={`${CDN}/${skill.slug}`}
            alt={skill.name}
            width={18}
            height={18}
            className="w-[18px] h-[18px] object-contain"
            onError={() => setImgFailed(true)}
          />
        )}
        {showInitial && (
          <div
            className="w-[18px] h-[18px] rounded-[4px] flex items-center justify-center text-[9px] font-black text-white/90"
            style={{ background: skill.fallbackBg ?? accent }}
          >
            {skill.name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* Name */}
      <span className="text-xs font-medium text-text/85 whitespace-nowrap leading-none">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-surface/20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Tech Stack</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text leading-tight">
            Tools I build with
          </h2>
        </motion.div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: ci * 0.06 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: cat.bg,
                border: `1px solid ${cat.border}`,
              }}
            >
              {/* Category header */}
              <div
                className="px-5 py-3.5 border-b"
                style={{ borderColor: cat.border }}
              >
                <p
                  className="font-heading font-bold text-sm tracking-wide"
                  style={{ color: cat.accent }}
                >
                  {cat.label}
                </p>
                <p className="text-[11px] text-muted mt-0.5">{cat.description}</p>
              </div>

              {/* Skills */}
              <div className="p-4 flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: ci * 0.06 + si * 0.03 }}
                  >
                    <SkillBadge skill={skill} accent={cat.accent} />
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
