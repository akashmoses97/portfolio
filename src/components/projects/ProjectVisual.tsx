export default function ProjectVisual({
  title,
  visual,
}: {
  title: string;
  visual: "funnel" | "ranking" | "research";
}) {
  return (
    <div
      className="rounded-lg border border-border bg-bg p-4"
      role="img"
      aria-label={`${title} visual summary`}
    >
      {visual === "funnel" ? (
        <div className="grid grid-cols-4 items-end gap-2">
          {["Apps", "Calls", "Int.", "Offers"].map((label, index) => (
            <div key={label} className="space-y-2">
              <div
                className="rounded-t bg-accent/70"
                style={{ height: `${64 - index * 12}px` }}
              />
              <p className="text-center text-[10px] font-medium text-muted">{label}</p>
            </div>
          ))}
        </div>
      ) : visual === "ranking" ? (
        <div className="space-y-2">
          {["Content", "Topic", "Behavior"].map((label, index) => (
            <div key={label} className="flex items-center gap-3">
              <span className="w-16 text-[10px] font-medium text-muted">{label}</span>
              <div className="h-2 flex-1 rounded-full bg-elevated">
                <div
                  className="h-2 rounded-full bg-accent"
                  style={{ width: `${82 - index * 16}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {["Model", "Run", "Measure"].map((label) => (
            <div key={label} className="rounded border border-border bg-surface px-3 py-4 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                {label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
