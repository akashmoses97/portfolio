"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-sm gradient-accent">AMG</span>
          <span className="text-xs text-muted">
            · Akash Moses Guttedar · {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/akashmoses97"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-text transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/akash-moses"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-text transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="mailto:moses.ak1997@gmail.com"
            className="p-2 text-muted hover:text-text transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="text-xs text-muted">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
