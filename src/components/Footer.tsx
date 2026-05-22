"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import footer from "@/data/site/footer.json";
import profile from "@/data/site/profile.json";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-heading font-bold text-sm gradient-accent">{profile.initials}</span>
          <span className="text-xs text-muted">
            · {profile.name} · {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-text transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={profile.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-text transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-2 text-muted hover:text-text transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="text-xs text-muted">
          {footer.builtWith} · {footer.deployedOn}
        </p>
      </div>
    </footer>
  );
}
