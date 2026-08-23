export function SectionHeading({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-primary">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {title}
        </h2>
      </div>
      {note ? <p className="max-w-md text-sm text-muted-foreground">{note}</p> : null}
    </div>
  );
}
