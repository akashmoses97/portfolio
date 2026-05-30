export default function ProjectVisual({
  title,
  visual,
  accent = "primary",
}: {
  title: string;
  visual: "funnel" | "ranking" | "research";
  accent?: "primary" | "neutral";
}) {
  const barClass = accent === "primary" ? "bg-accent" : "bg-border-bright";
  const softBarClass = accent === "primary" ? "bg-accent/70" : "bg-border-bright";

  return (
    <div
      className="min-h-52 rounded-lg border border-border bg-surface p-5"
      role="img"
      aria-label={`${title} visual summary`}
    >
      {visual === "funnel" ? (
        <div className="grid h-40 grid-cols-4 items-end gap-3">
          {["Apps", "Calls", "Int.", "Offers"].map((label, index) => (
            <div key={label} className="space-y-2">
              <div
                className={`rounded-t ${softBarClass}`}
                style={{ height: `${118 - index * 22}px` }}
              />
              <p className="text-center text-[11px] font-bold uppercase tracking-wider text-muted">
                {label}
              </p>
            </div>
          ))}
        </div>
      ) : visual === "ranking" ? (
        <div className="flex min-h-40 flex-col justify-center space-y-4">
          {["Content", "Topic", "Behavior"].map((label, index) => (
            <div key={label} className="flex items-center gap-3">
              <span className="w-20 text-xs font-bold uppercase tracking-wider text-muted">{label}</span>
              <div className="h-3 flex-1 rounded-full bg-elevated">
                <div
                  className={`h-3 rounded-full ${barClass}`}
                  style={{ width: `${82 - index * 16}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid min-h-40 grid-cols-3 gap-3">
          {["Model", "Run", "Measure"].map((label) => (
            <div
              key={label}
              className="flex items-center justify-center border border-border bg-bg px-3 text-center"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted">
                {label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
