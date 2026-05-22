"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import contact from "@/data/contact/contact.json";
import labels from "@/data/sections/labels.json";
import profile from "@/data/site/profile.json";

type ContactLink = (typeof contact.links)[number];

const linkIcons = {
  mail: <Mail size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  github: <GithubIcon size={18} />,
  phone: <Phone size={18} />,
} as const;

function CopyableLink({ item }: { item: ContactLink }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(item.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group card-border bg-surface rounded-lg p-5 flex items-center gap-4 hover:bg-elevated transition-all duration-200"
    >
      <div className="w-10 h-10 rounded-lg bg-elevated border border-border flex items-center justify-center text-accent flex-shrink-0">
        {linkIcons[item.icon as keyof typeof linkIcons]}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted mb-0.5">{item.label}</p>
        <p className="text-sm font-medium text-text truncate">{item.value}</p>
      </div>
      {item.copyable ? (
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg text-muted hover:text-text hover:bg-border transition-all flex-shrink-0"
          aria-label="Copy"
        >
          {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
        </button>
      ) : (
        <ArrowRight
          size={16}
          className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0"
        />
      )}
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="section-label mb-3">{labels.contact}</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text leading-tight mb-4">
            {contact.headline}
          </h2>
          <div className="grid gap-3 text-sm text-muted sm:grid-cols-3">
            {contact.chips.map((item) => (
              <div key={item} className="rounded-lg border border-border bg-surface px-3 py-2">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-accent/20 bg-accent/[0.06] text-accent">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {contact.status}
          </span>
        </motion.div>

        {/* Contact links */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contact.links.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <CopyableLink item={item} />
            </motion.div>
          ))}
        </div>

        {/* Divider + note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted">
            {contact.footerNote.locationPrefix}{" "}
            <span className="text-text">{profile.location}</span>
            {" · "}
            <span className="text-accent font-medium">
              {contact.footerNote.workAuthorization}
            </span>
            {" · "}
            <span className="text-accent font-medium">{contact.footerNote.available}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
