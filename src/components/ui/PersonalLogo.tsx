export default function PersonalLogo({ text }: { text: string }) {
  return (
    <span className="group inline-flex items-center" aria-label={`${text} home`}>
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-200 group-hover:border-accent/40 group-hover:shadow-md">
        <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.14),rgba(15,118,110,0.10))]" />
        <span className="absolute -right-3 -top-3 h-7 w-7 rounded-full bg-accent/15" />
        <span className="relative font-heading text-sm font-black tracking-normal text-accent">
          {text}
        </span>
      </span>
    </span>
  );
}
