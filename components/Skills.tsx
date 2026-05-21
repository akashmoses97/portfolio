"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Cloud, Database, Shield, Cpu, Activity } from "lucide-react";

const categories = [
  {
    label: "Languages",
    icon: <Code2 size={16} />,
    color: "text-[#a87fff] border-[rgba(168,127,255,0.2)] bg-[rgba(168,127,255,0.06)]",
    dot: "bg-[#a87fff]",
    skills: ["Java", "Python", "C++", "SQL", "JavaScript", "TypeScript", "Shell Scripting"],
  },
  {
    label: "Frameworks",
    icon: <Layers size={16} />,
    color: "text-[#7c9eff] border-[rgba(124,158,255,0.2)] bg-[rgba(124,158,255,0.06)]",
    dot: "bg-[#7c9eff]",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Batch", "FastAPI", "ReactJS", "Kafka", "Microservices", "REST APIs"],
  },
  {
    label: "Cloud & DevOps",
    icon: <Cloud size={16} />,
    color: "text-[#00d9ff] border-[rgba(0,217,255,0.2)] bg-[rgba(0,217,255,0.06)]",
    dot: "bg-[#00d9ff]",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Cloud Foundry", "Liquibase", "Apache Tomcat"],
  },
  {
    label: "Databases",
    icon: <Database size={16} />,
    color: "text-[#50fa7b] border-[rgba(80,250,123,0.2)] bg-[rgba(80,250,123,0.06)]",
    dot: "bg-[#50fa7b]",
    skills: ["Oracle", "PostgreSQL", "MySQL", "Amazon Aurora", "DB2", "Sybase", "ADLDS", "Query Optimization"],
  },
  {
    label: "IAM & Security",
    icon: <Shield size={16} />,
    color: "text-[#ff79c6] border-[rgba(255,121,198,0.2)] bg-[rgba(255,121,198,0.06)]",
    dot: "bg-[#ff79c6]",
    skills: ["OAuth2.0", "OIDC", "SAML", "SSO", "RBAC", "ADFS", "PingFederate", "Transmit Security", "CyberArk", "KMS"],
  },
  {
    label: "AI & LLM",
    icon: <Cpu size={16} />,
    color: "text-[#ffb86c] border-[rgba(255,184,108,0.2)] bg-[rgba(255,184,108,0.06)]",
    dot: "bg-[#ffb86c]",
    skills: ["LLM APIs", "Prompt Engineering", "HuggingFace", "Claude API", "GitHub Copilot", "AI-Assisted Dev"],
  },
  {
    label: "Observability & Testing",
    icon: <Activity size={16} />,
    color: "text-[#8be9fd] border-[rgba(139,233,253,0.2)] bg-[rgba(139,233,253,0.06)]",
    dot: "bg-[#8be9fd]",
    skills: ["Splunk", "AppDynamics", "Apica", "JUnit", "Mockito", "Snyk", "SonarQube", "Git", "Jira", "Bitbucket"],
  },
];

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
          <p className="section-label mb-3">Tech Stack</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text leading-tight">
            Tools I build with
          </h2>
        </motion.div>

        {/* Categories grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
              className="card-border bg-surface rounded-2xl p-5"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`${cat.color.split(" ")[0]}`}>{cat.icon}</span>
                <span className="font-heading font-semibold text-sm text-text/90">
                  {cat.label}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.07 + si * 0.025 }}
                    className={`skill-pill inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${cat.color}`}
                  >
                    <span className={`w-1 h-1 rounded-full ${cat.dot} opacity-70`} />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
