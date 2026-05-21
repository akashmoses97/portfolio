"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const links = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "moses.ak1997@gmail.com",
    href: "mailto:moses.ak1997@gmail.com",
    copyable: true,
  },
  {
    icon: <LinkedinIcon size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/akash-moses",
    href: "https://linkedin.com/in/akash-moses",
    copyable: false,
  },
  {
    icon: <GithubIcon size={18} />,
    label: "GitHub",
    value: "github.com/akashmoses97",
    href: "https://github.com/akashmoses97",
    copyable: false,
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "(979) 344-4596",
    href: "tel:+19793444596",
    copyable: true,
  },
];

function CopyableLink({ item }: { item: typeof links[0] }) {
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
      className="group card-border bg-surface rounded-2xl p-5 flex items-center gap-4 hover:bg-elevated transition-all duration-200"
    >
      <div className="w-10 h-10 rounded-xl bg-accent/[0.1] border border-accent/20 flex items-center justify-center text-accent-light flex-shrink-0">
        {item.icon}
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
          {copied ? <Check size={14} className="text-cyan" /> : <Copy size={14} />}
        </button>
      ) : (
        <ArrowRight
          size={16}
          className="text-muted group-hover:text-accent-light group-hover:translate-x-0.5 transition-all flex-shrink-0"
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
          <p className="section-label mb-3">Contact</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text leading-tight mb-4">
            Let's connect
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-xl">
            I'm actively seeking US-based Software Engineering roles on OPT (available{" "}
            <span className="text-cyan font-medium">May 2026</span>). Whether it's a full-time
            role, contract, or just a conversation — I'd love to hear from you.
          </p>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-cyan/30 bg-cyan/[0.06] text-cyan">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            Open to opportunities · OPT · May 2026 · College Station, TX
          </span>
        </motion.div>

        {/* Contact links */}
        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((item, i) => (
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
            Based in{" "}
            <span className="text-text">College Station, Texas</span>
            {" · "}
            Authorized to work in the US on{" "}
            <span className="text-accent-light font-medium">OPT</span>
            {" · "}
            Available{" "}
            <span className="text-cyan font-medium">May 2026</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
